import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from 'utils/api';
import {
  fetchCreatingDebate,
  fetchCreatingSession,
  fetchDebateId,
  fetchDebateLive,
  fetchDebatePast,
  fetchSearchUser,
} from './actions';

export default combineReducers({
  creatingDebate: fetchReducerFactory(fetchCreatingDebate),
  creatingSession: fetchReducerFactory(fetchCreatingSession),
  getDebate: fetchReducerFactory(fetchDebateId),
  getDebateLive: fetchReducerFactory(fetchDebateLive),
  searchUser: fetchReducerFactory(fetchSearchUser),
  getDebatePast: fetchReducerFactory(fetchDebatePast),
});

export const stateName = 'debateProvider';
