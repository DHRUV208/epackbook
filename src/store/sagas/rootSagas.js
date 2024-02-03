import { all, fork } from 'redux-saga/effects';
import { watcherLoginSaga, watcherVerifyOTPSaga } from './auth-saga';
import {
  watcherAddBranchSaga,
  watcherGetAllBranchSaga,
  watcherGetBranchByIdSaga,
  watcherUpdateBranchSaga
} from './branch-saga';
import {
  watcherAddEnquirySaga,
  watcherGetAllEnquirySaga,
  watcherUpdateEnquirySaga,
  watcherGetEnquiryByIdSaga,
  watcherDeleteEnquirySaga
} from './enquiry-saga';
import { watcherAddOrderSaga, watcherListOrderSaga, watcherUpdateOrderSaga, watcherUpdateOrderByIdSaga } from './order-saga';
import {
  watcherAddCompanySaga,
  watcherGetCompanyDetailSaga,
  watcherUpdateCompanyDetailSaga
} from './company-saga';
import {
  watcherAddFranchiseSaga,
  watcherGetAllFranchiseSaga,
  watcherGetByIdFranchiseSaga,
  watcherUpdateFranchiseSaga
} from './franchise-saga';
import { watcherAddQuotationSaga, watcherGetAllQuotationSaga } from './quotation-saga';
import { watcherAddMoneyReceiptSaga, watcherGetAllMoneyReceiptSaga } from './moneyReceipt-saga';
import { watcherAddFollowUpsSaga, watcherGetAllFollowUpsSaga } from './followUps-saga';
import { watcherAddSurveySaga, watcherGetAllSurveySaga } from './survey-saga';
import { watcherAddBiltySaga, watcherGetAllBiltySaga } from './bilty-saga';
import { watcherAddCarConditionSaga, watcherGetAllCarConditionSaga } from './carCondition-saga';
import { watcherAddInvoiceSaga, watcherGetAllInvoiceSaga } from './invoice-saga';
import { watcherAddTemplateSaga, watcherGetAllTemplateSaga } from './templateSetting-saga';
import { watcherGetDropLocationSaga, watcherGetPickupLocationSaga } from './utils-saga';
import { watcherAddUserSignSaga, watcherGetAllModulesSaga } from './userSetting-saga';
import {
  watcherGetAllVehicleDriverSaga,
  watcherGetVehicleDriverByIdSaga,
  watcherAddVehicleSaga,
  watcherAddVehicleDriverSaga,
  watcherAddVehicleAccessorySaga,
  watcherGetAllVehicleAccessorySaga,
  watcherAddVehicleColorSaga,
  watcherGetAllVehicleColorSaga,
  watcherAddVehicleCompanySaga,
  watcherGetAllVehicleCompanySaga,
  watcherAddVehicleInsuranceCompanySaga,
  watcherGetAllVehicleInsuranceCompanySaga,
  watcherAddVehicleSizeSaga,
  watcherGetAllVehicleSizeSaga,
  watcherAddVehicleTypeSaga,
  watcherGetAllVehicleTypeSaga,
  watcherAddVehicleModelSaga,
  watcherGetAllVehicleModelSaga,
  watcherGetAllVehicleSaga,
  watcherDeleteVehicleSaga,
  watcherDeleteVehicleDriverSaga,
  watcherDeleteVehicleTypeSaga,
  watcherDeleteVehicleCompanySaga,
  watcherDeleteVehicleSizeSaga,
  watcherDeleteVehicleModelSaga,
  watcherDeleteVehicleAccessorySaga,
  watcherDeleteVehicleColorSaga,
  watcherDeleteVehicleInsuranceCompanySaga
} from './vehicleManagement-saga';
import {
  watcherAddAccountsSaga,
  watcherGetAllAccountsSaga,
  watcherGetAllBankSaga,
  watcherAddBankSaga
} from './accountManagement-saga';
import {
  watcherAddConfigurationSaga,
  watcherGetAllConfigurationSaga,
  watcherAddPaymentTypesSaga,
  watcherGetAllPaymentTypesSaga,
  watcherAddPaymentModesSaga,
  watcherGetAllPaymentModesSaga,
  watcherAddUnitTypesSaga,
  watcherGetAllUnitTypesSaga,
  watcherDeletePaymentModesSaga,
  watcherDeletePaymentTypesSaga,
  watcherDeleteUnitTypesSaga,
  watcherDeleteConfigurationSaga
} from './appConfiguration-saga';
import {
  watcherAddContactDetailsSaga,
  watcherGetAllContactDetailsSaga,
  watcherAddRegistrationDetailSaga,
  watcherGetAllRegistrationDetailSaga,
  watcherAddFooterContentSaga,
  watcherGetAllFooterContentSaga,
  watcherAddModuleSaga,
  watcherGetAllModuleSaga,
  watcherAddEnquirySourceSaga,
  watcherGetAllEnquirySourceSaga,
  watcherAddApprovalAuthoritySaga,
  watcherGetAllApprovalAuthoritySaga,
  watcheraddSubModuleSaga,
  watcherAddFeatureSaga,
  watcherListFeatureSaga,
  watcherListSubmodulesSaga,
  watcherUpdateSubModuleSaga,
  watcherDeleteContactDetail,
  watcherDeleteRegistrationDetail,
  watcherDeleteFooterContentSaga
} from './contentManagement';
import {
  watcherAddFloorSaga,
  watcherDeleteFloorSaga,
  watcherGetAllFloorSaga,
  watcherAddInsurancePercentageSaga,
  watcherGetAllInsurancePercentageSaga,
  watcherAddMaterialSaga,
  watcherGetAllMaterialSaga,
  watcherAddMovingModeSaga,
  watcherGetAllMovingModeSaga,
  watcherAddMovingTypeSaga,
  watcherGetAllMovingTypeSaga,
  watcherAddPackingTypeSaga,
  watcherGetAllPackingTypeSaga,
  watcherAddShiftingLuggageSaga,
  watcherGetAllShiftingLuggageSaga,
  watcherAddTransitInsuranceSaga,
  watcherGetAllTransitInsuranceSaga,
  watcherDeleteTransitInsuranceSaga,
  watcherDeleteShiftingLuggageSaga,
  watcherDeletePackingTypeSaga,
  watcherDeleteMovingTypeSaga,
  watcherDeleteMovingModeSaga,
  watcherDeleteMaterialSaga,
  watcherDeleteInsurancePercentageSaga,
} from './shiftingManagement-saga';

import {
  watcherAddEmployeeEnrollSaga,
  watcherGetAllEmployeeEnrollSaga
} from './roleManagement-saga';

import { watcherAddPackingListSaga, watcherGetAllPackingListSaga } from './packingList-saga';
import { watcherAddSurveyItemSaga, watcherGetAllSurveyItemSaga } from './surveyItem-saga';
import { watcherAddPackingMaterialSaga, watcherGetAllPackingMaterialSaga } from './packingMaterial-saga';
import { watcherAddSubscriptionPlanSaga } from './subscriptionManagement-saga';
export default function* rootSaga() {
  yield all([
    fork(watcherListSubmodulesSaga),
    fork(watcherVerifyOTPSaga),
    fork(watcherLoginSaga),
    fork(watcherAddBranchSaga),
    fork(watcherGetAllBranchSaga),
    fork(watcherUpdateBranchSaga),
    fork(watcherAddEnquirySaga),
    fork(watcherGetEnquiryByIdSaga),
    fork(watcherGetAllEnquirySaga),
    fork(watcherAddOrderSaga),
    fork(watcherAddCompanySaga),
    fork(watcherUpdateCompanyDetailSaga),
    fork(watcherAddFranchiseSaga),
    fork(watcherGetAllFranchiseSaga),
    fork(watcherGetByIdFranchiseSaga),
    fork(watcherUpdateFranchiseSaga),
    fork(watcherAddQuotationSaga),
    fork(watcherGetAllQuotationSaga),
    fork(watcherAddMoneyReceiptSaga),
    fork(watcherGetAllMoneyReceiptSaga),
    fork(watcherGetAllMoneyReceiptSaga),
    fork(watcherAddCarConditionSaga),
    fork(watcherGetAllCarConditionSaga),
    fork(watcherAddInvoiceSaga),
    fork(watcherGetAllInvoiceSaga),
    fork(watcherAddFollowUpsSaga),
    fork(watcherGetAllFollowUpsSaga),
    fork(watcherAddSurveySaga),
    fork(watcherGetAllSurveySaga),
    fork(watcherAddBiltySaga),
    fork(watcherGetAllBiltySaga),
    fork(watcherAddVehicleCompanySaga),
    fork(watcherGetAllVehicleCompanySaga),
    fork(watcherGetDropLocationSaga),
    fork(watcherGetPickupLocationSaga),
    fork(watcherGetCompanyDetailSaga),
    fork(watcherAddVehicleDriverSaga),
    fork(watcherGetAllVehicleDriverSaga),
    fork(watcherAddVehicleAccessorySaga),
    fork(watcherGetAllVehicleAccessorySaga),
    fork(watcherAddVehicleColorSaga),
    fork(watcherGetAllVehicleColorSaga),
    fork(watcherAddVehicleCompanySaga),
    fork(watcherGetAllVehicleCompanySaga),
    fork(watcherAddVehicleInsuranceCompanySaga),
    fork(watcherGetAllVehicleInsuranceCompanySaga),
    fork(watcherAddVehicleSizeSaga),
    fork(watcherGetAllVehicleSizeSaga),
    fork(watcherAddVehicleTypeSaga),
    fork(watcherGetAllVehicleTypeSaga),
    fork(watcherAddAccountsSaga),
    fork(watcherGetAllAccountsSaga),
    fork(watcherAddBankSaga),
    fork(watcherGetAllBankSaga),
    fork(watcherAddConfigurationSaga),
    fork(watcherGetAllConfigurationSaga),
    fork(watcherAddFeatureSaga),
    fork(watcherListFeatureSaga),
    fork(watcherUpdateSubModuleSaga),

    fork(watcherAddPaymentTypesSaga),
    fork(watcherGetAllPaymentTypesSaga),
    fork(watcherAddPaymentModesSaga),
    fork(watcherGetAllPaymentModesSaga),
    fork(watcherAddUnitTypesSaga),
    fork(watcherGetAllUnitTypesSaga),
    fork(watcherAddContactDetailsSaga),
    fork(watcherGetAllContactDetailsSaga),
    fork(watcherAddRegistrationDetailSaga),
    fork(watcherGetAllRegistrationDetailSaga),
    fork(watcherAddFooterContentSaga),
    fork(watcherGetAllFooterContentSaga),
    fork(watcherAddModuleSaga),
    fork(watcherGetAllModuleSaga),
    fork(watcherAddEnquirySourceSaga),
    fork(watcherGetAllEnquirySourceSaga),
    fork(watcherAddApprovalAuthoritySaga),
    fork(watcherGetAllApprovalAuthoritySaga),
    fork(watcheraddSubModuleSaga),
    fork(watcherAddFloorSaga),
    fork(watcherDeleteFloorSaga),
    fork(watcherDeleteInsurancePercentageSaga),
    fork(watcherDeleteMaterialSaga),
    fork(watcherDeleteMovingModeSaga),
    fork(watcherDeleteMovingTypeSaga),
    fork(watcherDeletePackingTypeSaga),
    fork(watcherDeleteShiftingLuggageSaga),
    fork(watcherDeleteTransitInsuranceSaga),
    fork(watcherGetAllFloorSaga),
    fork(watcherAddInsurancePercentageSaga),
    fork(watcherGetAllInsurancePercentageSaga),
    fork(watcherAddMaterialSaga),
    fork(watcherGetAllMaterialSaga),
    fork(watcherAddMovingModeSaga),
    fork(watcherGetAllMovingModeSaga),
    fork(watcherAddMovingTypeSaga),
    fork(watcherGetAllMovingTypeSaga),
    fork(watcherAddPackingTypeSaga),
    fork(watcherGetAllPackingTypeSaga),
    fork(watcherAddShiftingLuggageSaga),
    fork(watcherGetAllShiftingLuggageSaga),
    fork(watcherAddTransitInsuranceSaga),
    fork(watcherGetAllTransitInsuranceSaga),
    fork(watcherAddUserSignSaga),
    fork(watcherAddTemplateSaga),
    fork(watcherGetAllTemplateSaga),
    fork(watcherAddEmployeeEnrollSaga),
    fork(watcherGetAllEmployeeEnrollSaga),
    fork(watcherGetBranchByIdSaga),
    fork(watcherUpdateEnquirySaga),

    fork(watcherAddVehicleModelSaga),
    fork(watcherGetAllVehicleModelSaga),
    fork(watcherAddVehicleSaga),
    fork(watcherGetAllVehicleSaga),
    fork(watcherListOrderSaga),
    fork(watcherUpdateOrderSaga),
    fork(watcherUpdateOrderByIdSaga),
    fork(watcherDeletePaymentModesSaga),
    fork(watcherDeletePaymentTypesSaga),
    fork(watcherDeleteUnitTypesSaga),
    fork(watcherDeleteConfigurationSaga),
    fork(watcherDeleteVehicleSaga),
    fork(watcherDeleteVehicleDriverSaga),
    fork(watcherDeleteVehicleTypeSaga),
    fork(watcherDeleteVehicleCompanySaga),
    fork(watcherDeleteVehicleSizeSaga),
    fork(watcherDeleteVehicleModelSaga),
    fork(watcherDeleteVehicleAccessorySaga),
    fork(watcherDeleteVehicleColorSaga),
    fork(watcherDeleteVehicleInsuranceCompanySaga),
    fork(watcherDeleteEnquirySaga),
    fork(watcherAddSurveyItemSaga),
    fork(watcherGetAllSurveyItemSaga),
    fork(watcherAddPackingListSaga),
    fork(watcherGetAllPackingListSaga),
    fork(watcherDeleteContactDetail),
    fork(watcherDeleteRegistrationDetail),
    fork(watcherDeleteFooterContentSaga),
    fork(watcherAddPackingMaterialSaga),
    fork(watcherGetAllPackingMaterialSaga),
fork(watcherGetAllModulesSaga),
fork(watcherAddSubscriptionPlanSaga),

fork(watcherGetVehicleDriverByIdSaga)

  ]);
}
