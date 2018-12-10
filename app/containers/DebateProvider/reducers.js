import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from 'utils/api';
import {
  fetchCreatingDebate,
  fetchDebateId,
  fetchDebateLive,
  fetchDebatePast,
} from './actions';

export default combineReducers({
  creatingDebate: fetchReducerFactory(fetchCreatingDebate),
  getDebate: fetchReducerFactory(fetchDebateId),
  getDebateLive: fetchReducerFactory(fetchDebateLive),
  getDebatePast: fetchReducerFactory(fetchDebatePast),
});

export const stateName = 'debateProvider';
