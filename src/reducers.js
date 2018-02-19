import { combineReducers } from 'redux';

import selectedSubreddit from './reducers/selectedSubreddit';
import postsBySubreddit from './reducers/postsBySubreddit';
import selectedRegion from './reducers/selectedRegion';
import citiesByRegion from './reducers/citiesByRegion';
import selectedCity from './reducers/selectedCity';
import streetsByCity from './reducers/streetsByCity';
import mobileDrawerOpen from './reducers/mobileDrawerOpen';

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  citiesByRegion,
  selectedRegion,
  streetsByCity,
  selectedCity,
  mobileDrawerOpen,
});

export default rootReducer;
