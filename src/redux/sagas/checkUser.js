import { put, all, call, takeEvery } from 'redux-saga/effects';
import { CHECK_USER_LOADING } from '../actions/types';
import { setUserExists } from '../actions/checkUserAccountExists';
import { checkUserAccountExists } from '../../api/checkUser';

export function* handleCheckUser() {
  yield call(checkUserAccountExists, { email: 'email' });
  yield put(setUserExists({ email: 'email' }));
}

export function* checkUser() {
  yield takeEvery(CHECK_USER_LOADING, handleCheckUser);
}

export default function* rootSaga() {
  yield all([checkUser()]);
}
