import { put, takeLatest } from 'redux-saga/effects';
import {
  requestToLogin,
  successToLogin,
  OTPViaLogin,
  requestToVerifyOTP
} from '../../slices/AuthSlice';
import { getRoleByAuthId, loginService, verifyOTPService } from '../../../services/auth';
import { getCompanyByAuthId } from '../../../services/company';
import { updateCompanyDetails, updateCompanyList } from '../../slices/CompanyRegistrationSlice';
import { updateRoleType } from '../../slices/RoleManagementSlice';
export function* loginSaga(action) {
  try {
    const response = yield loginService(action.payload);
    yield put(OTPViaLogin(response?.data));
  } catch (error) {}
}
export function* verifyOTPSaga(action) {
  try {
    const otpResponse = yield verifyOTPService(action?.payload);
    const { id, token } = otpResponse?.data;
    yield put(successToLogin(otpResponse?.data));
    window.localStorage.setItem('token', token);
    const companyResponse = yield getCompanyByAuthId(id);
    if (Array.isArray(companyResponse?.data)) yield put(updateCompanyList(companyResponse?.data));
    else yield put(updateCompanyDetails(companyResponse?.data));
    // const roleResponse = yield (getRoleByAuthId(id))
    //     yield put(updateRoleType(roleResponse?.data))
  } catch (error) {}
}
export function* watcherLoginSaga() {
  yield takeLatest(requestToLogin.type, loginSaga);
}
export function* watcherVerifyOTPSaga() {
  yield takeLatest(requestToVerifyOTP.type, verifyOTPSaga);
}
