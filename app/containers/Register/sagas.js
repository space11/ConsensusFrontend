import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import api from 'utils/api';
import { fetchRegistration } from './actions';

function sendRegistrationData(data) {
  return api.post('Account/registration', data).then(res => res);
}

export function* registration() {
  while (true) {
    try {
      const action = yield take(fetchRegistration.types.start);
      const { id } = yield call(sendRegistrationData, action.payload);
      yield put(fetchRegistration.success({ id }));
      yield put(push('/'));
    } catch (e) {
      yield put(fetchRegistration.failed(e));
    }
  }
}

export default [registration];
