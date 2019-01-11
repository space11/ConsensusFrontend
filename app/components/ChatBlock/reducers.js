/*
 *
 * ChatBlock reducer
 *
 */

import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from 'utils/api';
import { fetchMessage } from './actions';

export default combineReducers({
  message: fetchReducerFactory(fetchMessage),
});
