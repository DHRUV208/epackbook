import { createSlice } from '@reduxjs/toolkit';
import { tobeBilledInitialValues } from '../../common-components/validator/settings-validator/tobe-billed-customer';

const initialState = {
  add: { ...tobeBilledInitialValues.add }
};
export const ToBeBilledSlice = createSlice({
  name: 'to-be-billed',
  initialState,
  reducers: {
    updateCompanyName: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          companyName: action?.payload
        }
      };
    },
    updateApprovalAuthority: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          approvalAuthority: action?.payload
        }
      };
    },
    updateAuthorityName: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          authorityName: action?.payload
        }
      };
    },
    updateAuthorityMobileNo: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          authorityMobileNo: action?.payload
        }
      };
    },
    updatePincode: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          companyAddress: {
            ...state.companyAddress,
            pincode: action?.payload
          }
        }
      };
    },
    updateState: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          companyAddress: {
            ...state.companyAddress,
            state: action?.payload
          }
        }
      };
    },
    updateCity: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          companyCity: {
            ...state.companyCity,
            city: action?.payload
          }
        }
      };
    },
    updateLocality: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          companyLocality: {
            ...state.companyLocality,
            locality: action?.payload
          }
        }
      };
    },
    updateAddress: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          companyAddress: {
            ...state.companyAddress,
            address: action?.payload
          }
        }
      };
    },
    updateCompanyGst: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          companyGst: action?.payload
        }
      };
    },
    updateCompanyEmail: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          companyEmail: action?.payload
        }
      };
    },
    updateOtherContactNo: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          otherContactNo: action?.payload
        }
      };
    },
    updateAuthorityPersonEmail: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          authorityPersonEmail: action?.payload
        }
      };
    },
    updateEntity: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          entity: action?.payload
        }
      };
    },
    updateBranchName: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          branchName: action?.payload
        }
      };
    },
    updatePrefix: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          prefix: action?.payload
        }
      };
    },
    updateSuffix: (state, action) => {
      return {
        ...state,
        add: {
          ...state.add,
          suffix: action?.payload
        }
      };
    }
  }
});

export default ToBeBilledSlice.reducer;
export const {
  updateCompanyName,
  updateApprovalAuthority,
  updateAuthorityName,
  updateAuthorityMobileNo,
  updatePincode,
  updateState,
  updateCity,
  updateLocality,
  updateAddress,
  updateCompanyGst,
  updateCompanyEmail,
  updateOtherContactNo,
  updateAuthorityPersonEmail,
  updateEntity,
  updateBranchName,
  updatePrefix,
  updateSuffix
} = ToBeBilledSlice.actions;
