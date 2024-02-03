import { Grid } from '@mui/material';
import { Fragment, useMemo, useEffect, useCallback, useState } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericSwitch from '../../../../common-components/form-elements/genericSwitch';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Toasty from '../../../../common-components/form-elements/toasty';

import {
  updateSubModuleValue,
  requestToSaveSubModule,
  requestToGetAllModule,
  updateModuleId,
  requestToGetAllSubModule,
  resetSubModule,
  resetSubModuleApiStatus,
  requestToUpdateSubmodule
} from '../../../../store/slices/ContentManagementSlice';

import {
  subModulesInitialValues,
  subModulesValidationSchema
} from '../../../../common-components/validator/settings-validator/content-management';

const SubModules = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: subModulesInitialValues,
    validationSchema: subModulesValidationSchema
  });

  const {
    contentManagement: {
      subModules: { add, listSubModules, apiStatus },
      modules: { listModules }
    }
  } = useSelector((state) => state);

  const onChangeModule = (evt) => {
    formik.setFieldValue('moduleId', evt?.target?.value);
    dispatch(updateModuleId(evt?.target?.value));
  };
  const onSubModuleChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateSubModuleValue(evt?.target?.value));
  };
  const onSaveAddSubModuleHandler = () => {
    let payload = {
      moduleId: add?.moduleId,
      subModuleName: add?.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveSubModule(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Sub Module Name');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2500);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetSubModule());
    if (listSubModules) {
      setList(listSubModules);
    } else {
      setList([]);
    }
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllModule());
    dispatch(requestToGetAllSubModule());
    if (listSubModules) {
      setList(listSubModules);
    } else {
      setList([]);
    }
  }, [apiStatus?.isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Sub-Module Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetSubModule());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetSubModuleApiStatus());
        }, 2000);
      }
    }
    if (listSubModules) {
      setList(listSubModules);
    } else {
      setList([]);
    }
  }, [apiStatus?.isSaved, apiStatus?.isResponseFailed]);

  const onSwitchChange = (data) => {
    dispatch(
      requestToUpdateSubmodule({
        subModuleId: data?._id,
        availableOnDocument: !data?.availableOnDocument
      })
    );
    dispatch(requestToGetAllSubModule());
  };

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
        field: 'subModuleName',
        headerName: 'SubModule Name',
        width: 150,
        editable: false
      },
      {
        field: 'availableOnDocument',
        headerName: 'On Document',
        width: 150,
        editable: false,
        renderCell: (data) => {
          return (
            <GenericSwitch
              value={data?.row?.availableOnDocument}
              onChange={() => onSwitchChange(data?.row)}
            />
          );
        }
      },

      {
        field: 'createdDate',
        headerName: 'Created Date',
        width: 150,
        editable: false
      }
    ];
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <GenericDropdown
              label={'Select Modules'}
              value={formik?.values?.moduleId}
              onBlur={formik.handleBlur}
              onkeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              data={listModules?.map((item) => ({
                label: item?.moduleName,
                value: item?._id
              }))}
              onChange={onChangeModule}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenericInput
              onChange={onSubModuleChange}
              error={formik?.errors?.value && formik?.touched?.value}
              value={formik?.values?.value}
              onBlur={formik.handleBlur}
              onkeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              helperText={formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
              label={'Enter Sub Modules'}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <GenericLoadingButton
              onClick={onSaveAddSubModuleHandler}
              sx={{ float: 'right' }}
              type="submit"
            >
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          {/* {Array.isArray(listSubModules) && ( */}
          <Grid item xs={12}>
            <GenericDataGrid
              rows={list.map((item, index) => ({
                ...item,
                id: index + 1
              }))}
              columns={columns}
            />
          </Grid>
          {/* )} */}
        </Grid>
      </form>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default SubModules;
