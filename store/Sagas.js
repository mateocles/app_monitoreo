import { fork, all } from 'redux-saga/effects';
import AuthSaga from '../services/Auth/AuthSaga';
import UserSaga from '../services/User/UserSaga';
import DeviceSaga from '../services/Device/DeviceSaga';

export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
    fork(UserSaga),
    fork(DeviceSaga)
  ]);
}