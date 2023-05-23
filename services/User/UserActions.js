import { createActions } from 'redux-actions';

export const { user } = createActions({
  USER: {
    GET_USER: () => ({}),
    USER_RESPONSE: (user) => ({ user }),
  }
})