import { createSlice } from '@reduxjs/toolkit';
// import { addAccountManagementInitialValues } from '../../common-components/validator/settings-validation';
import {
  vehicleAccessoryInitialValues,
  vehicleColorInitialValues,
  vehicleCompanyInitialValues,
  vehicleInsuranceCompanyInitialValues,
  vehicleSizeInitialValues,
  vehicleTypeInitialValues,
  vehicleModelInitialValues,
  vehicleDriverInitialValues,
  vehicleInitialValues
} from '../../common-components/validator/settings-validator/vehicle-management';

const vehicleInitialState = {
  add: vehicleInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isFailedToSave: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false,


    isDeleted: false,
    isRequestToDelete: false,
    isDeleteResponseToFailed: false
  },
  listVehicle: []
};
const vehicleDriverInitialState = {
  add: vehicleDriverInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isFailedToSave: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false,

    isGetById: false,
    isRequestToGetById: false,
    isGetByIdFailed: false
  },
  listVehicleDriver: [],
  vehicleDriverDetailById: {}
};

// Vehicle Accessory

const vehicleAccessoryInitialState = {
  add: vehicleAccessoryInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isFailedToSave: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listVehicleAccessory: []
};

const vehicleColorInitialState = {
  add: vehicleColorInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isFailedToSave: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listVehicleColor: []
};
const vehicleCompanyInitialState = {
  add: vehicleCompanyInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isFailedToSave: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listVehicleCompany: []
};
// vehicle Insurance Company

const vehicleInsuranceCompanyInitialState = {
  add: vehicleInsuranceCompanyInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isFailedToSave: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listVehicleInsuranceCompany: []
};
// vehicle Size

const vehicleSizeInitialState = {
  add: vehicleSizeInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isFailedToSave: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listVehicleSize: []
};
// vehicle Type

const vehicleTypeInitialState = {
  add: vehicleTypeInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isFailedToSave: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listVehicleType: [],

};
// vehicle Model

const vehicleModelInitialState = {
  add: vehicleModelInitialValues,
  apiStatus: {
    isSaved: false,
    isRequestToSave: false,
    isFailedToSave: false,
    isGetAll: false,
    isRequestToGetAll: false,
    isFailedToGetAll: false
  },
  listVehicleModel: []
};

export const VehicleManagementSlice = createSlice({
  name: 'vehicle-Management',
  initialState: {
    vehicle: vehicleInitialState,
    vehicleDriver: vehicleDriverInitialState,
    vehicleAccessory: vehicleAccessoryInitialState,
    vehicleColor: vehicleColorInitialState,
    vehicleCompany: vehicleCompanyInitialState,
    vehicleInsuranceCompany: vehicleInsuranceCompanyInitialState,
    vehicleSize: vehicleSizeInitialState,
    vehicleType: vehicleTypeInitialState,
    vehicleModel: vehicleModelInitialState
  },
  reducers: {
    // Add Vehicle
    updateChooseEntityName: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            chooseEntity: action?.payload
          }
        }
      };
    },

    updateVehicleEntityId: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            entityValue: {
              entityId: action?.payload
            }
          }
        }
      };
    },

    updateRegistrationNo: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            registrationNo: action?.payload
          }
        }
      };
    },
    updateChooseVehicleCompanyName: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            chooseVehicleCompanyName: action?.payload
          }
        }
      };
    },
    updateChooseVehicleTypes: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            chooseVehicleType: action?.payload
          }
        }
      };
    },

    updateChooseVehicleModel: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            chooseVehicleModel: action?.payload
          }
        }
      };
    },


    //delete vehicle type 

    requestDeleteVehicleType: (state, action) => {
      return {
        ...state,
        vehicleType: {
          ...state.vehicleType,
          apiStatus: {
            ...state.vehicleType.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteVehicleType: (state, action) => {
      return {
        ...state,

        vehicleType: {
          ...state.vehicleType,
          apiStatus: {
            ...state.vehicleType.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteVehicleType: (state, action) => {
      return {
        ...state,
        vehicleType: {
          ...state.vehicleType,
          apiStatus: {
            ...state.vehicleType.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },
    updateManufacturingYear: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            manufacturingYear: action?.payload
          }
        }
      };
    },
    updateChassisNo: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            chassisNo: action?.payload
          }
        }
      };
    },
    updateEngineNo: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            engineNo: action?.payload
          }
        }
      };
    },
    updateRcNo: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            vehicleRCNo: action?.payload
          }
        }
      };
    },
    updatePollutionCertificateNo: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            pollutionCertificateNo: action?.payload
          }
        }
      };
    },

    updatePollutionRenwalDate: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            pollutionRenwalDate: action?.payload
          }
        }
      };
    },
    updatePermitNo: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            permitNo: action?.payload
          }
        }
      };
    },
    updatePermitRenwalDate: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: {
            ...state.vehicle.add,
            permitRenwalDate: action?.payload
          }
        }
      };
    },

    requestToSaveVehicle: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          apiStatus: {
            ...state.vehicle.apiStatus,
            isRequestToSave: true,
            isFailedToSave: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveVehicle: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          apiStatus: {
            ...state.vehicle.apiStatus,
            isSaved: true,
            isFailedToSave: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveVehicle: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          apiStatus: {
            ...state.vehicle.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllVehicle: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          apiStatus: {
            ...state.vehicle.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllVehicle: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          listVehicle: action?.payload,
          apiStatus: {
            ...state.vehicle.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllVehicle: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          apiStatus: {
            ...state.vehicle.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },


    resetVehicle: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          add: vehicleInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
      }
    },

    resetDeleteApiStatus: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
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
    resetVehicleDeleteStatus: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          apiStatus: {
            isDeleted: false,
            isRequestToDelete: false,
            isDeleteResponseToFailed: false
          }
        }
      };
    },

    // delete vehicle 
    requestDeleteVehicle: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          apiStatus: {
            ...state.vehicle.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteVehicle: (state, action) => {
      return {
        ...state,

        vehicle: {
          ...state.vehicle,
          apiStatus: {
            ...state.vehicle.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteVehicle: (state, action) => {
      return {
        ...state,
        vehicle: {
          ...state.vehicle,
          apiStatus: {
            ...state.vehicle.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },


    requestDeleteVehicleDriver: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteVehicleDriver: (state, action) => {
      return {
        ...state,

        vehicleDriver: {
          ...state.vehicleDriver,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteVehicleDriver: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },


    // Add Vehicle Driver
    updateChooseEntity: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            chooseEntity: action?.payload
          }
        }
      };
    },
    updateEntityId: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            entityValue: {
              entityId: action?.payload
            }
          }
        }
      };
    },
    updateDriverName: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            driverName: action?.payload
          }
        }
      };
    },
    updateDriverMobileNo: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            driverMobileNo: action?.payload
          }
        }
      };
    },
    updateDriverLicenceNo: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            driverLicenceNo: action?.payload
          }
        }
      };
    },
    updateDriverAadharNo: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            driverAadharNo: action?.payload
          }
        }
      };
    },
    updateUploadLicence: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            uploadLicence: action?.payload
          }
        }
      };
    },
    updateUploadAadhar: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            uploadAadhar: action?.payload
          }
        }
      };
    },
    updateUploadAadharBack: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            uploadAadharBack: action?.payload
          }
        }
      };
    },
    updatePermanentPinCode: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            permanentAddress: {
              ...state.vehicleDriver.add.permanentAddress,
              pinCode: action?.payload
            }
          }
        }
      };
    },
    updatePermanentState: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            permanentAddress: {
              ...state.vehicleDriver.add.permanentAddress,
              state: action?.payload
            }
          }
        }
      };
    },
    updatePermanentCity: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            permanentAddress: {
              ...state.vehicleDriver.add.permanentAddress,
              city: action?.payload
            }
          }
        }
      };
    },
    updatePermanentLocality: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            permanentAddress: {
              ...state.vehicleDriver.add.permanentAddress,
              locality: action?.payload
            }
          }
        }
      };
    },
    updatePermanentDriverAddress: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            permanentAddress: {
              ...state.vehicleDriver.add.permanentAddress,
              driverAddress: action?.payload
            }
          }
        }
      };
    },
    updateSameAsPermanentAddressCheck: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            currentAddress: {
              ...state.vehicleDriver.add.currentAddress,
              sameAsPermanentAddress: action?.payload
            }
          }
        }
      };
    },
    updateCurrentPinCode: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            currentAddress: {
              ...state.vehicleDriver.add.currentAddress,
              pinCode: action?.payload
            }
          }
        }
      };
    },
    updateCurrentState: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            currentAddress: {
              ...state.vehicleDriver.add.currentAddress,
              state: action?.payload
            }
          }
        }
      };
    },
    updateCurrentCity: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            currentAddress: {
              ...state.vehicleDriver.add.currentAddress,
              city: action?.payload
            }
          }
        }
      };
    },
    updateCurrentLocality: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            currentAddress: {
              ...state.vehicleDriver.add.currentAddress,
              locality: action?.payload
            }
          }
        }
      };
    },
    updateCurrentDriverAddress: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: {
            ...state.vehicleDriver.add,
            currentAddress: {
              ...state.vehicleDriver.add.currentAddress,
              driverAddress: action?.payload
            }
          }
        }
      };
    },

    

    // Vehicle Driver

    requestToSaveVehicleDriver: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveVehicleDriver: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveVehicleDriver: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllVehicleDriver: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllVehicleDriver: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          listVehicleDriver: action?.payload,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllVehicleDriver: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },

    requestToGetVehicleDriverById: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isGetById: false,
            isRequestToGetById: true,
            isGetByIdFailed: false
          }
        }
      };
    },
    responseToGetVehicleDriverById: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          vehicleDriverDetailById: action?.payload,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isGetById: true,
            isRequestToGetById: true,
            isGetByIdFailed: false
          }
        }
      };
    },
    failedToGetVehicleDriverById: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          apiStatus: {
            ...state.vehicleDriver.apiStatus,
            isGetById: false,
            isRequestToGetById: true,
            isGetByIdFailed: true
          }
        }
      };
    },


    resetVehicleDriver: (state, action) => {
      return {
        ...state,
        vehicleDriver: {
          ...state.vehicleDriver,
          add: vehicleDriverInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
      }
    },

    //Vehicle Accessory
    updateVehicleAccessory: (state, action) => {
      return {
        ...state,
        vehicleAccessory: {
          ...state.vehicleAccessory,
          add: {
            ...state.vehicleAccessory.add,
            value: action?.payload
          }
        }
      };
    },
    updateChooseAccessoryVehicleType: (state, action) => {
      return {
        ...state,
        vehicleAccessory: {
          ...state.vehicleAccessory,
          add: {
            ...state.vehicleAccessory.add,
            chooseVehicleType: action?.payload
          }
        }
      };
    },

    requestToSaveVehicleAccessory: (state, action) => {
      return {
        ...state,
        vehicleAccessory: {
          ...state.vehicleAccessory,
          apiStatus: {
            ...state.vehicleAccessory.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveVehicleAccessory: (state, action) => {
      return {
        ...state,
        vehicleAccessory: {
          ...state.vehicleAccessory,
          apiStatus: {
            ...state.vehicleAccessory.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveVehicleAccessory: (state, action) => {
      return {
        ...state,
        vehicleAccessory: {
          ...state.vehicleAccessory,
          apiStatus: {
            ...state.vehicleAccessory.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllVehicleAccessory: (state, action) => {
      return {
        ...state,
        vehicleAccessory: {
          ...state.vehicleAccessory,
          apiStatus: {
            ...state.vehicleAccessory.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllVehicleAccessory: (state, action) => {
      return {
        ...state,
        vehicleAccessory: {
          ...state.vehicleAccessory,
          listVehicleAccessory: action?.payload,
          apiStatus: {
            ...state.vehicleAccessory.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllVehicleAccessory: (state, action) => {
      return {
        ...state,
        vehicleAccessory: {
          ...state.vehicleAccessory,
          apiStatus: {
            ...state.vehicleAccessory.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },

    resetVehicleAccessory: (state, action) => {
      return {
        ...state,
        vehicleAccessory: {
          ...state.vehicleAccessory,
          add: vehicleAccessoryInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
      }
    },



    requestDeleteVehicleAccessory: (state, action) => {
      return {
        ...state,
        vehicleAccessory: {
          ...state.vehicleAccessory,
          apiStatus: {
            ...state.vehicleAccessory.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteVehicleAccessory: (state, action) => {
      return {
        ...state,

        vehicleAccessory: {
          ...state.vehicleAccessory,
          apiStatus: {
            ...state.vehicleAccessory.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteVehicleAccessory: (state, action) => {
      return {
        ...state,
        vehicleAccessory: {
          ...state.vehicleAccessory,
          apiStatus: {
            ...state.vehicleAccessory.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },


    //Vehicle Color
    updateVehicleColor: (state, action) => {
      return {
        ...state,
        vehicleColor: {
          ...state.vehicleColor,
          add: {
            value: action?.payload
          }
        }
      };
    },
    requestToSaveVehicleColor: (state, action) => {
      return {
        ...state,
        vehicleColor: {
          ...state.vehicleColor,
          apiStatus: {
            ...state.vehicleColor.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveVehicleColor: (state, action) => {
      return {
        ...state,
        vehicleColor: {
          ...state.vehicleColor,
          apiStatus: {
            ...state.vehicleColor.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveVehicleColor: (state, action) => {
      return {
        ...state,
        vehicleColor: {
          ...state.vehicleColor,
          apiStatus: {
            ...state.vehicleColor.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllVehicleColor: (state, action) => {
      return {
        ...state,
        vehicleColor: {
          ...state.vehicleColor,
          apiStatus: {
            ...state.vehicleColor.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllVehicleColor: (state, action) => {
      return {
        ...state,
        vehicleColor: {
          ...state.vehicleColor,
          listVehicleColor: action?.payload,
          apiStatus: {
            ...state.vehicleColor.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllVehicleColor: (state, action) => {
      return {
        ...state,
        vehicleColor: {
          ...state.vehicleColor,
          apiStatus: {
            ...state.vehicleColor.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },


    resetVehicleColor: (state, action) => {
      return {
        ...state,
        vehicleColor: {
          ...state.vehicleColor,
          add: vehicleColorInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
      }
    },



    requestDeleteVehicleColor: (state, action) => {
      return {
        ...state,
        vehicleColor: {
          ...state.vehicleColor,
          apiStatus: {
            ...state.vehicleColor.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteVehicleColor: (state, action) => {
      return {
        ...state,

        vehicleColor: {
          ...state.vehicleColor,
          apiStatus: {
            ...state.vehicleColor.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteVehicleColor: (state, action) => {
      return {
        ...state,
        vehicleColor: {
          ...state.vehicleColor,
          apiStatus: {
            ...state.vehicleColor.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },

    //Vehicle Company
    updateVehicleCompany: (state, action) => {
      return {
        ...state,
        vehicleCompany: {
          ...state.vehicleCompany,
          add: {
            ...state.vehicleCompany.add,
            value: action?.payload
          }
        }
      };
    },

    updateChooseCompanyVehicleType: (state, action) => {
      return {
        ...state,
        vehicleCompany: {
          ...state.vehicleCompany,
          add: {
            ...state.vehicleCompany.add,
            chooseVehicleType: action?.payload
          }
        }
      };
    },
    requestToSaveVehicleCompany: (state, action) => {
      return {
        ...state,
        vehicleCompany: {
          ...state.vehicleCompany,
          apiStatus: {
            ...state.vehicleCompany.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveVehicleCompany: (state, action) => {
      return {
        ...state,
        vehicleCompany: {
          ...state.vehicleCompany,
          apiStatus: {
            ...state.vehicleCompany.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveVehicleCompany: (state, action) => {
      return {
        ...state,
        vehicleCompany: {
          ...state.vehicleCompany,
          apiStatus: {
            ...state.vehicleCompany.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllVehicleCompany: (state, action) => {
      return {
        ...state,
        vehicleCompany: {
          ...state.vehicleCompany,
          apiStatus: {
            ...state.vehicleCompany.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllVehicleCompany: (state, action) => {
      return {
        ...state,
        vehicleCompany: {
          ...state.vehicleCompany,
          listVehicleCompany: action?.payload,
          apiStatus: {
            ...state.vehicleCompany.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllVehicleCompany: (state, action) => {
      return {
        ...state,
        vehicleCompany: {
          ...state.vehicleCompany,
          apiStatus: {
            ...state.vehicleCompany.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },


    resetVehicleCompany: (state, action) => {
      return {
        ...state,
        vehicleCompany: {
          ...state.vehicleCompany,
          add: vehicleCompanyInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
      }
    },

    //Vehicle Insurance Company
    updateVehicleInsuranceCompany: (state, action) => {
      return {
        ...state,
        vehicleInsuranceCompany: {
          ...state.vehicleInsuranceCompany,
          add: {
            value: action?.payload
          }
        }
      };
    },
    requestToSaveVehicleInsuranceCompany: (state, action) => {
      return {
        ...state,
        vehicleInsuranceCompany: {
          ...state.vehicleInsuranceCompany,
          apiStatus: {
            ...state.vehicleInsuranceCompany.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveVehicleInsuranceCompany: (state, action) => {
      return {
        ...state,
        vehicleInsuranceCompany: {
          ...state.vehicleInsuranceCompany,
          apiStatus: {
            ...state.vehicleInsuranceCompany.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveVehicleInsuranceCompany: (state, action) => {
      return {
        ...state,
        vehicleInsuranceCompany: {
          ...state.vehicleInsuranceCompany,
          apiStatus: {
            ...state.vehicleInsuranceCompany.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllVehicleInsuranceCompany: (state, action) => {
      return {
        ...state,
        vehicleInsuranceCompany: {
          ...state.vehicleInsuranceCompany,
          apiStatus: {
            ...state.vehicleInsuranceCompany.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllVehicleInsuranceCompany: (state, action) => {
      return {
        ...state,
        vehicleInsuranceCompany: {
          ...state.vehicleInsuranceCompany,
          listVehicleInsuranceCompany: action?.payload,
          apiStatus: {
            ...state.vehicleInsuranceCompany.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllVehicleInsuranceCompany: (state, action) => {
      return {
        ...state,
        vehicleInsuranceCompany: {
          ...state.vehicleInsuranceCompany,
          apiStatus: {
            ...state.vehicleInsuranceCompany.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },

    resetVehicleInsuranceCompany: (state, action) => {
      return {
        ...state,
        vehicleInsuranceCompany: {
          ...state.vehicleInsuranceCompany,
          add: vehicleInsuranceCompanyInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
      }
    },



    requestDeleteVehicleInsuranceCompany: (state, action) => {
      return {
        ...state,
        vehicleInsuranceCompany: {
          ...state.vehicleInsuranceCompany,
          apiStatus: {
            ...state.vehicleInsuranceCompany.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteVehicleInsuranceCompany: (state, action) => {
      return {
        ...state,

        vehicleInsuranceCompany: {
          ...state.vehicleInsuranceCompany,
          apiStatus: {
            ...state.vehicleInsuranceCompany.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteVehicleInsuranceCompany: (state, action) => {
      return {
        ...state,
        vehicleInsuranceCompany: {
          ...state.vehicleInsuranceCompany,
          apiStatus: {
            ...state.vehicleInsuranceCompany.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },



    requestDeleteVehicleCompany: (state, action) => {
      return {
        ...state,
        vehicleCompany: {
          ...state.vehicleCompany,
          apiStatus: {
            ...state.vehicleCompany.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteVehicleCompany: (state, action) => {
      return {
        ...state,

        vehicleCompany: {
          ...state.vehicleCompany,
          apiStatus: {
            ...state.vehicleCompany.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteVehicleCompany: (state, action) => {
      return {
        ...state,
        vehicleCompany: {
          ...state.vehicleCompany,
          apiStatus: {
            ...state.vehicleCompany.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },

    //Vehicle Size Company
    updateVehicleSize: (state, action) => {
      return {
        ...state,
        vehicleSize: {
          ...state.vehicleSize,
          add: {
            ...state.vehicleSize.add,
            value: action?.payload
          }
        }
      };
    },
    updateSizeChooseVehicleType: (state, action) => {
      return {
        ...state,
        vehicleSize: {
          ...state.vehicleSize,
          add: {
            ...state.vehicleSize.add,
            chooseVehicleType: action?.payload
          }
        }
      };
    },
    requestToSaveVehicleSize: (state, action) => {
      return {
        ...state,
        vehicleSize: {
          ...state.vehicleSize,
          apiStatus: {
            ...state.vehicleSize.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveVehicleSize: (state, action) => {
      return {
        ...state,
        vehicleSize: {
          ...state.vehicleSize,
          apiStatus: {
            ...state.vehicleSize.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveVehicleSize: (state, action) => {
      return {
        ...state,
        vehicleSize: {
          ...state.vehicleSize,
          apiStatus: {
            ...state.vehicleSize.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllVehicleSize: (state, action) => {
      return {
        ...state,
        vehicleSize: {
          ...state.vehicleSize,
          apiStatus: {
            ...state.vehicleSize.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllVehicleSize: (state, action) => {
      return {
        ...state,
        vehicleSize: {
          ...state.vehicleSize,
          listVehicleSize: action?.payload,
          apiStatus: {
            ...state.vehicleSize.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllVehicleSize: (state, action) => {
      return {
        ...state,
        vehicleSize: {
          ...state.vehicleSize,
          apiStatus: {
            ...state.vehicleSize.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },


    resetVehicleSize: (state, action) => {
      return {
        ...state,
        vehicleSize: {
          ...state.vehicleSize,
          add: vehicleSizeInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
      }
    },


    //delete vehicle size

    requestDeleteVehicleSize: (state, action) => {
      return {
        ...state,
        vehicleSize: {
          ...state.vehicleSize,
          apiStatus: {
            ...state.vehicleSize.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteVehicleSize: (state, action) => {
      return {
        ...state,

        vehicleSize: {
          ...state.vehicleSize,
          apiStatus: {
            ...state.vehicleSize.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteVehicleSize: (state, action) => {
      return {
        ...state,
        vehicleSize: {
          ...state.vehicleSize,
          apiStatus: {
            ...state.vehicleSize.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },


    //Vehicle Type Company
    updateVehicleType: (state, action) => {
      return {
        ...state,
        vehicleType: {
          ...state.vehicleType,
          add: {
            value: action?.payload
          }
        }
      };
    },
    requestToSaveVehicleType: (state, action) => {
      return {
        ...state,
        vehicleType: {
          ...state.vehicleType,
          apiStatus: {
            ...state.vehicleType.apiStatus,
            isRequestToSave: true,
            isResponseFailed: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveVehicleType: (state, action) => {
      return {
        ...state,
        vehicleType: {
          ...state.vehicleType,
          apiStatus: {
            ...state.vehicleType.apiStatus,
            isSaved: true,
            isResponseFailed: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveVehicleType: (state, action) => {
      return {
        ...state,
        vehicleType: {
          ...state.vehicleType,
          apiStatus: {
            ...state.vehicleType.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllVehicleType: (state, action) => {
      return {
        ...state,
        vehicleType: {
          ...state.vehicleType,
          apiStatus: {
            ...state.vehicleType.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllVehicleType: (state, action) => {
      return {
        ...state,
        vehicleType: {
          ...state.vehicleType,
          listVehicleType: action?.payload,
          apiStatus: {
            ...state.vehicleType.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllVehicleType: (state, action) => {
      return {
        ...state,
        vehicleType: {
          ...state.vehicleType,
          apiStatus: {
            ...state.vehicleType.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },

    resetVehicleType: (state, action) => {
      return {
        ...state,
        vehicleType: {
          ...state.vehicleType,
          add: vehicleTypeInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
      }
    },

    // vehicle Model

    updateVehicleModel: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          add: {
            ...state.vehicleModel.add,
            value: action?.payload
          }
        }
      };
    },
    updateChooseModelVehicleType: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          add: {
            ...state.vehicleModel.add,
            chooseVehicleType: action?.payload
          }
        }
      };
    },
    updateModelVehicleCompany: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          add: {
            ...state.vehicleModel.add,
            chooseVehicleCompanyName: action?.payload
          }
        }
      };
    },

    requestToSaveVehicleModel: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          apiStatus: {
            ...state.vehicleModel.apiStatus,
            isRequestToSave: true,
            isFailedToSave: false,
            isSaved: false
          }
        }
      };
    },
    responseToSaveVehicleModel: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          apiStatus: {
            ...state.vehicleModel.apiStatus,
            isSaved: true,
            isFailedToSave: false,
            isRequestToSave: true
          }
        }
      };
    },
    failedToSaveVehicleModel: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          apiStatus: {
            ...state.vehicleModel.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },
    requestToGetAllVehicleModel: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          apiStatus: {
            ...state.vehicleModel.apiStatus,
            isRequestToGetAll: true,
            isFailedToGetAll: false,
            isGetAll: false
          }
        }
      };
    },
    responseToGetAllVehicleModel: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          listVehicleModel: action?.payload,
          apiStatus: {
            ...state.vehicleModel.apiStatus,
            isGetAll: true,
            isFailedToGetAll: false,
            isRequestToGetAll: true
          }
        }
      };
    },
    failedToGetAllVehicleModel: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          apiStatus: {
            ...state.vehicleModel.apiStatus,
            isFailedToSave: true,
            isRequestToSave: true,
            isSaved: false
          }
        }
      };
    },


    resetVehicleModel: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          add: vehicleModelInitialValues,
          apiStatus: {
            isSaved: false,
            isRequestToSave: false,
            isResponseFailed: false,
            isGetAll: false,
            isRequestToGetAll: false,
            isFailedToGetAll: false
          },
        },
      }
    },


    requestDeleteVehicleModel: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          apiStatus: {
            ...state.vehicleModel.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },


    responseToDeleteVehicleModel: (state, action) => {
      return {
        ...state,

        vehicleModel: {
          ...state.vehicleModel,
          apiStatus: {
            ...state.vehicleModel.apiStatus,
            isDeleted: true,
            isRequestToDelete: true,
            isDeleteResponseToFailed: false
          }
        }
      };
    },
    failedToDeleteVehicleModel: (state, action) => {
      return {
        ...state,
        vehicleModel: {
          ...state.vehicleModel,
          apiStatus: {
            ...state.vehicleModel.apiStatus,
            isDeleted: false,
            isRequestToDelete: true,
            isDeleteResponseToFailed: true
          }
        }
      };
    },


  }
});

export default VehicleManagementSlice.reducer;
export const {
  // updateChooseEntity,
  updateChooseEntityName,
  updateVehicleEntityId,
  updateRegistrationNo,
  updateChooseVehicleCompanyName,
  updateChooseVehicleModel,
  updateChooseVehicleTypes,
  updateManufacturingYear,
  updateChassisNo,
  updateEngineNo,
  updateRcNo,
  updatePollutionCertificateNo,
  updatePollutionRenwalDate,
  updatePermitNo,
  updatePermitRenwalDate,
  requestToSaveVehicle,
  responseToSaveVehicle,
  failedToSaveVehicle,
  requestToGetAllVehicle,
  responseToGetAllVehicle,
  failedToGetAllVehicle,
  resetVehicle,


  updateChooseEntity,
  updateEntityId,
  updateDriverName,
  updateDriverMobileNo,
  updateDriverLicenceNo,
  updateDriverAadharNo,
  updateUploadLicence,
  updateUploadAadhar,
  updateUploadAadharBack,
  updateCheckBoxCurrent,
  updatePermanentPinCode,
  updatePermanentState,
  updatePermanentCity,
  updatePermanentLocality,
  updatePermanentDriverAddress,
  updateSameAsPermanentAddressCheck,
  updateCurrentPinCode,
  updateCurrentState,
  updateCurrentCity,
  updateCurrentLocality,
  updateCurrentDriverAddress,
  requestToSaveVehicleDriver,
  responseToSaveVehicleDriver,
  failedToSaveVehicleDriver,
  requestToGetAllVehicleDriver,
  responseToGetAllVehicleDriver,
  failedToGetAllVehicleDriver,
  requestToGetVehicleDriverById,
  responseToGetVehicleDriverById,
  failedToGetVehicleDriverById,
  resetVehicleDriver,
  // delete
  requestDeleteVehicle,
  responseToDeleteVehicleDriver,
  failedToDeleteVehicleDriver,
  responseToDeleteVehicle,
  failedToDeleteVehicle,
  resetDeleteApiStatus,
  requestDeleteVehicleType,
  responseToDeleteVehicleType,
  failedToDeleteVehicleType,
  requestDeleteVehicleCompany,
  responseToDeleteVehicleCompany,
  failedToDeleteVehicleCompany,
  requestDeleteVehicleSize,
  responseToDeleteVehicleSize,
  failedToDeleteVehicleSize,
  requestDeleteVehicleModel,
  responseToDeleteVehicleModel,
  failedToDeleteVehicleModel,
  requestDeleteVehicleAccessory,
  responseToDeleteVehicleAccessory,
  failedToDeleteVehicleAccessory,
  requestDeleteVehicleColor,
  responseToDeleteVehicleColor,
  failedToDeleteVehicleColor,
  requestDeleteVehicleInsuranceCompany,
  responseToDeleteVehicleInsuranceCompany,
  failedToDeleteVehicleInsuranceCompany,

  requestDeleteVehicleDriver,
  resetVehicleDeleteStatus,
  updateVehicleAccessory,
  updateChooseAccessoryVehicleType,
  requestToSaveVehicleAccessory,
  responseToSaveVehicleAccessory,
  failedToSaveVehicleAccessory,
  requestToGetAllVehicleAccessory,
  responseToGetAllVehicleAccessory,
  failedToGetAllVehicleAccessory,
  resetVehicleAccessory,

  updateVehicleColor,
  requestToSaveVehicleColor,
  responseToSaveVehicleColor,
  failedToSaveVehicleColor,
  requestToGetAllVehicleColor,
  responseToGetAllVehicleColor,
  failedToGetAllVehicleColor,
  resetVehicleColor,

  updateVehicleCompany,
  updateChooseCompanyVehicleType,
  requestToSaveVehicleCompany,
  responseToSaveVehicleCompany,
  failedToSaveVehicleCompany,
  requestToGetAllVehicleCompany,
  responseToGetAllVehicleCompany,
  failedToGetAllVehicleCompany,
  resetVehicleCompany,

  updateVehicleInsuranceCompany,
  requestToSaveVehicleInsuranceCompany,
  responseToSaveVehicleInsuranceCompany,
  failedToSaveVehicleInsuranceCompany,
  requestToGetAllVehicleInsuranceCompany,
  responseToGetAllVehicleInsuranceCompany,
  failedToGetAllVehicleInsuranceCompany,
  resetVehicleInsuranceCompany,

  updateVehicleSize,
  updateSizeChooseVehicleType,
  requestToSaveVehicleSize,
  responseToSaveVehicleSize,
  failedToSaveVehicleSize,
  requestToGetAllVehicleSize,
  responseToGetAllVehicleSize,
  failedToGetAllVehicleSize,
  resetVehicleSize,

  updateVehicleType,
  requestToSaveVehicleType,
  responseToSaveVehicleType,
  failedToSaveVehicleType,
  requestToGetAllVehicleType,
  responseToGetAllVehicleType,
  failedToGetAllVehicleType,
  resetVehicleType,

  updateVehicleModel,
  updateChooseModelVehicleType,
  updateModelVehicleCompany,
  requestToSaveVehicleModel,
  responseToSaveVehicleModel,
  failedToSaveVehicleModel,
  requestToGetAllVehicleModel,
  responseToGetAllVehicleModel,
  failedToGetAllVehicleModel,
  resetVehicleModel
} = VehicleManagementSlice.actions;
