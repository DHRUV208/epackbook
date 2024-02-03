import * as Yup from 'yup';
import {

  DRIVER_LICENSE,
  PINCODE_REGEX,
 
} from '../../../../utils/regular-expressions';
export const vehicleInitialValues = {
  chooseEntity: 'head-office',
  entityValue: {
    entityId: ''
  },
  registrationNo: '',
  chooseVehicleCompanyName: '',
  chooseVehicleType: '',
  chooseVehicleModel:'',
  manufacturingYear: '',
  chassisNo: '',
  engineNo: '',
  vehicleRCNo: '',
  pollutionCertificateNo: '',
  pollutionRenwalDate: '',
  permitNo: '',
  permitRenwalDate: ''
};
export const vehicleDriverInitialValues = {
  chooseEntity: 'head-office',
  entityValue: {
    entityId: ''
  },
  driverName: '',
  driverMobileNo: '',
  driverLicenceNo: '',
  driverAadharNo: '',
  uploadLicence: '',
  uploadAadhar: '',
  uploadAadharBack: '',
  permanentAddress: {
    pinCode: '',
    state: '',
    city: '',
    locality: '',
    driverAddress: ''
  },
  currentAddress: {
    sameAsPermanentAddress: false,
    pinCode: '',
    state: '',
    city: '',
    locality: '',
    driverAddress: ''
  }
};

export const vehicleAccessoryInitialValues = {
  value: '',
  chooseVehicleType: ''
};
export const vehicleColorInitialValues = {
  value: ''
};
export const vehicleCompanyInitialValues = {
  value: '',
  chooseVehicleType: ''
};
export const vehicleInsuranceCompanyInitialValues = {
  value: ''
};
export const vehicleSizeInitialValues = {
  value: '',
  chooseVehicleType: ''
};
export const vehicleTypeInitialValues = {
  value: ''
};
export const vehicleModelInitialValues = {
  value: '',
  chooseVehicleCompanyName: '',
  chooseVehicleType: ''
};

export const addvehicleAccessoryValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Vehicle Accessory').required('Vehicle Accessory Is Required'),
  chooseVehicleType: Yup.string('Choose Vehicle Type').required('Vehicle Type Is Required')
});

export const addvehicleColorValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Vehicle Color').required('Vehicle Color Is Required')
});

export const addvehicleSizeValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Vehicle Size').required('Vehicle Size Is Required'),
  chooseVehicleType: Yup.string('Choose Vehicle Type').required('Vehicle Type Is Required')
});

export const addvehicleTypeValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Vehicle Type').required('Vehicle Type Is Required')
});

export const addvehicleModelValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Vehicle Model').required('Vehicle Model Is Required'),
  chooseVehicleType: Yup.string('Choose Vehicle Type').required('Vehicle Type Is Required'),
  chooseVehicleCompanyName: Yup.string('Choose Vehicle Company Name').required(
    'Vehicle Company Name Is Required'
  )
});

export const addvehicleCompanyValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Vehicle Company').required('Vehicle Company Is Required'),
  chooseVehicleType: Yup.string('Choose Vehicle Type').required('Vehicle Type Is Required')
});

export const addvehicleCompanyInsuranceValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Vehicle Insurance Company').required(
    'Vehicle Insurance Company  Is Required'
  )
});

export const addvehicleDriverValidationSchema = Yup.object().shape({
  chooseEntity: Yup.string('choose Entity').required('Choose Entity is Required'),
  entityValue: Yup.object().when(['chooseEntity'], {
    is: (chooseEntity) => ['franchise', 'branch'].includes(chooseEntity),
    then: (schema) =>
      schema.shape({
        entityId: Yup.string('Select Choose Branch / Franchise').required(
          'Choose Branch / Franchise is Required'
        )
      })
  }),
  driverName: Yup.string('Enter Vehicle Driver Name').required('Vehicle Driver Name  Is Required'),
  driverMobileNo: Yup.string('Enter Vehicle Driver Mobile').required(
    'Vehicle Driver Mobile  Is Required'
  ),
  driverLicenceNo: Yup.string('Enter Vehicle Driver Licence No').required(
    'Vehicle Driver Licence No  Is Required')
    .matches(DRIVER_LICENSE,'Please Enter Valid Licence Number'),
  driverAadharNo: Yup.string('Enter Vehicle Driver AadharNo').required(
    'Vehicle Driver AadharNo  Is Required'
  ),
  permanentAddress:Yup.object().shape({
    pinCode: Yup.string('Enter Pickup Address Pincode')
    .required('Pickup Address Pincode Is Required')
    .max(6, 'Pickup Address Pincode Should Be 6 Digits Only')
    .matches(PINCODE_REGEX, 'Please Enter Valid Pickup Address Pincode')
}),
currentAddress:Yup.object().shape({
  pinCode: Yup.string('Enter Pickup Address Pincode')
  // .required('Pickup Address Pincode Is Required')
  .max(6, 'Pickup Address Pincode Should Be 6 Digits Only')
  .matches(PINCODE_REGEX, 'Please Enter Valid Pickup Address Pincode')
}),    
});

export const addvehicleValidationSchema = Yup.object().shape({
  chooseEntity: Yup.string('Select Choose Entity').required('Choose Entity is Required'),
  entityValue: Yup.object().when(['chooseEntity'], {
    is: (chooseEntity) => ['franchise', 'branch'].includes(chooseEntity),
    then: (schema) =>
      schema.shape({
        entityId: Yup.string('Select Choose Branch / Franchise').required(
          'Choose Branch / Franchise is Required'
        )
      })
  }),
  registrationNo: Yup.string('Enter Vehicle').required('Vehicle RegistrationNo. Is Required'),
  chooseVehicleType: Yup.string('choose Vehicle Type').required('Vehicle  Is Required'),
  chooseVehicleCompanyName: Yup.string('choose Vehicle Company Name').required('Vehicle  Type  Is Required'),
  chassisNo: Yup.string('Enter Vehicle Chassis No').required('Vehicle Chassis No Is Required'),
  manufacturingYear: Yup.string('choose Vehicle Manufacturing Year').required('Vehicle Manufacturing Year Is Required'),
  permitRenwalDate: Yup.string('choose Vehicle permit Renwal Date').required('Vehicle Permit Renwal Date Is Required'),
  pollutionRenwalDate: Yup.string('choose Vehicle Pollution Renwal Date').required('Vehicle Pollution Renwal Date Is Required'),
  engineNo: Yup.string('Enter Vehicle EngineNo No').required('Vehicle EngineNo No Is Required'),
  vehicleRCNo: Yup.string('Enter Vehicle RC No').required('Vehicle RC No Is Required'),
  pollutionCertificateNo: Yup.string('Enter Pollution Certificate No').required('Pollution Certificate No Is Required'),
  permitNo: Yup.string('Enter Permit No').required('Vehicle Permit No Is Required'),

});