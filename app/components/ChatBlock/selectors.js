import { createSelector } from 'reselect';

const selectUser = () => state => state.get('auth').get('user');

export const makeUserSelector = () =>
  createSelector(selectUser(), substate => {
    const user = substate.toJS().data;
    return (
      user || {
        alumniProfile: {
          yearOfGraduation: '',
          faculty: '',
        },
      }
    );
  });
