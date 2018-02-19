import { INVALIDATE_REGION, REQUEST_CITIES, RECEIVE_CITIES } from '../actions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
};

const cities = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_REGION:
      return {
        ...state,
        didInvalidate: true,
      };
    case REQUEST_CITIES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_CITIES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.cities,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
};

export default cities;
