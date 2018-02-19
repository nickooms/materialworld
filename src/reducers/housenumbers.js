import { INVALIDATE_STREET, REQUEST_HOUSENUMBERS, RECEIVE_HOUSENUMBERS } from '../actions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const housenumbers = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_STREET:
      return {
        ...state,
        didInvalidate: true,
      };
    case REQUEST_HOUSENUMBERS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_HOUSENUMBERS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.housenumbers,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default housenumbers;
