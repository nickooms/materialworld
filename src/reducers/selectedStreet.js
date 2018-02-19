import { SELECT_STREET } from '../actions';

const initialState = '7338';

const selectedStreet = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_STREET:
      return action.street;
    default:
      return state;
  }
};

export default selectedStreet;
