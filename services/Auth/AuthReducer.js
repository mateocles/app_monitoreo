import { handleActions } from 'redux-actions';

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
      next(state, { payload: { data, token } }) {
        return { ...state, user: data, token, authentication: true, loading: false }
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