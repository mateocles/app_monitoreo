import { createActions } from 'redux-actions';

export const { device } = createActions({
  DEVICE: {
    CHECKDEVICES: (user, pass) => ({ user, pass }),
    CHECKDEVICES_RESPONSE: (devices) => ({ devices }),
  }
})