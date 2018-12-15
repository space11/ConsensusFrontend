import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from 'utils/api';
import { fetchRegistration } from './actions';

export default combineReducers({
  registration: fetchReducerFactory(fetchRegistration),
});
