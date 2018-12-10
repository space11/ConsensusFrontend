import { take, call, put } from 'redux-saga/effects';
import api from '../../utils/api';
import * as actions from './actions';

export function* createDebate() {
  while (true) {
    try {
      const action = yield take(actions.fetchCreatingDebate.types.start);
      yield call(sendCreatingData, action.payload);
      yield put(actions.fetchCreatingDebate.success());
    } catch (e) {
      yield put(actions.fetchCreatingDebate.failed(e));
    }
  }
}

export function* getDebate() {
  while (true) {
    try {
      const action = yield take(actions.fetchDebateId.types.start);
      yield call(sendDebateRequest, action.payload);
      yield put(actions.fetchDebateId.success());
    } catch (e) {
      yield put(actions.fetchDebateId.failed(e));
    }
  }
}

export function* getLiveDebate() {
  while (true) {
    try {
      const action = yield take(actions.fetchDebateLive.types.start);
      yield call(sendDebateLiveRequest, action.payload);
      yield put(actions.fetchDebateLive.success());
    } catch (e) {
      yield put(actions.fetchDebateLive.failed(e));
    }
  }
}

export function* getPastDebate() {
  while (true) {
    try {
      const action = yield take(actions.fetchDebatePast.types.start);
      yield call(sendDebatePastRequest, action.payload);
      yield put(actions.fetchDebatePast.success());
    } catch (e) {
      yield put(actions.fetchDebatePast.failed(e));
    }
  }
}

function sendCreatingData(data) {
  return api.post('Account/Debate', data).then(res => res.data);
}

function sendDebateRequest({ id }) {
  return api.get(`/Debate/${id}`);
}

function sendDebateLiveRequest() {
  return api.get('/Debate/live');
}

function sendDebatePastRequest() {
  return api.get('/Debate/past');
}

// All sagas to be loaded
export default [createDebate, getDebate, getLiveDebate, getPastDebate];
