import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// import { selectCity, fetchStreets } from './actions';
// import cv from './reducers/cv';
import cities from './cities';
import streets from './reducers/streets';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  // combineReducers({
  // cv,
  cities,
  streets,
  // }),
  applyMiddleware(
    thunkMiddleware,
    devTools && devTools(),
  ),
);

// store.dispatch(selectCity(23));
// store.dispatch(fetchStreets(23)).then(() => console.log(store.getState()));

export default store;
