import { combineReducers } from 'redux';
/* const initialState = [
  { id: 7338, name: 'Markt' },
  { id: 5514, name: 'Papenboslaan' },
]; */
import {
  SELECT_CITY,
  INVALIDATE_CITY,
  REQUEST_STREETS,
  RECEIVE_STREETS,
} from '../actions';

const selectedCity = (state = 23, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return action.cityId;
    default:
      return state;
  }
};

const streets = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
  },
  action,
) => {
  switch (action.type) {
    case INVALIDATE_CITY:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case REQUEST_STREETS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_STREETS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.streets,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
};

/* const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}; */

const streetsByCity = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_CITY:
    case RECEIVE_STREETS:
    case REQUEST_STREETS:
      return Object.assign({}, state, {
        [action.cityId]: streets(state[action.cityId], action),
      });
    default:
      return state;
  }
};

export default combineReducers({
  streetsByCity,
  selectedCity,
});
