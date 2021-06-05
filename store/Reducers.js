import { combineReducers } from 'redux'

import { auth } from '../services/Auth//AuthActions';
import reducerAuth from '../services/Auth/AuthReducer';

const appReducer = (history) => combineReducers({
  auth: reducerAuth,
})

const rootReducer = (history) => {
  return (state, action) => {
    if (action.type == auth.logout) state = undefined
    return appReducer(history)(state, action);
  }
}
export default rootReducer;