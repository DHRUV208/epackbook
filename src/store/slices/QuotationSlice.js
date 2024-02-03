import { createSlice } from '@reduxjs/toolkit';
import { addQuotationInitialValues } from '../../common-components/validator/quotation-validation';
const initialState = {
  addQuotation: { ...addQuotationInitialValues?.addQuotation },
  isSaved: false,
  isRequestToSave: false,
  isResponseFailed: false,

  quotationList: [],
  isGetAll: false,
  isRequestToGetAll: false,
  isFailedToGetAll: false
};
const QuotationSlice = createSlice({
  name: 'quotation',
  initialState,
  reducers: {
    // quotation details
    resetQuotation: (state, action) => {
      return {
        ...state,
        addQuotation: { ...addQuotationInitialValues?.addQuotation },
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
      };
    },
    resetQuotationApiStatus: (state, action) => {
      return {
        ...state,
        isSaved: false,
        isRequestToSave: false,
        isResponseFailed: false,
      };
    },
    updateShiftingType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            shiftingType: action?.payload
          }
        }
      };
    },
    updateShiftingLuggage: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            shiftingLuggage: action?.payload
          }
        }
      };
    },
    updateTemplateName: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            templateName: action?.payload
          }
        }
      };
    },
    updateQuotationAuto: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            quotationAuto: action?.payload
          }
        }
      };
    },
    updateQuotationAutoValue: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            quotationAutoValue: action?.payload
          }
        }
      };
    },
    updateBillingBy: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            billingBy: action?.payload
          }
        }
      };
    },
    updateEnquirySource: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            enquirySource: action?.payload
          }
        }
      };
    },
    updateQuotationDate: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            quotationDate: action?.payload
          }
        }
      };
    },
    updateDateOfMoving: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            dateOfMoving: action?.payload
          }
        }
      };
    },
    updateQuotationVehicleType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            vehicleType: action?.payload
          }
        }
      };
    },
    updateQuotationManufacturer: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            manufacturer: action?.payload
          }
        }
      };
    },
    updateQuotationModel: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            model: action?.payload
          }
        }
      };
    },
    // updateCompanyPartyName: (state, action) => {
    //     return {
    //          ...state,
    //          addQuotation: {
    //              ...state.addQuotation,
    //              details:{
    //                  ...state.addQuotation.details,
    //                  companyPartyName: action?.payload
    //              }
    //          }
    //      }

    //  },
    updatePartyName: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            partyName: action?.payload
          }
        }
      };
    },
    updateMobileNumber: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            mobileNumber: action?.payload
          }
        }
      };
    },
    updateQuotationDataFromEnquiry: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            shiftingType: action?.payload?.shiftingType,
            billingBy: action?.payload?.billingBy,
            enquirySource: action?.payload?.enquirySource,
            partyName: action?.payload?.partyName,
            mobileNumber: action?.payload?.mobile,
            billingDetails: {
              ...state.addQuotation.details.billingDetails,
              companyName: action?.payload?.enquiryBillingDetails?.companyName,
              approvalAuthority: action?.payload?.enquiryBillingDetails?.approvalAuthority,
              authorityPersonName: action?.payload?.enquiryBillingDetails?.authorityPersonName,
              authorityMobileNumber: action?.payload?.enquiryBillingDetails?.authorityPersonMobile,
              companyAddress: action?.payload?.enquiryBillingDetails?.companyAddress,
              companyGST: action?.payload?.enquiryBillingDetails?.companyGST,
              employeeName: action?.payload?.enquiryBillingDetails?.employeeName,
              employeeDesignation: action?.payload?.enquiryBillingDetails?.employeeDesignation,
              employeeMobile: action?.payload?.enquiryBillingDetails?.employeeMobile

            }
          }
        }
      };
    },

    //  Billing Details
    updateCompanyName: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          billingDetails: {
            ...state.addQuotation.billingDetails,
            companyName: action?.payload
          }
        }
      };
    },
    updateApprovalAuthority: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          billingDetails: {
            ...state.addQuotation.billingDetails,
            approvalAuthority: action?.payload
          }
        }
      };
    },
    updateAuthorityPersonName: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          billingDetails: {
            ...state.addQuotation.billingDetails,
            authorityPersonName: action?.payload
          }
        }
      };
    },
    updateAuthorityMobileNumber: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          billingDetails: {
            ...state.addQuotation.billingDetails,
            authorityMobileNumber: action?.payload
          }
        }
      };
    },
    updateCompanyAddress: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          billingDetails: {
            ...state.addQuotation.billingDetails,
            companyAddress: action?.payload
          }
        }
      };
    },
    updateCompanyGST: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          billingDetails: {
            ...state.addQuotation.billingDetails,
            companyGST: action?.payload
          }
        }
      };
    },
    updateEmployeeName: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          billingDetails: {
            ...state.addQuotation.billingDetails,
            employeeName: action?.payload
          }
        }
      };
    },
    updateEmployeeDesignation: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          billingDetails: {
            ...state.addQuotation.billingDetails,
            employeeDesignation: action?.payload
          }
        }
      };
    },
    updateEmployeeMobile: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          billingDetails: {
            ...state.addQuotation.billingDetails,
            employeeMobile: action?.payload
          }
        }
      };
    },

    //  Pickup Address
    updatePickUpPinCode: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            pickUpAddress: {
              ...state.addQuotation.details.pickUpAddress,
              pincode: action?.payload
            }
          }
        }
      };
    },
    updatePickUpState: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            pickUpAddress: {
              ...state.addQuotation.details.pickUpAddress,
              state: action?.payload
            }
          }
        }
      };
    },
    updatePickUpCity: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            pickUpAddress: {
              ...state.addQuotation.details.pickUpAddress,
              city: action?.payload
            }
          }
        }
      };
    },
    updatePickUpLocality: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            pickUpAddress: {
              ...state.addQuotation.details.pickUpAddress,
              locality: action?.payload
            }
          }
        }
      };
    },
    updatePickUpCurrentFloor: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            pickUpAddress: {
              ...state.addQuotation.details.pickUpAddress,
              currentFloor: action?.payload
            }
          }
        }
      };
    },
    updatePickUpLiftStatus: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            pickUpAddress: {
              ...state.addQuotation.details.pickUpAddress,
              liftStatus: action?.payload
            }
          }
        }
      };
    },
    updatePickUpAddress: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            pickUpAddress: {
              ...state.addQuotation.details.pickUpAddress,
              address: action?.payload
            }
          }
        }
      };
    },
    updatePickUpAutoFetch: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            pickUpAddress: {
              ...state.addQuotation.details.pickUpAddress,
              autoFetch: action?.payload
            }
          }
        }
      };
    },

    //  Drop Address
    updateDropPinCode: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            dropAddress: {
              ...state.addQuotation.details.dropAddress,
              pincode: action?.payload
            }
          }
        }
      };
    },
    updateDropCity: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            dropAddress: {
              ...state.addQuotation.details.dropAddress,
              city: action?.payload
            }
          }
        }
      };
    },
    updateDropState: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            dropAddress: {
              ...state.addQuotation.details.dropAddress,
              state: action?.payload
            }
          }
        }
      };
    },
    updateDropLocality: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            dropAddress: {
              ...state.addQuotation.details.dropAddress,
              locality: action?.payload
            }
          }
        }
      };
    },
    updateDropCurrentFloor: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            dropAddress: {
              ...state.addQuotation.details.dropAddress,
              currentFloor: action?.payload
            }
          }
        }
      };
    },
    updateDropLiftStatus: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            dropAddress: {
              ...state.addQuotation.details.dropAddress,
              liftStatus: action?.payload
            }
          }
        }
      };
    },
    updateDropAddress: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            dropAddress: {
              ...state.addQuotation.details.dropAddress,
              address: action?.payload
            }
          }
        }
      };
    },
    updateDropAddressAutoFetch: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            dropAddress: {
              ...state.addQuotation.details.dropAddress,
              autoFetch: action?.payload
            }
          }
        }
      };
    },

    // freight form reducers
    updateLoadType: (state, action) => {
      const { type, value } = action?.payload;
      if (type === 'pl') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              partLoad: value
            }
          }
        };
      }
      if (type === 'fl') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              fullLoad: value
            }
          }
        };
      }
    },
    updateVehicleLoadType: (state, action) => {
      const { type, value } = action?.payload;
      if (type === 'sl') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              single: value
            }
          }
        };
      }
      if (type === 's2') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              shared: value
            }
          }
        };
      }
    },
    updateLorryType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            lorryType: action?.payload
          }
        }
      };
    },
    updateFreightCharges: (state, action) => {
      const { type, value } = action?.payload;
      if (type === 'fullLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              freightCharges: {
                ...state.addQuotation.freight.freightCharges,
                fullLoadCharge: value
              }
            }
          }
        };
      }
      if (type === 'partLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              freightCharges: {
                ...state.addQuotation.freight.freightCharges,
                partLoadCharge: value
              }
            }
          }
        };
      }
    },
    updatePackingChargeType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            packingCharge: {
              ...state.addQuotation.freight.packingCharge,
              type: action?.payload
            }
          }
        }
      };
    },
    updatePackingCharge: (state, action) => {
      const { type, value } = action?.payload;
      if (type === 'partLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              packingCharge: {
                ...state.addQuotation.freight.packingCharge,
                charges: {
                  ...state.addQuotation.freight.packingCharge.charges,
                  partLoadCharge: value
                }
              }
            }
          }
        };
      }
      if (type === 'fullLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              packingCharge: {
                ...state.addQuotation.freight.packingCharge,
                charges: {
                  ...state.addQuotation.freight.packingCharge.charges,
                  fullLoadCharge: value
                }
              }
            }
          }
        };
      }
    },
    updateUnpackingChargeType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            unpackingCharge: {
              ...state.addQuotation.freight.unpackingCharge,
              type: action?.payload
            }
          }
        }
      };
    },
    updateUnpackingCharge: (state, action) => {
      const { type, value } = action?.payload;
      if (type === 'partLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              unpackingCharge: {
                ...state.addQuotation.freight.unpackingCharge,
                charges: {
                  ...state.addQuotation.freight.unpackingCharge.charges,
                  partLoadCharge: value
                }
              }
            }
          }
        };
      }
      if (type === 'fullLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              unpackingCharge: {
                ...state.addQuotation.freight.unpackingCharge,
                charges: {
                  ...state.addQuotation.freight.unpackingCharge.charges,
                  fullLoadCharge: value
                }
              }
            }
          }
        };
      }
    },
    updatePackingMaterialType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            packingMaterialCharge: {
              ...state.addQuotation.freight.packingMaterialCharge,
              type: action?.payload
            }
          }
        }
      };
    },
    updatePackingMaterialCharge: (state, action) => {
      const { type, value } = action?.payload;
      if (type === 'partLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              packingMaterialCharge: {
                ...state.addQuotation.freight.packingMaterialCharge,
                charges: {
                  ...state.addQuotation.freight.packingMaterialCharge.charges,
                  partLoadCharge: value
                }
              }
            }
          }
        };
      }
      if (type === 'fullLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              packingMaterialCharge: {
                ...state.addQuotation.freight.packingMaterialCharge,
                charges: {
                  ...state.addQuotation.freight.packingMaterialCharge.charges,
                  fullLoadCharge: value
                }
              }
            }
          }
        };
      }
    },
    updateLoadingType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            loadingCharge: {
              ...state.addQuotation.freight.loadingCharge,
              type: action?.payload
            }
          }
        }
      };
    },
    updateLoadingCharge: (state, action) => {
      const { type, value } = action?.payload;
      if (type === 'partLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              loadingCharge: {
                ...state.addQuotation.freight.loadingCharge,
                charges: {
                  ...state.addQuotation.freight.loadingCharge.charges,
                  partLoadCharge: value
                }
              }
            }
          }
        };
      }
      if (type === 'fullLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              loadingCharge: {
                ...state.addQuotation.freight.loadingCharge,
                charges: {
                  ...state.addQuotation.freight.loadingCharge.charges,
                  fullLoadCharge: value
                }
              }
            }
          }
        };
      }
    },
    updateUnloadingType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            unloadingCharge: {
              ...state.addQuotation.freight.unloadingCharge,
              type: action?.payload
            }
          }
        }
      };
    },
    updateUnloadingCharge: (state, action) => {
      const { type, value } = action?.payload;
      if (type === 'partLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              unloadingCharge: {
                ...state.addQuotation.freight.unloadingCharge,
                charges: {
                  ...state.addQuotation.freight.unloadingCharge.charges,
                  partLoadCharge: value
                }
              }
            }
          }
        };
      }
      if (type === 'fullLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              unloadingCharge: {
                ...state.addQuotation.freight.unloadingCharge,
                charges: {
                  ...state.addQuotation.freight.unloadingCharge.charges,
                  fullLoadCharge: value
                }
              }
            }
          }
        };
      }
    },
    updateLoadingLoaddedBy: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            loadingCharge: {
              ...state.addQuotation.freight.loadingCharge,
              additional: {
                ...state.addQuotation.freight.loadingCharge.additional,
                loadedBy: action?.payload
              }
            }
          }
        }
      };
    },
    updateUnloadingLoaddedBy: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            unloadingCharge: {
              ...state.addQuotation.freight.unloadingCharge,
              additional: {
                ...state.addQuotation.freight.unloadingCharge.additional,
                loadedBy: action?.payload
              }
            }
          }
        }
      };
    },
    updateLoadingFloor: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            loadingCharge: {
              ...state.addQuotation.freight.loadingCharge,
              additional: {
                ...state.addQuotation.freight.loadingCharge.additional,
                floor: action?.payload
              }
            }
          }
        }
      };
    },
    updateUnloadingFloor: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            unloadingCharge: {
              ...state.addQuotation.freight.unloadingCharge,
              additional: {
                ...state.addQuotation.freight.unloadingCharge.additional,
                floor: action?.payload
              }
            }
          }
        }
      };
    },
    updateLoadingLiftStatus: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            loadingCharge: {
              ...state.addQuotation.freight.loadingCharge,
              additional: {
                ...state.addQuotation.freight.loadingCharge.additional,
                lift: action?.payload
              }
            }
          }
        }
      };
    },
    updateUnloadingLiftStatus: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            unloadingCharge: {
              ...state.addQuotation.freight.unloadingCharge,
              additional: {
                ...state.addQuotation.freight.unloadingCharge.additional,
                lift: action?.payload
              }
            }
          }
        }
      };
    },
    // charges from reducers
    updateSurcharge: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            surcharge: {
              ...state.addQuotation.charges.surcharge,
              required: action?.payload
            }
          }
        }
      };
    },
    updateSurchargeValue: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            surcharge: {
              ...state.addQuotation.charges.surcharge,
              value: action?.payload !== undefined ? action?.payload : ''
            }
          }
        }
      };
    },
    updateDiscount: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            discount: {
              ...state.addQuotation.charges.discount,
              required: action?.payload
            }
          }
        }
      };
    },
    updateDiscountType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            discount: {
              ...state.addQuotation.charges.discount,
              type: action?.payload
            }
          }
        }
      };
    },
    updateDiscountValue: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            discount: {
              ...state.addQuotation.charges.discount,
              value: action?.payload
            }
          }
        }
      };
    },
    updateGST: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            gst: {
              ...state.addQuotation.charges.gst,
              mode: action?.payload
            }
          }
        }
      };
    },
    updateGSTPercentage: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            gst: {
              ...state.addQuotation.charges.gst,
              percentage: action?.payload
            }
          }
        }
      };
    },
    updateGSTType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            gst: {
              ...state.addQuotation.charges.gst,
              type: action?.payload
            }
          }
        }
      };
    },
    updateTransit: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            transitInsurance: {
              ...state.addQuotation.charges.transitInsurance,
              required: action?.payload
            }
          }
        }
      };
    },
    updateTransitOptions: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            transitInsurance: {
              ...state.addQuotation.charges.transitInsurance,
              options: action?.payload
            }
          }
        }
      };
    },
    updateTransitWithOutGoods: () => { },

    updateTransitShiftingLuggage: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            transitInsurance: {
              ...state.addQuotation.charges.transitInsurance,
              charges: {
                ...state.addQuotation.charges.transitInsurance.charges,
                luggageType: action?.payload
              }
            }
          }
        }
      };
    },
    updateTransitInsurancePercentage: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            transitInsurance: {
              ...state.addQuotation.charges.transitInsurance,
              charges: {
                ...state.addQuotation.charges.transitInsurance.charges,
                insurancePerc: action?.payload
              }
            }
          }
        }
      };
    },
    updateTransitInsuranceGST: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            transitInsurance: {
              ...state.addQuotation.charges.transitInsurance,
              charges: {
                ...state.addQuotation.charges.transitInsurance.charges,
                gst: action?.payload
              }
            }
          }
        }
      };
    },
    updateTransitInsuranceValue: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            transitInsurance: {
              ...state.addQuotation.charges.transitInsurance,
              charges: {
                ...state.addQuotation.charges.transitInsurance.charges,
                value: action?.payload
              }
            }
          }
        }
      };
    },
    updateStorageCharge: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            storeCharges: {
              ...state.addQuotation.charges.storeCharges,
              required: action?.payload
            }
          }
        }
      };
    },
    updateStorageOptionsCharge: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            storeCharges: {
              ...state.addQuotation.charges.storeCharges,
              options: action?.payload
            }
          }
        }
      };
    },
    updateStorageFromCharge: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            storeCharges: {
              ...state.addQuotation.charges.storeCharges,
              from: action?.payload
            }
          }
        }
      };
    },
    updateStorageToCharge: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            storeCharges: {
              ...state.addQuotation.charges.storeCharges,
              to: action?.payload
            }
          }
        }
      };
    },
    updateStorageAmountCharge: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            storeCharges: {
              ...state.addQuotation.charges.storeCharges,
              amount: action?.payload
            }
          }
        }
      };
    },
    updateOtherCharge: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            otherCharges: {
              ...state.addQuotation.charges.otherCharges,
              required: action?.payload
            }
          }
        }
      };
    },
    updateOtherDetailsQ1Reply: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            otherDetails: {
              ...state.addQuotation.charges.otherDetails,
              q1Reply: action?.payload
            }
          }
        }
      };
    },
    updateOtherDetailsQ2Reply: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            otherDetails: {
              ...state.addQuotation.charges.otherDetails,
              q2Reply: action?.payload
            }
          }
        }
      };
    },
    updateOtherDetailsQ1Description: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            otherDetails: {
              ...state.addQuotation.charges.otherDetails,
              q1Description: action?.payload
            }
          }
        }
      };
    },
    updateOtherDetailsQ2Description: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            otherDetails: {
              ...state.addQuotation.charges.otherDetails,
              q2Description: action?.payload
            }
          }
        }
      };
    },
    updateJobType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            otherCharges: {
              ...state.addQuotation.charges.otherCharges,
              jobType: action?.payload
            }
          }
        }
      };
    },
    updateJobTypeValue: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            otherCharges: {
              ...state.addQuotation.charges.otherCharges,
              value: action?.payload
            }
          }
        }
      };
    },
    updateAdvanceAmount: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            advanceAmount: action?.payload
          }
        }
      };
    },
    requestToSaveQuotation: (state, action) => {
      return {
        ...state,
        isRequestToSave: true,
        isResponseFailed: false,
        isSaved: false
      };
    },
    responseToSaveQuotation: (state, action) => {
      return {
        ...state,
        isSaved: true,
        isResponseFailed: false,
        isRequestToSave: true
      };
    },
    failedToSaveQuotation: (state, action) => {
      return {
        ...state,
        isResponseFailed: true,
        isRequestToSave: true,
        isSaved: false
      };
    },
    requestToGetAllQuotation: (state, action) => {
      return {
        ...state,
        isRequestToGetAll: true,
        isFailedToGetAll: false,
        isGetAll: false
      };
    },
    responseToGetAllQuotation: (state, action) => {
      return {
        ...state,
        quotationList: action?.payload,
        isGetAll: true,
        isFailedToGetAll: false,
        isRequestToGetAll: true
      };
    },
    failedToGetAllQuotation: (state, action) => {
      return {
        ...state,
        isFailedToGetAll: true,
        isRequestToGetAll: true,
        isGetAll: false
      };
    },
    updateExtraJobType: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            jobTypeCharges: {
              ...state.addQuotation.freight.jobTypeCharges,
              "jobType": action?.payload
            }
          }
        }
      };
    },
    updateExtraJobTypeQuantity: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            jobTypeCharges: {
              ...state.addQuotation.freight.jobTypeCharges,
              "qty": action?.payload
            }
          }
        }
      };
    },
    resetJobTypeCharges: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            jobTypeCharges: {
              "jobType": "",
              "qty": "",
              "partLoad": {
                "ratePerItem": "",
                "amount": ""
              },
              "fullLoad": {
                "ratePerItem": "",
                "amount": ""
              }
            },
          }
        }
      };
    },
    updateExtraJobRate: (state, action) => {
      const { type, value } = action?.payload;
      if (type === 'partLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              jobTypeCharges: {
                ...state.addQuotation.freight.jobTypeCharges,
                "partLoad": {
                  ...state.addQuotation.freight.jobTypeCharges["partLoad"],
                  "ratePerItem": value
                }
              }
            }
          }
        };
      }
      if (type === 'fullLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              jobTypeCharges: {
                ...state.addQuotation.freight.jobTypeCharges,
                "fullLoad": {
                  ...state.addQuotation.freight.jobTypeCharges["fullLoad"],
                  "ratePerItem": value
                }
              }
            }
          }
        };
      }
    },
    updateExtraJobCharge: (state, action) => {
      const { type, value } = action?.payload;
      if (type === 'partLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              jobTypeCharges: {
                ...state.addQuotation.freight.jobTypeCharges,
                "partLoad": {
                  ...state.addQuotation.freight.jobTypeCharges["partLoad"],
                  "amount": value
                }
              }
            }
          }
        };
      }
      if (type === 'fullLoad') {
        return {
          ...state,
          addQuotation: {
            ...state.addQuotation,
            freight: {
              ...state.addQuotation.freight,
              jobTypeCharges: {
                ...state.addQuotation.freight.jobTypeCharges,
                "fullLoad": {
                  ...state.addQuotation.freight.jobTypeCharges["fullLoad"],
                  "amount": value
                }
              }
            }
          }
        };
      }
    },

    jobTypeListUpdate: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          freight: {
            ...state.addQuotation.freight,
            jobTypeList: action?.payload
          }
        }
      };
    },
    pickUpAddressAutoFetch: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            pickUpAddress: {
              ...state.addQuotation.details.pickUpAddress,
              pincode: action?.payload?.pincode,
              state: action?.payload?.state,
              city: action?.payload?.city,
              currentFloor: action?.payload?.floor,
              liftStatus: action?.payload?.isLiftAvailable,
              address: action?.payload?.address
            }
          }
        }
      };
    },
    pickUpAddressAutoFetchDiscard: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            pickUpAddress: {
              ...state.addQuotation.details.pickUpAddress,
              pincode: "",
              state: "",
              city: "",
              currentFloor: "",
              liftStatus: "",
              address: ""
            }
          }
        }
      };
    },
    deliveryAddressAutoFetch: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            dropAddress: {
              ...state.addQuotation.details.dropAddress,
              pincode: action?.payload?.pincode,
              state: action?.payload?.state,
              city: action?.payload?.city,
              currentFloor: action?.payload?.floor,
              liftStatus: action?.payload?.isLiftAvailable,
              address: action?.payload?.address
            }
          }
        }
      };
    },
    deliveryAddressAutoFetchDiscard: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          details: {
            ...state.addQuotation.details,
            dropAddress: {
              ...state.addQuotation.details.dropAddress,
              pincode: "",
              state: "",
              city: "",
              currentFloor: "",
              liftStatus: "",
              address: ""
            }
          }
        }
      };
    },
    updateTransitChargeList: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            transitInsurance: {
              ...state.addQuotation.charges.transitInsurance,
              listTransitCharges: action?.payload
            }
          }
        }
      }
    },
    resetTransitChargeList: (state, action) => {
      return {
        ...state,
        addQuotation: {
          ...state.addQuotation,
          charges: {
            ...state.addQuotation.charges,
            transitInsurance: {
              ...state.addQuotation.charges.transitInsurance,
              charges:  {
                luggageType: '',
                insurancePerc: '',
                gst: '',
                value: 0
              }
            }
          }
        }
      }
    },
  }
});
export default QuotationSlice.reducer;
export const {
  updateCompanyPartyName,
  updateDropAddress,
  updateDropCity,
  updateDropLocality,
  updateDropPinCode,
  updateDropState,
  updateEnquirySource,
  updateFreightCharges,
  updateGST,
  updateGSTPercentage,
  updateGSTType,
  updateJobType,
  updateJobTypeValue,
  updateLoadType,
  updateLoadingCharge,
  updateLoadingFloor,
  updateLoadingLiftStatus,
  updateLoadingLoaddedBy,
  updateLoadingType,
  updateLorryType,
  updateMobileNumber,
  updateOtherCharge,
  updatePackingCharge,
  updatePackingChargeType,
  updateUnpackingChargeType,
  updateUnpackingCharge,
  updatePackingMaterialType,
  updatePackingMaterialCharge,
  updateUnloadingType,
  updateUnloadingCharge,
  updateUnloadingLoaddedBy,
  updateUnloadingFloor,
  updateUnloadingLiftStatus,
  updateSurcharge,
  updateSurchargeValue,
  updateTransit,
  updateTransitOptions,
  updateTransitShiftingLuggage,
  updateTransitInsurancePercentage,
  updateTransitInsuranceValue,
  updateStorageCharge,
  updateStorageFromCharge,
  updateStorageToCharge,
  updateStorageAmountCharge,
  updateShiftingType,
  updateTemplateName,
  updateQuotationAuto,
  updateQuotationAutoValue,
  updateShiftingLuggage,
  updateDateOfMoving,
  updatePartyName,
  updateTransitInsuranceGST,
  updatePickUpPinCode,
  updatePickUpCity,
  updatePickUpState,
  updatePickUpLocality,
  updatePickUpAddress,
  updateDiscount,
  updateDiscountValue,
  updateStorageOptionsCharge,
  updateOtherDetailsQ1Reply,
  updateOtherDetailsQ1Description,
  updateOtherDetailsQ2Reply,
  updateOtherDetailsQ2Description,
  updateBillingBy,
  updateCompanyName,
  updateApprovalAuthority,
  updateAuthorityPersonName,
  updateAuthorityMobileNumber,
  updateCompanyAddress,
  updateCompanyGST,
  updateEmployeeName,
  updateEmployeeDesignation,
  updateEmployeeMobile,
  updatePickUpCurrentFloor,
  updatePickUpLiftStatus,
  updateDropCurrentFloor,
  updateDropLiftStatus,
  updateAdvanceAmount,
  updateQuotationDate,
  updateQuotationVehicleType,
  updateQuotationManufacturer,
  updateQuotationModel,
  requestToSaveQuotation,
  responseToSaveQuotation,
  failedToSaveQuotation,
  requestToGetAllQuotation,
  responseToGetAllQuotation,
  failedToGetAllQuotation,
  resetQuotation,
  resetQuotationApiStatus,

  updateExtraJobType,
  updateExtraJobTypeQuantity,
  updateExtraJobCharge,
  updateExtraJobRate,

  jobTypeListUpdate,
  pickUpAddressAutoFetch,
  pickUpAddressAutoFetchDiscard,
  updatePickUpAutoFetch,
  updateDropAddressAutoFetch,
  deliveryAddressAutoFetch,
  deliveryAddressAutoFetchDiscard,
  updateDiscountType,
  updateQuotationDataFromEnquiry,
  resetJobTypeCharges,

  updateTransitChargeList,
  resetTransitChargeList
} = QuotationSlice.actions;


