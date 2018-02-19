import { INVALIDATE_CITY, REQUEST_STREETS, RECEIVE_STREETS } from '../actions';

import streets from './streets';

const initialState = {};

const streetsByCity = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_CITY:
    case RECEIVE_STREETS:
    case REQUEST_STREETS:
      return {
        ...state,
        [action.city]: streets(state[action.city], action),
      };
    default:
      return state;
  }
};

export default streetsByCity;
