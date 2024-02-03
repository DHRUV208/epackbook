import { Grid } from '@mui/material';
import { Fragment, useMemo, useEffect, useState } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  resetInsurancePercentage,
  updateInsurancePercentageValue,
  requestToSaveInsurancePercentage,
  requestToGetAllInsurancePercentage,
  resetInsurancePercentageApiStatus,
  requestToDeleteInsurancePercentage,
  resetInsurancePercentageDeleteStatus
} from '../../../../store/slices/ShiftingManagementSlice';
import {
  insurancePercentageInitialValues,
  addInsurancePercentageValidationSchema
} from '../../../../common-components/validator/settings-validator/shifting-management';
import Toasty from '../../../../common-components/form-elements/toasty';

const InsurancePercentage = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const formik = useFormik({
    initialValues: insurancePercentageInitialValues,
    validationSchema: addInsurancePercentageValidationSchema
  });

  const dispatch = useDispatch();
  const {
    shiftingManagement: {
      insurancePercentage: { add, listInsurancePercentage, apiStatus }
    },
    auth: { loginSuccess }
  } = useSelector((state) => state);

  const onInsurancePercentageValueChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateInsurancePercentageValue(evt?.target?.value));
  };
  const onSaveAddInsPerHandler = () => {
    let payload = {
      insurancePercentage: add?.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveInsurancePercentage(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Insurance Percentage');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetInsurancePercentage());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllInsurancePercentage());
  }, [apiStatus?.isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Insurance Percentage Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetInsurancePercentage());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isRequestFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetInsurancePercentageApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isRequestFailed]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllInsurancePercentage());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Entry  Deleted');
      setTimeout(() => {
        dispatch(resetInsurancePercentageDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetInsurancePercentageDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  const onDeleteHandler = (data) => {
    dispatch(requestToDeleteInsurancePercentage(data?._id));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'insurancePercentage',
        headerName: 'Insurance Percentage',
        width: 200,
        renderCell: (data) => {
          return `${data?.row?.insurancePercentage} %`;
        }
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

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericInput
              onChange={onInsurancePercentageValueChange}
              error={formik?.errors?.value && formik?.touched?.value}
              onBlur={formik.handleBlur}
              onFocus={formik.handleChange}
              onKeyUp={formik.handleChange}
              value={formik?.values?.value}
              helperText={formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
              label={'Enter Insurance%'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveAddInsPerHandler} type="submit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listInsurancePercentage
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
export default InsurancePercentage;
