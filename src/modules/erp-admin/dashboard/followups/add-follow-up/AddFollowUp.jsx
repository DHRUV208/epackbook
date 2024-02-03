import { Fragment, useMemo, useEffect, useState } from 'react';
import { Card, Grid, Typography, useMediaQuery, FormHelperText } from '@mui/material';
import { useFormik } from 'formik';
import GenericDateTimePicker from '../../../../../common-components/form-elements/genericDateTimePicker';
import GenericLoadingButton from '../../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../../common-components/form-elements/genericDataGrid';
import GenericInput from '../../../../../common-components/form-elements/genericInput';
import image from '../../../../../Assets/Images/loginImg.svg';
import GenericStepper from '../../../../../common-components/page-elements/genericStepper';
import GenericTimeline from '../../../../../common-components/page-elements/genericTimeline';
import Toasty from '../../../../../common-components/form-elements/toasty';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateFollowUpDateAndTime,
  updateFollowUpComment,
  requestToSaveFollowUps,
  resetFollowUps,
  requestToGetAllFollowUps
} from '../../../../../store/slices/FollowUpsSlice';
import {
  addFollowUpsInitialValues,
  addFollowUpsValidationSchema
} from '../../../../../common-components/validator/followUps-validation';

const AddFollowUp = (props) => {
  const { enquiryId } = props;
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const {
    company: { companyDetails },
    enquiry: { enquiryList },
    auth: { loginSuccess },
    followUps: { addFollowUps, followUpsList, isSaved, isResponseFailed }
  } = useSelector((state) => state);

  const isSmallDevice = useMediaQuery('max-width: 768px');
  const extraStyle = isSmallDevice
    ? { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }
    : { display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' };

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: addFollowUpsInitialValues,
    validationSchema: addFollowUpsValidationSchema
  });

  const onFollowUpDateAndTimeChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('addFollowUps.dateAndTime', new Date($d).getTime());
    dispatch(updateFollowUpDateAndTime(new Date($d).getTime()));
  };

  const onFollowUpCommentChange = (evt) => {
    formik.setFieldValue('addFollowUps.comment', evt?.target?.value);
    dispatch(updateFollowUpComment(evt?.target?.value));
  };
  const onSaveFollowUpsHandler = () => {
    let payload = {
      //login user authId
      enquiryId: enquiryId,
      followUpDate: addFollowUps?.dateAndTime,
      comment: addFollowUps?.comment,
      authId: loginSuccess.id
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveFollowUps(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Follow Up Detail');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
    dispatch(resetFollowUps());
    dispatch(requestToGetAllFollowUps(enquiryId));
  };

  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('FollowUp Detail Added');
        formik.handleReset();
        setTimeout(() => {
          // dispatch(resetUnitType());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('FollowUp Already Exist');
        setTimeout(() => {
          setIsMessageDisplay(false);
          // dispatch(resetUnitTypesApiStatus());
        }, 2000);
      }
    }
  }, [isSaved, isResponseFailed]);

  useEffect(() => {
    dispatch(requestToGetAllFollowUps(enquiryId));
  }, [isSaved]);

  const reversedFollowUpsList = [...followUpsList].reverse();

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'comment',
        headerName: 'Comment',
        width: 400,
        editable: false
      },
      {
        field: 'followUpDate',
        headerName: 'Follow Up Date',
        type: 'number',
        width: 150,
        editable: false,
        renderCell: (data) => {
          return new Date(data?.row?.createdAt).toDateString();
        }
      }
    ];
  });

  const finalList = followUpsList.slice(0).reverse();
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Card sx={{ p: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">Enquiry Manager - Admin</Typography>
            </Grid>
            <Grid item xs={12} md={6} style={extraStyle}>
              {followUpsList && followUpsList?.length > 0 && (
                <Typography variant="body1">
                  Follow up Date:
                  {new Date(followUpsList[followUpsList?.length - 1].followUpDate).toDateString()}
                </Typography>
              )}
            </Grid>
            <Grid item xs={7.5} md={6}>
              <GenericDateTimePicker
                disablePast
                onAccept={onFollowUpDateAndTimeChange}
                label={'Select Follow-Up Date & Time *'}
                onKeyUp={formik?.handleChange}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                error={
                  formik?.errors?.addFollowUps?.dateAndTime &&
                  formik?.touched?.addFollowUps?.dateAndTime
                }
              />
              <FormHelperText error>
                {formik?.errors?.addFollowUps?.dateAndTime &&
                  formik?.touched?.addFollowUps?.dateAndTime &&
                  formik?.errors?.addFollowUps?.dateAndTime}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <GenericInput
                onChange={onFollowUpCommentChange}
                label={'comments'}
                multiline
                rows={3}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                value={formik?.values?.addFollowUps?.comment}
              />
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton onClick={onSaveFollowUpsHandler} type="submit">
                <span>Save</span>
              </GenericLoadingButton>
            </Grid>
            <Grid item xs={12}>
              <GenericTimeline
                data={reversedFollowUpsList?.map((item, index) => ({
                  date: `Created Date: ${new Date(item?.createdAt).toDateString()}`,
                  message:
                    item?.comment && item?.comment.trim().length > 0
                      ? `comment: ${item?.comment}`
                      : '',
                  date: `Created Date: ${new Date(item?.createdAt).toDateString()}`,
                  heading: `Follow-Up Date: ${new Date(item?.followUpDate).toDateString()}`
                }))}
              />
            </Grid>
          </Grid>
        </Card>
      </form>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default AddFollowUp;
