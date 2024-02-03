import { Grid } from '@mui/material';
import { Fragment, useMemo, useEffect, useState, useCallback } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import { useFormik } from 'formik';
import Toasty from '../../../../common-components/form-elements/toasty';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateAddEnquirySourceValue,
  requestToSaveEnquirySource,
  requestToGetAllEnquirySource,
  resetEnquirySource,
  resetEnquirySourceApiStatus
} from '../../../../store/slices/ContentManagementSlice';
import {
  enquirySourceInitialValues,
  enquirySourceValidationSchema
} from '../../../../common-components/validator/settings-validator/content-management';
const EnquirySource = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const formik = useFormik({
    initialValues: enquirySourceInitialValues,
    validationSchema: enquirySourceValidationSchema
  });
  const dispatch = useDispatch();
  const {
    contentManagement: {
      enquirySource: { add, listEnquirySource, apiStatus }
    }
  } = useSelector((state) => state);
  const onEnquirySourceChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateAddEnquirySourceValue(evt?.target?.value));
  };
  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'enquirySource',
        headerName: 'Enquiry Source',
        width: 150,
        editable: false
      }
    ];
  });

  const onSaveEnquirySourceHandler = () => {
    let payload = {
      enquirySource: add.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveEnquirySource(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Enquiry Source');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2500);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetEnquirySource());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllEnquirySource());
  }, [apiStatus?.isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Enquiry Source Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetEnquirySource());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetEnquirySourceApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isResponseFailed]);

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericInput
              onChange={onEnquirySourceChange}
              error={formik?.errors?.value && formik?.touched?.value}
              value={formik?.values?.value}
              onBlur={formik.handleBlur}
              onkeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              helperText={formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
              label={'Enter Enquiry Source'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveEnquirySourceHandler} type="submit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          {Array.isArray(listEnquirySource) && (
            <Grid item xs={12}>
              <GenericDataGrid
                rows={listEnquirySource?.map((item, index) => {
                  return {
                    ...item,
                    id: index + 1
                  };
                })}
                columns={columns}
              />
            </Grid>
          )}
        </Grid>
      </form>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default EnquirySource;
