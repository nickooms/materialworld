import {
  INVALIDATE_STREET,
  REQUEST_ROAD_SEGMENTS,
  RECEIVE_ROAD_SEGMENTS,
} from '../actions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const roadSegments = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_STREET:
      return {
        ...state,
        didInvalidate: true,
      };
    case REQUEST_ROAD_SEGMENTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_ROAD_SEGMENTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.roadSegments,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default roadSegments;
