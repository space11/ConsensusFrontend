import { combineReducers } from 'redux-immutable';
import { fetchReducerFactory } from 'utils/api';
import {
  fetchVideoBlock,
  fetchSpeakersSection,
  fetchPartnersSection,
} from './actions';

export default combineReducers({
  videoBlock: fetchReducerFactory(fetchVideoBlock),
  section1: fetchReducerFactory(fetchSpeakersSection),
  section2: fetchReducerFactory(fetchPartnersSection),
});
