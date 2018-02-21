import { SELECT_ROAD_OBJECT } from '../actions';

const initialState = '53835939';

const selectedRoadObject = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ROAD_OBJECT:
      return action.roadObject;
    default:
      return state;
  }
};

export default selectedRoadObject;
