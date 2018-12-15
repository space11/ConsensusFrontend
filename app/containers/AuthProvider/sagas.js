import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import api, { responseStates } from '../../utils/api';
import {
  fetchUser,
  fetchLogin,
  fetchLogout,
  fetchRegistration,
  fetchRecoveryPassword,
  fetchGetRecoveryToken,
  fetchConfirm,
} from './actions';

export function* getUser() {
  while (true) {
    try {
      yield take(fetchUser.types.start);
      const user = yield call(fetchCurrentUser);
      yield put(fetchUser.success(user));
    } catch (e) {
      if (e) {
        switch (e.status) {
          case 401:
            yield put(fetchUser.failed(responseStates.UNATHORIZED));
            break;
          default:
            yield put(fetchUser.failed(e));
            break;
        }
      } else {
        yield put(fetchUser.failed(responseStates.NETWORK_ERROR));
      }
    }
  }
}

export function* login() {
  while (true) {
    try {
      const action = yield take(fetchLogin.types.start);
      yield call(sendLogin, action.payload);
      yield put(fetchLogin.success());
      yield put(fetchUser.start());
      yield put(push('/account'));
    } catch (e) {
      yield put(fetchLogin.failed(e));
    }
  }
}

export function* logout() {
  while (true) {
    try {
      yield take(fetchLogout.types.start);
      yield call(sendLogout);
      yield put(fetchLogout.success(null));
      yield put(fetchUser.start());
      yield put(push('/'));
    } catch (e) {
      yield put(fetchLogout.failed(e));
    }
  }
}

export function* recoveryPassword() {
  while (true) {
    try {
      const action = yield take(fetchRecoveryPassword.types.start);
      yield call(sendRecoveryPasswordToken, action.payload);
      yield put(fetchRecoveryPassword.success());
    } catch (e) {
      yield put(fetchRecoveryPassword.failed(e));
    }
  }
}

export function* getRecoveryPasswordToken() {
  while (true) {
    try {
      const action = yield take(fetchGetRecoveryToken.types.start);
      yield call(sendRecoveryPasswordTokenRequest, action.payload);
      yield put(fetchGetRecoveryToken.success());
    } catch (e) {
      yield put(fetchGetRecoveryToken.failed(e));
    }
  }
}

export function* confirmEmail() {
  while (true) {
    try {
      const action = yield take(fetchConfirm.types.start);
      yield call(sendConfirmationEmailToken, action.payload);
      yield put(fetchConfirm.success('success'));
    } catch (e) {
      yield put(fetchConfirm.failed(e));
    }
  }
}

// All sagas to be loaded

function fetchCurrentUser() {
  return api.get('/me');
}

function sendLogin(credentials) {
  return api.post('Account/auth', credentials);
}

function sendLogout() {
  return api.post('/logout');
}

function sendRecoveryPasswordTokenRequest({ email }) {
  return api
    .get('users/recovery-password', {
      params: {
        email,
      },
    })
    .then(res => res.data);
}

function sendRecoveryPasswordToken({ token, password }) {
  return api
    .post(`users/recovery-password/${token}`, password)
    .then(res => res.data);
}

function sendConfirmationEmailToken({ token, password }) {
  return api
    .post(`users/initialVerification/token/${token}`, password, {
      plainText: true,
    })
    .then(res => res.data);
}

// All sagas to be loaded
export default [
  getUser,
  login,
  registration,
  logout,
  confirmEmail,
  recoveryPassword,
  getRecoveryPasswordToken,
];
