import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import jwt_decode from 'jwt-decode';
import api from '../../utils/api';
import {
  fetchRegistration,
  fetchLogin,
  fetchLogout,
  fetchRecoveryPassword,
  fetchGetRecoveryToken,
  fetchConfirm,
} from './actions';

export function* login() {
  while (true) {
    try {
      const action = yield take(fetchLogin.types.start);
      const { token } = yield call(sendLogin, action.payload);
      yield put(fetchLogin.success({ token }));
      yield call(setToken, token);
      yield put(push(`/account/${jwt_decode(token).UserId}`));
    } catch (e) {
      yield put(fetchLogin.failed(e));
    }
  }
}

export function* registration() {
  while (true) {
    try {
      const action = yield take(fetchRegistration.types.start);
      const { id } = yield call(sendRegistrationData, action.payload);
      yield put(fetchRegistration.success({ id }));
      yield put(push('/sign-in'));
    } catch (e) {
      yield put(fetchRegistration.failed(e));
    }
  }
}

export function* logout() {
  while (true) {
    try {
      yield take(fetchLogout.types.start);
      yield call(sendLogout);
      yield put(fetchLogout.success(null));
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

function sendLogin(credentials) {
  return api.post('Account/auth', credentials).then(res => res);
}

function sendLogout() {
  localStorage.removeItem('id_token');
  localStorage.removeItem('userId');
  localStorage.removeItem('role');
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

function setToken(idToken) {
  localStorage.setItem('id_token', idToken);
  localStorage.setItem('userId', jwt_decode(idToken).UserId);
  localStorage.setItem('role', jwt_decode(idToken).Role);
}

function sendConfirmationEmailToken({ token, password }) {
  return api
    .post(`users/initialVerification/token/${token}`, password, {
      plainText: true,
    })
    .then(res => res.data);
}

function sendRegistrationData(data) {
  return api.post('Account/registration', data).then(res => res);
}

// // All sagas to be loaded
export default [
  login,
  registration,
  logout,
  confirmEmail,
  recoveryPassword,
  getRecoveryPasswordToken,
];
