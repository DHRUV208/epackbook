import { Paper, Grid, FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import { Fragment, useMemo, useEffect, useState } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import { useDispatch, useSelector } from 'react-redux';
import Toasty from '../../../../common-components/form-elements/toasty';
import {
  updatePaymentTypes,
  requestToSavePaymentTypes,
  requestToGetAllPaymentTypes,
  requestDeletePaymentTypes,
  resetPaymentTypes,
  resetPaymentTypesApiStatus,
  resetPaymentTypesDeleteStatus
} from '../../../../store/slices/AppConfigurationSlice';
import {
  paymentTypeInitialValues,
  addPaymentTypesSchema
} from '../../../../common-components/validator/settings-validator/app-Configuration';
import GenericAction from '../../../../common-components/form-elements/genericAction';

const PaymentTypes = () => {
  const dispatch = useDispatch();
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const formik = useFormik({
    initialValues: paymentTypeInitialValues,
    validationSchema: addPaymentTypesSchema
  });

  const {
    appConfiguration: {
      paymentTypes: { add, listPaymentTypes, apiStatus }
    }
  } = useSelector((state) => state);
  const onPaymentTypesChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updatePaymentTypes(evt?.target?.value));
  };

  const onDeleteHandler = (data) => {
    dispatch(requestDeletePaymentTypes(data?._id));
  };

  const onSavePaymentTypesHandler = () => {
    let payload = {
      paymentType: add?.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSavePaymentTypes(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Payment Type');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Payment Type Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetPaymentTypes());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Payment Type Already Exist');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetPaymentTypes());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isResponseFailed]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllPaymentTypes());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Payment Type Deleted');
      setTimeout(() => {
        dispatch(resetPaymentTypesDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetPaymentTypesDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  useEffect(() => {
    dispatch(requestToGetAllPaymentTypes());
  }, [apiStatus?.isSaved]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'paymentType',
        headerName: 'Payment Type',
        width: 150,
        editable: false
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
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericInput
              onChange={onPaymentTypesChange}
              label={'Enter Payment Types'}
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
            <GenericLoadingButton onClick={onSavePaymentTypesHandler} type="submit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listPaymentTypes
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
export default PaymentTypes;
