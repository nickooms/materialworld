import { TOGGLE_MOBILE_DRAWER_OPEN } from '../actions';

const initialState = false;

const mobileDrawerOpen = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_DRAWER_OPEN:
      return !state;
    default:
      return state;
  }
};

export default mobileDrawerOpen;
