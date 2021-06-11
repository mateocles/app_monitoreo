import { put, takeLatest, all } from 'redux-saga/effects';
import Api from '../../common/api/Api'
import * as TokenStorage from '../../common/storage/Token'
import { auth } from "./AuthActions"

function* login({ payload }) {
  const { payload: response } = yield Api.post("/login", payload)
  if (response.Token) {
    TokenStorage.save(response.Token);
    yield put(auth.loginResponse(response.Token));
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