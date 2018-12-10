/*
 *
 * AuthProvider reducer
 *
 */

import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from 'utils/api';
import {
  fetchLogin,
  fetchLogout,
  fetchConfirm,
  fetchRecoveryPassword,
  fetchGetRecoveryToken,
  fetchUser,
  fetchRegistration,
} from './actions';

export default combineReducers({
  user: fetchReducerFactory(fetchUser),
  login: fetchReducerFactory(fetchLogin),
  logout: fetchReducerFactory(fetchLogout),
  confirmation: fetchReducerFactory(fetchConfirm),
  recoveringPassword: fetchReducerFactory(fetchRecoveryPassword),
  recoveryToken: fetchReducerFactory(fetchGetRecoveryToken),
  registration: fetchReducerFactory(fetchRegistration),
});

export const stateName = 'authProvider';
