import {
  INVALIDATE_STREET,
  REQUEST_ROAD_OBJECT,
  RECEIVE_ROAD_OBJECT,
} from '../actions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const roadObject = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_STREET:
      return {
        ...state,
        didInvalidate: true,
      };
    case REQUEST_ROAD_OBJECT:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_ROAD_OBJECT:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.roadObject,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default roadObject;
