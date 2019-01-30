import { fetchReducerFactory } from 'utils/api';
import { fetchVote } from './action';

export default fetchReducerFactory(fetchVote);
