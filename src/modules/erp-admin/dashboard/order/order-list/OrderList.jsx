import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import GenericDataGrid from '../../../../../common-components/form-elements/genericDataGrid';
import Chip from '@mui/material/Chip';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box, Divider } from '@mui/material';
import { requestToListOrder } from '../../../../../store/slices/OrderSlice';
import GenericDialog from '../../../../../common-components/page-elements/genericModal';
import {
  requestToGetEnquiry,
  resetEnquiryById,
  resetEnquiryByIdApiStatus,
} from '../../../../../store/slices/EnquirySlice';
import { resetOrderById,requestToGetOrder,resetOrderByIdApiStatus } from '../../../../../store/slices/OrderSlice';
import { useNavigate } from 'react-router-dom';


const OrderList = () => {

  const [showModal, setShowModal] = useState(false);
  const [addressType, setAddressType] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    auth: { loginSuccess },
    company: { companyDetails },
    enquiry: { enquiryById },
    order: { orderById },
    order: { listOrder }
  } = useSelector((state) => state);

  const finalOrders = listOrder?.filter((res) => res.status === 'APPROVED' || 'NEW ORDER' || 'OUT FOR SHIFTING' || 'MATERIAL RECEIVED AT WAREHOUSE' || 'IN TRANSIT' || 'REACHED AT DESTINATION CITY' || 'CANCELLED ORDER' );

  
  useEffect(() => {
    dispatch(requestToListOrder({ authId: loginSuccess?.id, companyId: companyDetails?._id }));
    dispatch(resetOrderById());
    dispatch(resetOrderByIdApiStatus());
    dispatch(requestToGetOrder())
  }, []);


  
const columns = [
  { field: 'id', headerName: 'S.No.', width: 50 },
  {
    field: 'partyName',
    headerName: 'Party Name',
    type: 'string',

    editable: false
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    type: 'string',

    editable: false
  },
  {
    field: 'dropAddress',
    headerName: 'Drop Address',
    type: 'string',
    editable: false,
    width: 180,
    renderCell: (data) => {
      return (
        <Chip
          label={data?.row?.dropAddress?.city}
          onClick={() => {
            setShowModal(true);
            setAddressType('drop');
            dispatch(requestToGetOrder(data.row._id));
          }}
        />
      );
    }
  },
  {
    field: 'pickupAddress',
    headerName: 'Pickup Address',
    type: 'string',
    editable: false,
    width: 180,
    renderCell: (data) => {
      return (
        <Chip
          label={data?.row?.pickupAddress?.city}
          onClick={() => {
            setShowModal(true);
            setAddressType('pickup');
            dispatch(requestToGetOrder(data.row._id));
          }}
        />
      );
    }
  },
  {
    field: 'shiftingDate',
    headerName: 'Shifting Date',
    type: 'string',
    editable: false,
    renderCell: (data) => {
      return (
        <span className="special">
          {!data.row?.shiftingDate ? 'N/A' : new Date(data.row?.shiftingDate).toDateString()}
        </span>
      );
    }
  },
  {
    field: 'shiftingLuggage',
    headerName: 'Shifting Luggage',
    width: 250,
    renderCell: (data) => {
      return data?.row?.shiftingLuggage.map((data) => <span className="special">{data}</span>);
    }
  },
  {
    field: 'shiftingType',
    headerName: 'Shifting Type',
    type: 'string',
    editable: false
  },
  {
    field: 'orderDate',
    headerName: 'Order Date',
    type: 'string',
    editable: false
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    editable: false,
    renderCell: (data) => {
      return <span className="special">{data.row.status}</span>;
    }
  }
];

  const getRowData = (data) => {
    const { _id } = data?.row;
    navigate(`../detail/${_id}`);
  };
  return (
    <Fragment>
      <SubHeader title={'Order List '} />
      <GenericDataGrid
        rows={finalOrders?.map((item, index) => ({
          ...item,
          id: index + 1
        }))}
        columns={columns}
        onRowDoubleClick={getRowData}
      />

    <GenericDialog
        maxWidth={'xs'}
        open={showModal}
        onAgreeHandlerClick={() => {
          dispatch(resetOrderById());
          setShowModal(false);
        }}
        title={'Details'}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}
          >
            <span>State :</span>{' '}
            <span sx={{ textTransform: 'capitalize' }}>
              {addressType === 'pickup'
                ? orderById[0]?.pickupAddress?.state
                : orderById[0]?.dropAddress?.state}
            </span>
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}
          >
            <span>City :</span>{' '}
            <span sx={{ textTransform: 'capitalize' }}>
              {addressType === 'pickup'
                ? orderById[0]?.pickupAddress?.city
                : orderById[0]?.dropAddress?.city}
            </span>
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}
          >
            <span>Landmark :</span>{' '}
            <span sx={{ textTransform: 'capitalize' }}>
              {addressType === 'pickup'
                ? orderById[0]?.pickupAddress?.landmark
                : orderById[0]?.dropAddress?.landmark}
            </span>
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}
          >
            <span>Pincode :</span>{' '}
            <span sx={{ textTransform: 'capitalize' }}>
              {addressType === 'pickup'
                ? orderById[0]?.pickupAddress?.pincode
                : orderById[0]?.dropAddress?.pincode}
            </span>
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}
          >
            <span>Current Floor :</span>{' '}
            <span sx={{ textTransform: 'capitalize' }}>
              {addressType === 'pickup'
                ? orderById[0]?.pickupAddress?.floor
                : orderById[0]?.dropAddress?.floor}
            </span>
          </Typography>
          <Divider />
          <Typography
            variant="body1"
            sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}
          >
            <span>Lift Status :</span>{' '}
            <span sx={{ textTransform: 'capitalize' }}>
              {addressType === 'pickup'
                ? orderById[0]?.pickupAddress?.isLiftAvailable
                : orderById[0]?.dropAddress?.isLiftAvailable}
            </span>
          </Typography>
          <Divider />
        </Box>
      </GenericDialog>

    </Fragment>
  );
};

export default OrderList;