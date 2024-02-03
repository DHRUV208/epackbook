import * as React from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { Box, FormHelperText, Grid } from '@mui/material';
import GenericSwitch from '../../../common-components/form-elements/genericSwitch';
import GenericDropdown from '../../../common-components/form-elements/genericDropdown';
import GenericDatePicker from '../../../common-components/form-elements/genericDatePicker';
import GenericLoadingButton from '../../../common-components/form-elements/genericLoadingButton';
import { useState } from 'react';
import GenericInput from '../../../common-components/form-elements/genericInput';
import { useParams } from 'react-router-dom';
import {
  requestToGetAllVehicleAccessory,
  requestToGetAllVehicleColor,
  requestToGetAllVehicleCompany,
  requestToGetAllVehicleInsuranceCompany,
  requestToGetAllVehicleModel,
  requestToGetAllVehicleType
} from '../../../store/slices/VehicleManagementSlice';
import {
  requestToSaveCarCondition,
  updateDate,
  updateManufacturer,
  updateYearOfManufacture,
  updateColor,
  updateModel,
  updateVehicleType,
  updateAuto,
  updateCarConditionNumber,
  updateVehicleRegNo,
  updateVehicleKM,
  updateVehicleValue,
  updateInsurancePolicyNo,
  updateInsuranceCompanyName,
  updateInsuranceCompanyNameOther,
  updateChassisNo,
  updateEngineNo,
  updateBatteryNo,
  updateTyreNo,
  updateAnyOtherAccesories,
  updateAnyRemark,
  updateScratches,
  updateDent,
  updateAnyOtherVisibleObservation,
  requestToGetAllCarCondition,
  resetApiStatus,
  reset,
  updateCarConditionAccessory
} from '../../../../src/store/slices/CarConditionSlice';
import { useFormik } from 'formik';
import {
  addCarConditionInitialValues,
  addCarConditionValidationSchema
} from '../../../common-components/validator/carCondition-validation';
import { useDispatch, useSelector } from 'react-redux';
import Toasty from '../../../common-components/form-elements/toasty';
import GenericRadio from '../../../common-components/form-elements/genericRadio';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';
import GenericDataGrid from '../../../common-components/form-elements/genericDataGrid';
const style = {
  display: 'flex',
  width: 'calc(100% - 20px)',
  mr: 1,
  border: '1px solid #C4C4C4',
  borderRadius: '4.5px',
  padding: '0px 8px'
};
const getLicenceImage = (data) => {
};

const option = [
  {
    value: true,
    label: 'Yes'
  },
  {
    value: false,
    label: 'No'
  }
];



const CarConditionForm = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedVehicleType, setSelectedVehicleType] = useState(null);
  const dispatch = useDispatch();
  const { id: orderId } = useParams();
  const {
    carCondition: {
      addCarCondition: { details, accessoriesDetails,AccessoryList },
      isResponseFailed,
      isSaved,
      carConditionList
    },
    company: { companyDetails },
    vehicleManagement: {
      vehicleColor: { listVehicleColor },
      vehicleInsuranceCompany: { listVehicleInsuranceCompany },
      vehicleCompany:{listVehicleCompany},
      vehicleModel: { listVehicleModel },
      vehicleAccessory:{listVehicleAccessory},
      vehicleType: { listVehicleType }
    },
    auth: { loginSuccess },
    appConfiguration:{configuration:{listConfiguration}}
  } = useSelector((state) => state);

  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const formik = useFormik({
    initialValues: addCarConditionInitialValues,
    validationSchema: addCarConditionValidationSchema
  });
  const [insuranceType, setInsuranceType] = React.useState('');
  const [gridDistribution, setGridDistribution] = React.useState(12);
  const onAutoChange = (evt) => {
    const { checked } = evt.target;
    if (checked === true) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    dispatch(updateAuto(checked));
  };
  const onCarConditionNumberChange = (evt) => {
    formik.setFieldValue('addCarCondition.details.carConditionNumber', evt?.target?.value);
    dispatch(updateCarConditionNumber(evt?.target?.value));
  };
  const onVehicleTypeChange = (evt) => {
    const { value } = evt.target;  
    formik.setFieldValue('addCarCondition.details.vehicleType', value);
    dispatch(updateVehicleType(value));
    setSelectedVehicleType(value);

  };
  const onDateChange = (evt) => {
    const { $d } = evt;
    formik.setFieldValue('addCarCondition.details.date', new Date($d).getTime());
    dispatch(updateDate(new Date($d).getTime()));
  };
  const onManufacturerChange = (evt) => {
    formik.setFieldValue('addCarCondition.details.manufacturer', evt?.target?.value);
    dispatch(updateManufacturer(evt?.target?.value));
  };
  const onModelChange = (evt) => {
    formik.setFieldValue('addCarCondition.details.model', evt?.target?.value);
    dispatch(updateModel(evt?.target?.value));
  };
  const onYearOfManufactureChange = (evt) => {
    const { $y } = evt;
    formik.setFieldValue('addCarCondition.details.yearOfManufacture', $y);
    dispatch(updateYearOfManufacture($y));
  };
  const onColorChange = (evt) => {
    formik.setFieldValue('addCarCondition.details.color', evt?.target?.value);
    dispatch(updateColor(evt?.target?.value));
  };
  const onVehicleRegNoChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addCarCondition.details.vehicleRegNo', evt.target.value.toUpperCase());
    dispatch(updateVehicleRegNo(evt.target.value.toUpperCase()));
  };
  const onVehicleKMChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addCarCondition.details.vehicleKM', evt?.target?.value);
    dispatch(updateVehicleKM(value));
  };
  const onVehicleValueChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addCarCondition.details.vehicleValue', evt?.target?.value);
    dispatch(updateVehicleValue(value));
  };
  const onInsuranceCompanyNameChange = (evt) => {
    setInsuranceType(evt.target.value);
    formik.setFieldValue('addCarCondition.details.insuranceCompanyName.value', evt?.target?.value);
    dispatch(updateInsuranceCompanyName(evt?.target?.value));
    setGridDistribution(evt.target.value === 'other' ? 6 : 12);
  };
  const onInsuranceCompanyNameOtherChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue(
      'addCarCondition.details.insuranceCompanyName.otherValue',
      evt?.target?.value
    );
    dispatch(updateInsuranceCompanyNameOther(value));
  };
  const onInsurancePolicyNoChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addCarCondition.details.insurancePolicyNo', evt?.target?.value);
    dispatch(updateInsurancePolicyNo(value));
  };
  const onChassisNoChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addCarCondition.details.chassisNo', evt?.target?.value);
    dispatch(updateChassisNo(value));
  };
  const onEngineNoChange = (evt) => {
    const { value } = evt.target;
    formik.setFieldValue('addCarCondition.details.engineNo', evt?.target?.value);
    dispatch(updateEngineNo(value));
  };

  // add slicer

  const handleChangeRadio = (ele, evt) => {
    const accList = [...AccessoryList];
  
    if (evt.target.value === "true") {
      const acc = {
        vehicleAccessory: ele?.vehicleAccessory,
        _id: ele?._id,
      };
      accList.push(acc);
      dispatch(updateCarConditionAccessory(accList));
    } else {
      if (accList.some(item => item._id === ele?._id)) {
        const newArr = accList.filter(item => item._id !== ele?._id);
        dispatch(updateCarConditionAccessory(newArr));
      }
    }
  
    // Update the accessory list in the state
  };
  const onBatteryNoChange = (evt) => {
    formik.setFieldValue('addCarCondition.accessoriesDetails.batteryNo', evt?.target?.value);
    dispatch(updateBatteryNo(evt?.target?.value));
  };
  const onTyreNoChange = (evt) => {
    formik.setFieldValue('addCarCondition.accessoriesDetails.tyreNo', evt?.target?.value);
    dispatch(updateTyreNo(evt?.target?.value));
  };
  const onAnyOtherAccesoriesChange = (evt) => {
    formik.setFieldValue(
      'addCarCondition.accessoriesDetails.anyOtherAccesories',
      evt?.target?.value
    );
    dispatch(updateAnyOtherAccesories(evt?.target?.value));
  };
  const onAnyRemarkChange = (evt) => {
    formik.setFieldValue('addCarCondition.accessoriesDetails.anyRemark', evt?.target?.value);
    dispatch(updateAnyRemark(evt?.target?.value));
  };
  const onScratchesChange = (evt) => {
    formik.setFieldValue('addCarCondition.accessoriesDetails.scratches', evt?.target?.value);
    dispatch(updateScratches(evt?.target?.value));
  };
  const onDentChange = (evt) => {
    formik.setFieldValue('addCarCondition.accessoriesDetails.dent', evt?.target?.value);
    dispatch(updateDent(evt?.target?.value));
  };
  const onAnyOtherVisibleObservationChange = (evt) => {
    formik.setFieldValue(
      'addCarCondition.accessoriesDetails.anyOtherVisibleObservation',
      evt?.target?.value
    );
    dispatch(updateAnyOtherVisibleObservation(evt?.target?.value));
  };

  const onSaveCarConditionHandler = () => {
    let payload = {
      companyId: companyDetails?._id,
      orderId: orderId,
      templateId: 'lorem',
      carConditionNumber: details?.carConditionNumber,
      dateOfCarCondition: details?.date,
      vehicleType: details?.vehicleType,
      manufacturer: details?.manufacturer,
      model: details?.model,
      yearOfManufacturing: `'${details?.yearOfManufacture}'`,
      color: details?.color,
      vehicleRegistrationNumber: details?.vehicleRegNo,
      vehicleCoveredDistanceInKM: details?.vehicleKM,
      vehicleValue: details?.vehicleValue,
      insurancePolicyNumber: details?.insurancePolicyNo,
      insuranceCompany: details?.insuranceCompanyName?.value,
      chasisNumber: details?.chassisNo,
      engineNumber: details?.engineNo,
      vehicleAccessories: AccessoryList,
      batteryNumber: accessoriesDetails?.batteryNo,
      tyreNumber: accessoriesDetails?.tyreNo,
      anyOtherAccessorie: accessoriesDetails?.anyOtherAccesories,
      scratches: accessoriesDetails?.scratches,
      dent: accessoriesDetails?.dent,
      visibleObservation: accessoriesDetails?.anyOtherVisibleObservation,
      remarks: accessoriesDetails?.anyRemark,
      addedBy: loginSuccess?.id
    };

    if (formik.dirty) {
      dispatch(requestToSaveCarCondition(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Please fill form Correctly');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 4000);
    }
  };

  useEffect(() => {
    dispatch(reset());
  }, []);
  
  useEffect(() => {
    dispatch(requestToGetAllCarCondition(orderId));
    dispatch(requestToGetAllVehicleColor());
    dispatch(requestToGetAllVehicleInsuranceCompany());
    dispatch(requestToGetAllVehicleModel());
    dispatch(requestToGetAllVehicleType());
    dispatch(requestToGetAllVehicleAccessory())
    dispatch(requestToGetAllVehicleCompany())
  

    if (isSaved) {
      setIsMessageDisplay(true);
      setMessageType('success');
      setMessage('Congragulations Vehicle Condition added');
      setTimeout(() => {
        formik.handleReset();
        setIsDisabled(true);
        dispatch(reset());
        setIsMessageDisplay(false);
      }, 3000);
    } else if (isResponseFailed) {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Check Your Details Carefully Or Invalid Token');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  }, [isSaved, isResponseFailed]);

  const filteredCompanies = listVehicleCompany?.filter((item) => {
    return item.vehicletypesid === selectedVehicleType;
  });
  const filteredModel = listVehicleModel?.filter((item) => {
    return item.vehicleType === selectedVehicleType;
  });
  

  const columns = [
    { field: 'id', headerName: 'S.No.', width: 90 },
    {
      field: 'carConditionNumber',
      headerName: 'Vehicle Condition No.',
      width: 150,
      editable: false
    },
    {
      field: 'vehicleType',
      headerName: 'Vehicle Type',
      width: 100,
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
      field: 'vehicleRegistrationNumber',
      headerName: 'Vehicle Regd. No.',
      type: 'number',
      width: 180,
      editable: false
    },
  
    {
      field: 'model',
      headerName: 'Vehicle Model',
      type: 'number',
      width: 110,
      editable: false,
      renderCell: (data) => {
        // console.log(data,listVehicleModel)
        const { model } = data?.row;
        const idtoVehicleModel = listVehicleModel.filter((item) => {
          if (item?._id === model) {
            return item;
          }
        });
        return idtoVehicleModel[0]?.vehicleModel;
      }
    },
    {
      field: 'dateOfCarCondition',
      headerName: 'Date of Vehicle Condition',
      type: 'number',
      width: 180,
      editable: false,
      renderCell: (data) => {
        return new Date(data?.row?.dateOfCarCondition).toDateString();
      }
    },

    {
      field: 'createdAt',
      headerName: ' Entry Date',
      type: 'number',
      width: 150,
      editable: false,
      renderCell: (data) => {
        return new Date(data?.row?.createdAt).toDateString();
      }
    },
  ];
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Box sx={style}>
            <Stack direction="row" spacing={0} alignItems={'center'} sx={{ width: '100%' }}>
              <GenericSwitch onChange={onAutoChange} start={'Auto'} end={'Manual'} />
              <InputBase
                onChange={onCarConditionNumberChange}
                sx={{
                  ml: 1,
                  flex: 1,
                  backgroundColor: (theme) => theme.palette.primary.light,
                  padding: '3px 10px',
                  color: (theme) => theme.palette.primary.dark
                }}
                type="text"
                placeholder="Car Condition No."
                fullWidth
                disabled={isDisabled}
                autoFocus
                value={formik?.values?.addCarCondition?.details?.carConditionNumber}
              />
            </Stack>
          </Box>
        </Grid>
        <Grid item md={3} xs={12}>
          <GenericDropdown
            onChange={onVehicleTypeChange}
            value={formik?.values?.addCarCondition?.details?.vehicleType}
            onKeyUp={formik.handleChange}
            error={
              formik?.errors?.addCarCondition?.details?.vehicleType &&
              formik?.touched?.addCarCondition?.details?.vehicleType
            }
            data={listVehicleType?.map((item) => ({
              label: item?.vehicleType,
              value: item?._id
            }))}
            label="Vehicle Type"
          />
          <FormHelperText error>
            {formik.errors?.addCarCondition?.details?.vehicleType &&
              formik.touched?.addCarCondition?.details?.vehicleType &&
              formik.errors?.addCarCondition?.details?.vehicleType}
          </FormHelperText>
        </Grid>
        <Grid item md={3} xs={12}>
          <GenericDatePicker
            onAccept={onDateChange}
            disablePast
            closeOnSelect={true}
            onKeyUp={formik.handleChange}
            onBlur={formik.handleBlur}
            label={`Date of ${listVehicleType.find(item => item._id === formik?.values?.addCarCondition?.details?.vehicleType)?.vehicleType || ''} Condition`}
            />
          <FormHelperText error>
            {formik.errors.addCarCondition?.details?.date &&
              formik.touched.addCarCondition?.details?.date &&
              formik.errors.addCarCondition?.details?.date}
          </FormHelperText>
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericDropdown
            onChange={onManufacturerChange}
            value={formik?.values?.addCarCondition?.details?.manufacturer}
            onKeyUp={formik.handleChange}
            error={
              formik?.errors?.addCarCondition?.details?.manufacturer &&
              formik?.touched?.addCarCondition?.details?.manufacturer
            }
            data={filteredCompanies?.map((item) => ({
              label: item?.vehicleCompanyName,
              value: item?._id
            }))}
            label="Manufacturer"
          />
          <FormHelperText error>
            {formik.errors?.addCarCondition?.details?.manufacturer &&
              formik.touched?.addCarCondition?.details?.manufacturer &&
              formik.errors?.addCarCondition?.details?.manufacturer}
          </FormHelperText>
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericDropdown
            onChange={onModelChange}
            value={formik?.values?.addCarCondition?.details?.model}
            onKeyUp={formik.handleChange}
            error={
              formik?.errors?.addCarCondition?.details?.model &&
              formik?.touched?.addCarCondition?.details?.model
            }
            data={filteredModel?.map((item) => ({
              label: item?.vehicleModel,
              value: item?._id
            }))}
            label="Model"
          />
          <FormHelperText error>
            {formik.errors?.addCarCondition?.details?.model &&
              formik.touched?.addCarCondition?.details?.model &&
              formik.errors?.addCarCondition?.details?.model}
          </FormHelperText>
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericDatePicker
            onAccept={onYearOfManufactureChange}
            closeOnSelect={true}
            views={['year']}

            error={
              formik?.errors?.addCarCondition?.details?.yearOfManufacture &&
              formik?.touched?.addCarCondition?.details?.yearOfManufacture
            }
            onKeyUp={formik.handleChange}
            onBlur={formik.handleBlur}
            label="Year of Manufacturing"
          />
          <FormHelperText error>
            {formik.errors.addCarCondition?.details?.yearOfManufacture &&
              formik.touched.addCarCondition?.details?.yearOfManufacture &&
              formik.errors.addCarCondition?.details?.yearOfManufacture}
          </FormHelperText>
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericDropdown
            onChange={onColorChange}
            onKeyUp={formik.handleChange}
            error={
              formik?.errors?.addCarCondition?.details?.color &&
              formik?.touched?.addCarCondition?.details?.color
            }
            data={listVehicleColor?.map((item) => ({
              label: item?.vehicleColorName,
              value: item?._id
            }))}
            value={formik?.values?.addCarCondition?.details?.color}
            label="Color"
          />
          <FormHelperText error>
            {formik.errors?.addCarCondition?.details?.color &&
              formik.touched?.addCarCondition?.details?.color &&
              formik.errors?.addCarCondition?.details?.color}
          </FormHelperText>
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            onChange={onVehicleRegNoChange}
            error={
              formik?.errors?.addCarCondition?.details?.vehicleRegNo &&
              formik?.touched?.addCarCondition?.details?.vehicleRegNo
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.details?.vehicleRegNo &&
              formik?.touched?.addCarCondition?.details?.vehicleRegNo &&
              formik?.errors?.addCarCondition?.details?.vehicleRegNo
            }
            label="Vehicle Reg No."
            value={formik?.values?.addCarCondition?.details?.vehicleRegNo}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            onChange={onVehicleKMChange}
            error={
              formik?.errors?.addCarCondition?.details?.vehicleKM &&
              formik?.touched?.addCarCondition?.details?.vehicleKM
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.details?.vehicleKM &&
              formik?.touched?.addCarCondition?.details?.vehicleKM &&
              formik?.errors?.addCarCondition?.details?.vehicleKM
            }
            value={formik?.values?.addCarCondition?.details?.vehicleKM}
            label="Vehicle K.M"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            onChange={onVehicleValueChange}
            error={
              formik?.errors?.addCarCondition?.details?.vehicleValue &&
              formik?.touched?.addCarCondition?.details?.vehicleValue
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.details?.vehicleValue &&
              formik?.touched?.addCarCondition?.details?.vehicleValue &&
              formik?.errors?.addCarCondition?.details?.vehicleValue
            }
            value={formik?.values?.addCarCondition?.details?.vehicleValue}
            label="Vehicle Value"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={1}>
            <Grid item md={gridDistribution} xs={12}>
              <GenericDropdown
                label="Insurance Company Name"
                data={listVehicleInsuranceCompany?.map((item) => ({
                  label: item?.vehicleInsuranceCompanyName,
                  value: item?._id
                }))}
                onChange={onInsuranceCompanyNameChange}
                value={formik?.values?.addCarCondition?.details?.insuranceCompanyName?.value}
                onKeyUp={formik.handleChange}
                error={
                  formik?.errors?.addCarCondition?.details?.insuranceCompanyName?.value &&
                  formik?.touched?.addCarCondition?.details?.insuranceCompanyName?.value
                }
              />
              <FormHelperText error>
                {formik.errors?.addCarCondition?.details?.insuranceCompanyName?.value &&
                  formik.touched?.addCarCondition?.details?.insuranceCompanyName?.value &&
                  formik.errors?.addCarCondition?.details?.insuranceCompanyName?.value}
              </FormHelperText>
            </Grid>
            {insuranceType === 'other' ? (
              <Grid item xs={12} md={gridDistribution}>
                <GenericInput
                  onChange={onInsuranceCompanyNameOtherChange}
                  error={
                    formik?.errors?.addCarCondition?.details?.insuranceCompanyName?.otherValue &&
                    formik?.touched?.addCarCondition?.details?.insuranceCompanyName?.otherValue
                  }
                  onBlur={formik.handleBlur}
                  onKeyUp={formik.handleChange}
                  helperText={
                    formik?.errors?.addCarCondition?.details?.insuranceCompanyName?.otherValue &&
                    formik?.touched?.addCarCondition?.details?.insuranceCompanyName?.otherValue &&
                    formik?.errors?.addCarCondition?.details?.insuranceCompanyName?.otherValue
                  }
                  value={formik?.values?.addCarCondition?.details?.insuranceCompanyName?.otherValue}
                  label={'Enter Insu. Company Name'}
                />
              </Grid>
            ) : null}
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            onChange={onInsurancePolicyNoChange}
            error={
              formik?.errors?.addCarCondition?.details?.insurancePolicyNo &&
              formik?.touched?.addCarCondition?.details?.insurancePolicyNo
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.details?.insurancePolicyNo &&
              formik?.touched?.addCarCondition?.details?.insurancePolicyNo &&
              formik?.errors?.addCarCondition?.details?.insurancePolicyNo
            }
            value={formik?.values?.addCarCondition?.details?.insurancePolicyNo}
            label="Insurance Policy No."
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            chassisNo
            onChange={onChassisNoChange}
            error={
              formik?.errors?.addCarCondition?.details?.chassisNo &&
              formik?.touched?.addCarCondition?.details?.chassisNo
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.details?.chassisNo &&
              formik?.touched?.addCarCondition?.details?.chassisNo &&
              formik?.errors?.addCarCondition?.details?.chassisNo
            }
            value={formik?.values?.addCarCondition?.details?.chassisNo}
            label="Chassis No."
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            onChange={onEngineNoChange}
            error={
              formik?.errors?.addCarCondition?.details?.engineNo &&
              formik?.touched?.addCarCondition?.details?.engineNo
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.details?.engineNo &&
              formik?.touched?.addCarCondition?.details?.engineNo &&
              formik?.errors?.addCarCondition?.details?.engineNo
            }
            value={formik?.values?.addCarCondition?.details?.engineNo}
            label="Engine No."
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Typography variant="h6" sx={{ my: 3 }}>
            Accessories Details
          </Typography>
        </Grid>
        <Fragment>
          {listVehicleAccessory.map((ele, index) => {
            return (
              <Grid item md={6} key={index}>
                <Grid container spacing={0}>
                  <Grid item xs={6} lg={8}>
                    <GenericInput defaultValue={ele.vehicleAccessory}
                     type={'readOnly'} 
                     />
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <Box className="radioClass">
                      <GenericRadio
                      //  defaultValue={ele.isActive ? false : true}
                        orientation={'row'}
                        options={option}
                        onChange={(evt)=>handleChangeRadio(ele, evt)}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Fragment>
        <Grid item md={12} xs={12} sx={{ py: 3 }}></Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            onChange={onBatteryNoChange}
            error={
              formik?.errors?.addCarCondition?.accessoriesDetails?.batteryNo &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.batteryNo
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.accessoriesDetails?.batteryNo &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.batteryNo &&
              formik?.errors?.addCarCondition?.accessoriesDetails?.batteryNo
            }
            value={formik?.values?.addCarCondition?.accessoriesDetails?.batteryNo}
            label="Battery No."
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            onChange={onTyreNoChange}
            error={
              formik?.errors?.addCarCondition?.accessoriesDetails?.tyreNo &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.tyreNo
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.accessoriesDetails?.tyreNo &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.tyreNo &&
              formik?.errors?.addCarCondition?.accessoriesDetails?.tyreNo
            }
            value={formik?.values?.addCarCondition?.accessoriesDetails?.tyreNo}
            label="Tyre No."
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            onChange={onAnyOtherAccesoriesChange}
            label="Any Other Accessories"
            error={
              formik?.errors?.addCarCondition?.accessoriesDetails?.anyOtherAccesories &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.anyOtherAccesories
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.accessoriesDetails?.anyOtherAccesories &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.anyOtherAccesories &&
              formik?.errors?.addCarCondition?.accessoriesDetails?.anyOtherAccesories
            }
            value={formik?.values?.addCarCondition?.accessoriesDetails?.anyOtherAccesories}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            onChange={onAnyRemarkChange}
            label="Any Remark"
            error={
              formik?.errors?.addCarCondition?.accessoriesDetails?.anyRemark &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.anyRemark
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.accessoriesDetails?.anyRemark &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.anyRemark &&
              formik?.errors?.addCarCondition?.accessoriesDetails?.anyRemark
            }
            value={formik?.values?.addCarCondition?.accessoriesDetails?.anyRemark}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            onChange={onScratchesChange}
            error={
              formik?.errors?.addCarCondition?.accessoriesDetails?.scratches &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.scratches
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.accessoriesDetails?.scratches &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.scratches &&
              formik?.errors?.addCarCondition?.accessoriesDetails?.scratches
            }
            value={formik?.values?.addCarCondition?.accessoriesDetails?.scratches}
            label="Scratches"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <GenericInput
            onChange={onDentChange}
            error={
              formik?.errors?.addCarCondition?.accessoriesDetails?.dent &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.dent
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.accessoriesDetails?.dent &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.dent &&
              formik?.errors?.addCarCondition?.accessoriesDetails?.dent
            }
            value={formik?.values?.addCarCondition?.accessoriesDetails?.dent}
            label="Dent"
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <GenericInput
            onChange={onAnyOtherVisibleObservationChange}
            error={
              formik?.errors?.addCarCondition?.accessoriesDetails?.anyOtherVisibleObservation &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.anyOtherVisibleObservation
            }
            onBlur={formik.handleBlur}
            onKeyUp={formik.handleChange}
            helperText={
              formik?.errors?.addCarCondition?.accessoriesDetails?.anyOtherVisibleObservation &&
              formik?.touched?.addCarCondition?.accessoriesDetails?.anyOtherVisibleObservation &&
              formik?.errors?.addCarCondition?.accessoriesDetails?.anyOtherVisibleObservation
            }
            value={formik?.values?.addCarCondition?.accessoriesDetails?.anyOtherVisibleObservation}
            label="Any Other Visible Observation"
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <GenericLoadingButton
            sx={{ my: 2, float: 'right' }}
            type="submit"
            onClick={onSaveCarConditionHandler}
          >
            <span>Preview</span>
          </GenericLoadingButton>
        </Grid>
        {isMessageDisplay && (
          <Toasty show={isMessageDisplay} message={message} type={messageType} />
        )}
        <Grid item xs={12}>
          {Array.isArray(carConditionList) && (
            <>
              <GenericDataGrid
                rows={carConditionList.map((item, index) => ({
                  ...item,
                  id: index + 1
                }))}
                columns={columns}
              />
            </>
          )}
        </Grid>
      </Grid>
    </form>
  );
};
export default CarConditionForm;
