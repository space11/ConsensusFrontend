import { put, take, call } from 'redux-saga/effects';
import api from 'utils/api';
import { fetchVote } from './action';

function* sendVote() {
  while (true) {
    try {
      const action = yield take(fetchVote.types.start);
      yield call(postVote, action.payload);
      yield put(fetchVote.success());
    } catch (e) {
      yield put(fetchVote.failed(e));
    }
  }
}

function postVote({ toUser, debateId }) {
  return api.post(`/debates/${debateId}/Voting`, toUser).then(res => res);
}

export default [sendVote];
