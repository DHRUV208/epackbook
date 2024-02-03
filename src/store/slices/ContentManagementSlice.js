import { createSlice } from '@reduxjs/toolkit';
// import { addAccountManagementInitialValues } from '../../common-components/validator/settings-validation';
import {
  contactDetailInitialValues,
  govtRegistrationInitialValues,
  footerContentInitialValues,
  modulesInitialValues,
  subModulesInitialValues,
  featureInitialValues,
  enquirySourceInitialValues,
  approvalAuthorityInitialValues
} from '../../common-components/validator/settings-validator/content-management';



const contentManagementInitialState = {
  add: contactDetailInitialValues,
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
  listContactDetails: []
}


const govtRegistrationinitialState = {
  add: govtRegistrationInitialValues,
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
  listGovtRegistration: [],
}

const footerContentinitialState = {
  add: footerContentInitialValues,
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
  listFooterContent: [],
}

const modulesinitialState = {
  add: modulesInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isResponseFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listModules: [],
}

const subModulesinitialState = {
  add: subModulesInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isResponseFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false,
    isRequestToUpdate: false,
    isResponseToUpdate: false,
    isFailedToUpdate: false
  },
  listSubModules: [],
}

const featureinitialState = {
  add: featureInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isResponseFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listFeature: [],
}

const enquirySourceinitialState = {
  add: enquirySourceInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isResponseFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listEnquirySource: [],
}

const approvalAuthorityinitialState = {
  add: approvalAuthorityInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isResponseFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listApprovalAuthority: [],
}


export const AccountManagementSlice = createSlice({
  name: 'Content-Management',
  initialState: {
    contactDetails: contentManagementInitialState,
    govtRegistration: govtRegistrationinitialState,
    footerContent: footerContentinitialState,
    modules: modulesinitialState,
    subModules: subModulesinitialState,
    feature: featureinitialState,
    enquirySource: enquirySourceinitialState,
    approvalAuthority: approvalAuthorityinitialState,
  },
  reducers: {
    updateContactType: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          add: {
            ...state.contactDetails.add,
            contactType: action?.payload
          }
        }
      };
    },
    updateOtherNumber: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          add: {
            ...state.contactDetails.add,
            otherContact: action?.payload
          }
        }
      };
    },
    updateNumber: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          add: {
            ...state.contactDetails.add,
            contactValue: action?.payload
          }
        }
      };
    },
    updateContactCheckbox: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          add: {
            ...state.contactDetails.add,
            chooseModule: action?.payload
          }
        }
      };
    },
    requestToSaveContactDetails: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          apiStatus: {
            ...state.contactDetails.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveContactDetails: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          apiStatus: {
            ...state.contactDetails.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveContactDetails: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          apiStatus: {
            ...state.contactDetails.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllContactDetails: (state, action) => {
      return {

        ...state,
        contactDetails: {
          ...state.contactDetails,
          listContactDetails: action?.payload,
          apiStatus: {
            ...state.contactDetails.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllContactDetails: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          listContactDetails: action?.payload,
          apiStatus: {
            ...state.contactDetails.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllContactDetails: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          listContactDetails: action?.payload,
          apiStatus: {
            ...state.contactDetails.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetContactDetails: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          add: contactDetailInitialValues,
          apiStatus: {
            ...state.contactDetails.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },
    resetContactDetailsApiStatus: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          apiStatus: {
            ...state.contactDetails.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      }
    },

    resetContactDetailDeleteStatus: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          apiStatus: {
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },

    requestDeleteContactDetail: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          apiStatus: {
            ...state.contactDetails.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteContactDetail: (state, action) => {
      return {
        ...state,

        contactDetails: {
          ...state.contactDetails,
          apiStatus: {
            ...state.contactDetails.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteContactDetail: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          apiStatus: {
            ...state.contactDetails.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },

    ///////////REGISTRATION DETAIL/////////////////////

    updatechooseDocumentType: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          add: {
            ...state.govtRegistration.add,
            chooseDocumentType: action?.payload
          }
        }
      };
    },
    updateISOCertificateType: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          add: {
            ...state.govtRegistration.add,
            isoCertificateType: action?.payload
          }
        }
      };
    },
    updateOtherRegistrationTitle: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          add: {
            ...state.govtRegistration.add,
            otherTitle: action?.payload
          }
        }
      };
    },
    updateDocumentNumber: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          add: {
            ...state.govtRegistration.add,
            documentValue: action?.payload
          }
        }
      };
    },
    updateRegChooseModuleDocumentNumber: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          add: {
            ...state.govtRegistration.add,
            chooseModule: action?.payload
          }
        }
      };
    },
    requestToSaveRegistrationDetail: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          apiStatus: {
            ...state.govtRegistration.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },

    updateRegibaApprovaldate: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          add: {
            ...state.govtRegistration.add,
            ibaApprovaldate: action?.payload
          }
        }
      };
    },

    responseToSaveRegistrationDetail: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          apiStatus: {
            ...state.govtRegistration.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveRegistrationDetail: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          apiStatus: {
            ...state.govtRegistration.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllRegistrationDetail: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          listGovtRegistration: action?.payload,
          apiStatus: {
            ...state.govtRegistration.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllRegistrationDetail: (state, action) => {
      return {
        ...state,

        govtRegistration: {
          ...state.govtRegistration,
          listGovtRegistration: action?.payload,
          apiStatus: {
            ...state.govtRegistration.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllRegistrationDetail: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          listGovtRegistration: action?.payload,
          apiStatus: {
            ...state.govtRegistration.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetRegistrationDetail: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          add: govtRegistrationInitialValues,
          apiStatus: {
            ...state.govtRegistration.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },
    resetRegistrationDetailApiStatus: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          apiStatus: {
            ...state.govtRegistration.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },

    requestDeleteRegistrationDetail: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          apiStatus: {
            ...state.govtRegistration.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteRegistrationDetail: (state, action) => {
      return {
        ...state,

        govtRegistration: {
          ...state.govtRegistration,
          apiStatus: {
            ...state.govtRegistration.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteRegistrationDetail: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          apiStatus: {
            ...state.govtRegistration.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },
    resetRegistrationDetailDeleteStatus: (state, action) => {
      return {
        ...state,
        govtRegistration: {
          ...state.govtRegistration,
          apiStatus: {
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },

    //////////// FOOTER CONTENT ////////////////

    updateFooterContentAccountType: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          add: {
            ...state.footerContent.add,
            chooseAccountType: action?.payload
          }
        }
      };
    },
    updateFooterContentTitle: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          add: {
            ...state.footerContent.add,
            title: action?.payload
          }
        }
      };
    },
    updateFooterContentInputField: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          add: {
            ...state.footerContent.add,
            content: action?.payload
          }
        }
      };
    },
    requestToSaveFooterContent: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          apiStatus: {
            ...state.footerContent.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveFooterContent: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          apiStatus: {
            ...state.footerContent.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveFooterContent: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          apiStatus: {
            ...state.footerContent.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllFooterContent: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          listFooterContent: action?.payload,
          apiStatus: {
            ...state.footerContent.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllFooterContent: (state, action) => {
      return {
        ...state,

        footerContent: {
          ...state.footerContent,
          listFooterContent: action?.payload,
          apiStatus: {
            ...state.footerContent.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllFooterContent: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          listFooterContent: action?.payload,
          apiStatus: {
            ...state.footerContent.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetFooterContent: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          add: footerContentInitialValues,
          apiStatus: {
            ...state.footerContent.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },
    resetFooterContentApiStatus: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          apiStatus: {
            ...state.footerContent.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },

    resetFooterContentDeleteStatus: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          apiStatus: {
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },

    requestDeleteFooterContent: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          apiStatus: {
            ...state.footerContent.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteFooterContent: (state, action) => {
      return {
        ...state,

        footerContent: {
          ...state.footerContent,
          apiStatus: {
            ...state.footerContent.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteFooterContent: (state, action) => {
      return {
        ...state,
        footerContent: {
          ...state.footerContent,
          apiStatus: {
            ...state.footerContent.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },


    //////////////////ADD-MODULES//////////////
    updateModuleValue: (state, action) => {
      return {
        ...state,
        modules: {
          ...state.modules,
          add: {
            ...state.modules.add,
            value: action?.payload
          }
        }
      };
    },

    requestToSaveModule: (state, action) => {
      return {
        ...state,
        modules: {
          ...state.modules,
          apiStatus: {
            ...state.modules.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveModule: (state, action) => {
      return {
        ...state,
        modules: {
          ...state.modules,
          apiStatus: {
            ...state.modules.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveModule: (state, action) => {
      return {
        ...state,
        modules: {
          ...state.modules,
          apiStatus: {
            ...state.modules.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllModule: (state, action) => {
      return {
        ...state,
        modules: {
          ...state.modules,
          listModules: action?.payload,
          apiStatus: {
            ...state.modules.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllModule: (state, action) => {
      return {
        ...state,
        modules: {
          ...state.modules,
          listModules: action?.payload,
          apiStatus: {
            ...state.modules.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };

    },
    failedToGetAllModule: (state, action) => {
      return {
        ...state,
        modules: {
          ...state.modules,
          listModules: action?.payload,
          apiStatus: {
            ...state.modules.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetModule: (state, action) => {
      return {
        ...state,
        modules: {
          ...state.modules,
          add: modulesInitialValues,
          apiStatus: {
            ...state.modules.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },
    resetModuleApiStatus: (state, action) => {
      return {
        ...state,
        modules: {
          ...state.modules,
          apiStatus: {
            ...state.modules.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },






    // ////////////////ADD-SUB-MODULES//////////////
    updateSubModuleValue: (state, action) => {

      return {
        ...state,
        subModules: {
          ...state.subModules,
          add: {
            ...state.subModules.add,
            value: action?.payload
          }
        }
      };
    },
    updateModuleId: (state, action) => {
      return {
        ...state,
        subModules: {
          ...state.subModules,
          add: {
            ...state.subModules.add,
            moduleId: action?.payload
          }
        }
      };
    },
    requestToSaveSubModule: (state, action) => {
      return {
        ...state,
        subModules: {
          ...state.subModules,
          apiStatus: {
            ...state.subModules.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveSubModule: (state, action) => {
      return {
        ...state,
        subModules: {
          ...state.subModules,
          apiStatus: {
            ...state.subModules.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveSubModule: (state, action) => {
      return {
        ...state,
        subModules: {
          ...state.subModules,
          apiStatus: {
            ...state.subModules.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllSubModule: (state, action) => {
      return {
        ...state,
        subModules: {
          ...state.subModules,
          listSubModules: action?.payload,
          apiStatus: {
            ...state.subModules.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllSubModule: (state, action) => {
      return {
        ...state,

        subModules: {
          ...state.subModules,
          listSubModules: action?.payload,
          apiStatus: {
            ...state.subModules.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllSubModule: (state, action) => {
      return {
        ...state,
        subModules: {
          ...state.subModules,
          listSubModules: action?.payload,
          apiStatus: {
            ...state.subModules.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetSubModule: (state, action) => {
      return {
        ...state,
        subModules: {
          ...state.subModules,
          add: subModulesInitialValues,
          apiStatus: {
            ...state.subModules.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },
    resetSubModuleApiStatus: (state, action) => {
      return {
        ...state,
        subModules: {
          ...state.subModules,
          apiStatus: {
            ...state.subModules.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },

    // ////////////////FEATURE//////////////
    updateFeatureModule: (state, action) => {
      return {
        ...state,
        feature: {
          ...state.feature,
          add: {
            ...state.feature.add,
            module: action?.payload
          }
        }
      };
    },
    updateFeature: (state, action) => {
      return {
        ...state,
        feature: {
          ...state.feature,
          add: {
            ...state.feature.add,
            value: action?.payload
          }
        }
      };
    },
    
    updateSubModuleId: (state, action) => {
      return {
        ...state,
        feature: {
          ...state.feature,
          add: {
            ...state.feature.add,
            subModuleId: action?.payload
          }
        }
      };
    },
    requestToSaveFeature: (state, action) => {
      return {
        ...state,
        feature: {
          ...state.feature,
          apiStatus: {
            ...state.feature.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveFeature: (state, action) => {
      return {
        ...state,
        feature: {
          ...state.feature,
          apiStatus: {
            ...state.feature.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveFeature: (state, action) => {
      return {
        ...state,
        feature: {
          ...state.feature,
          apiStatus: {
            ...state.feature.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllFeature: (state, action) => {
      return {
        ...state,
        feature: {
          ...state.feature,
          listFeature: action?.payload,
          apiStatus: {
            ...state.feature.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllFeature: (state, action) => {
      return {
        ...state,
        feature: {
          ...state.feature,
          listFeature: action?.payload,
          apiStatus: {
            ...state.feature.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllFeature: (state, action) => {
      return {
        ...state,
        feature: {
          ...state.feature,
          listFeature: action?.payload,
          apiStatus: {
            ...state.feature.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetFeature: (state, action) => {
      return {
        ...state,
        feature: {
          ...state.feature,
          add: featureInitialValues,
          apiStatus: {
            ...state.feature.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },
    resetFeatureApiStatus: (state, action) => {
      return {
        ...state,
        feature: {
          ...state.feature,
          apiStatus: {
            ...state.feature.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },




    //////////////////////////////////////
    updateAddEnquirySourceValue: (state, action) => {
      return {
        ...state,
        enquirySource: {
          ...state.enquirySource,
          add: {
            ...state.enquirySource.add,
            value: action?.payload
          }
        }
      };
    },
    requestToSaveEnquirySource: (state, action) => {
      return {
        ...state,
        enquirySource: {
          ...state.enquirySource,
          apiStatus: {
            ...state.enquirySource.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveEnquirySource: (state, action) => {
      return {
        ...state,
        enquirySource: {
          ...state.enquirySource,
          apiStatus: {
            ...state.enquirySource.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveEnquirySource: (state, action) => {
      return {
        ...state,
        enquirySource: {
          ...state.enquirySource,
          apiStatus: {
            ...state.enquirySource.apiStatus,
            isRequestFailed: true,
            isResponseFailed: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllEnquirySource: (state, action) => {
      return {
        ...state,
        enquirySource: {
          ...state.enquirySource,
          listEnquirySource: action?.payload,
          apiStatus: {
            ...state.enquirySource.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllEnquirySource: (state, action) => {
      return {
        ...state,

        enquirySource: {
          ...state.enquirySource,
          listEnquirySource: action?.payload,
          apiStatus: {
            ...state.enquirySource.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllEnquirySource: (state, action) => {
      return {
        ...state,
        enquirySource: {
          ...state.enquirySource,
          listEnquirySource: action?.payload,
          apiStatus: {
            ...state.enquirySource.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetEnquirySource: (state, action) => {
      return {
        ...state,
        enquirySource: {
          ...state.enquirySource,
          add: enquirySourceInitialValues,
          apiStatus: {
            ...state.enquirySource.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },
    resetEnquirySourceApiStatus: (state, action) => {
      return {
        ...state,
        enquirySource: {
          ...state.enquirySource,
          apiStatus: {
            ...state.enquirySource.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },




    ////////////////////////////////////////

    updateAddApprovalAuthorityValue: (state, action) => {
      return {
        ...state,
        approvalAuthority: {
          ...state.approvalAuthority,
          add: {
            ...state.approvalAuthority.add,
            value: action?.payload
          }
        }
      };
    },
    requestToSaveApprovalAuthority: (state, action) => {
      return {
        ...state,
        approvalAuthority: {
          ...state.approvalAuthority,
          apiStatus: {
            ...state.approvalAuthority.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveApprovalAuthority: (state, action) => {
      return {
        ...state,
        approvalAuthority: {
          ...state.approvalAuthority,
          apiStatus: {
            ...state.approvalAuthority.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveApprovalAuthority: (state, action) => {
      return {
        ...state,
        approvalAuthority: {
          ...state.approvalAuthority,
          apiStatus: {
            ...state.approvalAuthority.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllApprovalAuthority: (state, action) => {
      return {
        ...state,
        approvalAuthority: {
          ...state.approvalAuthority,
          listApprovalAuthority: action?.payload,
          apiStatus: {
            ...state.approvalAuthority.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllApprovalAuthority: (state, action) => {
      return {
        ...state,

        approvalAuthority: {
          ...state.approvalAuthority,
          listApprovalAuthority: action?.payload,
          apiStatus: {
            ...state.approvalAuthority.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllApprovalAuthority: (state, action) => {
      return {
        ...state,
        approvalAuthority: {
          ...state.approvalAuthority,
          listApprovalAuthority: action?.payload,
          apiStatus: {
            ...state.approvalAuthority.apiStatus,
            isRequestFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    resetApprovalAuthority: (state, action) => {
      return {
        ...state,
        approvalAuthority: {
          ...state.approvalAuthority,
          add: approvalAuthorityInitialValues,
          apiStatus: {
            ...state.approvalAuthority.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },
    resetApprovalAuthorityApiStatus: (state, action) => {
      return {
        ...state,
        approvalAuthority: {
          ...state.approvalAuthority,
          apiStatus: {
            ...state.approvalAuthority.apiStatus,
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false
          }
        }
      }
    },





    requestToUpdateSubmodule: (state, action) => {
      return {
        ...state,
        subModules: {
          ...state.subModules,

          apiStatus: {
            ...state.subModules.apiStatus,
            isRequestToUpdate: true,
            isResponseToUpdate: false,
            isFailedToUpdate: false
          }
        }
      };
    },
    responseToUpdateSubModule: (state, action) => {
      return {
        ...state,
        subModules: {
          ...state.subModules,

          apiStatus: {
            ...state.subModules.apiStatus,
            isRequestToUpdate: true,
            isResponseToUpdate: true,
            isFailedToUpdate: true
          }
        }
      };
    },
    failedToUpdateSubModule: (state, action) => {
      return {
        ...state,
        subModules: {
          ...state.subModules,

          apiStatus: {
            ...state.subModules.apiStatus,
            isRequestToUpdate: true,
            isResponseToUpdate: false,
            isFailedToUpdate: true
          }
        }
      };
    },

    reset: (state, action) => {
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          add: contactDetailInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
        govtRegistration: {
          ...state.govtRegistration,
          add: govtRegistrationInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
        footerContent: {
          ...state.footerContent,
          add: footerContentInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
        modules: {
          ...state.modules,
          add: modulesInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
        subModules: {
          ...state.subModules,
          add: subModulesInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
        feature: {
          ...state.feature,
          add: featureInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
        enquirySource: {
          ...state.enquirySource,
          add: enquirySourceInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
        approvalAuthority: {
          ...state.approvalAuthority,
          add: approvalAuthorityInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isRequestFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          }
        },
      }
    },

  }
});

export default AccountManagementSlice.reducer;
export const {
  updateContactType,
  updateOtherNumber,
  updateNumber,
  updateContactCheckbox,
  requestToSaveContactDetails,
  responseToSaveContactDetails,
  failedToSaveContactDetails,
  requestToGetAllContactDetails,
  responseToGetAllContactDetails,
  failedToGetAllContactDetails,
  resetContactDetails,
  resetContactDetailsApiStatus,

  updatechooseDocumentType,
  updateISOCertificateType,
  updateOtherRegistrationTitle,
  updateDocumentNumber,
  requestToSaveRegistrationDetail,
  responseToSaveRegistrationDetail,
  failedToSaveRegistrationDetail,
  requestToGetAllRegistrationDetail,
  responseToGetAllRegistrationDetail,
  failedToGetAllRegistrationDetail,
  resetRegistrationDetail,
  resetRegistrationDetailApiStatus,
  updateRegChooseModuleDocumentNumber,

  updateFooterContentAccountType,
  updateFooterContentTitle,
  updateFooterContentInputField,
  requestToSaveFooterContent,
  responseToSaveFooterContent,
  failedToSaveFooterContent,
  requestToGetAllFooterContent,
  responseToGetAllFooterContent,
  failedToGetAllFooterContent,
  resetFooterContent,
  resetFooterContentApiStatus,

  updateModuleValue,
  requestToSaveModule,
  responseToSaveModule,
  failedToSaveModule,
  requestToGetAllModule,
  responseToGetAllModule,
  failedToGetAllModule,
  resetModule,
  resetModuleApiStatus,

  updateAddEnquirySourceValue,
  requestToSaveEnquirySource,
  responseToSaveEnquirySource,
  failedToSaveEnquirySource,
  requestToGetAllEnquirySource,
  responseToGetAllEnquirySource,
  failedToGetAllEnquirySource,
  resetEnquirySource,
  resetEnquirySourceApiStatus,

  updateSubModuleValue,
  updateModuleId,
  requestToSaveSubModule,
  responseToSaveSubModule,
  failedToSaveSubModule,
  requestToGetAllSubModule,
  responseToGetAllSubModule,
  failedToGetAllSubModule,
  resetSubModule,
  resetSubModuleApiStatus,

  updateFeature,
  updateSubModuleId,
  requestToSaveFeature,
  responseToSaveFeature,
  failedToSaveFeature,
  requestToGetAllFeature,
  responseToGetAllFeature,
  failedToGetAllFeature,
  updateFeatureModule,
  resetFeature,
  resetFeatureApiStatus,

  updateAddApprovalAuthorityValue,
  requestToSaveApprovalAuthority,
  responseToSaveApprovalAuthority,
  failedToSaveApprovalAuthority,
  requestToGetAllApprovalAuthority,
  responseToGetAllApprovalAuthority,
  failedToGetAllApprovalAuthority,
  resetApprovalAuthority,
  resetApprovalAuthorityApiStatus,
  reset,
  resetDropdown,
  failedToUpdateSubModule, requestToUpdateSubmodule, responseToUpdateSubModule,

  //delete
  resetContactDetailDeleteStatus,
  resetRegistrationDetailDeleteStatus,
  resetFooterContentDeleteStatus,
  requestDeleteFooterContent,
  responseToDeleteFooterContent,
  failedToDeleteFooterContent,

  requestDeleteContactDetail,
  responseToDeleteContactDetail,
  failedToDeleteContactDetail,
  requestDeleteRegistrationDetail,
  responseToDeleteRegistrationDetail,
  failedToDeleteRegistrationDetail,
  updateRegibaApprovaldate,
} = AccountManagementSlice.actions;
