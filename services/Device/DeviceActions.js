import { createActions } from 'redux-actions';

export const { devices } = createActions({
  DEVICES: {
    GET_DEVICES: (id,token) => ({id,token}),
    DEVICES_RESPONSE: (devices) => ({ devices }),
  }
})