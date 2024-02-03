import { Fragment, useEffect } from 'react';
import GenericDataGrid from '../../../../../common-components/form-elements/genericDataGrid';
import SubHeader from '../../../../../common-components/page-elements/SubHeader';
import { requestToListOrder } from '../../../../../store/slices/OrderSlice';
import { resetEnquiryById } from '../../../../../store/slices/EnquirySlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'S.No.', width: 90 },

  {
    field: 'CustomerId',
    headerName: 'Customer ID',
    type: 'string',
    width: 120,
    editable: false
  },
  {
    field: 'partyName',
    headerName: 'Party Name',
    type: 'string',
    width: 180,
    editable: false
  },
  {
    field: 'companyName',
    headerName: 'Company Name',
    type: 'string',
    width: 180,
    editable: false,
    renderCell: (data) =>
      !data.row?.billingDetails?.companyName ? 'N/A' : data.row?.billingDetails?.companyName
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    type: 'string',
    width: 150,
    editable: false,
    renderCell: (data) =>
      !data.row?.mobile ? !data.row?.billingDetails?.employeeMobile : data.row?.mobile
  },

  {
    field: 'city',
    headerName: 'City',
    type: 'string',
    width: 150,
    editable: false,
    renderCell: (data) => data.row?.pickupAddress?.city
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
    type: 'string',
    editable: false
  },
  {
    field: 'createdAt',
    headerName: 'Date',
    type: 'string',
    editable: false
  }
];

const CustomerList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    auth: { loginSuccess },
    company: { companyDetails },
    order: { listOrder }
  } = useSelector((res) => res);

  useEffect(() => {
    dispatch(requestToListOrder({ authId: loginSuccess?.id, companyId: companyDetails?._id }));
    dispatch(resetEnquiryById());
  }, []);

  const finalList = listOrder.filter((res) => res.status === 'COMPLETED');

  const getRowData = (data) => {
    const { _id } = data?.row;
    navigate(`../detail/${_id}`);
  };

  return (
    <Fragment>
      <SubHeader title={'Customer List'} />
      <GenericDataGrid
        rows={finalList?.map((item, index) => ({
          ...item,
          id: index + 1
        }))}
        columns={columns}
        onRowClick={getRowData}
      />
    </Fragment>
  );
};
export default CustomerList;
