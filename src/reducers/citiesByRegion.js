import { INVALIDATE_REGION, REQUEST_CITIES, RECEIVE_CITIES } from '../actions';

import cities from './cities';

const initialState = {};

const citiesByRegion = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_REGION:
    case RECEIVE_CITIES:
    case REQUEST_CITIES:
      return {
        ...state,
        [action.region]: cities(state[action.region], action),
      };
    default:
      return state;
  }
};

export default citiesByRegion;
