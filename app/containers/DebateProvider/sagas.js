import { take, call, put } from 'redux-saga/effects';
import api from '../../utils/api';
import * as actions from './actions';

export function* createDebate() {
  while (true) {
    try {
      const action = yield take(actions.fetchCreatingDebate.types.start);
      const { id } = yield call(sendCreatingData, action.payload);
      yield put(actions.fetchCreatingDebate.success({ id }));
    } catch (e) {
      yield put(actions.fetchCreatingDebate.failed(e));
    }
  }
}

export function* getDebate() {
  while (true) {
    try {
      const action = yield take(actions.fetchDebateId.types.start);
      const { data } = yield call(sendDebateRequest, action.payload);
      yield put(actions.fetchDebateId.success({ data }));
    } catch (e) {
      yield put(actions.fetchDebateId.failed(e));
    }
  }
}
export function* getLiveDebate() {
  while (true) {
    try {
      const action = yield take(actions.fetchDebateLive.types.start);
      const { data } = yield call(sendDebateLiveRequest, action.payload);
      yield put(actions.fetchDebateLive.success({ data }));
    } catch (e) {
      yield put(actions.fetchDebateLive.failed(e));
    }
  }
}

export function* getPastDebate() {
  while (true) {
    try {
      const action = yield take(actions.fetchDebatePast.types.start);
      const { data } = yield call(sendDebatePastRequest, action.payload);
      yield put(actions.fetchDebatePast.success({ data }));
    } catch (e) {
      yield put(actions.fetchDebatePast.failed(e));
    }
  }
}

function sendCreatingData(data) {
  return api.post('Account/Debate', data).then(res => res);
}

function sendDebateRequest({ id }) {
  return api.get(`/Debate/${id}`).then(res => res);
}

function sendDebateLiveRequest() {
  return api.get('/Debate/live').then(res => res);
}

function sendDebatePastRequest() {
  return api.get('/Debate/past').then(res => res);
}

// All sagas to be loaded
export default [createDebate, getDebate, getLiveDebate, getPastDebate];
