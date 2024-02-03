import { Grid } from '@mui/material';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import { useDispatch, useSelector } from 'react-redux';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import { useFormik } from 'formik';
import Toasty from '../../../../common-components/form-elements/toasty';
import {
  updateBankName,
  requestToSaveBank,
  requestToGetAllBank,
  resetBank,
  resetBankApiStatus
} from '../../../../store/slices/AccountManagementSlice';
import {
  accountManagementInitialValues,
  addBankValidationSchema
} from '../../../../common-components/validator/settings-validator/account-management/index';

const Bank = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const formik = useFormik({
    initialValues: { addBank: { ...accountManagementInitialValues.addBank } },
    validationSchema: addBankValidationSchema
  });
  const dispatch = useDispatch();
  const {
    accountManagement: { addBank, listBank }
  } = useSelector((state) => state);
  const onBankNameChange = (evt) => {
    formik.setFieldValue('addBank.bankName', evt?.target?.value);
    dispatch(updateBankName(evt?.target?.value));
  };
  const onSaveBankHandler = () => {
    let payload = {
      bankName: addBank?.bankName
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveBank(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Bank Name');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetBank());
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (addBank?.apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Bank Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetBank());
          setIsMessageDisplay(false);
        }, 2000);
      }
      if (addBank?.apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetBankApiStatus());
        }, 2000);
      }
    }
  }, [addBank?.apiStatus?.isSaved, addBank?.apiStatus?.isResponseFailed]);

  useEffect(() => {
    dispatch(requestToGetAllBank());
  }, [addBank?.apiStatus?.isSaved]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'bankName',
        headerName: 'Bank Name',
        width: 150,
        editable: false
      }
    ];
  }, []);

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericInput
              error={formik?.errors?.addBank?.bankName && formik?.touched?.addBank?.bankName}
              onBlur={formik.handleBlur}
              onkeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              value={formik?.values?.addBank?.bankName}
              helperText={
                formik?.errors?.addBank?.bankName &&
                formik?.touched?.addBank?.bankName &&
                formik?.errors?.addBank?.bankName
              }
              onChange={onBankNameChange}
              label={'Enter Bank Name'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton type="submit" onClick={onSaveBankHandler}>
              <span>Save</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listBank.map((item, index) => ({
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
export default Bank;
