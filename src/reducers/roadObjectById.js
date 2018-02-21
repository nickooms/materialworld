import {
  INVALIDATE_STREET,
  REQUEST_ROAD_OBJECT,
  RECEIVE_ROAD_OBJECT,
} from '../actions';

import roadObject from './roadObject';

const initialState = {};

const roadObjectById = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_STREET:
    case RECEIVE_ROAD_OBJECT:
    case REQUEST_ROAD_OBJECT:
      return {
        ...state,
        [action.roadObject]: roadObject(state[action.roadObject], action),
      };
    default:
      return state;
  }
};

export default roadObjectById;
