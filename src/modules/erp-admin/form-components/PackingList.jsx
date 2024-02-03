import {
  Box,
  Grid,
  InputBase,
  Stack,
  TableCell,
  IconButton,
  TableHead,
  TableRow,
  Paper,
  Table,
  TableBody,
  Typography,
  TableContainer
} from '@mui/material';
import { Fragment, useState, useEffect } from 'react';
import GenericSwitch from '../../../common-components/form-elements/genericSwitch';
import GenericDatePicker from '../../../common-components/form-elements/genericDatePicker';
import GenericInput from '../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import GenericDropdown from '../../../common-components/form-elements/genericDropdown';
import Toasty from '../../../common-components/form-elements/toasty';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateItemName,
  updateNumberInitilize,
  updateMenualNumberInitilize,
  updatePackingListDate,
  updatePackingType,
  updateProductCode,
  updateQuantity,
  updateRemark,
  updateValueOfGoods,
  requestToSavePackingList,
  requestToGetAllPackingList,
  resetPackingList,
  resetPackingListApiStatus
} from '../../../store/slices/AddPackingListSlice';
import { useFormik } from 'formik';
import GenericDataGrid from '../../../common-components/form-elements/genericDataGrid';
import { requestToGetAllPaymentTypes } from '../../../store/slices/AppConfigurationSlice';
import {
  packingInitialValues,
  packingValidationSchema
} from '../../../common-components/validator/packingList-validation';
import { useParams } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';

const style = {
  display: 'flex',
  width: 'calc(100% - 20px)',
  mr: 1,
  border: '1px solid #C4C4C4',
  borderRadius: '4.5px',
  padding: '0px 8px'
};

const columns = [
  { field: 'id', headerName: 'S.No.', width: 90 },
  {
    field: 'customerId',
    headerName: 'Customer Id ',
    width: 150,
    editable: false
  },
  {
    field: 'contactPerson',
    headerName: 'Contact Person',
    width: 150,
    editable: false
  },
  {
    field: 'companyName',
    headerName: 'Company Name',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'roleType',
    headerName: 'Role Type',
    type: 'number',
    width: 110,
    editable: false
  },
  {
    field: 'registeredDate',
    headerName: 'Registered Date',
    type: 'number',
    width: 150,
    editable: false
  }
];

const rows = [
  { id: 1, customerId: 'Snow', contactPerson: 'Jon', age: 35 },
  { id: 2, customerId: 'Lannister', contactPerson: 'Cersei', age: 42 },
  { id: 3, customerId: 'Lannister', contactPerson: 'Jaime', age: 45 },
  { id: 4, customerId: 'Stark', contactPerson: 'Arya', age: 16 },
  { id: 5, customerId: 'Targaryen', contactPerson: 'Daenerys', age: null },
  { id: 6, customerId: 'Melisandre', contactPerson: null, age: 150 },
  { id: 7, customerId: 'Clifford', contactPerson: 'Ferrara', age: 44 },
  { id: 8, customerId: 'Frances', contactPerson: 'Rossini', age: 36 },
  { id: 9, customerId: 'Roxie', contactPerson: 'Harvey', age: 65 }
];

const PackingList = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const dispatch = useDispatch();
  const [deletedItems, setDeletedItems] = useState([]);

  const {
    packingList: { addPackingList, packingList, isSaved, isResponseFailed },
    company: { companyDetails },
    auth: { loginSuccess },
    appConfiguration: {
      paymentTypes: { listPaymentTypes }
    },
    shiftingManagement: {
      packingType: { listPackingType }
    }
  } = useSelector((state) => state);

  const { id: orderId } = useParams();

  const formik = useFormik({
    initialValues: packingInitialValues,
    validationSchema: packingValidationSchema
  });

  const handleRemoveItem = (index) => {
    setDeletedItems((prevDeletedItems) => [...prevDeletedItems, index]);
  };
  const onChangenumberInitilize = (evt) => {
    const { checked } = evt.target;
    dispatch(updateNumberInitilize(checked));
  };
  const onChangeMenualNumber = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addPackingList.numberInitializeValue', value);
    dispatch(updateMenualNumberInitilize(value));
  };
  const onChangePackingListDate = (evt) => {
    const { $d } = evt;
    dispatch(updatePackingListDate(new Date($d).getTime()));
  };

  const onChangeItemName = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addPackingList.itemName', value);
    dispatch(updateItemName(value));
  };

  const onChangeQuantity = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addPackingList.quantity', value);
    dispatch(updateQuantity(value));
  };
  const onChangePackingType = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addPackingList.packingType', value);
    dispatch(updatePackingType(value));
  };
  const onChangeValueOfGoods = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addPackingList.valueOfGoods', value);
    dispatch(updateValueOfGoods(value));
  };
  const onChangeProductCode = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addPackingList.productCode', value);
    dispatch(updateProductCode(value));
  };
  const onChangeRemark = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addPackingList.remark', value);
    dispatch(updateRemark(value));
  };

  const onSaveAddPackingMaterial = () => {
    let payload = {
      companyId: companyDetails._id,
      enquiryId: orderId,
      packingListNo: addPackingList?.numberInitializeValue,
      packingDate: addPackingList?.packingListDate,
      itemName: addPackingList?.itemName,
      quantity: addPackingList?.quantity,
      packingType: addPackingList?.packingType,
      productCode: addPackingList?.productCode,
      valueOfGoods: addPackingList?.valueOfGoods,
      description: addPackingList?.remark,
      addedBy: loginSuccess?.id
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSavePackingList(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Packing Details');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetPackingList());
    dispatch(requestToGetAllPackingList());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllPackingList({ companyId: companyDetails?._id, enquiryId: orderId }));
  }, [isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Packing List Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetPackingList());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetPackingListApiStatus());
        }, 3000);
      }
    }
  }, [isSaved, isResponseFailed]);

  return (
    <Fragment>
      <Box sx={{ p: 3.5 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={style}>
                <Stack direction="row" spacing={0} alignItems={'center'} sx={{ width: '100%' }}>
                  <GenericSwitch start={'Auto'} end={'Manual'} onChange={onChangenumberInitilize} />
                  <InputBase
                    onChange={onChangeMenualNumber}
                    // disabled={}
                    disabled={!addPackingList?.numberInitilizeCheck}
                    sx={{
                      ml: 1,
                      flex: 1,
                      backgroundColor: (theme) => theme.palette.primary.light,
                      padding: '0 10px'
                    }}
                    type="text"
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    fullWidth
                    autoFocus
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericDatePicker onAccept={onChangePackingListDate} label={'Packing List Date'} />
            </Grid>
<Grid item xs={12}>
  <Typography variant='body1' sx={{color:(theme) => theme.palette.primary.dark, fontWeight:600}}>
    Add Packing Items
  </Typography>
</Grid>
            <Grid item xs={12} md={4}>
              <GenericInput
                onChange={onChangeItemName}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addPackingList?.itemName}
                error={
                  formik?.errors?.addPackingList?.itemName &&
                  formik?.touched?.addPackingList?.itemName
                }
                helperText={
                  formik?.errors?.addPackingList?.itemName &&
                  formik?.touched?.addPackingList?.itemName &&
                  formik?.errors?.addPackingList?.itemName
                }
                label={'Item/Particular Name'}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <GenericInput
                onChange={onChangeQuantity}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addPackingList?.quantity}
                error={
                  formik?.errors?.addPackingList?.quantity &&
                  formik?.touched?.addPackingList?.quantity
                }
                helperText={
                  formik?.errors?.addPackingList?.quantity &&
                  formik?.touched?.addPackingList?.quantity &&
                  formik?.errors?.addPackingList?.quantity
                }
                label={'Qty.'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDropdown
                onChange={onChangePackingType}
                data={listPackingType?.map((item) => ({
                  label: item?.packingType,
                  value: item?._id
                }))}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addPackingList?.packingType}
                error={
                  formik?.errors?.addPackingList?.packingType &&
                  formik?.touched?.addPackingList?.packingType
                }
                helperText={
                  formik?.errors?.addPackingList?.packingType &&
                  formik?.touched?.addPackingList?.packingType &&
                  formik?.errors?.addPackingList?.packingType
                }
                label={'Packing Type'}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onChangeValueOfGoods}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addPackingList?.valueOfGoods}
                error={
                  formik?.errors?.addPackingList?.valueOfGoods &&
                  formik?.touched?.addPackingList?.valueOfGoods
                }
                helperText={
                  formik?.errors?.addPackingList?.valueOfGoods &&
                  formik?.touched?.addPackingList?.valueOfGoods &&
                  formik?.errors?.addPackingList?.valueOfGoods
                }
                label={'Value Of Goods'}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                onChange={onChangeProductCode}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addPackingList?.productCode}
                label={'Product Code'}
              />
            </Grid>

            <Grid item xs={12} md={5}>
              <GenericInput
                onChange={onChangeRemark}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addPackingList?.remark}
                label={'Remark'}
              />
            </Grid>
            <Grid item xs={12} md={1}>
              <GenericLoadingButton
                sx={{ float: 'right' }}
                type="submit"
                onClick={onSaveAddPackingMaterial}
              >
                <span>add</span>
              </GenericLoadingButton>
            </Grid>

            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Sr.No.</TableCell>
                      <TableCell>Item Name</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Packing Type</TableCell>
                      <TableCell>Value Of Goods</TableCell>
                      <TableCell>Product Code</TableCell>
                      <TableCell>Remarks</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {packingList
                      ?.filter((item, index) => !deletedItems.includes(index))
                      .map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{item.itemName}</TableCell>
                          <TableCell>{item.quantity}</TableCell>
                          <TableCell>{item.packingType}</TableCell>
                          <TableCell>{item.valueOfGoods}</TableCell>
                          <TableCell>{item.productCode}</TableCell>
                          <TableCell>{item.remarks}</TableCell>
                          <TableCell>
                            <IconButton onClick={() => handleRemoveItem(index)}>
                              <AiOutlineDelete color="#d32f2f" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton
                sx={{ float: 'right' }}
                type="submit"
              >
                <span>Preview</span>
              </GenericLoadingButton>
            </Grid>
          </Grid>
        </form>
        {isMessageDisplay && (
          <Toasty show={isMessageDisplay} message={message} type={messageType} />
        )}
      </Box>
    </Fragment>
  );
};
export default PackingList;
