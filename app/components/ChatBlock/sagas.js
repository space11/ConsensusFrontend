import { take, call, put } from 'redux-saga/effects';
import api from '../../utils/api';
import { fetchMessage } from './actions';

export function* postMessage() {
  while (true) {
    try {
      const action = yield take(fetchMessage.types.start);
      const { id } = yield call(sendMessage, action.payload);
      yield put(fetchMessage.success({ id }));
    } catch (e) {
      yield put(fetchMessage.failed(e));
    }
  }
}
function sendMessage(data) {
  return api
    .postWithToken('/Chat/message', data, localStorage.debateId)
    .then(res => res);
}

// All sagas to be loaded
export default [postMessage];
