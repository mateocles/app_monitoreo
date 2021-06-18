import { handleActions } from 'redux-actions';
import * as TokenStorage from '../../common/storage/Token';

export const INITIAL_STATE = {
  authentication: undefined,
  loading: false,
  error: {
    login: undefined,
    signup: undefined
  }
}

const reducer = handleActions({
  AUTH: {
    LOGIN: (state, { payload: { } }) => ({
      ...state, loading: true, error: { ...state.error, login: false }
    }),
    LOGIN_RESPONSE: {
      next(state, { payload: { token } }) {
        return { ...state, token, authentication: true, loading: false, user:token }
      },
      throw(state, { payload: { message } }) {
        return { ...state, error: { ...state.error, login: message }, loading: false }
      }
    },

    LOGOUT: (state, { payload: { } }) => ({ ...state, authentication: false }),
    SET_LOGGED: (state, { payload: { auth } }) => ({ ...state, authentication: auth ? auth : false }),
  }
},
  INITIAL_STATE
);

export default reducer;