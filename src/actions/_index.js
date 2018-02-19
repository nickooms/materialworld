import fetch from 'cross-fetch';

export const REQUEST_STREETS = 'REQUEST_STREETS';
const requestStreets = cityId => ({
  type: REQUEST_STREETS,
  cityId,
});

export const RECEIVE_STREETS = 'RECEIVE_STREETS';
const receiveStreets = (cityId, json) => ({
  type: RECEIVE_STREETS,
  cityId,
  streets: json.data.children.map(child => child.data),
  receivedAt: Date.now(),
});

export const INVALIDATE_CITY = 'INVALIDATE_CITY';
export const invalidateCity = cityId => ({
  type: INVALIDATE_CITY,
  cityId,
});

export const fetchStreets = cityId =>
  (dispatch) => {
    dispatch(requestStreets(cityId));
    return fetch(`http://localhost:3000/city/${cityId}/streets`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error),
      )
      .then(json => dispatch(receiveStreets(cityId, json)));
  };
