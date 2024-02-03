import * as Yup from 'yup'; 
import { NAME_WITH_CHARACTERS_REGEX } from '../../../../utils/regular-expressions'; 
 
export const templateInitialValues = { 
  templateName: '', 
  moduleId: '', 
  templateVersion: '', 
  templateHTML: '' 
}; 
export const addTemplateManagementValidationSchema = Yup.object().shape({ 
  templateName: Yup.string('Enter Name') 
    .required('Name Is Required') 
    .matches(NAME_WITH_CHARACTERS_REGEX, 'Please Enter Valid Name'), 
  moduleId: Yup.string('Select Template Type').required('Template Type Is Required'), 
  templateVersion: Yup.string('Enter Category').required('Category is Required'), 
  templateHTML: Yup.string('Enter Template Html') 
    .required('Template Html is Required') 
    .matches(/<[a-zA-Z][^>]*>/, 'Please Enter HTML') 
});
