import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {  
  loading: false,
  error: {
    user: undefined,
  }
}

const reducer = handleActions({
  USER: {
    GET_USER: (state, { payload: { } }) => ({
      ...state, loading: true, error: { ...state.error, user: false }
    }),
    USER_RESPONSE: {
      next(state, { payload: { user } }) {
        return { ...state, userData:user, loading: false }
      },
      throw(state, { payload: { message } }) {
        return { ...state, error: { ...state.error, user: message }, loading: false }
      }
    },
  }
},
  INITIAL_STATE
);

export default reducer;