import { INVALIDATE_STREET, REQUEST_ROAD_OBJECTS, RECEIVE_ROAD_OBJECTS } from '../actions';

import roadObjects from './roadObjects';

const initialState = {};

const roadObjectsByStreet = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_STREET:
    case RECEIVE_ROAD_OBJECTS:
    case REQUEST_ROAD_OBJECTS:
      return {
        ...state,
        [action.street]: roadObjects(state[action.street], action),
      };
    default:
      return state;
  }
};

export default roadObjectsByStreet;
