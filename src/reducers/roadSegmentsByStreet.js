import {
  INVALIDATE_STREET,
  REQUEST_ROAD_SEGMENTS,
  RECEIVE_ROAD_SEGMENTS,
} from '../actions';

import roadSegments from './roadSegments';

const initialState = {};

const roadSegmentsByStreet = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_STREET:
    case RECEIVE_ROAD_SEGMENTS:
    case REQUEST_ROAD_SEGMENTS:
      return {
        ...state,
        [action.street]: roadSegments(state[action.street], action),
      };
    default:
      return state;
  }
};

export default roadSegmentsByStreet;
