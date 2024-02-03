import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSagas';
import AuthSlice from './slices/AuthSlice';
import EnquirySlice from './slices/EnquirySlice';
import QuotationSlice from './slices/QuotationSlice';
import OrderSlice from './slices/OrderSlice';
import BranchSlice from './slices/BranchSlice';
import ThemeSlice from './slices/ThemeSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import MoneyReceiptSlice from './slices/MoneyReceiptSlice';
import CarConditionSlice from './slices/CarConditionSlice';
import BiltySlice from './slices/BiltySlice';
import InvoiceSlice from './slices/InvoiceSlice';
import RoleManagementSlice from './slices/RoleManagementSlice';
import AccountManagementSlice from './slices/AccountManagementSlice';
import UserSettingSlice from './slices/UserSettingSlice';
import VehicleManagementSlice from './slices/VehicleManagementSlice';
import TemplateManagementSlice from './slices/TemplateManagementSlice';
import AppSettingSlice from './slices/AppSettingSlice';
import MaterialSlice from './slices/MaterialSlice';
import CompanyRegistrationSlice from './slices/CompanyRegistrationSlice';
import ContentManagementSlice from './slices/ContentManagementSlice';

import ToBeBilledSlice from './slices/ToBeBilledSlice';
import FranchiseSlice from './slices/FranchiseSlice';
import FollowUpsSlice from './slices/FollowUpsSlice';
import SurveySlice from './slices/SurveySlice';
import UtilsSlice from './slices/UtilsSlice';
import AppConfigurationSlice from './slices/AppConfigurationSlice';
import ShiftingManagementSlice from './slices/ShiftingManagementSlice';
import AddPackingListSlice from './slices/AddPackingListSlice';
import SurveyListSlice from './slices/SurveyListSlice';

const sagaMiddleware = createSagaMiddleware();
const storeMiddleware = [sagaMiddleware];
const persistConfig = {
  key: 'root',
  storage
};
const appReducer = combineReducers({
  auth: AuthSlice,
  branch: BranchSlice,
  company: CompanyRegistrationSlice,
  enquiry: EnquirySlice,
  quotation: QuotationSlice,
  order: OrderSlice,
  theme: ThemeSlice,
  moneyReceipt: MoneyReceiptSlice,
  carCondition: CarConditionSlice,
  bilty: BiltySlice,
  invoice: InvoiceSlice,
  roleManagement: RoleManagementSlice,
  templateManagement: TemplateManagementSlice,
  accountManagement: AccountManagementSlice,
  userSetting: UserSettingSlice,
  vehicleManagement: VehicleManagementSlice,
  appSetting: AppSettingSlice,
  material: MaterialSlice,
  contentManagement: ContentManagementSlice,

  tobeBilled: ToBeBilledSlice,
  franchise: FranchiseSlice,
  followUps: FollowUpsSlice,
  survey: SurveySlice,
  surveyList: SurveyListSlice,
  utils: UtilsSlice,
  appConfiguration: AppConfigurationSlice,
  shiftingManagement: ShiftingManagementSlice,
  packingList: AddPackingListSlice
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const _store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    }).concat(storeMiddleware);
  }
});
sagaMiddleware.run(rootSaga);
export const _persistorStore = persistStore(_store);
export default _store;
