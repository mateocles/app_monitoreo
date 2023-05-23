import { put, takeLatest, all } from 'redux-saga/effects';

import Api from '../../common/api/Api'
import * as TokenStorage from '../../common/storage/Token'
import { devices } from "./DeviceActions"

function* getDevices({ payload }) {
  const response = yield Api.get(`/device/${payload.id}`, payload.token)
  if (response) {
    yield put(devices.devicesResponse(response.payload));
  } else {
    const err = new TypeError(response?.error ? response.error : 'NO DEVICES')
    yield put(devices.devicesResponse(err, response))
  }
}

function* ActionWatcher() {
  yield takeLatest(devices.getDevices, getDevices)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}