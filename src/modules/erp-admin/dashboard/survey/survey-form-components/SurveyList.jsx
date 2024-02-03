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
  TableContainer
} from '@mui/material';
import { Fragment, useEffect, useMemo, useState } from 'react';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import GenericDatePicker from '../../../../../common-components/form-elements/genericDatePicker';
import GenericSwitch from '../../../../../common-components/form-elements/genericSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  updateAutoNumberInitilize,
  updateMenualNumberInitilize,
  updateSurveyListDate,
  updateItemName,
  updateQuantity,
  updateValueOfGoods,
  updateRemark,
  requestToSaveSurveyItem,
  requestToGetAllSurveyItem,
  resetSurveyItemList,
  resetSurveyItemApiStatus
} from '../../../../../store/slices/SurveyListSlice';
import GenericDataGrid from '../../../../../common-components/form-elements/genericDataGrid';
import { AiOutlineDelete } from 'react-icons/ai';
import { useFormik } from 'formik';
import {
  surveyListInitialValues,
  surveyListValidationSchema
} from '../../../../../common-components/validator/surveyList-validation';
import Toasty from '../../../../../common-components/form-elements/toasty';
import dayjs from 'dayjs';

const style = {
  display: 'flex',
  width: 'calc(100% - 20px)',
  mr: 1,
  border: '1px solid #C4C4C4',
  borderRadius: '4.5px',
  padding: '0px 8px'
};

const SurveyItemList = () => {
  const dispatch = useDispatch();
  const { id: enquiryId } = useParams();
  const [isDisabled, setIsDisabled] = useState(false);
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [deletedItems, setDeletedItems] = useState([]);

  const {
    company: { companyDetails },
    surveyList: { add, surveyItemList, isSaved, isResponseFailed },
    auth: { loginSuccess },
    appConfiguration: { configuration }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: surveyListInitialValues,
    validationSchema: surveyListValidationSchema
  });

  const handleRemoveItem = (index) => {
    setDeletedItems((prevDeletedItems) => [...prevDeletedItems, index]);
  };

  const onSurveyListNoAutoChange = (evt) => {
    const { checked } = evt.target;
    if (checked === true) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    dispatch(updateAutoNumberInitilize(checked));
  };
  const onChangeMenualNumberInitilize = (evt) => {
    // formik.setFieldValue('add.surveyListNo', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateMenualNumberInitilize(value));
  };
  const onChangeSurveyDate = (evt) => {
    const { $d } = evt;
    dispatch(updateSurveyListDate(new Date($d).getTime()));
  };
  const onChangeItemName = (evt) => {
    formik.setFieldValue('add.itemName', evt.target.value);
    const { value } = evt.target;
    dispatch(updateItemName(value));
  };
  const onChangeQuantity = (evt) => {
    formik.setFieldValue('add.quantity', evt.target.value);
    const { value } = evt.target;
    dispatch(updateQuantity(value));
  };
  const onChangeValueOfGoods = (evt) => {
    formik.setFieldValue('add.valueOfGoods', evt.target.value);
    const { value } = evt.target;
    dispatch(updateValueOfGoods(value));
  };
  const onChangeRemark = (evt) => {
    formik.setFieldValue('add.remark', evt.target.value);
    const { value } = evt.target;
    dispatch(updateRemark(value));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'itemName',
        headerName: 'Item Name',
        width: 150,
        editable: false
      },
      {
        field: 'quantity',
        headerName: 'Quantity',
        width: 150,
        editable: false
      },
      {
        field: 'remarks',
        headerName: 'Remarks',
        width: 150,
        editable: false
      }
    ];
  });

  const rows = surveyItemList?.flatMap((survey, surveyIndex) =>
    survey?.surveyItems?.map((item, surveyItemsIndex) => ({
      id: `${surveyIndex}-${surveyItemsIndex}`,
      srNo: surveyIndex * survey?.surveyItems?.length + surveyItemsIndex + 1,
      itemName: item.name,
      quantity: item.quantity,
      action: { surveyIndex, surveyItemsIndex },
    }))
  );

  const onSaveSurveyListHandler = () => {
    let payload = {
      // companyId: companyDetails._id,
      enquiryId: enquiryId,
      surveyListNo: add?.surveyListNo,
      surveyDate: add?.surveyDate,
      surveyItems: [
        {
          itemName: add.itemName,
          quantity: add.quantity,
          valueOfGoods: add.valueOfGoods,
          remarks: add.remarks
        }
      ],
      addedBy: loginSuccess.id
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveSurveyItem(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Survey Details');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    updateSurveyListDate()
    // dispatch(resetPackingList());
    // dispatch(requestToGetAllPackingList())
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllSurveyItem({ companyId: companyDetails?._id, enquiryId: enquiryId }));
  }, [isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Survey List Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetSurveyItemList());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetSurveyItemApiStatus());
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
                  <GenericSwitch
                    onChange={onSurveyListNoAutoChange}
                    // checked={details?.quotationAuto}
                    start={'Auto'}
                    end={'Manual'}
                  />
                  <InputBase
                    onChange={onChangeMenualNumberInitilize}
                    sx={{
                      ml: 1,
                      flex: 1,
                      backgroundColor: (theme) => theme.palette.primary.light,
                      padding: '0 10px'
                    }}
                    type="text"
                    disabled={!add?.autoNumber}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleChange}
                    // value={details?.quotationAutoValue}
                    fullWidth
                    autoFocus
                  />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericDatePicker onAccept={onChangeSurveyDate} defaultValue={dayjs( new Date())} label={'Survey Date'} />
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericInput
                onChange={onChangeItemName}
                label={'Item/Particular Name'}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.add?.itemName}
                error={formik?.errors?.add?.itemName && formik?.touched?.add?.itemName}
                helperText={
                  formik?.errors?.add?.itemName &&
                  formik?.touched?.add?.itemName &&
                  formik?.errors?.add?.itemName
                }
              />
            </Grid>
            <Grid item xs={12} md={1}>
              <GenericInput
                onChange={onChangeQuantity}
                label={'Qty.'}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.add?.quantity}
                error={formik?.errors?.add?.quantity && formik?.touched?.add?.quantity}
                helperText={
                  formik?.errors?.add?.quantity &&
                  formik?.touched?.add?.quantity &&
                  formik?.errors?.add?.quantity
                }
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onChangeValueOfGoods}
                label={'Value Of Goods'}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.add?.valueOfGoods}
                error={formik?.errors?.add?.valueOfGoods && formik?.touched?.add?.valueOfGoods}
                helperText={
                  formik?.errors?.add?.valueOfGoods &&
                  formik?.touched?.add?.valueOfGoods &&
                  formik?.errors?.add?.valueOfGoods
                }
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onChangeRemark}
                label={'Remark'}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                value={formik?.values?.add?.remark}
                error={formik?.errors?.add?.remark && formik?.touched?.add?.remark}
                helperText={
                  formik?.errors?.add?.remark &&
                  formik?.touched?.add?.remark &&
                  formik?.errors?.add?.remark
                }
              />
            </Grid>
            <Grid item xs={12} md={1}>
              <GenericLoadingButton
                sx={{ float: 'right' }}
                onClick={onSaveSurveyListHandler}
                type="submit">
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
                      <TableCell>Value Of Goods</TableCell>
                      <TableCell>Remarks</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {surveyItemList?.map((item, index) => (
                      <>
                        {item?.surveyItems?.map((packingItem, packingIndex) => (
                          <TableRow key={`${index}-${packingIndex}`}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{packingItem.itemName}</TableCell>
                            <TableCell>{packingItem.quantity}</TableCell>
                            <TableCell>{packingItem.valueOfGoods}</TableCell>
                            <TableCell>
                            </TableCell>
                            {/* <TableCell>Add remarks property for packing item</TableCell> */}
                            <TableCell>
                              <IconButton onClick={() => handleRemoveItem(index)}>
                                <AiOutlineDelete color="#d32f2f" />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton sx={{ float: 'right' }} type="submit">
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
export default SurveyItemList;
