import { take, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { fetchSearch } from './actions';

export function* getRedirect() {
  while (true) { //eslint-disable-line
    try {
      yield take(fetchSearch.types.start);
      yield put(fetchSearch.success());
      yield put(push('/search'));
    } catch (e) {
      yield put(fetchSearch.failed(e));
    }
  }
}
