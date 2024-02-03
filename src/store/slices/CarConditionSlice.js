import { createSlice } from '@reduxjs/toolkit';
import { addCarConditionInitialValues } from '../../common-components/validator/carCondition-validation';

const initialState = {
  addCarCondition: { ...addCarConditionInitialValues?.addCarCondition },
  isSaved: false,
  isRequestToSave: false,
  isResponseFailed: false,

  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false,
  carConditionList: [],

};

export const CarConditionSlice = createSlice({
  name: 'carCondition',
  initialState,
  reducers: {
    updateAuto: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state?.addCarCondition,
          details: {
            ...state?.addCarCondition?.details,
            auto: action?.payload
          }
        }
      };
    },
    updateCarConditionNumber: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            carConditionNumber: action?.payload
          }
        }
      };
    },

    updateCarConditionAccessory: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          AccessoryList: action?.payload
        }
      };
    },
    updateVehicleType: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state?.addCarCondition,
          details: {
            ...state?.addCarCondition?.details,
            vehicleType: action?.payload
          }
        }
      };
    },
    updateDate: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            date: action?.payload
          }
        }
      };
    },
    updateManufacturer: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            manufacturer: action?.payload
          }
        }
      };
    },
    updateModel: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            model: action?.payload
          }
        }
      };
    },
    updateYearOfManufacture: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            yearOfManufacture: action?.payload
          }
        }
      };
    },
    updateColor: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            color: action?.payload
          }
        }
      };
    },
    updateVehicleRegNo: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            vehicleRegNo: action?.payload
          }
        }
      };
    },
    updateVehicleKM: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            vehicleKM: action?.payload
          }
        }
      };
    },
    updateVehicleValue: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            vehicleValue: action?.payload
          }
        }
      };
    },
    updateInsurancePolicyNo: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            insurancePolicyNo: action?.payload
          }
        }
      };
    },
    updateInsuranceCompanyName: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            insuranceCompanyName: {
              ...state.addCarCondition.details.insuranceCompanyName,
              value: action?.payload
            }
          }
        }
      };
    },
    updateInsuranceCompanyNameOther: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            insuranceCompanyName: {
              ...state.addCarCondition.details.insuranceCompanyName,
              otherValue: action?.payload
            }
          }
        }
      };
    },
    updateChassisNo: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            chassisNo: action?.payload
          }
        }
      };
    },
    updateEngineNo: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            engineNo: action?.payload
          }
        }
      };
    },

    // accessoriesDetails reducer
    // updateStepnie: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         stepnie: {
    //           ...state.addCarCondition.accessoriesDetails.stepnie,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateWheelCaps: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         wheelCaps: {
    //           ...state.addCarCondition.accessoriesDetails.wheelCaps,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateSideRareViewMirror: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         sideRareViewMirror: {
    //           ...state.addCarCondition.accessoriesDetails.sideRareViewMirror,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateCarRadioPlayer: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         carRadioPlayer: {
    //           ...state.addCarCondition.accessoriesDetails.carRadioPlayer,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateAirCondition: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         airCondition: {
    //           ...state.addCarCondition.accessoriesDetails.airCondition,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateLighter: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         lighter: {
    //           ...state.addCarCondition.accessoriesDetails.lighter,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateDigitalWatch: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         digitalWatch: {
    //           ...state.addCarCondition.accessoriesDetails.digitalWatch,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateSpeaker: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         speaker: {
    //           ...state.addCarCondition.accessoriesDetails.speaker,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateToolkit: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         toolkit: {
    //           ...state.addCarCondition.accessoriesDetails.toolkit,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateJack: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         jack: {
    //           ...state.addCarCondition.accessoriesDetails.jack,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateWiperArmsAndBlades: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         wiperArmsAndBlades: {
    //           ...state.addCarCondition.accessoriesDetails.wiperArmsAndBlades,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateMudFlap: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         mudFlap: {
    //           ...state.addCarCondition.accessoriesDetails.mudFlap,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateFloorRubberCarpet: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         floorRubberCarpet: {
    //           ...state.addCarCondition.accessoriesDetails.floorRubberCarpet,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateFuel: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         fuel: {
    //           ...state.addCarCondition.accessoriesDetails.fuel,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    // updateCarCover: (state, action) => {
    //   return {
    //     ...state,
    //     addCarCondition: {
    //       ...state.addCarCondition,
    //       accessoriesDetails: {
    //         ...state.addCarCondition.accessoriesDetails,
    //         carCover: {
    //           ...state.addCarCondition.accessoriesDetails.carCover,
    //           required: action?.payload
    //         }
    //       }
    //     }
    //   };
    // },
    updateBatteryNo: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          accessoriesDetails: {
            ...state.addCarCondition.accessoriesDetails,
            batteryNo: action?.payload
          }
        }
      };
    },
    updateTyreNo: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          accessoriesDetails: {
            ...state.addCarCondition.accessoriesDetails,
            tyreNo: action?.payload
          }
        }
      };
    },
    updateAnyOtherAccesories: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          accessoriesDetails: {
            ...state.addCarCondition.accessoriesDetails,
            anyOtherAccesories: action?.payload
          }
        }
      };
    },
    updateAnyRemark: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          accessoriesDetails: {
            ...state.addCarCondition.accessoriesDetails,
            anyRemark: action?.payload
          }
        }
      };
    },
    updateScratches: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          accessoriesDetails: {
            ...state.addCarCondition.accessoriesDetails,
            scratches: action?.payload
          }
        }
      };
    },
    updateDent: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          accessoriesDetails: {
            ...state.addCarCondition.accessoriesDetails,
            dent: action?.payload
          }
        }
      };
    },
    updateAnyOtherVisibleObservation: (state, action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          accessoriesDetails: {
            ...state.addCarCondition.accessoriesDetails,
            anyOtherVisibleObservation: action?.payload
          }
        }
      };
    },
    updateFrontImage: (state,action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            frontImage: action?.payload
          }
        }
      }
    },
    updateBackImage: (state,action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            backImage: action?.payload
          }
        }
      }
    },
    updateFrontRightCornerImage: (state,action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            frontRightCornerImage: action?.payload
          }
        }
      }
    },
    updateFrontLeftCornerImage: (state,action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            frontLeftCornerImage: action?.payload
          }
        }
      }
    },
    updateRightSideDoorImage: (state,action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            rightSideDoorImage: action?.payload
          }
        }
      }
    },
    updateLeftSideDoorImage: (state,action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            leftSideDoorImage: action?.payload
          }
        }
      }
    },
    updateRightRearCornerImage: (state,action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            rightRearCornerImage: action?.payload
          }
        }
      }
    },
    updateLeftRearCornerImage: (state,action) => {
      return {
        ...state,
        addCarCondition: {
          ...state.addCarCondition,
          details: {
            ...state.addCarCondition.details,
            leftRearCornerImage: action?.payload
          }
        }
      }
    },
    requestToSaveCarCondition: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isResponseFailed: false,
        isSaved: false
      };
    },
    responseToSaveCarCondition: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSaveCarCondition: (state, action) => {
      return {
        ...state,
        isResponseFailed: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToGetAllCarCondition: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllCarCondition: (state, action) => {
      return {
        ...state,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true,
        carConditionList: action?.payload
      };
    },
    failedToGetAllCarCondition: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },
    resetApiStatus: (state) => {
      return {
        ...state,
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
      };
    },
    reset: (state) => {
      return {
        ...state,
        addCarCondition: { ...initialState.addCarCondition },
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
      };
    },
  }
});

export default CarConditionSlice.reducer;
export const {
  updateDate,
  updateManufacturer,
  updateYearOfManufacture,
  updateColor,
  updateModel,
  updateVehicleType,
  updateAuto,
  updateCarConditionNumber,
  updateVehicleRegNo,
  updateVehicleKM,
  updateVehicleValue,
  updateInsurancePolicyNo,
  updateInsuranceCompanyName,
  updateInsuranceCompanyNameOther,
  updateChassisNo,
  updateEngineNo,
  updateStepnie,
  updateWheelCaps,
  updateSideRareViewMirror,
  updateCarRadioPlayer,
  updateAirCondition,
  updateLighter,
  updateDigitalWatch,
  updateSpeaker,
  updateToolkit,
  updateJack,
  updateWiperArmsAndBlades,
  updateMudFlap,
  updateFloorRubberCarpet,
  updateFuel,
  updateCarCover,
  updateBatteryNo,
  updateTyreNo,
  updateAnyOtherAccesories,
  updateAnyRemark,
  updateScratches,
  updateDent,
  updateAnyOtherVisibleObservation,
  updateFrontImage,
  updateBackImage,
  updateFrontRightCornerImage,
  updateFrontLeftCornerImage,
  updateRightSideDoorImage,
  updateLeftSideDoorImage,
  updateRightRearCornerImage,
  updateLeftRearCornerImage,
  requestToSaveCarCondition,
  responseToSaveCarCondition,
  failedToSaveCarCondition,
  requestToGetAllCarCondition,
  responseToGetAllCarCondition,
  failedToGetAllCarCondition,
  resetApiStatus,
  updateCarConditionAccessory,
  reset
} = CarConditionSlice.actions;
