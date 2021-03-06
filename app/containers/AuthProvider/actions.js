import { createAction } from 'redux-act';
import { FetchAction } from 'utils/api';

export const fetchRegistration = new FetchAction('FETCH_USER_REGISTRATION');

export const fetchLogin = new FetchAction('LOGIN');

export const fetchLogout = new FetchAction('LOGOUT');

export const fetchConfirm = new FetchAction('USER_CONFIRM');

export const fetchRecoveryPassword = new FetchAction('USER_RECOVERY_PASSWORD');

export const fetchGetRecoveryToken = new FetchAction('USER_GET_RECOVERY_TOKEN');

export const userChanged = createAction('USER_CHANGED', data => data);
