import * as React from 'react';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toasty from '../../../common-components/form-elements/toasty';

import GenericDropdown from '../../../common-components/form-elements/genericDropdown';
import GenericDataGrid from '../../../common-components/form-elements/genericDataGrid';
import GenericDatePicker from '../../../common-components/form-elements/genericDatePicker';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import GenericInput from '../../../common-components/form-elements/genericInput';

import { useDispatch, useSelector } from 'react-redux';
import {
  requestToSaveMoneyReceipt,
  updateReceiptNumber,
  updateChooseTemplate,
  updateDateOfReceipt,
  updatePaymentType,
  updateReceiptAgainst,
  updateReceiptAgainstValue,
  updateModeOfPayment,
  updateReferenceNumber,
  updateRsField,
  updateConsignmentNumber,
  updateNumberOfArticles,
  updateDateOfArrival,
  requestToGetAllMoneyReceipt,
  resetMoneyReceipt,
  resetMoneyReceiptApiStatus
} from '../../../../src/store/slices/MoneyReceiptSlice';
import { useFormik } from 'formik';
import {
  addMoneyReceiptInitialValues,
  addMoneyReceiptValidationSchema
} from '../../../common-components/validator/moneyReceipt-validation';
import { useMemo } from 'react';
import { reset } from '../../../store/slices/EnquirySlice';

const MoneyReceiptForm = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { id: orderId } = useParams();
  // console.log(orderId, "anurag");
  const dispatch = useDispatch();
  const {
    moneyReceipt: { moneyReceipt, isSaved, isResponseFailed, moneyReceiptList },
    company: { companyDetails },
    auth: { loginSuccess }
  } = useSelector((state) => state);

  const [grid_md, setGrid_md] = useState(3);
  const [grid_xs, setGrid_xs] = useState(12);
  const [reciept_lebel, setReciept_lebel] = useState('');
  const formik = useFormik({
    initialValues: addMoneyReceiptInitialValues,
    validationSchema: addMoneyReceiptValidationSchema
  });
  const onReceiptNumberChange = (evt) => {
    formik.setFieldValue('receiptNumber', evt?.target?.value);
    dispatch(updateReceiptNumber(evt?.target?.value));
  };
  const onChooseTemplateChange = (evt) => {
    formik.setFieldValue('chooseTemplate', evt?.target?.value);
    dispatch(updateChooseTemplate(evt?.target?.value));
  };
  const onDateOfReceiptChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('dateOfReceipt', new Date($d).getTime());
    dispatch(updateDateOfReceipt(new Date($d).getTime()));
  };
  const onPaymentTypeChange = (evt) => {
    formik.setFieldValue('paymentType', evt?.target?.value);
    dispatch(updatePaymentType(evt?.target?.value));
  };
  const onReceiptAgainstChange = (evt) => {
    if (evt?.target?.value === 'Quotation') {
      setGrid_md(3);
      setGrid_xs(6);
      setReciept_lebel('Enter Quotation Number');
    } else if (evt?.target?.value === 'Invoice') {
      setGrid_md(3);
      setGrid_xs(6);
      setReciept_lebel('Enter Invoice Number');
    } else {
      setGrid_md(6);
      setGrid_xs(12);
      setReciept_lebel('Enter Number');
    }
    formik.setFieldValue('receiptAgainst', evt?.target?.value);
    dispatch(updateReceiptAgainst(evt?.target?.value));
  };
  const onReceiptAgainstValueChange = (evt) => {
    formik.setFieldValue('receiptAgainstValue', evt?.target?.value);
    dispatch(updateReceiptAgainstValue(evt?.target?.value));
  };
  const onModeOfPaymentChange = (evt) => {
    formik.setFieldValue('modeOfPayment', evt?.target?.value);
    dispatch(updateModeOfPayment(evt?.target?.value));
  };
  const onReferenceNumberChange = (evt) => {
    formik.setFieldValue('referenceNumber', evt?.target?.value);
    dispatch(updateReferenceNumber(evt?.target?.value));
  };
  const onRsFieldChange = (evt) => {
    formik.setFieldValue('rsField', evt?.target?.value);
    dispatch(updateRsField(evt?.target?.value));
  };
  const onConsignmentNumberChange = (evt) => {
    formik.setFieldValue('consignmentNumber', evt?.target?.value);
    dispatch(updateConsignmentNumber(evt?.target?.value));
  };
  const onNumberOfArticlesChange = (evt) => {
    formik.setFieldValue('numberOfArticles', evt?.target?.value);
    dispatch(updateNumberOfArticles(evt?.target?.value));
  };
  const onDateOfArrivalChange = (evt) => {
    const { $d } = evt;
    dispatch(updateDateOfArrival(new Date($d).getTime()));
  };

  const onSaveMoneyReceiptHandler = () => {
    let payload = {
      companyId: companyDetails._id,
      orderId: orderId,
      receiptNumber: moneyReceipt?.receiptNumber,
      receiptDate: moneyReceipt?.dateOfReceipt,
      arivalDate: moneyReceipt?.dateOfArrival,
      templateId: moneyReceipt?.chooseTemplate,
      receiptAgainst: moneyReceipt?.receiptAgainst,
      billNumber: moneyReceipt?.receiptAgainstValue,
      quotationNumber:
        moneyReceipt?.receiptAgainst === 'Quotation' ? moneyReceipt?.receiptAgainstValue : '',
      consignmentNumber: moneyReceipt?.consignmentNumber,
      numbersOfArticles: moneyReceipt?.numberOfArticles,
      paymentMode: moneyReceipt?.modeOfPayment,
      paymentType: moneyReceipt?.paymentType,
      paymentAmount: moneyReceipt?.rsField,
      referenceNumber: moneyReceipt?.referenceNumber,
      status: 'NEW',
      addedBy: loginSuccess?.id
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveMoneyReceipt(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Money Receipt Data');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2500);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetMoneyReceipt());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllMoneyReceipt(orderId));
  }, [isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Money Receipt Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetMoneyReceipt());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetMoneyReceiptApiStatus());
        }, 3000);
      }
    }
  }, [isSaved, isResponseFailed]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'receiptNumber',
        headerName: 'Receipt No.',
        type: 'number',
        width: 110,
        editable: false
      },
      {
        field: 'referenceNumber',
        headerName: 'Reference No.',
        type: 'number',
        width: 150,
        editable: false
      },
      {
        field: 'receiptDate',
        headerName: 'Receipt Date',
        width: 150,
        editable: false
      },
      {
        field: 'arivalDate',
        headerName: 'Arrival Date',
        width: 150,
        editable: false
      },
      {
        field: 'receiptAgainst',
        headerName: 'Receipt Against',
        width: 150,
        editable: false
      },
      {
        field: 'billNumber',
        headerName: 'Bill No.',
        width: 150,
        editable: false
      },
      {
        field: 'quotationNumber',
        headerName: 'Quotation No.',
        type: 'number',
        width: 110,
        editable: false
      },
      {
        field: 'consignmentNumber',
        headerName: 'Consignment No.',
        type: 'number',
        width: 110,
        editable: false
      },
      {
        field: 'numbersOfArticles',
        headerName: 'No. Of Articles',
        type: 'number',
        width: 110,
        editable: false
      }
    ];
  });
  return (
    <Fragment>
      <Box sx={{ flexGrow: 1, background: '#fff ' }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <GenericInput
                onChange={onReceiptNumberChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                value={formik?.values?.receiptNumber}
                label={'Serial No.'}
              />
              {/* <Box sx={style}>
                <Stack direction="row" spacing={1} alignItems={'center'} width={'100%'}>
                  <GenericSwitch start={'Auto'} onChange={onReceiptAutoChange} end={'Manual'} />
                  <InputBase
                    onChange={onReceiptNumberChange}
                    disabled={isDisabled}
                    sx={{ ml: 1, flex: 1 }}
                    type="text"
                    placeholder="Receipt Number"
                    fullWidth
                    autoFocus
                    style={{
                      backgroundColor: '#eee',
                      padding: '3px 10px'
                    }}
                  />
                </Stack>
              </Box> */}
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericDropdown
                onChange={onChooseTemplateChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                value={formik?.values?.chooseTemplate}
                error={formik.errors.chooseTemplate && formik.touched.chooseTemplate}
                data={[
                  { label: 'Money Reciept New Template', value: '12121124232323' },
                  { label: 'Money Reciept Template2', value: '12121124232333' }
                ]}
                label={'Template'}
              />
              <FormHelperText error>
                {formik.errors.chooseTemplate &&
                  formik.touched.chooseTemplate &&
                  formik.errors.chooseTemplate}
              </FormHelperText>
            </Grid>
            <Grid item md={3} xs={12}>
              <GenericDatePicker
                disablePast
                closeOnSelect={true}
                onAccept={onDateOfReceiptChange}
                error={formik.errors.dateOfReceipt && formik.touched.dateOfReceipt}
                onKeyUp={formik.handleChange}
                onBlur={formik.handleBlur}
                // onChange={onDateOfReceiptChange}
                label="Date of Receipt"
              />
              <FormHelperText error>
                {formik.errors.dateOfReceipt &&
                  formik.touched.dateOfReceipt &&
                  formik.errors.dateOfReceipt}
              </FormHelperText>
            </Grid>

            <Grid item md={6} xs={12}>
              <GenericDropdown
                onChange={onPaymentTypeChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                value={formik?.values?.paymentType}
                error={formik?.errors?.paymentType && formik?.touched?.paymentType}
                data={[
                  { label: 'Advance Payment', value: 'Advance Payment' },
                  { label: 'Part Payment', value: 'Part Payment' },
                  { label: 'Final Payment', value: 'Final Payment' }
                ]}
                label="Payment Type"
              />
              <FormHelperText error>
                {formik.errors.paymentType &&
                  formik.touched.paymentType &&
                  formik.errors.paymentType}
              </FormHelperText>
            </Grid>
            <Grid item md={grid_md} xs={grid_xs}>
              <GenericDropdown
                onChange={onReceiptAgainstChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                value={formik?.values?.receiptAgainst}
                error={formik?.errors?.receiptAgainst && formik?.touched?.receiptAgainst}
                data={[
                  { label: 'Quotation', value: 'Quotation' },
                  { label: 'Invoice', value: 'Invoice' },
                  { label: 'Other', value: 'Other' }
                ]}
                label="Receipt Against"
              />
              <FormHelperText error>
                {formik.errors.receiptAgainst &&
                  formik.touched.receiptAgainst &&
                  formik.errors.receiptAgainst}
              </FormHelperText>
            </Grid>
            {moneyReceipt?.receiptAgainst !== 'Other' ? (
              <Grid item md={grid_md} xs={grid_xs}>
                <GenericInput
                  label={reciept_lebel}
                  onBlur={formik.handleBlur}
                  onKeyUp={formik.handleChange}
                  onFocus={formik.handleChange}
                  value={formik?.values?.receiptAgainstValue}
                  onChange={onReceiptAgainstValueChange}
                />
              </Grid>
            ) : null}
            <Grid item md={4} xs={12}>
              <GenericDropdown
                onChange={onModeOfPaymentChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                value={formik?.values?.modeOfPayment}
                error={formik?.errors?.modeOfPayment && formik?.touched?.modeOfPayment}
                data={[
                  { label: 'Net Banking', value: 'Net Banking' },
                  { label: 'UPI', value: 'UPI' },
                  { label: 'Debit Card', value: 'Debit Card' }
                ]}
                label="Mode of Payment"
              />
              <FormHelperText error>
                {formik.errors.modeOfPayment &&
                  formik.touched.modeOfPayment &&
                  formik.errors.modeOfPayment}
              </FormHelperText>
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onChange={onReferenceNumberChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                value={formik?.values?.referenceNumber}
                label="Refrence Number"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                controls={false}
                onChange={onRsFieldChange}
                error={formik?.errors?.rsField && formik?.touched?.rsField}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                value={formik?.values?.rsField}
                helperText={
                  formik?.errors?.rsField && formik?.touched?.rsField && formik?.errors?.rsField
                }
                label="Rs /-"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                onChange={onConsignmentNumberChange}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                value={formik?.values?.consignmentNumber}
                label="Consignment Number"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericInput
                type="text"
                onChange={onNumberOfArticlesChange}
                error={formik?.errors?.numberOfArticles && formik?.touched?.numberOfArticles}
                onBlur={formik.handleBlur}
                onKeyUp={formik.handleChange}
                onFocus={formik.handleChange}
                value={formik?.values?.numberOfArticles}
                helperText={
                  formik?.errors?.numberOfArticles &&
                  formik?.touched?.numberOfArticles &&
                  formik?.errors?.numberOfArticles
                }
                label="Numbers of Article"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <GenericDatePicker onChange={onDateOfArrivalChange} label="Date of Arrival" />
            </Grid>
            <Grid item md={12} xs={12}>
              <GenericLoadingButton
                sx={{ float: 'right', my: 2 }}
                type="submit"
                onClick={onSaveMoneyReceiptHandler}
              >
                <span>Submit</span>
              </GenericLoadingButton>
            </Grid>
          </Grid>
        </form>
        <Grid item xs={12}>
          <GenericDataGrid
            rows={moneyReceiptList.map((item, index) => ({
              ...item,
              id: index + 1 // Generate a unique id using the index as a fallback.
            }))}
            columns={columns}
          />
        </Grid>
      </Box>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default MoneyReceiptForm;
