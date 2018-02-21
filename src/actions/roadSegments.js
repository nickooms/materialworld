import fetch from 'cross-fetch';

export const REQUEST_ROAD_SEGMENTS = 'REQUEST_ROAD_SEGMENTS';
export const RECEIVE_ROAD_SEGMENTS = 'RECEIVE_ROAD_SEGMENTS';

const requestRoadSegments = street => ({
  type: REQUEST_ROAD_SEGMENTS,
  street,
});

const receiveRoadSegments = (street, json) => ({
  type: RECEIVE_ROAD_SEGMENTS,
  street,
  roadSegments: json,
  receivedAt: Date.now(),
});

const fetchRoadSegments = street => (dispatch) => {
  dispatch(requestRoadSegments(street));
  return fetch(`http://localhost:3000/street/${street}/segments`)
    .then(response => response.json())
    .then(json => dispatch(receiveRoadSegments(street, json)));
};

const shouldFetchRoadSegments = (state, street) => {
  const roadSegments = state.roadSegmentsByStreet[street];
  if (!roadSegments) return true;
  if (roadSegments.isFetching) return false;
  return roadSegments.didInvalidate;
};

export const fetchRoadSegmentsIfNeeded = street => (dispatch, getState) => {
  if (shouldFetchRoadSegments(getState(), street)) {
    return dispatch(fetchRoadSegments(street));
  }
  return false;
};
