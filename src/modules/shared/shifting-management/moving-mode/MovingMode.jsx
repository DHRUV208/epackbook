import { Grid } from '@mui/material';
import { Fragment, useMemo, useEffect, useState } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  resetMovingMode,
  updateMovingModeValue,
  requestToSaveMovingMode,
  requestToGetAllMovingMode,
  resetMovingModeApiStatus,
  resetMovingModeDeleteStatus,
  requestToDeleteMovingMode
} from '../../../../store/slices/ShiftingManagementSlice';
import {
  movingModeInitialValues,
  addMovingModeValidationSchema
} from '../../../../common-components/validator/settings-validator/shifting-management';
import Toasty from '../../../../common-components/form-elements/toasty';

const MovingMode = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: movingModeInitialValues,
    validationSchema: addMovingModeValidationSchema
  });
  const {
    shiftingManagement: {
      movingMode: { add, listMovingMode, apiStatus }
    },
    auth: { loginSuccess }
  } = useSelector((state) => state);
  const onMovingModeValueChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateMovingModeValue(evt?.target?.value));
  };
  const onSaveAddMovingModeHandler = () => {
    let payload = {
      movingMode: add?.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveMovingMode(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Moving Mode');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetMovingMode());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllMovingMode());
  }, [apiStatus?.isSaved]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllMovingMode());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Entry  Deleted');
      setTimeout(() => {
        dispatch(resetMovingModeDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetMovingModeDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  const onDeleteHandler = (data) => {
    dispatch(requestToDeleteMovingMode(data?._id));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'movingMode',
        headerName: 'Moving Mode',
        width: 200,
        editable: false
      },
      {
        field: 'createdDate',
        headerName: 'Created Date',
        width: 200,
        renderCell: (data) => {
          return new Date(data?.row?.createdDate).toDateString();
        }
      },
      {
        field: '',
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

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Moving Mode Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetMovingMode());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isRequestFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetMovingModeApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isRequestFailed]);

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericInput
              error={formik?.errors?.value && formik?.touched?.value}
              onBlur={formik.handleBlur}
              onFocus={formik.handleChange}
              onKeyUp={formik.handleChange}
              value={formik?.values?.value}
              helperText={formik?.errors?.value && formik?.touched?.value}
              onChange={onMovingModeValueChange}
              label={'Enter Moving Mode'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveAddMovingModeHandler} type="sumbit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listMovingMode
                .filter((item) => !item.isDeleted)
                ?.map((item, index) => ({
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
export default MovingMode;
