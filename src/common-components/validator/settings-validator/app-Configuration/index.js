import * as Yup from 'yup';
import { NAME_WITH_CHARACTERS_REGEX } from '../../../../utils/regular-expressions';
export const configurationInitialValues = {
  chooseEntity: 'head-office',
  entityValue: {
    entityId: ''
  },
  chooseModule: '',
  prefix: '',
  suffix: ''
};
export const unitTypeInitialValues = {
  value: ''
};

export const paymentTypeInitialValues = {
  value: ''
};
export const paymentModeInitialValues = {
  value: ''
};



export const addUnitTypeValidationSchema = Yup.object().shape({
  value: Yup.string('Enter Unit Type')
    .required('Unit Type Is Required')
    .matches(NAME_WITH_CHARACTERS_REGEX, 'Unit type should be characters only.')
});

export const appConfigurationValidationSchema = Yup.object().shape({
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

  chooseModule: Yup.string('Select Choose Module').required('Choose Module is Required'),
  prefix: Yup.string('Enter Prefix').required('Prefix  Is Required'),
  suffix: Yup.string('Enter Suffix').required('Suffix Is Required')
});

export const addPaymentTypesSchema = Yup.object().shape({
  value: Yup.string('Enter Payment Type').required('Payment Type Is Required')
});
export const addPaymentModesSchema = Yup.object().shape({
  value: Yup.string('Enter Payment Mode').required('Payment Mode Is Required')
});
