import { Grid, FormHelperText, Typography } from '@mui/material';
import { Fragment, useMemo, useEffect, useState } from 'react';

import {
  updateAccountType,
  updateSelectBank,
  updateAccountHolderName,
  updateAccountNumber,
  updateIFSC,
  updateUPI,
  updateUpiName,
  updateUpiId,
  requestToSaveAccounts,
  resetAccount,
  resetAccountApiStatus,
  requestToGetAllAccounts,
  updateQRCode
} from '../../../../store/slices/AccountManagementSlice';
import Toasty from '../../../../common-components/form-elements/toasty';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  accountManagementInitialValues,
  addAccountManagementValidationSchema
} from '../../../../common-components/validator/settings-validator/account-management';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericImagePicker from '../../../../common-components/form-elements/genericImagePicker';
import GenericAction from '../../../../common-components/form-elements/genericAction';
const AccountType = {
  bankAccount: {
    value: 'bankAccount',
    label: 'Bank Account'
  },
  upi: {
    value: 'upi',
    label: 'UPI'
  },
  qRCode: {
    value: 'uploadQRCode',
    label: 'Upload QR Code'
  }
};

const UpiList = [
  {
    value: 'phonePay',
    label: 'PhonePe'
  },
  {
    value: 'googlePay',
    label: 'Google Pay'
  },
  {
    value: 'paytmUpi',
    label: 'Paytm UPI'
  },
  {
    value: 'amazonePay',
    label: 'Amazon Pay'
  },
  {
    value: 'bhimUpi',
    label: 'BHIM App'
  },
  {
    value: 'mobiKwik',
    label: 'MobiKwik'
  },
  {
    value: 'sbiPay',
    label: 'SBI Pay'
  },
  {
    value: 'iMobile',
    label: 'iMobile'
  },
  {
    value: 'axisPay',
    label: 'Axis Pay'
  },
  {
    value: 'other',
    label: 'Other'
  }
];

const AddAccount = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const [ifscValue, setIfscValue] = useState('');

  const dispatch = useDispatch();
  const getQRCode = (data) => {
    dispatch(updateQRCode(data));
  };
  const {
    auth: { loginSuccess },

    accountManagement: { addAccounts, listAccounts, listBank },
    company: { companyDetails }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: { addAccounts: { ...accountManagementInitialValues?.addAccounts } },
    validationSchema: addAccountManagementValidationSchema
  });

  const onAccountTypeChange = (evt) => {
    formik.setFieldValue('addAccounts.accountType', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateAccountType(value));
  };
  const onSelectBankChange = (evt) => {
    formik.setFieldValue('addAccounts.selectBank', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateSelectBank(value));
  };
  const onAccountHolderNameChange = (evt) => {
    formik.setFieldValue('addAccounts.accountHolderName', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateAccountHolderName(value));
  };
  const onAccountNumberChange = (evt) => {
    formik.setFieldValue('addAccounts.accountNumber', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateAccountNumber(value));
  };
  const onIFSCChange = (evt) => {
    const newValue = evt?.target?.value.toUpperCase();
    setIfscValue(newValue);
    formik.setFieldValue('addAccounts.IFSC', newValue);
    const { value } = evt.target;
    dispatch(updateIFSC(value));
  };
  const onUPIChange = (evt) => {
    formik.setFieldValue('addAccounts.UPI', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateUPI(value));
  };
  const onUpiNameChange = (evt) => {
    const { value } = evt.target;
    dispatch(updateUpiName(value));
  };
  const onUpiIdChange = (evt) => {
    formik.setFieldValue('addAccounts.upiId', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateUpiId(value));
  };

  const onSaveAccountsHandler = () => {
    let payload = {
      companyId: companyDetails._id,
      accountType: addAccounts?.accountType,
      bankId: addAccounts?.selectBank,
      accountHolderName: addAccounts?.accountHolderName,
      accountNumber: addAccounts?.accountNumber,
      ifscCode: addAccounts?.IFSC,
      upiType: addAccounts?.UPI,
      // upiId: addAccounts?.upiId,
      upiId: addAccounts?.upiId,
      qrCode: addAccounts?.qrCode
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveAccounts(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Account Details');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetAccount());
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (addAccounts?.apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Account Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetAccount());
          setIsMessageDisplay(false);
        }, 2000);
      }
      if (addAccounts?.apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetAccountApiStatus());
        }, 2000);
      }
    }
  }, [addAccounts?.apiStatus?.isSaved, addAccounts?.apiStatus?.isResponseFailed]);

  useEffect(() => {
    dispatch(requestToGetAllAccounts(companyDetails?._id));
  }, [addAccounts?.apiStatus?.isSaved]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'accountType',
        headerName: 'Account Type',
        width: 150,
        editable: false
      },
      {
        field: 'bankId',
        headerName: 'Bank Id',
        width: 150,
        editable: false
      },
      {
        field: 'accountHolderName',
        headerName: 'Account Holder Name',
        width: 150,
        editable: false
      },
      {
        field: 'accountNumber',
        headerName: 'Account Number',
        width: 150,
        editable: false
      },
      {
        field: 'ifscCode',
        headerName: 'IFSC Code',
        width: 150,
        editable: false
      },
      {
        field: 'qrCode',
        headerName: 'QR Code',
        width: 150,
        editable: false,
        renderCell: (data) => {
          console.log(data?.row?.qrCode, 'saxena');
          if (data?.row?.qrCode !== '') {
            return (
              <img
                src={`data:image/png;base64, ${data.row.qrCode}`}
                height={50}
                width={50}
                alt="qr-code"
              />
            );
          } else {
            return null;
          }
        }
      },
      {
        field: 'upiType',
        headerName: 'UPI Type',
        width: 150,
        editable: false
      },
      {
        field: 'upiId',
        headerName: 'UPI ID',
        width: 150,
        editable: false
      },
      {
        field: 'createdDate',
        headerName: 'Created Date',
        width: 150,
        editable: false,
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
          return <GenericAction data={data?.row} />;
        }
      }
    ];
  }, []);

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <GenericDropdown
              onKeyUp={formik.handleChange}
              value={formik?.values?.addAccounts?.accountType}
              error={
                formik?.errors?.addAccounts?.accountType &&
                formik?.touched?.addAccounts?.accountType
              }
              onChange={onAccountTypeChange}
              label={'Choose Account Type'}
              data={Object.values(AccountType)}
              helperText={
                formik?.errors?.addAccounts?.accountType &&
                formik?.touched?.addAccounts?.accountType &&
                formik?.errors?.addAccounts?.accountType
              }
            />
          </Grid>
          {addAccounts?.accountType === 'bankAccount' && (
            <Fragment>
              <Grid item xs={12} md={3}>
                <GenericDropdown
                  onChange={onSelectBankChange}
                  label={'Select Bank'}
                  data={listBank.map((item) => ({
                    label: item.bankName,
                    value: item.bankName
                  }))}
                  onKeyUp={formik.handleChange}
                  value={formik.values?.addAccounts?.selectBank}
                  error={
                    formik?.errors?.addAccounts?.selectBank &&
                    formik?.touched?.addAccounts?.selectBank
                  }
                />
                <FormHelperText error>
                  {formik?.errors?.addAccounts?.selectBank &&
                    formik?.touched?.addAccounts?.selectBank &&
                    formik?.errors?.addAccounts?.selectBank}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput
                  onChange={onAccountHolderNameChange}
                  label={'Account Holder Name'}
                  onBlur={formik.handleBlur}
                  onFocus={formik.handleChange}
                  onKeyUp={formik.handleChange}
                  value={formik?.values?.addAccounts?.accountHolderName}
                  error={
                    formik?.errors?.addAccounts?.accountHolderName &&
                    formik?.touched?.addAccounts?.accountHolderName
                  }
                />
                <FormHelperText error>
                  {formik?.errors?.addAccounts?.accountHolderName &&
                    formik?.touched?.addAccounts?.accountHolderName &&
                    formik?.errors?.addAccounts?.accountHolderName}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput
                  onChange={onAccountNumberChange}
                  label={'Enter Account Number'}
                  value={formik.values.addAccounts.accountNumber}
                  onKeyUp={formik.handleChange}
                  onFocus={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik?.errors?.addAccounts?.accountNumber &&
                    formik?.touched?.addAccounts?.accountNumber
                  }
                />
                <FormHelperText error>
                  {formik?.errors?.addAccounts?.accountNumber &&
                    formik?.touched?.addAccounts?.accountNumber &&
                    formik?.errors?.addAccounts?.accountNumber}
                </FormHelperText>
              </Grid>
              <Grid item xs={12} md={3}>
                <GenericInput
                  value={ifscValue}
                  onChange={onIFSCChange}
                  label={'Enter IFSC Code'}
                  onKeyUp={formik.handleChange}
                  onFocus={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik?.errors?.addAccounts?.IFSC && formik?.touched?.addAccounts?.IFSC}
                />
                <FormHelperText error>
                  {formik?.errors?.addAccounts?.IFSC &&
                    formik?.touched?.addAccounts?.IFSC &&
                    formik?.errors?.addAccounts?.IFSC}
                </FormHelperText>
              </Grid>
            </Fragment>
          )}
          {addAccounts?.accountType === 'upi' && (
            <Fragment>
              <Grid item xs={12} md={3}>
                <GenericDropdown
                  onChange={onUPIChange}
                  label={'Select UPI'}
                  data={UpiList}
                  onKeyUp={formik.handleChange}
                  onFocus={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik?.values?.addAccounts?.UPI}
                  error={formik?.errors?.addAccounts?.UPI && formik?.touched?.addAccounts?.UPI}
                />
                <FormHelperText error>
                  {formik?.errors?.addAccounts?.UPI &&
                    formik?.touched.addAccounts?.UPI &&
                    formik?.errors?.addAccounts?.UPI}
                </FormHelperText>
              </Grid>

              {addAccounts?.UPI === 'other' && (
                <Grid item xs={12} md={3}>
                  <GenericInput
                    onChange={onUpiNameChange}
                    label={'Enter UPI Type'}
                    onKeyUp={formik.handleChange}
                    onFocus={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik?.values?.addAccounts?.upiId}
                    error={
                      formik?.errors?.addAccounts?.upiId && formik?.touched?.addAccounts?.upiId
                    }
                  />
                  <FormHelperText error>
                    {formik?.errors?.addAccounts?.upiId &&
                      formik?.touched?.addAccounts?.upiId &&
                      formik?.errors?.addAccounts?.upiId}
                  </FormHelperText>
                </Grid>
              )}
              <Grid item xs={12} md={3}>
                <GenericInput
                  onChange={onUpiIdChange}
                  label={'Enter UPI ID'}
                  onKeyUp={formik.handleChange}
                  onFocus={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik?.errors?.addAccounts?.upiId && formik?.touched?.addAccounts?.upiId}
                />
                <FormHelperText error>
                  {formik?.errors?.addAccounts?.upiId &&
                    formik?.touched?.addAccounts?.upiId &&
                    formik?.errors?.addAccounts?.upiId}
                </FormHelperText>
              </Grid>
            </Fragment>
          )}
          <Grid item xs={12} md={3}>
            <GenericLoadingButton
              // disabled={!formik.isValid}
              size="medium"
              type="submit"
              onClick={onSaveAccountsHandler}
            >
              <span>Save</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {addAccounts?.accountType === 'uploadQRCode' && (
                  <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Upload QR Code
                    </Typography>
                    <GenericImagePicker getImageUrl={getQRCode} sx={{ width: '55%' }} />
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listAccounts.map((item, index) => ({
                ...item,
                id: index + 1
              }))}
              columns={columns}
            />
          </Grid>
        </Grid>
      </form>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default AddAccount;
