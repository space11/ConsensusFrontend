import { take, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../utils/api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* getPlayer() {
  while (true) {
    try {
      const action = yield take(actions.fetchPlayer.types.start);
      const { id } = action.payload;
      const news = yield call(() => api.get(`/room/${id}`));
      yield put(actions.fetchPlayer.success(news));
    } catch (e) {
      yield put(actions.fetchPlayer.failed(e));
    }
  }
}

// All sagas to be loaded
export default [getPlayer];
