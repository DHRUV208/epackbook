import { createSlice } from '@reduxjs/toolkit';
import { employeeEnrollmentInitialValues } from '../../common-components/validator/settings-validator/role-management';
const employeeEnrollmentInitialState = {
  add: employeeEnrollmentInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isResponseFailed: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listEmployeeEnroll: []
}

const RoleManagementSlice = createSlice({
  name: 'role-management',
  initialState: {
    employeeEnrollment: employeeEnrollmentInitialState
  },
  reducers: {
    updateRoleChooseEntity: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          add: {
            ...state.employeeEnrollment.add,
            chooseEntity: action.payload
          }
        }
      };
    },

    updateRoleEntityId: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          add: {
            ...state.employeeEnrollment.add,
            entityValue: {
              entityId: action?.payload
            }
          }
        }
      };
    },

    updateName: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          add: {
            ...state.employeeEnrollment.add,
            name: action.payload
          }
        }
      };
    },
    updateMobileNumber: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          add: {
            ...state.employeeEnrollment.add,
            mobileNumber: action.payload
          }
        }
      };
    },
    updateEmail: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          add: {
            ...state.employeeEnrollment.add,
            email: action.payload
          }
        }
      };
    },
    updateUserName: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          add: {
            ...state.employeeEnrollment.add,
            userName: action.payload
          }
        }
      };
    },
    updateCreatePassword: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          add: {
            ...state.employeeEnrollment.add,
            createPassword: action.payload
          }
        }
      };
    },
    updateRoleType: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          add: {
            ...state.employeeEnrollment.add,
            roleType: action.payload
          }
        }
      };
    },
    updatePermissions: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          add: {
            ...state.employeeEnrollment.add,
            permissions: action.payload
          }
        }
      };
    },
    requestToSaveEmployeeEnroll: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          apiStatus: {
            ...state.employeeEnrollment.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveEmployeeEnroll: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          apiStatus: {
            ...state.employeeEnrollment.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveEmployeeEnroll: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          apiStatus: {
            ...state.employeeEnrollment.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllEmployeeEnroll: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          apiStatus: {
            ...state.employeeEnrollment.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllEmployeeEnroll: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          listEmployeeEnroll: action?.payload,
          apiStatus: {
            ...state.employeeEnrollment.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllEmployeeEnroll: (state, action) => {
      return {
        ...state,
        employeeEnrollment: {
          ...state.employeeEnrollment,
          apiStatus: {
            ...state.employeeEnrollment.apiStatus,
            isResponseFailed: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    }
  }
});

export default RoleManagementSlice.reducer;
export const {
  updateRoleChooseEntity,
  updateRoleEntityId,
  updateName,
  updateMobileNumber,
  updateEmail,
  updateUserName,
  updateCreatePassword,
  updateRoleType,
  requestToSaveEmployeeEnroll,
  responseToSaveEmployeeEnroll,
  failedToSaveEmployeeEnroll,
  requestToGetAllEmployeeEnroll,
  responseToGetAllEmployeeEnroll,
  failedToGetAllEmployeeEnroll,
  updatePermissions
} = RoleManagementSlice.actions;
