import fetch from 'cross-fetch';

export const REQUEST_STREETS = 'REQUEST_STREETS';
export const RECEIVE_STREETS = 'RECEIVE_STREETS';

const requestStreets = city => ({
  type: REQUEST_STREETS,
  city,
});

const receiveStreets = (city, json) => ({
  type: RECEIVE_STREETS,
  city,
  streets: json,
  receivedAt: Date.now(),
});

const fetchStreets = city => (dispatch) => {
  dispatch(requestStreets(city));
  return fetch(`http://localhost:3000/city/${city}/streets`)
    .then(response => response.json())
    .then(json => dispatch(receiveStreets(city, json)));
};

const shouldFetchStreets = (state, city) => {
  const streets = state.streetsByCity[city];
  if (!streets) return true;
  if (streets.isFetching) return false;
  return streets.didInvalidate;
};

export const fetchStreetsIfNeeded = city => (dispatch, getState) => {
  if (shouldFetchStreets(getState(), city)) {
    return dispatch(fetchStreets(city));
  }
  return false;
};
