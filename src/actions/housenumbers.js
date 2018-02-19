import fetch from 'cross-fetch';

export const REQUEST_HOUSENUMBERS = 'REQUEST_HOUSENUMBERS';
export const RECEIVE_HOUSENUMBERS = 'RECEIVE_HOUSENUMBERS';

const requestHousenumbers = street => ({
  type: REQUEST_HOUSENUMBERS,
  street,
});

const receiveHousenumbers = (street, json) => ({
  type: RECEIVE_HOUSENUMBERS,
  street,
  housenumbers: json,
  receivedAt: Date.now(),
});

const fetchHousenumbers = street => (dispatch) => {
  dispatch(requestHousenumbers(street));
  return fetch(`http://localhost:3000/street/${street}/housenumbers`)
    .then(response => response.json())
    .then(json => dispatch(receiveHousenumbers(street, json)));
};

const shouldFetchHousenumbers = (state, street) => {
  const housenumbers = state.housenumbersByStreet[street];
  if (!housenumbers) return true;
  if (housenumbers.isFetching) return false;
  return housenumbers.didInvalidate;
};

export const fetchHousenumbersIfNeeded = street => (dispatch, getState) => {
  if (shouldFetchHousenumbers(getState(), street)) {
    return dispatch(fetchHousenumbers(street));
  }
  return false;
};
