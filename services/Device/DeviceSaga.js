import { put, takeLatest, all } from 'redux-saga/effects';
import Api from '../../common/api/Api'
import * as TokenStorage from '../../common/storage/Token'
import { device } from "./DeviceActions"

function* checkDevices({ payload }) {
  const response = yield Api.post('', payload)
  console.debug(response);
  if (response.payload.Token) {
    yield put(auth.loginResponse(response.payload.Token));
  } else {
    const err = new TypeError(response?.error ? response.error : 'ERROR_LOGIN')
    yield put(auth.loginResponse(err, response))
  }
}

function* ActionWatcher() {
  yield takeLatest(device.checkDevices, checkDevices)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}