import { handleActions } from 'redux-actions';
import * as TokenStorage from '../../common/storage/Token';

export const INITIAL_STATE = {
  devices: [],
  loading: false,
  error: {
    devices: undefined,
  }
}

const reducer = handleActions({
  CHECKDEVICES: {
    DEVICES: (state, { payload: { } }) => ({
      ...state, loading: true, error: { ...state.error, devices: false }
    }),
    DEVICES_RESPONSE: {
      next(state, { payload: { devices } }) {
        return { ...state, devices, loading: false }
      },
      throw(state, { payload: { message } }) {
        return { ...state, error: { ...state.error, devices: message }, loading: false }
      }
    },
  }
},
  INITIAL_STATE
);

export default reducer;