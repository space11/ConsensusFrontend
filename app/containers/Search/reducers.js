import { fetchReducerFactory } from 'utils/api';
import { fetchSearch } from './actions';

export default fetchReducerFactory(fetchSearch);
