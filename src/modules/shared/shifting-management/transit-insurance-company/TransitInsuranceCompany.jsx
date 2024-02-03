import { Grid } from '@mui/material';
import { Fragment, useMemo, useEffect, useState } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  resetTransitInsurance,
  updateTransitInsuranceValue,
  requestToSaveTransitInsurance,
  requestToGetAllTransitInsurance,
  resetTransitInsuranceApiStatus,
  requestToDeleteTransitInsurance,
  resetTransitInsuranceDeleteStatus
} from '../../../../store/slices/ShiftingManagementSlice';
import {
  transitInsuranceInitialValues,
  addTransitInsuranceValidationSchema
} from '../../../../common-components/validator/settings-validator/shifting-management';
import Toasty from '../../../../common-components/form-elements/toasty';

const TransitInsuranceCompany = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const formik = useFormik({
    initialValues: transitInsuranceInitialValues,
    validationSchema: addTransitInsuranceValidationSchema
  });

  const dispatch = useDispatch();

  const {
    shiftingManagement: {
      transitInsurance: { add, listTransitInsurance, apiStatus }
    },
    auth: { loginSuccess }
  } = useSelector((state) => state);

  const onTransitInsuranceValueChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateTransitInsuranceValue(evt?.target?.value));
  };
  const onSaveAddTransitInsuranceHandler = () => {
    let payload = {
      transitInsurance: add?.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveTransitInsurance(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Transite Insurance');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetTransitInsurance());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllTransitInsurance());
  }, [apiStatus?.isSaved]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllTransitInsurance());
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Entry  Deleted');
      setTimeout(() => {
        dispatch(resetTransitInsuranceDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetTransitInsuranceDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  const onDeleteHandler = (data) => {
    dispatch(requestToDeleteTransitInsurance(data?._id));
  };

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'transitInsurance',
        headerName: 'Transite Insurance',
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
        setMessage('Transit Insurance Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetTransitInsurance());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isRequestFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetTransitInsuranceApiStatus());
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
              helperText={formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
              onChange={onTransitInsuranceValueChange}
              label={'Enter Transit Insurance Comapny Name'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveAddTransitInsuranceHandler} type="sumbit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listTransitInsurance
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
export default TransitInsuranceCompany;
