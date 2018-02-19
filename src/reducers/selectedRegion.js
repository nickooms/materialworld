import { SELECT_REGION } from '../actions';

const initialState = '2';

const selectedRegion = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_REGION:
      return action.region;
    default:
      return state;
  }
};

export default selectedRegion;
