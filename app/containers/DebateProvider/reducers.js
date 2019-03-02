import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from 'utils/api';
import {
  fetchCreatingDebate,
  fetchDebateId,
  fetchDebateLive,
  fetchDebatePast,
  fetchSearchUser,
} from './actions';

export default combineReducers({
  creatingDebate: fetchReducerFactory(fetchCreatingDebate),
  getDebate: fetchReducerFactory(fetchDebateId),
  getDebateLive: fetchReducerFactory(fetchDebateLive),
  searchUser: fetchReducerFactory(fetchSearchUser),
  getDebatePast: fetchReducerFactory(fetchDebatePast),
});

export const stateName = 'debateProvider';
