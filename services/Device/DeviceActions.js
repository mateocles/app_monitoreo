import { createActions } from 'redux-actions';

export const { devices } = createActions({
  DEVICES: {
    GET_DEVICES: (id) => ({id}),
    DEVICES_RESPONSE: (devices) => ({ devices }),
  }
})