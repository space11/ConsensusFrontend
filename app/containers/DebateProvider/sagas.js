import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';
import api from '../../utils/api';
import * as actions from './actions';

export function* createDebate() {
  while (true) {
    try {
      const debate = yield take(actions.fetchCreatingDebate.types.start);
      const id = yield call(sendCreatingData, debate.payload);
      const sessionId = yield call(sendCreatingSession);
      const data = {
        session: sessionId.id,
        role: 'PUBLISHER',
      };
      const sessionData = yield call(getUrl, data);
      yield call(setUrl, sessionData);
      yield put(actions.fetchCreatingDebate.success(sessionData));
      yield put(push(`/room/${id}`));
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

export function* search() {
  while (true) {
    try {
      const action = yield take(actions.fetchSearchUser.types.start);
      const answer = yield call(sendRequestWithToken, action.payload);
      yield put(actions.fetchSearchUser.success(answer));
    } catch (e) {
      yield put(actions.fetchSearchUser.failed(e));
    }
  }
}

function sendRequestWithToken(name) {
  return axios
    .get(`/search/users?sectionName=${name}`, {
      headers: {
        Authorization: `Bearer ${localStorage.id_token}`,
      },
    })
    .then(res => res);
}

function setUrl(sessionData) {
  localStorage.setItem('data', sessionData.data);
  localStorage.setItem('id', sessionData.id);
  localStorage.setItem('role', sessionData.role);
  localStorage.setItem('session', sessionData.session);
  localStorage.setItem('session_token', sessionData.token);
}

function getUrl(data) {
  return api.post('/Publish', data).then(res => res);
}

function sendCreatingSession() {
  return api.post('/Connection/session').then(res => res);
}

function sendCreatingData(data) {
  return api.postWithToken('/Debates', data).then(res => res.debateId);
}

function sendDebateRequest({ id }) {
  return api.get(`/Debates/${id}`).then(res => res);
}

function sendDebateLiveRequest() {
  return api.get('/Debates/live').then(res => res);
}

function sendDebatePastRequest() {
  return api.get('/Debates/past').then(res => res);
}

// All sagas to be loaded
export default [createDebate, getDebate, getLiveDebate, getPastDebate, search];
