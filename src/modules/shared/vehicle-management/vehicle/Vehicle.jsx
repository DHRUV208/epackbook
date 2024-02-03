import { Grid, Typography, FormHelperText } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import Toasty from '../../../../common-components/form-elements/toasty';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import { Fragment, useState, useEffect, useMemo } from 'react';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericDatePicker from '../../../../common-components/form-elements/genericDatePicker';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericImagePicker from '../../../../common-components/form-elements/genericImagePicker';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateChooseEntityName,
  updateVehicleEntityId,
  updateRegistrationNo,
  updateChooseVehicleCompanyName,
  updateChooseVehicleTypes,
  updateManufacturingYear,
  updateChassisNo,
  updateEngineNo,
  updateRcNo,
  updatePollutionCertificateNo,
  updatePollutionRenwalDate,
  updatePermitNo,
  requestToSaveVehicle,
  updatePermitRenwalDate,
  requestToGetAllVehicle,
  requestToGetAllVehicleType,
  requestToGetAllVehicleCompany,
  resetVehicle,
  requestDeleteVehicle,
  resetVehicleDeleteStatus,
  updateChooseVehicleModel
} from '../../../../store/slices/VehicleManagementSlice.js';
import { requestToGetAllBranch } from '../../../../store/slices/BranchSlice.js';
import { requestToGetAllFranchise } from '../../../../store/slices/FranchiseSlice.js';
import {
  vehicleInitialValues,
  addvehicleValidationSchema
} from '../../../../common-components/validator/settings-validator/vehicle-management';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import { requestToGetAllModule } from '../../../../store/slices/ContentManagementSlice.js';
// import { requestDeleteVehicle } from '../../../../store/slices/VehicleManagementSlice.js'
const getRcImage = (data) => {};
const Vehicle = () => {
  const [compressedImage, setCompressedImage] = useState(null);

  const dispatch = useDispatch();
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [gridValue, setGridValue] = useState(4);
  const [entityList, setEntityList] = useState([]);
  const {
    company: { companyList, companyDetails },
    vehicleManagement: {
      vehicle: { add, listVehicle, apiStatus },
      vehicleType: { listVehicleType },
      vehicleCompany: { listVehicleCompany },
      vehicleModel:{listVehicleModel}
    },

    branch: { branchList },
    franchise: { franchiseList }
  } = useSelector((state) => state);

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteVehicle(data?._id));
  };

  useEffect(() => {
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllVehicle(companyDetails?._id));
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Vehicle  Deleted');
      setTimeout(() => {
        dispatch(resetVehicleDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    } else if (apiStatus?.isDeleteResponseToFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Cannot delete Entry');
      setTimeout(() => {
        dispatch(resetVehicleDeleteStatus());
        setIsMessageDisplay(false);
      }, 1500);
    }
  }, [apiStatus?.isDeleted, apiStatus?.isDeleteResponseToFailed]);

  const columns = useMemo(() => {
    return [
      { field: 'id', headerName: 'S.No.', width: 90 },
      {
        field: 'entityId',
        headerName: 'Branch Name/Franchise',
        width: 150,
        editable: false,

        renderCell: (data) => {
          const { entityId } = data?.row;
          if (data?.row?.entityType === 'branch' || data?.row?.entityType === 'franchise') {
            const idToBranchNameMap = branchList.filter((item) => {
              if (item?._id === entityId);
              return item;
            });
            return idToBranchNameMap[0]?.branchName;
          } else {
            return 'Head Office';
          }
        }
      },
      {
        field: 'vehicleRegistrationNo',
        headerName: 'Vehicle Registration',
        width: 150,
        editable: false
      },
      {
        field: 'vehicleType',
        headerName: 'Vehicle Type',
        width: 150,
        editable: false,
        renderCell: (data) => {
          const { vehicleType } = data?.row;
          const idtoVehicleType = listVehicleType.filter((item) => {
            if (item?._id === vehicleType) {
              return item;
            }
          });
          return idtoVehicleType[0]?.vehicleType;
        }
      },

      {
        field: 'vehicleCompanyName',
        headerName: 'Vehicle Company',
        width: 150,
        editable: false,
        renderCell: (data) => {
          const { vehicleCompanyName } = data?.row;
          const idtoVehicleCompany = listVehicleCompany.filter((item) => {
            if (item?._id === vehicleCompanyName) {
              return item;
            }
          });
          return idtoVehicleCompany[0]?.vehicleCompanyName;
        }
      },

      {
        field: 'vehicleModel',
        headerName: 'Vehicle Model',
        width: 150,
        editable: false,
        renderCell: (data) => {
          console.log(data)
          const { vehicleModel } = data?.row;
          const idtoVehicleModel = listVehicleModel.filter((item) => {
            if (item?._id === vehicleModel) {
              return item;
            }
          });
          return idtoVehicleModel[0]?.vehicleModel;
        }
      },

      {
        field: 'vehicleManufacturingYear',
        headerName: 'Vehicle Manufacturing Year',
        width: 150,
        editable: false,
        renderCell: (row) => {
          const timestamp = parseInt(row.value, 10);
          if (!isNaN(timestamp)) {
            const date = new Date(timestamp);
            const year = date.getFullYear();
            return <div>{year}</div>;
          } else {
            return <div>Invalid Timestamp</div>;
          }
        }
      },
      {
        field: 'vehicleChassisNo',
        headerName: 'Vehicle Chassis No',
        width: 150,
        editable: false
      },
      {
        field: 'vehicleEngineNo',
        headerName: 'Vehicle Engine No',
        width: 150,
        editable: false
      },
      {
        field: 'permitNo',
        headerName: 'Vehicle Permit No',
        width: 150,
        editable: false
      },
      {
        field: 'permitRenewalDate',
        headerName: 'Vehicle Permit Renewal Year',
        width: 200,
        editable: false,
        renderCell: (row) => {
          const timestamp = parseInt(row.value, 10);
          if (!isNaN(timestamp)) {
            const date = new Date(timestamp);
            const year = date.getFullYear();
            return <div>{year}</div>;
          } else {
            return <div>Invalid Timestamp</div>;
          }
        }
      },

      {
        field: 'pollutionRenewalDate',
        headerName: 'Vehicle Pollution Renewal Date',
        width: 150,
        editable: false,
        renderCell: (row) => {
          const timestamp = parseInt(row.value, 10);
          if (!isNaN(timestamp)) {
            const date = new Date(timestamp);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
            const year = date.getFullYear();
            const formattedDate = `${day}/${month}/${year}`;

            return <div>{formattedDate}</div>;
          } else {
            return <div>Invalid Timestamp</div>;
          }
        }
      },
      {
        field: 'vehicleRCNo',
        headerName: 'Vehicle RC No',
        width: 150,
        editable: false
      },
      {
        field: 'pollutionCertificateNo',
        headerName: 'Vehicle Pollution Certificate',
        width: 150,
        editable: false
      },

      {
        field: 'Action',
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

  const formik = useFormik({
    initialValues: vehicleInitialValues,
    validationSchema: addvehicleValidationSchema
  });

  let entities = [];
  const onChooseEntityChange = (evt) => {
    formik.setFieldValue('chooseEntity', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateChooseEntityName(value));
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

  const onChangeEntityName = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('chooseEntity', evt?.target?.value);
    dispatch(updateChooseEntityName(value));
  };

  const onEntityIdChange = (evt) => {
    formik.setFieldValue('entityValue.entityId', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateVehicleEntityId(value));
  };
  const onChangeRegistrationNo = (evt) => {
    formik.setFieldValue('registrationNo', evt.target.value.toUpperCase());
    dispatch(updateRegistrationNo(evt.target.value.toUpperCase()));
  };
  const onChangeCompanyName = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('chooseVehicleCompanyName', value);
    dispatch(updateChooseVehicleCompanyName(value));
  };

  const onChangeVehicleModel= (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('chooseVehicleModel', value);
    dispatch(updateChooseVehicleModel(value));
  };

  const onChangeVehicleType = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('chooseVehicleType', value);
    dispatch(updateChooseVehicleTypes(value));
    setSelectedVehicleType(value);
  };
  const onChangeManufacturingyear = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('manufacturingYear', new Date($d).getTime());
    dispatch(updateManufacturingYear(new Date($d).getTime()));
  };
  const onChangeChassisNo = (evt) => {
    formik.setFieldValue('chassisNo', evt.target.value.toUpperCase());
    dispatch(updateChassisNo(evt.target.value.toUpperCase()));
  };

  const onChangeEngineNo = (evt) => {
    formik.setFieldValue('engineNo', evt.target.value.toUpperCase());
    dispatch(updateEngineNo(evt.target.value.toUpperCase()));
  };
  const onChangeRcNo = (evt) => {
    formik.setFieldValue('vehicleRCNo', evt.target.value.toUpperCase());
    dispatch(updateRcNo(evt.target.value.toUpperCase()));
  };
  const onChangePollutionCertificateNo = (evt) => {
    formik.setFieldValue('pollutionCertificateNo', evt.target.value.toUpperCase());
    dispatch(updatePollutionCertificateNo(evt.target.value.toUpperCase()));
  };
  const onChangePollutionRenewal = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('pollutionRenwalDate', new Date($d).getTime());
    dispatch(updatePollutionRenwalDate(new Date($d).getTime()));
  };
  const onChangePermitNo = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('permitNo', evt?.target?.value);
    dispatch(updatePermitNo(value));
  };
  const onChangePermitRenewal = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('permitRenwalDate', new Date($d).getTime());
    dispatch(updatePermitRenwalDate(new Date($d).getTime()));
  };

  const filteredCompanies = listVehicleCompany?.filter((item) => {
    return item.vehicletypesid === selectedVehicleType;
  });
  const filteredModel = listVehicleModel?.filter((item) => {
    return item.vehicleType === selectedVehicleType;
  });

  const onSaveVehicleHandler = () => {
    let payload = {
      companyId: companyDetails?._id,
      entityId:
        add?.chooseEntity !== 'head-office'
          ? add?.entityValue?.entityId
          : '655b03e6a2501b7a6cab6cfb',
      entityType: add?.chooseEntity,
      vehicleModel: add?.chooseVehicleModel,
      vehicleType: add?.chooseVehicleType,
      vehicleCompanyName: add?.chooseVehicleCompanyName,
      vehicleManufacturingYear: add?.manufacturingYear.toString(),
      vehicleRegistrationNo: add?.registrationNo,
      vehicleChassisNo: add?.chassisNo,
      vehicleEngineNo: add?.engineNo,
      permitNo: add?.permitNo,
      permitRenewalDate: add?.permitRenwalDate.toString(),
      vehicleRCNo: add?.vehicleRCNo,
      pollutionCertificateNo: add?.pollutionCertificateNo,
      pollutionRenewalDate: add?.pollutionRenwalDate.toString()
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveVehicle(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Vehicle');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Vehicle Details Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetVehicle());
          setIsMessageDisplay(false);
        }, 2000);
      } else if (apiStatus?.isFailedToSave) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
        }, 2000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isFailedToSave]);

  useEffect(() => {
    dispatch(requestToGetAllVehicleType());
    dispatch(requestToGetAllVehicleCompany());
    dispatch(requestToGetAllVehicle(companyDetails?._id));
    dispatch(requestToGetAllBranch(companyDetails?._id));
  }, [apiStatus?.isSaved]);

  return (
    <Fragment>
      <Box sx={{ p: 3 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={2} xs={12}>
              <GenericDropdown
                onChange={onChooseEntityChange}
                label="Choose Entity"
                value={formik.values.chooseEntity}
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
            <Grid item xs={12} md={4}>
              <GenericInput
                onChange={onChangeRegistrationNo}
                label={'Vehicle Registration No.'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                // value={registration}
                value={formik?.values.registrationNo}
                error={formik?.errors?.registrationNo && formik?.touched?.registrationNo}
              />
              <FormHelperText error>
                {formik?.errors?.registrationNo &&
                  formik?.touched?.registrationNo &&
                  formik?.errors?.registrationNo}
              </FormHelperText>
            </Grid>

            <Grid item xs={12} md={4}>
              <GenericDropdown
                onChange={onChangeVehicleType}
                data={listVehicleType.map((item) => ({
                  label: item?.vehicleType,
                  value: item?._id
                }))}
                label={'Vehicle Type'}
                onBlur={formik.handleBlur}
                onKeyUp={formik?.handleChange}
                onFocus={formik.handleChange}
                value={formik?.values?.chooseVehicleType}
                error={formik.errors.chooseVehicleType && formik.touched.chooseVehicleType}
              />
              <FormHelperText error>
                {formik.errors.chooseVehicleType &&
                  formik.touched.chooseVehicleType &&
                  formik.errors.chooseVehicleType}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericDropdown
                onChange={onChangeCompanyName}
                label={'Vehicle Company Name'}
                data={filteredCompanies?.map((item) => ({
                  label: item?.vehicleCompanyName,
                  value: item?._id
                }))}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values.chooseVehicleCompanyName}
                error={
                  formik?.errors?.chooseVehicleCompanyName &&
                  formik?.touched?.chooseVehicleCompanyName
                }
              />
              <FormHelperText error>
                {formik?.errors?.chooseVehicleCompanyName &&
                  formik?.touched?.chooseVehicleCompanyName &&
                  formik?.errors?.chooseVehicleCompanyName}
              </FormHelperText>
            </Grid>

            <Grid item xs={12} md={4}>
              <GenericDropdown
                onChange={onChangeVehicleModel}
                label={'Vehicle Model'}
                data={filteredModel?.map((item) => ({
                  label: item?.vehicleModel,
                  value: item?._id
                }))}

                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values.chooseVehicleModel}
                error={
                  formik?.errors?.chooseVehicleModel &&
                  formik?.touched?.chooseVehicleModel
                }
              />
              <FormHelperText error>
                {formik?.errors?.chooseVehicleModel &&
                  formik?.touched?.chooseVehicleModel &&
                  formik?.errors?.chooseVehicleModel}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericDatePicker
                onAccept={onChangeManufacturingyear}
                views={['year']}
                label={'Vehicle Manufacturing Year'}
                onBlur={formik?.handleBlur}
                disableFuture={true}
                onFocus={formik.handleChange}
                error={
                  Boolean(formik?.errors?.manufacturingYear) && formik?.touched?.manufacturingYear
                }
              />
              <FormHelperText error>
                {formik?.errors?.manufacturingYear &&
                  formik?.touched?.manufacturingYear &&
                  formik?.errors?.manufacturingYear}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericInput
                onChange={onChangeChassisNo}
                label={'Vehicle Chassis No.'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values.chassisNo}
                error={formik?.errors?.chassisNo && formik?.touched?.chassisNo}
              />
              <FormHelperText error>
                {formik?.errors?.chassisNo &&
                  formik?.touched?.chassisNo &&
                  formik?.errors?.chassisNo}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericInput
                onChange={onChangeEngineNo}
                label={'Vehicle  Engine No.'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values.engineNo}
                error={formik?.errors?.engineNo && formik?.touched?.engineNo}
              />
              <FormHelperText error>
                {formik?.errors?.engineNo && formik?.touched?.engineNo && formik?.errors?.engineNo}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericInput
                onChange={onChangeRcNo}
                label={'Vehicle RC No.'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values.vehicleRCNo}
                error={formik?.errors?.vehicleRCNo && formik?.touched?.vehicleRCNo}
              />
              <FormHelperText error>
                {formik?.errors?.vehicleRCNo &&
                  formik?.touched?.vehicleRCNo &&
                  formik?.errors?.vehicleRCNo}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onChangePollutionCertificateNo}
                label={'Pollution Certificate No.'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values.pollutionCertificateNo}
                error={
                  formik?.errors?.pollutionCertificateNo && formik?.touched?.pollutionCertificateNo
                }
              />
              <FormHelperText error>
                {formik?.errors?.pollutionCertificateNo &&
                  formik?.touched?.pollutionCertificateNo &&
                  formik?.errors?.pollutionCertificateNo}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDatePicker
                onAccept={onChangePollutionRenewal}
                label={'Pollution Renewal Date '}
                disablePast
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                // value={formik?.values.pollutionRenwalDate}
                error={formik?.errors?.pollutionRenwalDate && formik?.touched?.pollutionRenwalDate}
              />
              <FormHelperText error>
                {formik?.errors?.pollutionRenwalDate &&
                  formik?.touched?.pollutionRenwalDate &&
                  formik?.errors?.pollutionRenwalDate}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericInput
                onChange={onChangePermitNo}
                label={'Permit No.'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values.permitNo}
                error={formik?.errors?.permitNo && formik?.touched?.permitNo}
              />
              <FormHelperText error>
                {formik?.errors?.permitNo && formik?.touched?.permitNo && formik?.errors?.permitNo}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={3}>
              <GenericDatePicker
                onAccept={onChangePermitRenewal}
                label={'Permit Renewal Date '}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                // value={formik?.values.permitRenwalDate}
                error={formik?.errors?.permitRenwalDate && formik?.touched?.permitRenwalDate}
              />
              <FormHelperText error>
                {formik?.errors?.permitRenwalDate &&
                  formik?.touched?.permitRenwalDate &&
                  formik?.errors?.permitRenwalDate}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Upload RC
              </Typography>
              <GenericImagePicker getImageUrl={getRcImage} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Upload Pollution Certificate
              </Typography>
              <GenericImagePicker getImageUrl={getRcImage} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Upload Permit Certificate
              </Typography>
              <GenericImagePicker getImageUrl={getRcImage} />
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton
                sx={{ my: 2, float: 'right' }}
                onClick={onSaveVehicleHandler}
                type="submit"
              >
                <span>Save</span>
              </GenericLoadingButton>
            </Grid>
            <Grid item xs={12}>
              <GenericDataGrid
                rows={listVehicle
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
      </Box>
      {isMessageDisplay && <Toasty show={isMessageDisplay} message={message} type={messageType} />}
    </Fragment>
  );
};
export default Vehicle;
