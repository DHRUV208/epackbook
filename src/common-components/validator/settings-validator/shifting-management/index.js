import * as Yup from 'yup';
import {
  NAME_WITH_CHARACTERS_REGEX,
  ALPHA_NUMERIC_REGEX,
  NUMERIC_DECIMAL_REGEX,
  FLOORS_REGEX,
  INSURANCE_PERCENTAGE_REGEX
} from '../../../../utils/regular-expressions';

export const floorInitialValues = {
    value: ''
  }
export const insurancePercentageInitialValues = {
    value: ''
  }
export const materialInitialValues = {
    value: ''
  }
export const movingModeInitialValues = {
    value: ''
  }
export const movingTypeInitialValues = {
    value: ''
  }
export const packingTypeInitialValues = {
    value: ''
  }
export const shiftingLuggageInitialValues = {
    value: ''
  }
export const transitInsuranceInitialValues = {
    value: ''
  }
  

export const addFloorValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Floor').required("required").matches(FLOORS_REGEX,'Please Enter Valid Name')
});
export const addInsurancePercentageValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Add Insurance Percentage').required("Required").matches(NUMERIC_DECIMAL_REGEX,'Please Enter Valid Values')
});
export const addMaterialValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Material').required("Required")
});
export const addMovingModeValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Moving Mode').required("Required")
});
export const addMovingTypeValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Moving Type').required("Required")
});
export const addPackingTypeValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Packing Type').required("Required")
});
export const addShiftingLuggageValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Shifting Luggage').required("Required")
});
export const addTransitInsuranceValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Transite Insurance').required("Required")
});
