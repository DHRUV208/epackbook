import { Fragment, useEffect, useState } from 'react';
import { Card, Grid, Typography, useMediaQuery } from '@mui/material';
import GenericDateTimePicker from '../../../../common-components/form-elements/genericDateTimePicker';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericInput from '../../../../common-components/form-elements/genericInput';
// import GenericTab from '../../../../common-components/page-elements/genericTabs';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateSurveyDateAndTime,
  updateSurveyComment,
  requestToSaveSurvey,
  requestToGetAllSurvey,
  resetSurveyApiStatus,
  resetSurvey
} from '../../../../store/slices/SurveySlice';
import { Formik, useFormik } from 'formik';
import Toasty from '../../../../common-components/form-elements/toasty';
import GenericTimeline from '../../../../common-components/page-elements/genericTimeline';
import {
  surveyInitialValues,
  surveyValidationSchema
} from '../../../../common-components/validator/survey-validation';
const SurveyForm = (props) => {
  const isSmallDevice = useMediaQuery('max-width: 768px');
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { enquiryId } = props;

  const formik = useFormik({
    initialValues: surveyInitialValues,
    validationSchema: surveyValidationSchema
  });

  const extraStyle = isSmallDevice
    ? { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }
    : { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' };
  const {
    survey: { surveyList, add, isSaved, isResponseFailed },auth:{loginSuccess}
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const onSurveyDateAndTimeChange = (evt) => {
    const { $d } = evt;
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
      surveyDate: add?.dateAndTime,
      comment: add?.comment,
      addedBy: loginSuccess.id
    };
      dispatch(requestToSaveSurvey(payload));
 
  };

  useEffect(() => {
    dispatch(requestToGetAllSurvey(enquiryId));
  }, [isSaved]);
  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Survey Added');
        formik.handleReset();
        setTimeout(() => {
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

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetSurvey());
  }, []);

  // const surveyTab = [
  //   {
  //     label: 'Set Survey',
  //     child: <p>Set Survey</p>
  //   },
  //   {
  //     label: 'Survey List',
  //     child: <p>Survey List</p>
  //   },
  //   {
  //     label: 'Material',
  //     child: <p>Material</p>
  //   }
  // ];

  const finalSurveyList = surveyList.slice(0).reverse();

  return (
    <Fragment>
      {/* <GenericTab list={surveyTab} /> */}
      <Card sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* <Typography variant="body1">Enquiry Manager - Admin</Typography> */}
          </Grid>
          <Grid item xs={12} md={6} style={extraStyle}>
            <Typography variant="body1">
              Survey Date :
              {new Date(surveyList[surveyList?.length - 1]?.surveyDate).toDateString()}
            </Typography>
          </Grid>
          <Grid item xs={7.5} md={6}>
            <GenericDateTimePicker
              onAccept={onSurveyDateAndTimeChange}
              label={'Select Survey Date & Time *'}
            />
          </Grid>

          <Grid item xs={12}>
            <GenericInput
              onChange={onSurveyCommentChange}
              error={formik?.errors?.add?.comment && formik?.touched?.add?.comment}
              onBlur={formik.handleBlur}
              onFocus={formik.handleChange}
              value={formik?.values?.add?.comment}
              label={'comments'}
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <GenericLoadingButton onClick={onSaveSurveyHandler}>
              <span>Save</span>
            </GenericLoadingButton>

            <Grid item xs={12}>
              <GenericTimeline
                data={finalSurveyList?.map((item, index) => ({
                  date: `Created Date: ${new Date(item?.createdAt).toDateString()}`,

                  heading: `Survey Date: ${new Date(item?.surveyDate).toDateString()}`,
                  message:
                    item?.comment && item?.comment.trim().length > 0
                      ? `comment: ${item?.comment}`
                      : ''
                }))}
              />
            </Grid>
          </Grid>
        </Grid>
        {isMessageDisplay && (
          <Toasty show={isMessageDisplay} message={message} type={messageType} />
        )}
      </Card>
    </Fragment>
  );
};
export default SurveyForm;
