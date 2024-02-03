import { Box, Grid, Typography, FormHelperText, Autocomplete, TextField } from '@mui/material';
import { Fragment, useState, useMemo, useEffect } from 'react';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import { useFormik } from 'formik';
import GenericDataGrid from '../../../../common-components/form-elements/genericDataGrid';
import { useNavigate } from 'react-router-dom';
import GenericCheckbox from '../../../../common-components/form-elements/genericCheckbox';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';
import GenericImagePicker from '../../../../common-components/form-elements/genericImagePicker';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestToGetPickLocation,
  requestToGetDropLocation,
  utilsReset
} from '../../../../store/slices/UtilsSlice';
import GenericAction from '../../../../common-components/form-elements/genericAction';
import Toasty from '../../../../common-components/form-elements/toasty';

import {
  updateChooseEntity,
  updateEntityId,
  updateBranchName,
  updateDriverName,
  updateDriverMobileNo,
  updateDriverLicenceNo,
  updateDriverAadharNo,
  updateUploadLicence,
  updateUploadAadhar,
  updateUploadAadharBack,
  updatePermanentPinCode,
  updatePermanentState,
  updatePermanentCity,
  updatePermanentLocality,
  updatePermanentDriverAddress,
  updateCurrentPinCode,
  updateCurrentState,
  updateCurrentCity,
  updateCurrentLocality,
  updateCurrentDriverAddress,
  requestToSaveVehicleDriver,
  requestToGetAllVehicleDriver,
  resetVehicleDriver,
  requestDeleteVehicleDriver,
  requestToGetAllVehicle,
  resetVehicleDeleteStatus,
  updateSameAsPermanentAddressCheck
} from '../../../../store/slices/VehicleManagementSlice';

import {
  vehicleDriverInitialValues,
  addvehicleDriverValidationSchema
} from '../../../../common-components/validator/settings-validator/vehicle-management';
import { requestToGetAllFranchise } from '../../../../store/slices/FranchiseSlice.js';
import { requestToGetAllBranch } from '../../../../store/slices/BranchSlice.js';

const SACA = [
  {
    value: 'SameasPermanentAddress',
    label: 'Same as Permanent Address'
  }
];

const Driver = () => {
  const navigate = useNavigate();

  const [isSameAsPermanent, setIsSameAsPermanent] = useState(false);
  const dispatch = useDispatch();
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [gridValue, setGridValue] = useState(4);
  const [entityList, setEntityList] = useState([]);
  const {
    vehicleManagement: {
      vehicleDriver: { add, listVehicleDriver, apiStatus }
    },
    utils: { pickup, drop },
    company: { companyDetails },
    franchise: { franchiseList },
    branch: { branchList }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: vehicleDriverInitialValues,
    validationSchema: addvehicleDriverValidationSchema
  });
  let entities = [];
  const onChooseEntityChange = (evt) => {
    formik.setFieldValue('chooseEntity', evt?.target?.value);
    const { value } = evt.target;
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

  const getLicenceImage = (data) => {};
  const onEntityIdChange = (evt) => {
    formik.setFieldValue('entityValue.entityId', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateEntityId(value));
  };
  const onChangeDriverName = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('driverName', evt?.target?.value);
    dispatch(updateDriverName(value));
  };
  const onChangeDriverMobile = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('driverMobileNo', evt?.target?.value);
    dispatch(updateDriverMobileNo(value));
  };
  const onChangeDriverLicence = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('driverLicenceNo', evt.target.value.toUpperCase());
    dispatch(updateDriverLicenceNo(value));
  };
  const onChangeDriverAadhar = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('driverAadharNo', evt?.target?.value);
    dispatch(updateDriverAadharNo(value));
  };
  const onChangePermanentPincode = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('permanentAddress.pinCode', value);
    dispatch(updatePermanentPinCode(value));
    if (value.length === 6) {
    dispatch(requestToGetPickLocation(value));
  }
  };
  const onChangePermanentState = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('state', evt?.target?.value);
    dispatch(updatePermanentState(value));
  };
  const onChangePermanentCity = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('city', evt?.target?.value);
    dispatch(updatePermanentCity(value));
  };
  const onChangePermanentLocality = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('locality', evt?.target?.value);
    dispatch(updatePermanentLocality(value));
  };
  const onChangePermanentDriverAddress = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('permanentAddress.driverAddress', evt?.target?.value);
    dispatch(updatePermanentDriverAddress(value));
  };
  const onChangeCurrentPincode = (evt) => {
    const { value } = evt.target;
    dispatch(updateCurrentPinCode(value));
    formik.setFieldValue('currentAddress.pinCode', evt?.target?.value);
    if (value.length === 6 ){
    dispatch(requestToGetDropLocation(value));
    }
  };
  const onChangeCurrentState = (evt) => {
    const { value } = evt.target;
    dispatch(updateCurrentState(value));
  };
  const onChangeCurrentCity = (evt) => {
    const { value } = evt.target;
    dispatch(updateCurrentCity(value));
  };
  const onChangeCurrentLocality = (evt) => {
    const { value } = evt.target;
    dispatch(updateCurrentLocality(value));
  };
  const onChangeCurrentAddress = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('currentAddress.driverAddress', evt?.target?.value);
    dispatch(updateCurrentDriverAddress(value));
  };

  const onDeleteHandler = (data) => {
    dispatch(requestDeleteVehicleDriver(data?._id));
  };

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
        field: 'driverName',
        headerName: 'Vehicle Driver',
        width: 150,
        editable: false
      },
      {
        field: 'mobile',
        headerName: 'Driver Mobile',
        width: 150,
        editable: false
      },
      {
        field: 'licenceNo',
        headerName: 'Driver Licence',
        width: 150,
        editable: false
      },
      {
        field: 'aadharNo',
        headerName: 'Driver Aadhar',
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

  const onSaveDriverHandler = () => {
    let payload = {
      companyId: companyDetails._id,
      entityId:
        add?.chooseEntity !== 'head-office'
          ? add?.entityValue?.entityId
          : '655b03e6a2501b7a6cab6cfb',
      entityType: add.chooseEntity,
      driverName: add.driverName,
      mobile: add.driverMobileNo,
      licenceNo: add.driverLicenceNo,
      aadharNo: add.driverAadharNo,
      permanentAddress: {
        state: add?.permanentAddress?.state,
        city: add?.permanentAddress?.city,
        pincode: add?.permanentAddress?.pinCode,
        address: add?.permanentAddress?.driverAddress,
        locality: add?.permanentAddress?.locality
      },
      currentAddress: {
        state: add?.currentAddress?.sameAsPermanentAddress === true ? add?.permanentAddress?.state : add?.currentAddress?.state,
        city: add?.currentAddress?.sameAsPermanentAddress === true ? add?.permanentAddress?.city : add?.currentAddress?.city,
        pincode: add?.currentAddress?.sameAsPermanentAddress === true ? add?.permanentAddress?.pinCode : add?.currentAddress?.pinCode,
        address: add?.currentAddress?.sameAsPermanentAddress === true ? add?.permanentAddress?.driverAddress : add?.currentAddress?.driverAddress,
        locality: add?.currentAddress?.sameAsPermanentAddress === true ? add?.permanentAddress?.locality : add?.currentAddress?.locality
      }
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveVehicleDriver(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Valid Vehicle Driver');
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
        setMessage('Vehicle Driver Added');
        formik.handleReset();
        setTimeout(() => {
          dispatch(resetVehicleDriver());
          dispatch(utilsReset());
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
    if (apiStatus?.isDeleted) {
      dispatch(requestToGetAllVehicleDriver(companyDetails?._id));

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

  useEffect(() => {
    dispatch(requestToGetAllVehicleDriver(companyDetails?._id));
  }, [apiStatus?.isSaved]);

  const onChangeSameAsPermanent = (evt) => {
    dispatch(updateSameAsPermanentAddressCheck(evt.target.checked))
    setIsSameAsPermanent(evt.target.checked);

    // if (evt.target.checked) {
    //   // If the checkbox is checked, copy values from permanent to current
    //   formik.setValues({
    //     ...formik.values,
    //     currentAddress: {
    //       state: add?.permanentAddress?.state,
    //       city: add?.permanentAddress?.city,
    //       pincode: add?.permanentAddress?.pinCode,
    //       address: add?.permanentAddress?.driverAddress,
    //       locality: add?.permanentAddress?.locality
    //     }
    //   });
    // } else {
    //   // If the checkbox is unchecked, clear values in current
    //   formik.setValues({
    //     ...formik.values,
    //     currentAddress: {
    //       state: '',
    //       city: '',
    //       pincode: '',
    //       address: '',
    //       locality: ''
    //     }
    //   });
    // }
  };

  const rowClick = (data) =>{
    console.log(data,'detail')
    navigate(`./driver/${data.row._id}`)
  }

  return (
    <Fragment>
      <Box sx={{ p: 3 }}>
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
            {add?.chooseEntity !== 'head-office' && (
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
                onChange={onChangeDriverName}
                label={'Driver Name'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values.driverName}
                error={Boolean(formik?.errors?.driverName) && formik?.touched?.driverName}
              />
              <FormHelperText error>
                {formik?.errors?.driverName &&
                  formik?.touched?.driverName &&
                  formik?.errors?.driverName}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericInput
                onChange={onChangeDriverMobile}
                label={'Driver Mobile No.'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values.driverMobileNo}
                error={Boolean(formik?.errors?.driverMobileNo) && formik?.touched?.driverMobileNo}
              />
              <FormHelperText error>
                {formik?.errors?.driverMobileNo &&
                  formik?.touched?.driverMobileNo &&
                  formik?.errors?.driverMobileNo}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericInput
                onChange={onChangeDriverLicence}
                label={'Driver Licence No. '}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values.driverLicenceNo}
                error={Boolean(formik?.errors?.driverLicenceNo) && formik?.touched?.driverLicenceNo}
              />
              <FormHelperText error>
                {formik?.errors?.driverLicenceNo &&
                  formik?.touched?.driverLicenceNo &&
                  formik?.errors?.driverLicenceNo}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericInput
                onChange={onChangeDriverAadhar}
                label={'Driver Aadhar No.'}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values.driverAadharNo}
                error={Boolean(formik?.errors?.driverAadharNo) && formik?.touched?.driverAadharNo}
              />
              <FormHelperText error>
                {formik?.errors?.driverAadharNo &&
                  formik?.touched?.driverAadharNo &&
                  formik?.errors?.driverAadharNo}
              </FormHelperText>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Driver Photo
              </Typography>
              <GenericImagePicker getImageUrl={getLicenceImage} sx={{ width: '95%' }} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Upload Licence
              </Typography>
              <GenericImagePicker getImageUrl={getLicenceImage} sx={{ width: '95%' }} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Upload Aadhar Front
              </Typography>
              <GenericImagePicker getImageUrl={getLicenceImage} sx={{ width: '95%' }} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Upload Aadhar Back
              </Typography>
              <GenericImagePicker getImageUrl={getLicenceImage} sx={{ width: '95%' }} />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ my: 1 }}>
                Permanent Address
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <GenericInput
                    onChange={onChangePermanentPincode}
                    label={'Pincode'}
                    onKeyUp={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    onFocus={formik.handleChange}
                    value={formik?.values?.permanentAddress?.pinCode}
                    error={
                      Boolean(formik?.errors?.permanentAddress?.pinCode) &&
                      formik?.touched?.permanentAddress?.pinCode
                    }
                  />
                  <FormHelperText error>
                    {formik?.errors?.permanentAddress?.pinCode &&
                      formik?.touched?.permanentAddress?.pinCode &&
                      formik?.errors?.permanentAddress?.pinCode}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    data={pickup?.state}
                    onChange={onChangePermanentState}
                    label={'State'}
                    onKeyUp={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    onFocus={formik.handleChange}
                    error={
                      Boolean(formik?.errors?.permanentAddress?.state) &&
                      formik?.touched?.permanentAddress?.state
                    }
                  />
                  <FormHelperText error>
                    {formik?.errors?.permanentAddress?.state &&
                      formik?.touched?.permanentAddress?.state &&
                      formik?.errors?.permanentAddress?.state}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    data={pickup?.city}
                    onChange={onChangePermanentCity}
                    label={'City'}
                    onKeyUp={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    onFocus={formik.handleChange}
                    error={
                      Boolean(formik?.errors?.permanentAddress?.city) &&
                      formik?.touched?.permanentAddress?.city
                    }
                  />
                  <FormHelperText error>
                    {formik?.errors?.permanentAddress?.city &&
                      formik?.touched?.permanentAddress?.city &&
                      formik?.errors?.permanentAddress?.city}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    data={pickup?.locality}
                    onChange={onChangePermanentLocality}
                    label={'Locality'}
                    onKeyUp={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    onFocus={formik.handleChange}
                    error={
                      Boolean(formik?.errors?.permanentAddress?.locality) &&
                      formik?.touched?.permanentAddress?.locality
                    }
                  />
                  <FormHelperText error>
                    {formik?.errors?.permanentAddress?.locality &&
                      formik?.touched?.permanentAddress?.locality &&
                      formik?.errors?.permanentAddress?.locality}
                  </FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                onChange={onChangePermanentDriverAddress}
                label={'Driver Address'}
                multiline
                rows={3.5}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values?.permanentAddress?.driverAddress}
                error={
                  Boolean(formik?.errors?.permanentAddress?.driverAddress) &&
                  formik?.touched?.permanentAddress?.driverAddress
                }
              />
              <FormHelperText error>
                {formik?.errors?.permanentAddress?.driverAddress &&
                  formik?.touched?.permanentAddress?.driverAddress &&
                  formik?.errors?.permanentAddress?.driverAddress}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ my: 1 }}>
                Current Address
              </Typography>
              <GenericCheckbox list={SACA} onClick={onChangeSameAsPermanent} />
            </Grid>
            {add?.currentAddress?.sameAsPermanentAddress === false && (
            <Fragment>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <GenericInput
                    onChange={onChangeCurrentPincode}
                    label={'Pincode'}
                    onKeyUp={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    onFocus={formik.handleChange}
                    error={
                      Boolean(formik?.errors?.currentAddress?.pinCode) &&
                      formik?.touched?.currentAddress?.pinCode
                    }
                  />
                  <FormHelperText error>
                    {formik?.errors?.currentAddress?.pinCode &&
                      formik?.touched?.currentAddress?.pinCode &&
                      formik?.errors?.currentAddress?.pinCode}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    data={drop?.state}
                    onChange={onChangeCurrentState}
                    label={'State'}
                    onKeyUp={formik?.handleChange}
                    onFocus={formik.handleChange}
                    onBlur={formik?.handleBlur}
                    error={
                      Boolean(formik?.errors?.currentAddress?.state) &&
                      formik?.touched?.currentAddress?.state
                    }
                  />
                  <FormHelperText error>
                    {formik?.errors?.currentAddress?.state &&
                      formik?.touched?.currentAddress?.state &&
                      formik?.errors?.currentAddress?.state}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    data={drop?.city}
                    onChange={onChangeCurrentCity}
                    label={'City'}
                    onKeyUp={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    onFocus={formik.handleChange}
                    error={
                      Boolean(formik?.errors?.currentAddress?.city) &&
                      formik?.touched?.currentAddress?.city
                    }
                  />
                  <FormHelperText error>
                    {formik?.errors?.currentAddress?.city &&
                      formik?.touched?.currentAddress?.city &&
                      formik?.errors?.currentAddress?.city}
                  </FormHelperText>
                </Grid>
                <Grid item xs={12} md={6}>
                  <GenericDropdown
                    data={drop?.locality}
                    onChange={onChangeCurrentLocality}
                    label={'Locality'}
                    onKeyUp={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    onFocus={formik.handleChange}
                    error={
                      Boolean(formik?.errors?.currentAddress?.locality) &&
                      formik?.touched?.currentAddress?.locality
                    }
                  />
                  <FormHelperText error>
                    {formik?.errors?.currentAddress?.locality &&
                      formik?.touched?.currentAddress?.locality &&
                      formik?.errors?.currentAddress?.locality}
                  </FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericInput
                onChange={onChangeCurrentAddress}
                label={'Driver Address'}
                multiline
                rows={3.5}
                onKeyUp={formik?.handleChange}
                onBlur={formik?.handleBlur}
                onFocus={formik.handleChange}
                value={formik?.values?.currentAddress?.driverAddress}
                error={
                  Boolean(formik?.errors?.currentAddress?.driverAddress) &&
                  formik?.touched?.currentAddress?.driverAddress
                }
              />
              <FormHelperText error>
                {formik?.errors?.currentAddress?.driverAddress &&
                  formik?.touched?.currentAddress?.driverAddress &&
                  formik?.errors?.currentAddress?.driverAddress}
              </FormHelperText>
            </Grid>
            </Fragment>
            )}
            <Grid item xs={12}>
              <GenericLoadingButton
                sx={{ my: 2, float: 'right' }}
                onClick={onSaveDriverHandler}
                type="submit"
              >
                <span>Save</span>
              </GenericLoadingButton>
            </Grid>
            <Grid item xs={12}>
              <GenericDataGrid
                rows={listVehicleDriver
                  ?.filter((item) => !item.isDeleted)
                  ?.map((item, index) => ({
                    ...item,
                    id: index + 1
                  }))}
                columns={columns}
                onRowDoubleClick={rowClick}
              />
            </Grid>
          </Grid>
        </form>
        {isMessageDisplay && (
          <Toasty show={isMessageDisplay} message={message} type={messageType} />
        )}
      </Box>
    </Fragment>
  );
};
export default Driver;
