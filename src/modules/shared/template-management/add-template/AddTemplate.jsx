import { Box, Grid, FormHelperText } from '@mui/material';
import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
  updateTemplateName,
  updateModuleId,
  updateTemplateVersion,
  updateTemplateHtml,
  requestToSaveTemplate,
  requestToGetAllTemplate,
  resetTemplate,
  resetTemplateApiStatus
} from '../../../../store/slices/TemplateManagementSlice';
import { requestToGetAllModule, requestToGetAllSubModule } from '../../../../store/slices/ContentManagementSlice';
import {
  templateInitialValues,
  addTemplateManagementValidationSchema
} from '../../../../common-components/validator/settings-validator/template-setting';
import Toasty from '../../../../common-components/form-elements/toasty';
import GenericInput from '../../../../common-components/form-elements/genericInput';
import GenericDropdown from '../../../../common-components/form-elements/genericDropdown';
import GenericLoadingButton from '../../../../common-components/form-elements/genericLoadingButton';

const TemplateVersion = [
  {
    label: 'FREE',
    value: 'Free'
  },
  {
    label: 'BASIC',
    value: 'Basic'
  },
  {
    label: 'PRO',
    value: 'Pro'
  },
  {
    label: 'UNLIMITED',
    value: 'Unlimited'
  }
];
const AddTemplate = () => {
  const [firstRenderDone, setFirstRenderDone] = useState(false);
  const [isMessageDisplay, setIsMessageDisplay] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const {
    templateManagement: {
      template: { add, apiStatus }
    },
    contentManagement: {
      modules: { listModules },
      subModules: { listSubModules }
    },
    auth: { loginSuccess }
  } = useSelector((state) => state);

  const formik = useFormik({
    initialValues: templateInitialValues,
    validationSchema: addTemplateManagementValidationSchema
  });
  const dispatch = useDispatch();
  const onTemplateNameChange = (evt) => {
    formik.setFieldValue('templateName', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateTemplateName(value));
  };
  const onModuleChange = (evt) => {
    formik.setFieldValue('moduleId', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateModuleId(value));
  };
  const onTemplateVersionChange = (evt) => {
    formik.setFieldValue('templateVersion', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateTemplateVersion(value));
  };
  const onTemplateHtmlChange = (evt) => {
    formik.setFieldValue('templateHTML', evt?.target?.value);
    const { value } = evt.target;
    dispatch(updateTemplateHtml(value));
  };

  const onSaveTemplateHandler = () => {
    let payload = {
      templateName: add?.templateName,
      moduleId: add?.moduleId,
      templateVersion: add?.templateVersion,
      templateHTML: add?.templateHTML
    };
    if (formik.isValid && formik.dirty) {
      dispatch(requestToSaveTemplate(payload));
    } else {
      setIsMessageDisplay(true);
      setMessageType('warning');
      setMessage('Enter Correctly');
      setTimeout(() => {
        setIsMessageDisplay(false);
      }, 3000);
    }
  };

  useEffect(() => {
    setFirstRenderDone(true);
    dispatch(resetTemplate());
    dispatch(requestToGetAllModule());
    dispatch(requestToGetAllSubModule());
  }, []);

  useEffect(() => {
    if (firstRenderDone) {
      if (apiStatus?.isSaved) {
        setIsMessageDisplay(true);
        setMessageType('success');
        setMessage('Template Added');
        setTimeout(() => {
          formik.handleReset();
          dispatch(resetTemplate());
          setIsMessageDisplay(false);
        }, 3000);
      } else if (apiStatus?.isResponseFailed) {
        setIsMessageDisplay(true);
        setMessageType('warning');
        setMessage('Something Went Wrong');
        setTimeout(() => {
          setIsMessageDisplay(false);
          dispatch(resetTemplateApiStatus());
        }, 3000);
      }
    }
  }, [apiStatus?.isSaved, apiStatus?.isResponseFailed]);

  return (
    <Fragment>
      <Box sx={{ p: 3, mb: 2 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <GenericInput
                error={formik?.errors?.templateName && formik?.touched?.templateName}
                onChange={onTemplateNameChange}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                label={'Template Name'}
                value={formik?.values?.templateName}
              />
              <FormHelperText error>
                {formik.errors.templateName &&
                  formik.touched.templateName &&
                  formik.errors.templateName}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericDropdown
                onChange={onModuleChange}
                label={'Select Module'}
                data={listSubModules
                  ?.filter((obj) => obj.availableOnDocument === true)
                  .map((item) => {
                    return {
                      value: item?._id,
                      label: item?.subModuleName
                    };
                  })}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                error={formik?.errors?.moduleId && formik?.touched?.moduleId}
                value={formik?.values?.moduleId}
              />
              <FormHelperText error>
                {formik.errors.moduleId && formik.touched.moduleId && formik.errors.moduleId}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={4}>
              <GenericDropdown
                onChange={onTemplateVersionChange}
                label={'Template Version'}
                data={TemplateVersion}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                error={formik?.errors?.templateVersion && formik?.touched?.templateVersion}
                value={formik?.values?.templateVersion}
              />
              <FormHelperText error>
                {formik.errors.templateVersion &&
                  formik.touched.templateVersion &&
                  formik.errors.templateVersion}
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={12}>
              <GenericInput
                onChange={onTemplateHtmlChange}
                onBlur={formik.handleBlur}
                onFocus={formik.handleChange}
                onKeyUp={formik.handleChange}
                label={'Template HTML'}
                multiline
                rows={3}
                error={formik?.errors?.templateHTML && formik?.touched?.templateHTML}
                value={formik?.values?.templateHTML}
              />
              <FormHelperText error>
                {formik.errors.templateHTML &&
                  formik.touched.templateHTML &&
                  formik.errors.templateHTML}
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <GenericLoadingButton
                sx={{ float: 'right' }}
                type="submit"
                onClick={onSaveTemplateHandler}
              >
                <span> submit</span>
              </GenericLoadingButton>
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
export default AddTemplate;
