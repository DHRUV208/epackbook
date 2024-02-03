import { createSlice } from '@reduxjs/toolkit';
import {
  configurationInitialValues,
  paymentModeInitialValues,
  paymentTypeInitialValues,
  unitTypeInitialValues
} from '../../common-components/validator/settings-validator/app-Configuration';

const appConfigurationInitialState = {
  add: configurationInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isResponseFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false,

    isDeleted: false,
    isRequestToDelete: false,
    isDeleteResponseToFailed: false
  },
  listConfiguration: []
};
const paymentTypesInitialState = {
  add: paymentTypeInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isResponseFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false,

    isDeleted: false,
    isRequestToDelete: false,
    isDeleteResponseToFailed: false
  },
  listPaymentTypes: []
};

const paymentModesInitialState = {
  add: paymentModeInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isResponseFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false,

    isDeleted: false,
    isRequestToDelete: false,
    isDeleteResponseToFailed: false
  },
  listPaymentModes: []
};

const unitTypeInitialState = {
  add: unitTypeInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isResponseFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false,

    
    isDeleted: false,
    isRequestToDelete: false,
    isDeleteResponseToFailed: false
  },
  listUnitTypes: []
};

export const AppConfigurationSlice = createSlice({
  name: 'App-Configuration',
  initialState: {
    configuration: appConfigurationInitialState,
    paymentTypes: paymentTypesInitialState,
    paymentModes: paymentModesInitialState,
    unitTypes: unitTypeInitialState
  },
  reducers: {
    updateChooseEntity: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          add: {
            ...state.configuration.add,
            chooseEntity: action?.payload
          }
        }
      };
    },
    updateEntityId: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          add: {
            ...state.configuration.add,
            entityValue: {
              entityId: action?.payload
            }
          }
        }
      };
    },
    updateChooseModule: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          add: {
            ...state.configuration.add,
            chooseModule: action?.payload
          }
        }
      };
    },
    updatePrefix: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          add: {
            ...state.configuration.add,
            prefix: action?.payload
          }
        }
      };
    },
    updateSuffix: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          add: {
            ...state.configuration.add,
            suffix: action?.payload
          }
        }
      };
    },

    requestToSaveConfiguration: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          apiStatus: {
            ...state.configuration.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveConfiguration: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          apiStatus: {
            ...state.configuration.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveConfiguration: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          apiStatus: {
            ...state.configuration.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllConfiguration: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          apiStatus: {
            ...state.configuration.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllConfiguration: (state, action) => {
      return {
        ...state,

        configuration: {
          ...state.configuration,
          listConfiguration: action?.payload,
          apiStatus: {
            ...state.configuration.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllConfiguration: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          apiStatus: {
            ...state.configuration.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },

    requestDeleteConfiguration: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          apiStatus: {
            ...state.configuration.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeleteConfiguration: (state, action) => {
      return {
        ...state,

        configuration: {
          ...state.configuration,
          apiStatus: {
            ...state.configuration.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteConfiguration: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          apiStatus: {
            ...state.configuration.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },

    resetAppConfiguration: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          add: configurationInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          }
        }
      };
    },

    resetConfigurationApiStatus: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetConfigurationDeleteStatus: (state, action) => {
      return {
        ...state,
        configuration: {
          ...state.configuration,
          apiStatus: {
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },

    //////////////////

    updatePaymentTypes: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          add: {
            value: action?.payload
          }
        }
      };
    },
    requestToSavePaymentTypes: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          apiStatus: {
            ...state.paymentTypes.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSavePaymentTypes: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          apiStatus: {
            ...state.paymentTypes.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSavePaymentTypes: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          apiStatus: {
            ...state.paymentTypes.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllPaymentTypes: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          apiStatus: {
            ...state.paymentTypes.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllPaymentTypes: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          listPaymentTypes: action?.payload,
          apiStatus: {
            ...state.paymentTypes.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    failedToGetAllPaymentTypes: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          apiStatus: {
            ...state.paymentTypes.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },

    requestDeletePaymentTypes: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          apiStatus: {
            ...state.paymentTypes.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeletePaymentTypes: (state, action) => {
      return {
        ...state,

        paymentTypes: {
          ...state.paymentTypes,
          apiStatus: {
            ...state.paymentTypes.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeletePaymentTypes: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          apiStatus: {
            ...state.paymentTypes.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },

    resetPaymentTypes: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          add: paymentTypeInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },

    resetPaymentTypesApiStatus: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetPaymentTypesDeleteStatus: (state, action) => {
      return {
        ...state,
        paymentTypes: {
          ...state.paymentTypes,
          apiStatus: {
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    //////////////////

    updatePaymentModes: (state, action) => {
      return {
        ...state,
        paymentModes: {
          ...state.paymentModes,
          add: {
            value: action?.payload
          }
        }
      };
    },
    requestToSavePaymentModes: (state, action) => {
      return {
        ...state,
        paymentModes: {
          ...state.paymentModes,
          apiStatus: {
            ...state.paymentModes.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSavePaymentModes: (state, action) => {
      return {
        ...state,
        paymentModes: {
          ...state.paymentModes,
          apiStatus: {
            ...state.paymentModes.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSavePaymentModes: (state, action) => {
      return {
        ...state,
        paymentModes: {
          ...state.paymentModes,
          apiStatus: {
            ...state.paymentModes.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
   

    requestToGetAllPaymentModes: (state, action) => {
      return {
        ...state,
        paymentModes: {
          ...state.paymentModes,
          apiStatus: {
            ...state.paymentModes.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllPaymentModes: (state, action) => {
      return {
        ...state,

        paymentModes: {
          ...state.paymentModes,
          listPaymentModes: action?.payload,
          apiStatus: {
            ...state.paymentModes.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllPaymentModes: (state, action) => {
      return {
        ...state,
        paymentModes: {
          ...state.paymentModes,
          apiStatus: {
            ...state.paymentModes.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },

    requestDeletePaymentModes: (state, action) => {
      return {
        ...state,
        paymentModes: {
          ...state.paymentModes,
          apiStatus: {
            ...state.paymentModes.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeletePaymentModes: (state, action) => {
      return {
        ...state,

        paymentModes: {
          ...state.paymentModes,
          apiStatus: {
            ...state.paymentModes.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeletePaymentModes: (state, action) => {
      return {
        ...state,
        paymentModes: {
          ...state.paymentModes,
          apiStatus: {
            ...state.paymentModes.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },

    resetPaymentMode: (state, action) => {
      return {
        ...state,
        paymentModes: {
          ...state.paymentModes,
          add: paymentModeInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetPaymentModeApiStatus: (state, action) => {
      return {
        ...state,
        paymentModes: {
          ...state.paymentModes,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetPaymentModeDeleteStatus: (state, action) => {
      return {
        ...state,
        paymentModes: {
          ...state.paymentModes,
          apiStatus: {
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },

    //////////////////

    updateUnitTypes: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          add: {
            value: action?.payload
          }
        }
      };
    },
    requestToSaveUnitTypes: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          apiStatus: {
            ...state.unitTypes.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveUnitTypes: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          apiStatus: {
            ...state.unitTypes.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveUnitTypes: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          apiStatus: {
            ...state.unitTypes.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllUnitTypes: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          apiStatus: {
            ...state.unitTypes.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllUnitTypes: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          listUnitTypes: action?.payload,
          apiStatus: {
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllUnitTypes: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          apiStatus: {
            ...state.unitTypes.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },

    requestDeleteUnitTypes: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          apiStatus: {
            ...state.unitTypes.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    responseToDeleteUnitTypes: (state, action) => {
      return {
        ...state,

        unitTypes: {
          ...state.unitTypes,
          apiStatus: {
            ...state.unitTypes.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteUnitTypes: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          apiStatus: {
            ...state.unitTypes.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },

    resetUnitType: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          add: unitTypeInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          }
        }
      };
    },
    resetUnitTypesApiStatus: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    resetUnitTypesDeleteStatus: (state, action) => {
      return {
        ...state,
        unitTypes: {
          ...state.unitTypes,
          apiStatus: {
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
  }
});

export default AppConfigurationSlice.reducer;
export const {
  updateChooseEntity,
  updateEntityId,
  updateChooseModule,
  updatePrefix,
  updateSuffix,
  requestToSaveConfiguration,
  responseToSaveConfiguration,
  failedToSaveConfiguration,
  requestToGetAllConfiguration,
  responseToGetAllConfiguration,
  failedToGetAllConfiguration,
  requestDeleteConfiguration,
  responseToDeleteConfiguration,
  failedToDeleteConfiguration,
  resetAppConfiguration,
  resetConfigurationApiStatus,
  resetConfigurationDeleteStatus,

  ////////////////////////////////
  updatePaymentTypes,
  requestToSavePaymentTypes,
  responseToSavePaymentTypes,
  failedToSavePaymentTypes,
  requestToGetAllPaymentTypes,
  responseToGetAllPaymentTypes,
  failedToGetAllPaymentTypes,
  requestDeletePaymentTypes,
  responseToDeletePaymentTypes,
  failedToDeletePaymentTypes,

  resetPaymentTypes,
  resetPaymentTypesApiStatus,
  resetPaymentTypesDeleteStatus,
  //////////////////////////////////
  updatePaymentModes,
  requestToSavePaymentModes,
  responseToSavePaymentModes,
  failedToSavePaymentModes,
  requestToGetAllPaymentModes,
  responseToGetAllPaymentModes,
  failedToGetAllPaymentModes,
  requestDeletePaymentModes,
  responseToDeletePaymentModes,
  failedToDeletePaymentModes,
  resetPaymentMode,
  resetPaymentModeApiStatus,
  resetPaymentModeDeleteStatus,
  ///////////////////////////////////////
  updateUnitTypes,
  requestToSaveUnitTypes,
  responseToSaveUnitTypes,
  failedToSaveUnitTypes,
  requestToGetAllUnitTypes,
  responseToGetAllUnitTypes,
  failedToGetAllUnitTypes,
  requestDeleteUnitTypes,
  responseToDeleteUnitTypes,
  failedToDeleteUnitTypes,
  resetUnitType,
  resetUnitTypesApiStatus,
  resetUnitTypesDeleteStatus
} = AppConfigurationSlice.actions;
