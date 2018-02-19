import { INVALIDATE_STREET, REQUEST_HOUSENUMBERS, RECEIVE_HOUSENUMBERS } from '../actions';

import housenumbers from './housenumbers';

const initialState = {};

const housenumbersByStreet = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_STREET:
    case RECEIVE_HOUSENUMBERS:
    case REQUEST_HOUSENUMBERS:
      return {
        ...state,
        [action.street]: housenumbers(state[action.street], action),
      };
    default:
      return state;
  }
};

export default housenumbersByStreet;
