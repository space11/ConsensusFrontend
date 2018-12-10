import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from '../../utils/api';
import { fetchPlayer } from './actions';

export default combineReducers(
  {
    newsData: fetchReducerFactory(fetchPlayer),
  },
  fromJS({}),
);
