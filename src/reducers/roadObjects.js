import {
  INVALIDATE_STREET,
  REQUEST_ROAD_OBJECTS,
  RECEIVE_ROAD_OBJECTS,
} from '../actions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const roadObjects = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_STREET:
      return {
        ...state,
        didInvalidate: true,
      };
    case REQUEST_ROAD_OBJECTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_ROAD_OBJECTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.roadObjects,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default roadObjects;
