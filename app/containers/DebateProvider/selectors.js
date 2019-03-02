import { createSelector } from 'reselect';

const searchUsers = () => state => state.get('createDebate').get('searchUser');
const selectDebateLive = () => state =>
  state.get('createDebate').get('getDebateLive');
const selectDebatePast = () => state =>
  state.get('createDebate').get('getDebatePast');

export const makeUsersSelector = () =>
  createSelector(searchUsers(), substate => {
    const users = substate;
    return users;
  });

export const makeDebateLiveSelector = () =>
  createSelector(selectDebateLive(), substate => {
    const live = substate.toJS().data;
    return live;
  });

export const makeDebatePastSelector = () =>
  createSelector(selectDebatePast(), substate => {
    const past = substate.toJS().data;
    return past;
  });
