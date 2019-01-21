import { createSelector } from 'reselect';

const selectDebateLive = () => state =>
  state.get('createDebate').get('getDebateLive');
const selectDebatePast = () => state =>
  state.get('createDebate').get('getDebatePast');

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
