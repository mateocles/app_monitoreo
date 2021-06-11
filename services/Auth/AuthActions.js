import { createActions } from 'redux-actions';

export const { auth } = createActions({
  AUTH: {
    LOGIN: (User, Pass) => ({ User, Pass }),
    LOGIN_RESPONSE: (token) => ({ token }),

    SIGNUP: (data) => ({ data }),
    SIGNUP_RESPONSE: () => ({ }),

    LOGOUT: () => ({ }),

    IS_LOGGED: () => ({ }),
    SET_LOGGED: (auth) => ({ auth }),
  }
})