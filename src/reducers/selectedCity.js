import { SELECT_CITY } from '../actions';

const initialState = '23';

const selectedCity = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return action.city;
    default:
      return state;
  }
};

export default selectedCity;
