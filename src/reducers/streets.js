import { INVALIDATE_CITY, REQUEST_STREETS, RECEIVE_STREETS } from '../actions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const streets = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_CITY:
      return {
        ...state,
        didInvalidate: true,
      };
    case REQUEST_STREETS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_STREETS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.streets,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default streets;
