import { createSlice } from '@reduxjs/toolkit';
import { templateInitialValues } from '../../common-components/validator/settings-validator/template-setting';
const addTemplateInitialState = {
  add: templateInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isResponseFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listTemplate: []
}


const TemplateManagementSlice = createSlice({
  name: 'template-Management',
  initialState: {
    template: addTemplateInitialState,
  },
  reducers: {
    updateTemplateName: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          add: {
            ...state.template.add,
            templateName: action?.payload
          }
        }
      };
    },
    updateModuleId: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          add: {
            ...state.template.add,
            moduleId: action?.payload
          }
        }
      };
    },
    updateTemplateVersion: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          add: {
            ...state.template.add,
            templateVersion: action?.payload
          }
        }
      };
    },
    updateTemplateHtml: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          add: {
            ...state.template.add,
            templateHTML: action?.payload
          }
        }
      };
    },

    requestToSaveTemplate: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          apiStatus: {
            ...state.template.apiStatus,
            isSaved: false,
            isRequestToSave: true,
            isResponseFailed: false
          }
        }
      };
    },
    responseToSaveTemplate: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          apiStatus: {
            ...state.template.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveTemplate: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          apiStatus: {
            ...state.template.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllTemplate: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          apiStatus: {
            ...state.template.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetTemplate: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          listTemplate: action?.payload,
          apiStatus: {
            ...state.template.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetTemplate: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          apiStatus: {
            ...state.template.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetTemplate: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          add: templateInitialValues,
          apiStatus: {
            ...state.template.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
          }
        }
      }
    },
    resetTemplateApiStatus: (state, action) => {
      return {
        ...state,
        template: {
          ...state.template,
          apiStatus: {
            ...state.template.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
          }
        }
      }
    }
  }
});
export default TemplateManagementSlice.reducer;
export const {
  updateTemplateName,
  updateModuleId,
  updateTemplateVersion,
  updateTemplateHtml,
  requestToSaveTemplate,
  responseToSaveTemplate,
  failedToSaveTemplate,
  requestToGetAllTemplate,
  responseToGetTemplate,
  failedToGetTemplate,
  resetTemplate,
resetTemplateApiStatus
} = TemplateManagementSlice.actions;
