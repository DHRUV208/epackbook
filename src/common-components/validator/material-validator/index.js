import * as Yup from 'yup';
export const addMaterialInitialValues = {
  addMaterial:{
    chooseVehicleSize:'',
    chooseUnitType:'',
  materialList:[],

  value:''
  }
  // packingTypes: {
  //   value: '',
  //   unitType: ''
  // },
  // bubbleWraps: {
  //   value: '',
  //   unitType: ''
  // },
  // corrugateSheet: {
  //   value: '',
  //   unitType: ''
  // },
  // waterproofLamination: {
  //   value: '',
  //   unitType: ''
  // },
  // thermocol: {
  //   value: '',
  //   unitType: ''
  // },
  // cartoonBoxes: {
  //   value: '',
  //   unitType: ''
  // },
  // airBubble: {
  //   value: '',
  //   unitType: ''
  // },
  // newsPaper: {
  //   value: '',
  //   unitType: ''
  // },
  // foamSheet: {
  //   value: '',
  //   unitType: ''
  // },
  // plasticCarate: {
  //   value: '',
  //   unitType: ''
  // },
  // woodenFrame: {
  //   value: '',
  //   unitType: ''
  // },
  
  
};

export const addMaterialValidationSchema = Yup.object().shape({
  lorryType: Yup.string('').required('').matches(),
  labour: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  }),
  packingTypes: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  }),
  bubbleWraps: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  }),
  corrugateSheet: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  }),
  waterproofLamination: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  }),
  thermocol: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  }),
  cartoonBoxes: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  }),
  airBubble: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  }),
  newsPaper: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  }),
  foamSheet: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  }),
  plasticCarate: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  }),
  woodenFrame: Yup.object().shape({
    value: Yup.string('').required('').matches(),
    unitType: Yup.string('').required('').matches()
  })
});
