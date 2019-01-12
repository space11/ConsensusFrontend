/*
 *
 * AuthProvider reducer
 *
 */

import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from 'utils/api';
import {
  fetchLogin,
  fetchRegistration,
  fetchLogout,
  fetchConfirm,
  fetchRecoveryPassword,
  fetchGetRecoveryToken,
} from './actions';

export default combineReducers({
  login: fetchReducerFactory(fetchLogin),
  logout: fetchReducerFactory(fetchLogout),
  registration: fetchReducerFactory(fetchRegistration),
  confirmation: fetchReducerFactory(fetchConfirm),
  recoveringPassword: fetchReducerFactory(fetchRecoveryPassword),
  recoveryToken: fetchReducerFactory(fetchGetRecoveryToken),
});

export const stateName = 'authProvider';
