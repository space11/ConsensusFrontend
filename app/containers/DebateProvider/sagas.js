import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import api from '../../utils/api';
import * as actions from './actions';

export function* createDebate() {
  while (true) {
    try {
      const debate = yield take(actions.fetchCreatingDebate.types.start);
      const id = yield call(sendCreatingData, debate.payload);
      yield put(actions.fetchCreatingDebate.success(id));
      yield* createSession();
      yield put(push(`/room/${id}`));
    } catch (e) {
      yield put(actions.fetchCreatingDebate.failed(e));
    }
  }
}

export function* createSession() {
  try {
    const { id } = yield call(sendCreatingSession);
    const data = {
      session: id,
      role: 'PUBLISHER',
    };
    const { token } = yield call(getUrl, data);
    yield call(setUrl, token);
    yield put(actions.fetchCreatingSession.success({ token }));
  } catch (e) {
    yield put(actions.fetchCreatingSession.failed(e));
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

function setUrl(url) {
  localStorage.setItem('session_url', url);
}

function getUrl(data) {
  return api.post('/Publish', data).then(res => res);
}

function sendCreatingSession() {
  return api.post('/Connection/session').then(res => res);
}

function sendCreatingData(data) {
  return api.postWithToken('/Debate', data).then(res => res.debateId);
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
export default [
  createDebate,
  getDebate,
  getLiveDebate,
  getPastDebate,
  createSession,
];
