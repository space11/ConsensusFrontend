import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* getVideoBlock() {
  while (true) {
    try {
      yield take(actions.fetchVideoBlock.types.start);
      const page = yield call(() => api.get('/videos'));
      yield put(actions.fetchVideoBlock.success(page));
    } catch (e) {
      yield put(actions.fetchVideoBlock.failed(e));
    }
  }
}

export function* getSpeakersSection() {
  while (true) {
    try {
      yield take(actions.fetchSpeakersSection.types.start);
      const page = yield call(() => api.get('pages/home/section1'));
      yield put(actions.fetchSpeakersSection.success(page));
    } catch (e) {
      yield put(actions.fetchSpeakersSection.failed(e));
    }
  }
}

export function* getPartnersSection() {
  while (true) {
    try {
      yield take(actions.fetchPartnersSection.types.start);
      const page = yield call(() => api.get('pages/home/section2'));
      yield put(actions.fetchPartnersSection.success(page));
    } catch (e) {
      yield put(actions.fetchPartnersSection.failed(e));
    }
  }
}

// All sagas to be loaded
export default [getVideoBlock, getSpeakersSection, getPartnersSection];
