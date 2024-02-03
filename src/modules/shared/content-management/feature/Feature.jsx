import { Grid } from '@mui/material';
import { Fragment, useMemo, useEffect, useCallback, useState } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Toasty from '../../../../common-components/form-elements/toasty';

import {
  updateFeature,
  requestToSaveFeature,
  updateSubModuleId,
  updateFeatureModule,
  resetFeature,
  resetFeatureApiStatus,
  requestToGetAllFeature,
  requestToGetAllModule,
  requestToGetAllSubModule
} from '../../../../store/slices/ContentManagementSlice';

import {
  featureInitialValues,
  FeaturesValidationSchema
} from '../../../../common-components/validator/settings-validator/content-management';

const Feature = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [featuredata, setFeatureData] = useState([]);
  const formik = useFormik({
    initialValues: featureInitialValues,
    validationSchema: FeaturesValidationSchema
  });

  const dispatch = useDispatch();
  const {
    contentManagement: {
      feature: { add, listFeature, apiStatus },
      modules: { listModules },
      subModules: { listSubModules }
    }
  } = useSelector((state) => state);

  console.log('first', add);
  console.log('listSubModules', listSubModules);

  const onFeatureModuleChangeHandler = (evt) => {
    var result = listModules
      .filter((obj) => obj._id === evt?.target?.value)
      .map((obj) => obj.submodulename.map((item) => ({ id: item._id, name: item.subModuleName })));

    var y = [].concat(...result);
    setFeatureData(y);
    formik.setFieldValue('module', evt?.target?.value);
    dispatch(updateFeatureModule(evt?.target?.value));
  };
  const onSubModuleChangeHandler = (evt) => {
    formik.setFieldValue('subModuleId', evt?.target?.value);
    dispatch(updateSubModuleId(evt?.target?.value));
  };

  const onSelectFeatureChange = (evt) => {
    formik.setFieldValue('value', evt?.target?.value);
    dispatch(updateFeature(evt?.target?.value));
  };

  // const {
  //   contentManagement: { feature:{add, listFeature },modules:{listModules}},
  //   auth: { loginSuccess }
  // } = useSelector((state) => state);

  const onSaveAddFeatureHandler = () => {
    let payload = {
      submoduleId: add?.subModuleId,
      feature: add?.value
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveFeature(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Feature Name');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 2500);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetFeature());
  }, []);

  useEffect(() => {
    dispatch(requestToGetAllModule());
    dispatch(requestToGetAllSubModule());
    dispatch(requestToGetAllFeature());
  }, [apiStatus?.isSaved]);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Feature Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetFeature());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetFeatureApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isResponseFailed]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'submoduleName',
        headerName: 'SubModule Name',
        width: 150,
        editable: false
      },
      {
        field: 'feature',
        headerName: 'Feature Name',
        width: 150,
        editable: false
      },
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
        editable: false
      }
    ];
  });

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <GenericDropdown
              label={'Select Modules'}
              onChange={onFeatureModuleChangeHandler}
              value={formik?.values?.module}
              onBlur={formik.handleBlur}
              onkeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              data={listModules?.map((item) => ({
                label: item?.moduleName,
                value: item?._id
              }))}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericDropdown
              onChange={onSubModuleChangeHandler}
              data={featuredata?.map((item) => ({
                label: item?.name,
                value: item?.id
              }))}
              value={formik?.values?.subModuleId}
              onBlur={formik.handleBlur}
              onkeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              label={'Select Sub Modules'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <GenericInput
              onChange={onSelectFeatureChange}
              error={formik?.errors?.value && formik?.touched?.value}
              value={formik?.values?.value}
              onBlur={formik.handleBlur}
              onkeyUp={formik.handleChange}
              onFocus={formik.handleChange}
              helperText={formik?.errors?.value && formik?.touched?.value && formik?.errors?.value}
              label={'Enter Feature'}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <GenericLoadingButton
              onClick={onSaveAddFeatureHandler}
              sx={{ float: 'right' }}
              type="submit"
            >
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          {Array.isArray(listFeature) && (
            <Grid item xs={12}>
              <GenericDataGrid
                rows={listFeature.map((item, index) => ({
                  ...item,
                  id: index + 1
                }))}
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
export default Feature;
