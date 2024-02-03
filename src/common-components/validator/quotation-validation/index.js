import * as Yup from 'yup';
import {
  ADDRESS_REGEX,
  NAME_WITH_CHARACTERS_REGEX,
  MOBILE_REGEX,
  PINCODE_REGEX,
  AMOUNTS_REGEX
} from '../../../utils/regular-expressions';

export const addQuotationInitialValues = {
  addQuotation: {
    details: {
      shiftingType: 'LOCAL',
      shiftingLuggage: '',
      templateName: '',
      quotationAuto: false,
      quotationAutoValue: 0,
      billingBy: 'by Individual',
      enquirySource: 'Website',
      quotationDate: '',
      dateOfMoving: '',
      vehicleType: '',
      manufacturer: '',
      model: '',
      // companyPartyName: "",
      partyName: '',
      mobileNumber: '',
      pickUpAddress: {
        autoFetch: true,
        pincode: '',
        state: '',
        city: '',
        locality: '',
        currentFloor: '',
        liftStatus: '',
        address: ''
      },
      dropAddress: {
        autoFetch: true,
        pincode: '',
        state: '',
        city: '',
        locality: '',
        currentFloor: '',
        liftStatus: '',
        address: ''
      }
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
    },
    freight: {
      partLoad: true,
      fullLoad: false,
      single: true,
      shared: false,
      lorryType: '',
      freightCharges: {
        partLoadCharge: 0,
        fullLoadCharge: 0
      },
      packingCharge: {
        type: 'not-required',
        charges: {
          partLoadCharge: 0,
          fullLoadCharge: 0
        }
      },
      unpackingCharge: {
        type: 'not-required',
        charges: {
          partLoadCharge: 0,
          fullLoadCharge: 0
        }
      },
      packingMaterialCharge: {
        type: 'not-required',
        charges: {
          partLoadCharge: 0,
          fullLoadCharge: 0
        }
      },
      loadingCharge: {
        type: 'not-required',
        additional: {
          loadedBy: 'company',
          floor: '-1',
          lift: 'yes'
        },
        charges: {
          partLoadCharge: 0,
          fullLoadCharge: 0
        }
      },
      unloadingCharge: {
        type: 'not-required',
        additional: {
          loadedBy: 'company',
          floor: '-1',
          lift: 'yes'
        },
        charges: {
          partLoadCharge: 0,
          fullLoadCharge: 0
        }
      },
      jobTypeCharges: {
        "jobType": "",
        "qty": "",
        "partLoad": {
          "ratePerItem": "",
          "amount": ""
        },
        "fullLoad": {
          "ratePerItem": "",
          "amount": ""
        }
      },
      jobTypeList: []
    },
    charges: {
      advanceAmount: '',

      surcharge: {
        required: 'extra',
        value: 0
      },
      discount: {
        type: 'flat',
        value: 0
      },

      gst: {
        mode: '',
        percentage: 0,
        type: ''
      },

      transitInsurance: {
        required: 'not-required',
        options: 'optional',
        charges: {
          luggageType: '',
          insurancePerc: '',
          gst: '',
          value: 0
        },
        listTransitCharges:[]
      },
      storeCharges: {
        required: 'not-required',
        options: '',
        from: '',
        to: '',
        amount: 0
      },
      otherCharges: {
        required: 'false',
        jobType: '',
        value: 0
      },
      otherDetails: {
        q1Reply: 'true',
        q1Description: '',
        q2Reply: 'false',
        q2Description: ''
      }
    }
  }
};

export const addQuotationValidationSchema = Yup.object().shape({
  addQuotation: Yup.object({
    details: Yup.object({
      shiftingType: Yup.string('Select Shifting Type').required('Shifting Type Is Required'),
      templateName: Yup.string('Select Template Name').required('Template Name Is Required'),
      billingBy: Yup.string('Select Name').required('Field Is Required'),
      // shiftingLuggage: Yup.string('Select Shifting Luggage').required(
      //   'Shifting Luggage Is Required'
      // ),
      quotationDate: Yup.string('Select Your Quotation Date')
        .required('Quotation Date Is Required')
        .matches(/^\d+$/, 'Please Enter Valid Quotation Date'),
      dateOfMoving: Yup.string('Select Your Date of Moving')
        .required('Date of Moving Is Required')
        .matches(/^\d+$/, 'Please Enter Valid Quotation Date'),
      partyName: Yup.string('Enter Party Name').when('billingBy', {
        is: 'by Individual',
        then: (schema) => schema.required('Party Name Is Required')
          .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
        otherwise: null
      }),
      mobileNumber: Yup.string('Enter Mobile Number').when('billingBy', {
        is: 'by Individual',
        then: (schema) => schema.required('Mobile Number Is Required').max(10, 'Mobile Number Should Be 10 Digits Only').matches(MOBILE_REGEX, 'Please Enter Valid Mobile Number'),
        otherwise: null
      }),
      pickUpAddress: Yup.object({
        pincode: Yup.string('Enter Pickup Pincode')
          .required('Pickup Pincode Is Required')
          .max(6, 'Pickup Pincode Should Be 6 Digits Only')
          .matches(PINCODE_REGEX, 'Please Enter Valid Pickup Pincode')
        // address:Yup.string("Enter Pickup Address").required("Pickup Address Is Required")
      }),
      dropAddress: Yup.object({
        pincode: Yup.string('Enter Drop Pincode')
          .required('Drop Pincode Is Required')
          .max(6, 'Drop Pincode Should Be 6 Digits Only')
          .matches(PINCODE_REGEX, 'Please Enter Valid Drop Pincode')
        // address:Yup.string("Enter Drop Address").required("Drop Address Is Required")
      })
    }),
    billingDetails: Yup.object().when('details.billingBy', {
      is: 'by Company',
      then: (schema) =>
        schema.shape({
          companyName: Yup.string('Enter Company Name')
            .required('Company Name Is Required')
            .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
          authorityPersonName: Yup.string('Enter Authority Person Name')
            .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'),
          authorityMobileNumber: Yup.string('Enter Authority Mobile Number')
            .required('Authority Mobile Number Is Required')
            .matches(MOBILE_REGEX, 'Please Enter Valid Number')
        }),
      otherwise: null
    })
  })
});
