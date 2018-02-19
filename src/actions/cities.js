import fetch from 'cross-fetch';

export const REQUEST_CITIES = 'REQUEST_CITIES';
export const RECEIVE_CITIES = 'RECEIVE_CITIES';

const requestCities = region => ({
  type: REQUEST_CITIES,
  region,
});

const receiveCities = (region, json) => ({
  type: RECEIVE_CITIES,
  region,
  cities: json,
  receivedAt: Date.now(),
});

const fetchCities = region => (dispatch) => {
  dispatch(requestCities(region));
  return fetch(`http://localhost:3000/region/${region}/cities`)
    .then(response => response.json())
    .then(json => dispatch(receiveCities(region, json)));
};

const shouldFetchCities = (state, region) => {
  const cities = state.citiesByRegion[region];
  if (!cities) return true;
  if (cities.isFetching) return false;
  return cities.didInvalidate;
};

export const fetchCitiesIfNeeded = region => (dispatch, getState) => {
  if (shouldFetchCities(getState(), region)) {
    return dispatch(fetchCities(region));
  }
  return false;
};
