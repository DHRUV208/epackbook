import { Grid } from '@mui/material';
import { Fragment, useMemo, useState, useEffect, useCallback } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Toasty from '../../../../common-components/form-elements/toasty';

import {
  updateModuleValue,
  requestToSaveModule,
  requestToGetAllModule,
  resetModuleApiStatus,
  resetModule
} from '../../../../store/slices/ContentManagementSlice';
import {
  modulesInitialValues,
  modulesValidationSchema
} from '../../../../common-components/validator/settings-validator/content-management';
const Modules = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  // const [list, setlist] = useState([])
  const formik = useFormik({
    initialValues: modulesInitialValues,
    validationSchema: modulesValidationSchema
  });
  const dispatch = useDispatch();
  const {
    contentManagement: {
      modules: { add, listModules, apiStatus }
    }
  } = useSelector((state) => state);

  const onModuleChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateModuleValue(evt?.target?.value.trim()));
  };
  const onSaveAddModuleHandler = () => {
    let payload = {
      moduleName: add?.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveModule(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Module Name');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2500);
    }
  };
  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetModule());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllModule());
  }, [apiStatus?.isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Module Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetModule());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetModuleApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isResponseFailed]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'moduleName',
        headerName: 'Module Name',
        width: 150,
        editable: false
      },
      {
        field: 'createdDate',
        headerName: 'Created Date',
        width: 150,
        renderCell: (data) => {
          return new Date(data?.row?.createdDate).toDateString();
        }
      },
      {
        field: 'noOfSubmodule',
        headerName: 'Number Of Sub Modules',
        width: 200,
        editable: false
      }
    ];
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericInput
              onChange={onModuleChange}
              error={formik?.errors?.value && formik?.touched?.value}
              value={formik?.values?.value}
              onBlur={formik.handleBlur}
              onkeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              helperText={formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
              label={'Modules'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericLoadingButton onClick={onSaveAddModuleHandler} type="submit">
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            {Array.isArray(listModules) && (
              <>
                <GenericDataGrid
                  rows={listModules?.map((item, index) => ({
                    ...item,
                    id: index + 1,
                    noOfSubmodule: item?.submodules?.length
                  }))}
                  columns={columns}
                />
              </>
            )}
          </Grid>
        </Grid>
      </form>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default Modules;
