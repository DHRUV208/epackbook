import { Fragment, useEffect, useMemo, useState } from 'react';
import { Card, Grid, Typography, useMediaQuery, FormHelperText } from '@mui/material';
import GenericDateTimePicker from '../../../../../common-components/form-elements/genericDateTimePicker';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import GenericDataGrid from '../../../../../common-components/form-elements/genericDataGrid';
import Toasty from '../../../../../common-components/form-elements/toasty';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import GenericTimeline from '../../../../../common-components/page-elements/genericTimeline';

import {
  updateSurveyDateAndTime,
  updateSurveyComment,
  requestToSaveSurvey,
  requestToGetAllSurvey,
  resetSurveyApiStatus,
  resetSurvey
} from '../../../../../store/slices/SurveySlice';
import {
  surveyInitialValues,
  surveyValidationSchema
} from '../../../../../common-components/validator/survey-validation';

const SurveyForm = (props) => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { enquiryId } = props;
  const formik = useFormik({
    initialValues: surveyInitialValues,
    validationSchema: surveyValidationSchema
  });
  const {
    survey: { surveyList, addSurvey, isSaved, isResponseFailed }
  } = useSelector((state) => state);
  const isSmallDevice = useMediaQuery('max-width: 768px');
  const extraStyle = isSmallDevice
    ? { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }
    : { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' };
  const dispatch = useDispatch();
  const onSurveyDateAndTimeChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('add.dateAndTime', new Date($d).getTime());
    dispatch(updateSurveyDateAndTime(new Date($d).getTime()));
  };

  const onSurveyCommentChange = (evt) => {
    formik.setFieldValue('add.comment', evt?.target?.value);
    dispatch(updateSurveyComment(evt?.target?.value));
  };

  const onSaveSurveyHandler = () => {
    let payload = {
      //login user authId
      enquiryId: enquiryId,
      surveyDate: addSurvey?.dateAndTime,
      comment: addSurvey?.comment,
      addedBy: '1234'
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveSurvey(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Date');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2500);
      dispatch(resetSurvey());
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetSurvey());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllSurvey(enquiryId));
  }, [isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Survey Added');
        setTimeout(() => {
          formik.handleReset();
          dispatch(resetSurvey());
          setIsMessageDisplay(false);
        }, 3000);
      } else if (isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetSurveyApiStatus());
        }, 3000);
      }
    }
  }, [isSaved, isResponseFailed]);

  useEffect(() => {}, []);

  useEffect(() => {
    dispatch(requestToGetAllSurvey(enquiryId));
  }, [isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Feature Added');
        setTimeout(() => {
          formik.handleReset();
          dispatch(resetSurvey());
          setIsMessageDisplay(false);
        }, 3000);
      } else if (isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetSurveyApiStatus());
        }, 3000);
      }
    }
  }, [isSaved, isResponseFailed]);
  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'surveyDate',
        headerName: 'Survery Date',
        type: 'number',
        width: 150,
        editable: false
      },
      {
        field: 'comment',
        headerName: 'Comment',
        width: 400,
        editable: false
      }
    ];
  });

  const finalSurveyList = surveyList.slice(0).reverse();

  return (
    <Fragment>
      <Card sx={{ p: 4 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {/* <Typography variant="body1">Enquiry Manager - Admin</Typography> */}
            </Grid>
            <Grid item xs={12} md={6} style={extraStyle}>
              {surveyList && surveyList?.length > 0 && (
                <Typography variant="body1">
                  Survey Date :
                  {new Date(surveyList[surveyList?.length - 1].surveyDate).toDateString()}
                </Typography>
              )}
            </Grid>
            <Grid item xs={7.5} md={6}>
              <GenericDateTimePicker
                onAccept={onSurveyDateAndTimeChange}
                error={formik?.errors?.add?.dateAndTime && formik?.touched?.add?.dateAndTime}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                disablePast
                // value={formik?.values?.add?.dateAndTime}
                label={'Select Survey Date & Time'}
                // defaultValue={dayjs(new Date())}
              />
              <FormHelperText error>
                {formik?.errors?.add?.dateAndTime &&
                  formik?.touched?.add?.dateAndTime &&
                  formik?.errors?.add?.dateAndTime}
              </FormHelperText>
            </Grid>

            <Grid item xs={12}>
              <GenericInput
                onChange={onSurveyCommentChange}
                error={formik?.errors?.add?.comment && formik?.touched?.add?.comment}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                value={formik?.values?.add?.comment}
                label={'comments'}
                multiline
                rows={3}
              />
              <FormHelperText error>
                {formik?.errors?.add?.comment &&
                  formik?.touched?.add?.comment &&
                  formik?.errors?.add?.comment}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton onClick={onSaveSurveyHandler} type="submit">
                <span>Save</span>
              </GenericLoadingButton>
            </Grid>
            <Grid item xs={12}>
              <GenericTimeline
                data={finalSurveyList?.map((item, index) => ({
                  date: `Created Date: ${new Date(item?.createdAt).toDateString()}`,
                  message:
                    item?.comment && item?.comment.trim().length > 0
                      ? `comment: ${item?.comment}`
                      : '',
                  heading: `Survey Date: ${new Date(item?.surveyDate).toDateString()}`
                }))}
              />
            </Grid>
          </Grid>
        </form>
        {isMessageDisplay && (
          <Toasty show={isMessageDisplay} message={message} type={messageType} />
        )}
      </Card>
    </Fragment>
  );
};
export default SurveyForm;
