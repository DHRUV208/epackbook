import { Grid } from '@mui/material';
import { Fragment, useMemo, useEffect, useState } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  resetShiftingLuggage,
  updateShiftingLuggageValue,
  requestToSaveShiftingLuggage,
  requestToGetAllShiftingLuggage,
  resetShiftingLuggageApiStatus,
  resetShiftingLuggageDeleteStatus,
  requestToDeleteShiftingLuggage
} from '../../../../store/slices/ShiftingManagementSlice';
import {
  shiftingLuggageInitialValues,
  addShiftingLuggageValidationSchema
} from '../../../../common-components/validator/settings-validator/shifting-management';
import Toasty from '../../../../common-components/form-elements/toasty';

const ShiftingLuggage = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const {
    shiftingManagement: {
      shiftingLuggage: { add, listShiftingLuggage, apiStatus }
    },
    auth: { loginSuccess }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: shiftingLuggageInitialValues,
    validationSchema: addShiftingLuggageValidationSchema
  });
  const dispatch = useDispatch();
  const onShiftingLuggageValueChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateShiftingLuggageValue(evt?.target?.value));
  };
  const onSaveAddShiftingLuggageHandler = () => {
    let payload = {
      shiftingLuggage: add?.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveShiftingLuggage(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Shifting Luggage');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetShiftingLuggage());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllShiftingLuggage());
  }, [apiStatus?.isSaved]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'shiftingLuggage',
        headerName: 'Luggage',
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
        setMessage('Material Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetShiftingLuggage());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isRequestFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetShiftingLuggageApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isRequestFailed]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllShiftingLuggage());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Entry  Deleted');
      setTimeout(() => {
        dispatch(resetShiftingLuggageDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetShiftingLuggageDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  const onDeleteHandler = (data) => {
    dispatch(requestToDeleteShiftingLuggage(data?._id));
  };

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
              onChange={onShiftingLuggageValueChange}
              label={'Enter Shifting Luggage'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveAddShiftingLuggageHandler} type="sumbit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listShiftingLuggage
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
export default ShiftingLuggage;
