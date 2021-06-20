import { createActions } from 'redux-actions';

export const { auth } = createActions({
  AUTH: {
    LOGIN: (user, pass) => ({ user, pass }),
    LOGIN_RESPONSE: (data, token) => ({ data, token }),

    SIGNUP: (data) => ({ data }),
    SIGNUP_RESPONSE: () => ({}),

    LOGOUT: () => ({}),

    IS_LOGGED: () => ({}),
    SET_LOGGED: (auth) => ({ auth }),
  }
})