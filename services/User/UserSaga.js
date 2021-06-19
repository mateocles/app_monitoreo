import { put, takeLatest, all } from 'redux-saga/effects';
import jwt_decode from "jwt-decode";

import * as TokenStorage from '../../common/storage/Token'
import { user } from "./UserActions"

function* getUser() {
  const isToken = yield TokenStorage.get()
  var decoded = jwt_decode(isToken);
  yield put(user.userResponse(decoded))
}

function* ActionWatcher() {
  yield takeLatest(user.getUser, getUser)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher(),
  ]);
}