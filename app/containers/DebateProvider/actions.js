import { FetchAction } from '../../utils/api';

export const fetchCreatingDebate = new FetchAction('DEBATE_CREATE');

export const fetchDebateId = new FetchAction('DEBATE_ID');

export const fetchDebateLive = new FetchAction('DEBATE_LIVE');

export const fetchDebatePast = new FetchAction('DEBATE_PAST');

export const fetchSearchUser = new FetchAction('FETCH_USER_SEARCH');
