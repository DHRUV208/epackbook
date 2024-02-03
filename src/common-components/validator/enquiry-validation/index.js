import * as Yup from 'yup';
import {
  MOBILE_REGEX,
  NAME_WITH_CHARACTERS_REGEX,
  ADDRESS_REGEX,
  PINCODE_REGEX
} from '../../../utils/regular-expressions';

export const enquiryInitialValues = {
  addEnquiry: {
    shiftingType: 'LOCAL',
    billingBy: 'by Individual',
    enquiryManager: 'admin',
    partyName: '',
    mobileNumber: '',
    shiftingLuggage: ["65745a4a13a0110ec4fde369"],
    pickUpAddress: {
      pinCode: '',
      state: '',
      city: '',
      locality: '',
      address: '',
      landmark: '',
      currentFloor: '',
      liftStatus: ''
    },
    deliveryAddress: {
      pinCode: '',
      state: '',
      city: '',
      locality: '',
      address: '',
      landmark: '',
      currentFloor: '',
      liftStatus: ''
    },
    billingDetails: {
      companyName: '',
      approvalAuthority: '',
      authorityPersonName: '',
      authorityMobileNumber: '',
      companyAddress: '',
      companyGST: '',
      employeeName: '',
      employeeDesignation: '',
      employeeMobile: ''
    }
  }
};
export const addEnquiryValidationSchema = Yup.object().shape({
  addEnquiry: Yup.object().shape({
    shiftingType: Yup.string('Select Any Shifting Type').required('Shifting Type Is Required'),
    billingBy: Yup.string('Select Any').required('Required'),
    partyName: Yup.string('Enter Party Name').when('billingBy', {
      is: 'by Individual',
      then: (schema) =>
        schema
          .required('Party Name Is Required')
          .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
      otherwise: null
    }),

    mobileNumber: Yup.string('Enter Mobile Number').when('billingBy', {
      is: 'by Individual',
      then: (schema) =>
        schema
          .required('Mobile Number Is Required')
          .max(10, 'Mobile Number Should Be 10 Digits Only')
          .matches(MOBILE_REGEX, 'Please Enter Valid Mobile Number'),
      otherwise: null
    }),
    shiftingLuggage: Yup.lazy((val) =>
      Array.isArray(val)
        ? Yup.array().of(Yup.string()).min(1, 'Please Select At Least One Type Of Luggage')
        : Yup.array().required('Please Select Shifting Luggage')
    ),
    pickUpAddress: Yup.object().shape({
      pinCode: Yup.string('Enter Pickup Address Pincode')
        .required('Pickup Address Pincode Is Required')
        .max(6, 'Pickup Address Pincode Should Be 6 Digits Only')
        .matches(PINCODE_REGEX, 'Please Enter Valid Pickup Address Pincode')
    }),
    deliveryAddress: Yup.object().shape({
      pinCode: Yup.string('Enter Delivery Address Pincode')
        .required('Delivery Address Pincode Is Required')
        .max(6, 'Delivery Address Pincode Should Be 6 Digits Only')
        .matches(PINCODE_REGEX, 'Please Enter Valid Delivery Address Pincode')
    }),
    billingDetails: Yup.object().when('billingBy', {
      is: 'by Company',
      then: (schema) =>
        schema.shape(
          {
            companyName: Yup.string('Enter Company Name')
              .required('Company Name Is Required')
              .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),

            approvalAuthority: Yup.string('Select Approval Authority'),

            // authorityPersonName: Yup.string('Enter Authority Person Name')
            //   .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),

            authorityMobileNumber: Yup.string('Enter Authority Mobile Number').matches(
              MOBILE_REGEX,
              'Please Enter Valid Mobile Number'
            ),

            companyAddress: Yup.string('Enter Company Address').matches(
              ADDRESS_REGEX,
              'Please Enter Valid Address'
            ),

            // employeeMobile: Yup.string('Enter Mobile').when('authorityMobileNumber', {
            //   is: (authorityMobileNumber) => !authorityMobileNumber,
            //   then:(schema)=> Yup.string().required('Employee Mobile is required'),
            //   otherwise:(schema)=> Yup.string('Enter mobile')
            // }),
        
            // authorityMobileNumber: Yup.string().when('employeeMobile', {
            //   is: (employeeMobile) => !employeeMobile,
            //   then:(schema)=> Yup.string().required('Authority Mobile No. is required').matches(MOBILE_REGEX, 'Please Enter Valid Name'),
            //   otherwise:(schema)=> Yup.string().matches(MOBILE_REGEX,'Please Enter Valid Name')          
            //   }),

            employeeName: Yup.string('Enter Employee Name').when('authorityPersonName', {
                is: (authorityPersonName) =>
                  !authorityPersonName,
                then: (schema) => Yup.string()
                  .required('Employee Name is required')
                  .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
                otherwise:(schema)=> Yup.string().matches(
                  NAME_WITH_CHARACTERS_REGEX,
                  'Please Enter Valid Name'
                )
              }),

              authorityPersonName: Yup.string('Enter Authority Person Name').when('employeeName', {
              is: (employeeName) => !employeeName,
              then: (schema) => Yup.string()
              .required('Authority Person Name is required')
              .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
              otherwise:(schema)=> Yup.string().matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name')
            })
          },['employeeName','authorityPersonName']),
      otherwise: null
    })
  })
});