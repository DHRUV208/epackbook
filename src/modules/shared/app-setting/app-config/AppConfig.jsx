import { Grid, FormHelperText } from '@mui/material';
import { Fragment, useMemo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  configurationInitialValues,
  appConfigurationValidationSchema
} from '../../../../common-components/validator/settings-validator/app-Configuration';
import Toasty from '../../../../common-components/form-elements/toasty';

import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import {
  updateChooseEntity,
  updateEntityId,
  updateChooseModule,
  updatePrefix,
  updateSuffix,
  requestToSaveConfiguration,
  requestToGetAllConfiguration,
  requestDeleteConfiguration,
  resetAppConfiguration,
  resetConfigurationApiStatus,
  resetConfigurationDeleteStatus
} from '../../../../store/slices/AppConfigurationSlice';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import { requestToGetAllFranchise } from '../../../../store/slices/FranchiseSlice';
import { requestToGetAllBranch } from '../../../../store/slices/BranchSlice';
import {
  requestToGetAllModule,
  requestToGetAllSubModule
} from '../../../../store/slices/ContentManagementSlice';
import { clone } from 'underscore';

function AppConfig() {
  const formik = useFormik({
    initialValues: configurationInitialValues,
    validationSchema: appConfigurationValidationSchema
  });
  const dispatch = useDispatch();
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [gridValue, setGridValue] = useState(4);
  const [entityList, setEntityList] = useState([]);
  const {
    appConfiguration: {
      configuration: { listConfiguration, add, apiStatus }
    },
    company: { companyDetails },
    branch: { branchList },

    contentManagement: {
      modules: { listModules },
      subModules: { listSubModules }
    },
    franchise: { franchiseList }
  } = useSelector((state) => state);

  let entities = [];
  const onChooseEntityChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('chooseEntity', evt?.target?.value);
    dispatch(updateChooseEntity(value));
    switch (value) {
      case 'franchise':
        dispatch(requestToGetAllFranchise(companyDetails?._id));
        if (franchiseList.length > 0) {
          entities = franchiseList.map((item) => {
            return {
              label: item?.franchiseName,
              value: item?._id
            };
          });
        }
        setGridValue(3);
        setEntityList(entities);
        break;
      case 'branch':
        dispatch(requestToGetAllBranch(companyDetails?._id));
        if (branchList.length > 0) {
          entities = branchList.map((item) => {
            return {
              label: item?.branchName,
              value: item?._id
            };
          });
          setGridValue(3);
          setEntityList(entities);
        }
        break;
      default:
        setGridValue(4);
        setEntityList([]);
        break;
    }
  };

  const onEntityIdChange = (evt) => {
    formik.setFieldValue('entityValue.entityId', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateEntityId(value));
  };
  const onChooseModuleChange = (evt) => {
    formik.setFieldValue('chooseModule', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateChooseModule(value));
  };
  const onPrefixChange = (evt) => {
    formik.setFieldValue('prefix', (evt?.target?.value).toUpperCase());
    const { value } = evt.target;
    dispatch(updatePrefix(value));
  };
  const onSuffixChange = (evt) => {
    formik.setFieldValue('suffix', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateSuffix(value));
  };

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteConfiguration(data?._id));
  };

  const onSaveConfigurationHandler = () => {
    let payload = {
      companyId: companyDetails?._id,
      companyEntity: add?.chooseEntity,
      entityId:
        add?.chooseEntity !== 'head-office'
          ? add?.entityValue?.entityId
          : '655b03e6a2501b7a6cab6cfb',
      subModuleId: add?.chooseModule,
      prefix: add?.prefix,
      initialValue: add?.suffix
    };
    // if (formik.isValid && formik.dirty) {
    dispatch(requestToSaveConfiguration(payload));
    // } else {
    //   setIsMessageDisplay(true);
    //   setMessageType('warning');
    //   setMessage('Enter Valid Config Detail');
    //   setTimeout(() => {
    //     setIsMessageDisplay(false);
    //   }, 3000);
    // }
  };
  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Config Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetAppConfiguration());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('App Confiq Already Exist');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetConfigurationApiStatus());
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isResponseFailed]);

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllConfiguration(companyDetails?._id));
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Confiq  Deleted');
      setTimeout(() => {
        dispatch(resetConfigurationDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetConfigurationDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  useEffect(() => {
    dispatch(requestToGetAllConfiguration(companyDetails?._id));
    dispatch(requestToGetAllBranch(companyDetails?._id));
    dispatch(requestToGetAllSubModule())
    dispatch(requestToGetAllModule());
  }, [apiStatus?.isSaved]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },

      {
        field: '',
        headerName: 'Entity',
        width: 150,
        editable: false,

        renderCell: (data) => {
          const { companyEntity } = data?.row;

          return companyEntity;
        }
      },
      {
        field: 'entityId',
        headerName: 'Branch Name/Franchise',
        width: 150,
        editable: false,

        renderCell: (data) => {
          const { entityId } = data?.row;
          if (data?.row?.companyEntity === 'branch') {
            const idToBranchNameMap = branchList.filter((item) => {
              if (item?._id === entityId);
              return item;
            });
            return idToBranchNameMap[0]?.branchName;
          } else if (data?.row?.companyEntity === 'franchise') {
            const idToFranchiseName = franchiseList.filter((item) => {
              if (item?._id === entityId) {
                return item;
              }
            });
            return idToFranchiseName[0]?.franchiseName;
          } else {
            return 'Head Office';
          }
        }
      },
      {
        field: 'subModuleName',
        headerName: 'Submodule Name',
        width: 150,
        editable: false,

        renderCell: (data) => {
          const { subModuleId } = data?.row;

          const idModuleNameMap = listSubModules?.filter((item) => {
            if (subModuleId === item._id) {
              return item;
            } else {
              return null;
            }
          });

          const moduleNames = idModuleNameMap?.map((item) => item.subModuleName);

          return moduleNames;
        }
      },
      {
        field: 'prefix',
        headerName: 'Prefix',
        width: 150,
        editable: false
      },
      {
        field: 'initialValue',
        headerName: 'Initial Value',
        width: 150,
        editable: false
      },
      {
        field: '_id',
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
          <Grid item md={2} xs={12}>
            <GenericDropdown
              onChange={onChooseEntityChange}
              label="Choose Entity"
              data={[
                {
                  value: 'head-office',
                  label: 'Head Office'
                },
                {
                  value: 'branch',
                  label: 'Branch'
                },
                {
                  value: 'franchise',
                  label: 'Franchise'
                }
              ]}
              value={formik.values.chooseEntity}
              onKeyUp={formik?.handleChange}
              onBlur={formik?.handleBlur}
              error={Boolean(formik?.errors?.chooseEntity) && formik?.touched?.chooseEntity}
            />
            <FormHelperText error>
              {formik?.errors?.chooseEntity &&
                formik?.touched?.chooseEntity &&
                formik?.errors?.chooseEntity}
            </FormHelperText>
          </Grid>
          {gridValue !== 4 && (
            <Grid item md={2} xs={12}>
              <GenericDropdown
                onChange={onEntityIdChange}
                label="Choose Branch / Franschise"
                data={entityList}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                value={formik?.values?.entityValue?.entityId}
                error={
                  Boolean(formik?.errors?.entityValue?.entityId) &&
                  formik?.touched?.entityValue?.entityId
                }
              />
              <FormHelperText error>
                {formik?.errors?.entityValue?.entityId &&
                  formik?.touched?.entityValue?.entityId &&
                  formik?.errors?.entityValue?.entityId}
              </FormHelperText>
            </Grid>
          )}
          <Grid item md={2} xs={12}>
            <GenericDropdown
              onChange={onChooseModuleChange}
              label="Choose Submodule"
              data={listSubModules
                ?.filter((obj) => obj.availableOnDocument === true)
                .map((item) => {
                  return {
                    value: item?._id,
                    label: item?.subModuleName
                  };
                })}
              onKeyUp={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.chooseModule}
              error={Boolean(formik?.errors?.chooseModule) && formik?.touched?.chooseModule}
            />
            <FormHelperText error>
              {formik?.errors?.chooseModule &&
                formik?.touched?.chooseModule &&
                formik?.errors?.chooseModule}
            </FormHelperText>
          </Grid>
          <Grid item md={2} xs={12}>
            <GenericInput
              onChange={onPrefixChange}
              label="Prefix"
              onKeyUp={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.prefix}
              error={Boolean(formik?.errors?.prefix) && formik?.touched?.prefix}
            />
            <FormHelperText error>
              {formik?.errors?.prefix && formik?.touched?.prefix && formik?.errors?.prefix}
            </FormHelperText>
          </Grid>
          <Grid item md={2} xs={12}>
            <GenericInput
              label="Sufix initial Value"
              onChange={onSuffixChange}
              onKeyUp={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values?.suffix}
              error={Boolean(formik?.errors?.suffix) && formik?.touched?.suffix}
            />
            <FormHelperText error>
              {formik?.errors?.suffix && formik?.touched?.suffix && formik?.errors?.suffix}
            </FormHelperText>
          </Grid>
          <Grid item md={2} xs={12}>
            <GenericLoadingButton
              // disabled={!formik.isValid}
              type="submit"
              onClick={onSaveConfigurationHandler}
            >
              <span>Submit</span>
            </GenericLoadingButton>
          </Grid>
          <Grid item xs={12}>
            <GenericDataGrid
              rows={listConfiguration
                .filter((item) => !item.isDeleted)
                .map((item, index) => ({
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
}
export default AppConfig;
