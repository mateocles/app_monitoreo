import { put, takeLatest, all } from 'redux-saga/effects';
import jwt_decode from "jwt-decode";

import Api from '../../common/api/Api'
import * as TokenStorage from '../../common/storage/Token'
import { auth } from "./AuthActions"

function* login({ payload }) {
  const response = yield Api.post("/login", payload)
  if (response.payload.Token) {
    TokenStorage.save(response.payload.Token);
    var decoded = jwt_decode(response.payload.Token);
    yield put(auth.loginResponse(response.payload.Token));
  } else {
    const err = new TypeError(response?.error ? response.error : 'ERROR_LOGIN')
    yield put(auth.loginResponse(err, response))
  }
}

function* logout() {
  yield TokenStorage.remove();
}

function* isLogged() {
  const isToken = yield TokenStorage.isToken()
  yield put(auth.setLogged(isToken))
}

function* ActionWatcher() {
  yield takeLatest(auth.login, login)
  yield takeLatest(auth.logout, logout)
  yield takeLatest(auth.isLogged, isLogged)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}