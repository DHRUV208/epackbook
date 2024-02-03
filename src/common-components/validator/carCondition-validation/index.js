import * as Yup from 'yup';
import {
  ADDRESS_REGEX,
  NAME_WITH_CHARACTERS_REGEX,
  MOBILE_REGEX,
  PINCODE_REGEX,
  AMOUNTS_REGEX
} from '../../../utils/regular-expressions';

export const addCarConditionInitialValues = {
  addCarCondition: {
    details: {
      auto: false,
      carConditionNumber: '',
      vehicleType: '',
      date: '',
      manufacturer: '',
      model: '',
      yearOfManufacture: '',
      color: '',
      vehicleRegNo: '',
      vehicleKM: '',
      vehicleValue: '',
      insurancePolicyNo: '',
      insuranceCompanyName: {
        value: '',
        otherValue: ''
      },
      // insuranceCompanyNameOther: "",
      chassisNo: '',
      engineNo: ''
    },
    AccessoryList:[],
    accessoriesDetails: {
      stepnie: {
        required: 'false',
        label: 0
      },
      wheelCaps: {
        required: 'false',
        label: 0
      },
      sideRareViewMirror: {
        required: 'false',
        label: 0
      },
      carRadioPlayer: {
        required: 'false',
        label: 0
      },
      airCondition: {
        required: 'false',
        label: 0
      },
      lighter: {
        required: 'false',
        label: 0
      },
      digitalWatch: {
        required: 'false',
        label: 0
      },
      speaker: {
        required: 'false',
        label: 0
      },
      toolkit: {
        required: 'false',
        label: 0
      },
      jack: {
        required: 'false',
        label: 0
      },
      wiperArmsAndBlades: {
        required: 'false',
        label: 0
      },
      mudFlap: {
        required: 'false',
        label: 0
      },
      floorRubberCarpet: {
        required: 'false',
        label: 0
      },
      fuel: {
        required: 'false',
        label: 0
      },
      carCover: {
        required: 'false',
        label: 0
      },
      batteryNo: '',
      tyreNo: '',
      anyOtherAccesories: '',
      anyRemark: '',
      scratches: '',
      dent: '',
      anyOtherVisibleObservation: ''
    },
    frontImage: '',
      backImage: '',
      frontRightCornerImage: '',
      frontLeftCornerImage: '',
      rightSideDoorImage: '',
      leftSideDoorImage: '',
      rightRearCornerImage: '',
      leftRearCornerImage: ''
  },
  editCarCondition: {}
};

export const addCarConditionValidationSchema = Yup.object().shape({
  addCarCondition: Yup.object({
    details: Yup.object({
      // auto:Yup.boolean("Required").required("Required"),
      carConditionNumber: Yup.string('Enter Car Condition Number').required(
        'Car Condition Number is Required'
      ),
      vehicleType: Yup.string('Select Template Name').required('Template Name Is Required'),
      date: Yup.string('Select Your Car Condition Date')
        .required('Car Condition date Is Required')
        .matches(/^\d+$/, 'Please Enter Valid Car Condition Date'),
      manufacturer: Yup.string('Select Manufacturer Name').required(
        'Manufacturer Name Is Required'
      ),
      model: Yup.string('Select Model Name').required('Model Name Is Required'),
      yearOfManufacture: Yup.string('Select Year Of Manufacturing')
        .required('Year Of Manufacturing Is Required')
        .matches(/^\d+$/, 'Please Enter Valid Year Of Manufacturing'),
      color: Yup.string('Select Color').required('Color Is Required'),
      vehicleRegNo: Yup.string('Enter Vehicle Registration No.').required(
        'Vehicle Registration No. Is Required'
      ),
      vehicleKM: Yup.string('Enter Vehicle KM'),
      vehicleValue: Yup.string('Enter Vehicle Value'),
      insurancePolicyNo: Yup.string('Enter Insurance Policy No.'),
      insuranceCompanyName: Yup.object().shape({
        value: Yup.string('Enter Insurance Company Name'),
        otherValue: Yup.string('Enter Insurance Company Name')
      }),
      chassisNo: Yup.string('Enter Chesis No.'),
      engineNo: Yup.string('Enter Engine No.')
    }),
    accessoriesDetails: Yup.object({
      batteryNo: Yup.string('Enter Battery No.'),
      tyreNo: Yup.string('Enter Tyre No.'),
      scratches: Yup.string('Enter Scratches'),
      dent: Yup.string('Enter Dent')
    })
  })
});
