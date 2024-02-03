import { Fragment, useEffect, useMemo, useState } from 'react';
import GenericDataGrid from '../../../../../common-components/form-elements/genericDataGrid';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestToGetAllEnquiry,
  updateEnquiryStatus,
  resetEnquiryById,
  requestDeleteEnquiry,
  resetEnquiryDeleteStatus,
  requestToGetEnquiry
} from '../../../../../store/slices/EnquirySlice';
import Chip from '@mui/material/Chip';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Typography, Box, Divider } from '@mui/material';
import GenericDropdown from '../../../../../common-components/form-elements/genericDropdown';
import GenericAction from '../../../../../common-components/form-elements/genericAction';
import { resetVehicleDeleteStatus } from '../../../../../store/slices/VehicleManagementSlice';
import GenericDialog from '../../../../../common-components/page-elements/genericModal';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import shiftingManagement from '../../../../website/features/tabs/shiftingManagement';

const EnquiryList = () => {
  const {
    company: { companyDetails },
    enquiry: { enquiryList, apiStatus, enquiryById },
    shiftingManagement: {
      shiftingLuggage: { listShiftingLuggage }
    }
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [addressType, setAddressType] = useState('');

  const navigate = useNavigate();
  const onEnquiryStatusChange = (evt) => {
    dispatch(updateEnquiryStatus(evt?.target?.value));
  };

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllEnquiry(companyDetails?._id));
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Vehicle  Deleted');
      setTimeout(() => {
        dispatch(resetEnquiryDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetVehicleDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  useEffect(() => {
    dispatch(requestToGetAllEnquiry(companyDetails?._id));
    dispatch(resetEnquiryById());
  }, []);

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteEnquiry(data?._id));
  };

  let enquiryListData =
    enquiryList?.length > 0
      ? enquiryList?.map((_, key) => {
          return {
            id: key + 1,
            _id: _?._id,
            partyName: _?.partyName || _?.billingDetails?.authorityPersonName,
            companyName: _?.billingDetails?.companyName || 'NA',
            mobile: _?.mobile || _?.billingDetails?.authorityPersonMobile,
            pickUpAddress: _?.pickupAddress?.city || 'NA',
            dropAddress: _?.dropAddress?.city || 'NA',
            shiftingLuggage: _?.shiftingLuggage || 'NA',
            shiftingType: _?.shiftingType || 'NA',
            companyName: _?.billingDetails?.companyName || 'NA',
            followUpDateTime: '' || 'NA',
            surveyDateTime: '' || 'NA',
            createdDate: _?.createdAt || 'NA'
          };
        })
      : [];

  const columns = useMemo(() => {
    return [
      {
        field: 'id',
        headerName: 'S.No.',
        width: 90
      },
      {
        field: 'partyName',
        headerName: 'Contact Person',
        width: 150
      },
      {
        field: 'mobile',
        headerName: 'Mobile',
        width: 200
      },
      {
        field: 'pickUpAddress',
        headerName: 'Pick-Up Address',
        width: 150,
        renderCell: (data) => {
          return (
            <Chip
              label={data?.row?.pickUpAddress}
              onClick={() => {
                setShowModal(true);
                setAddressType('pickup');
                dispatch(requestToGetEnquiry(data.row._id));
              }}
            />
          );
        }
      },
      {
        field: 'dropAddress',
        headerName: 'Drop-Address',
        width: 150,
        renderCell: (data) => {
          return (
            <Chip
              label={data?.row?.dropAddress}
              onClick={() => {
                setShowModal(true);
                setAddressType('drop');
                dispatch(requestToGetEnquiry(data.row._id));
              }}
            />
          );
        }
      },
      {
        field: 'shiftingLuggage',
        headerName: 'Shifting Luggage',
        width: 250,
        // renderCell: (data) => {
        //   return <span className='Special'>{data?.row?.shiftingLuggage}</span>;
        // }
        renderCell: (data) => {
          let datas = []
          for (let value of data?.row?.shiftingLuggage) {
            for (let value1 of listShiftingLuggage){
                 if (value === value1?._id) {
              datas.push(value1?.shiftingLuggage)}
            }           
          }
      
          return datas+" ";
        }
      },
      {
        field: 'shiftingType',
        headerName: 'Shifting Type',
        width: 150
      },
      {
        field: 'companyName',
        headerName: 'Company Name',
        width: 150
      },
      {
        field: 'followUpDateTime',
        headerName: 'Follow-Up Date-Time',
        width: 150
      },
      {
        field: 'surveyDateTime',
        headerName: 'Survey Date-Time',
        width: 150
      },
      {
        field: 'createdDate',
        headerName: 'Created Date',
        width: 150,
        renderCell: (data) => {
          return new Date(data?.row?.createdDate).toDateString();
        }
      },

      {
        field: '_id',
        headerName: 'Action',
        width: 150,
        editable: false,
        renderCell: (data) => {
          return (
            <GenericAction data={data?.row} onDeleteHandler={(data) => onDeleteHandler(data)} />
          );
        }
      }
    ];
  }, []);

  const getRowData = (data) => {
    const { _id } = data?.row;
    navigate(`../detail/${_id}`);
  };

  return (
    <Fragment>
      <SubHeader title={'Enquiry List'} />
      <GenericDataGrid
        rows={enquiryListData
          ?.filter((item) => !item?.isDeleted)
          ?.map((item, index) => ({
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
          dispatch(resetEnquiryById());
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
                ? enquiryById[0]?.pickupAddress?.state
                : enquiryById[0]?.dropAddress?.state}
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
                ? enquiryById[0]?.pickupAddress?.city
                : enquiryById[0]?.dropAddress?.city}
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
                ? enquiryById[0]?.pickupAddress?.landmark
                : enquiryById[0]?.dropAddress?.landmark}
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
                ? enquiryById[0]?.pickupAddress?.pincode
                : enquiryById[0]?.dropAddress?.pincode}
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
                ? enquiryById[0]?.pickupAddress?.floor
                : enquiryById[0]?.dropAddress?.floor}
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
                ? enquiryById[0]?.pickupAddress?.isLiftAvailable
                : enquiryById[0]?.dropAddress?.isLiftAvailable}
            </span>
          </Typography>
          <Divider />
        </Box>
      </GenericDialog>
    </Fragment>
  );
};

export default EnquiryList;


// data.row.shiftingLuggage = [
//   {_id: "2537dgf2677", shiftingLuggage: "abcdrfh"},
//   {_id: "2537dgf2678", shiftingLuggage: "abcdrfj"},
//   {_id: "2537dgf2679", shiftingLuggage: "abcdrfg"}
//   {_id: "2537dgf2670", shiftingLuggage: "abcdrfs"}
//   {_id: "2537dgf2671", shiftingLuggage: "abcdrfg"}
//  ]


// data.row.shiftingLuggage = ["2537dgf2677", "2537dgf2678"]

// output = ["abcdrfh", "abcdrfj"]
// datas = []
// for (let value of data.row.shiftingLuggage){
//    for (let value1 of data.row.shiftingLuggage){
//        if (value === value1?._id) {
//            datas.push(value1?.shiftingLuggage)}
//             return value1?.shiftingLuggage
// }
// }
// }


