import { Fragment, useEffect } from 'react';
import GenericDataGrid from '../../../../../common-components/form-elements/genericDataGrid';
import { Paper } from '@mui/material';
import { requestToGetAllQuotation } from '../../../../../store/slices/QuotationSlice';
import { useDispatch, useSelector } from 'react-redux';

const QuotationList = (props) => {
  const { enquiryId } = props;
  const dispatch = useDispatch();
  const {
    quotation: { quotationList },
    company: { companyDetails }
  } = useSelector((state) => state);

  const columns = [
    { field: 'id', headerName: 'S.No', width: 90 },
    {
      field: 'quotationNumber',
      headerName: 'Quotation Number',
      width: 150,
      editable: false
    },
    {
      field: 'quotationData',
      headerName: 'Quotation Date',
      width: 150,
      renderCell: (data) => {
        return new Date(data?.row?.quotationData).toDateString();
      }
    },
    {
      field: 'shiftingLuggage',
      headerName: 'Shifting Luggage',
      width: 150,
      editable: false
    },
    {
      field: 'templateId',
      headerName: 'Template',
      width: 110,
      editable: false
    },
    // {
    //   field: 'quotationAmount',
    //   headerName: 'Quotation Amount',
    //   editable: false,
    //   width: 160
    // },
    {
      field: 'advanceAmount',
      headerName: 'Advance Amount',
      editable: false,
      width: 160
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 160,
      renderCell: (data) => {
        return new Date(data?.row?.createdAt).toDateString();
      }
    }
  ];


  useEffect(() => {
    // let payload= {
    //   "companyId" : companyDetails?._id
    // }
    dispatch(requestToGetAllQuotation(enquiryId));
  }, []);
  return (
    <Fragment>
      <Paper>
        <GenericDataGrid
          rows={quotationList?.map((item, index) => ({
            ...item,
            id: index + 1
          }))}
          columns={columns}
        />
      </Paper>
    </Fragment>
  );
};
export default QuotationList;
