import { Paper, Grid, FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import { Fragment, useMemo, useEffect, useState, useCallback } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import Toasty from '../../../../common-components/form-elements/toasty';
import { useDispatch, useSelector } from 'react-redux';
import {
  updatePaymentModes,
  requestToSavePaymentModes,
  requestToGetAllPaymentModes,
  requestDeletePaymentModes,
  resetPaymentMode,
  resetPaymentModeApiStatus,
  resetPaymentModeDeleteStatus
} from '../../../../store/slices/AppConfigurationSlice';
import {
  paymentModeInitialValues,
  addPaymentModesSchema
} from '../../../../common-components/validator/settings-validator/app-Configuration';
import GenericAction from '../../../../common-components/form-elements/genericAction';
const PaymentModes = () => {
  const dispatch = useDispatch();
  const [del, setDel] = useState(false);
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const formik = useFormik({
    initialValues: paymentModeInitialValues,
    validationSchema: addPaymentModesSchema
  });

  const {
    appConfiguration: {
      paymentModes: { add, listPaymentModes, apiStatus }
    },
    auth: { loginSuccess }
  } = useSelector((state) => state);

  const onPaymentModesChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updatePaymentModes(evt?.target?.value));
  };

  const onDeleteHandler = (data) => {
    dispatch(requestDeletePaymentModes(data?._id));
  };

  const onSavePaymentModesHandler = () => {
    let payload = {
      paymentMode: add?.value
    };
    dispatch(requestDeletePaymentModes('654b638c08634b3e6049d868'));
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSavePaymentModes(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Payment Mode');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  };
  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetPaymentMode());
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Payment Mode Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetPaymentMode());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Payment Mode Already Exist');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetPaymentModeApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isResponseFailed]);
  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllPaymentModes());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Payment Mode Deleted');
      setTimeout(() => {
        dispatch(resetPaymentModeDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetPaymentModeDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  useEffect(() => {
    dispatch(requestToGetAllPaymentModes());
  }, [apiStatus?.isSaved]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'paymentMode',
        headerName: 'Payment Mode',
        width: 150,
        editable: false
      },
      {
        field: '_id',
        headerName: 'Action',
        width: 150,
        editable: false,
        renderCell: (data) => {
          // console.log(data)
          return (
            <GenericAction data={data?.row} onDeleteHandler={(data) => onDeleteHandler(data)} />
          );
        }
      }
    ];
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericInput
              onChange={onPaymentModesChange}
              label={'Enter Payment Mode'}
              onKeyUp={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik.values.value}
              error={Boolean(formik?.errors?.value) && formik?.touched?.value}
            />
            <FormHelperText error>
              {formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
            </FormHelperText>
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSavePaymentModesHandler} type="submit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listPaymentModes
                .filter((item) => !item.isDeleted)
                .map((item, index) => ({
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
export default PaymentModes;
