import { createSelector } from 'reselect';

const selectRoute = () => state => state.get('router').get('location');

export const makeSelectLocationState = () =>
  createSelector(selectRoute(), substate => {
    const pathname = substate.toJS().pathname;
    return pathname || '';
  });
