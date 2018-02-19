import fetch from 'cross-fetch';

export const REQUEST_ROAD_OBJECTS = 'REQUEST_ROAD_OBJECTS';
export const RECEIVE_ROAD_OBJECTS = 'RECEIVE_ROAD_OBJECTS';

const requestRoadObjects = street => ({
  type: REQUEST_ROAD_OBJECTS,
  street,
});

const receiveRoadObjects = (street, json) => ({
  type: RECEIVE_ROAD_OBJECTS,
  street,
  roadObjects: json,
  receivedAt: Date.now(),
});

const fetchRoadObjects = street => (dispatch) => {
  dispatch(requestRoadObjects(street));
  return fetch(`http://localhost:3000/street/${street}/objects`)
    .then(response => response.json())
    .then(json => dispatch(receiveRoadObjects(street, json)));
};

const shouldFetchRoadObjects = (state, street) => {
  const roadObjects = state.roadObjectsByStreet[street];
  if (!roadObjects) return true;
  if (roadObjects.isFetching) return false;
  return roadObjects.didInvalidate;
};

export const fetchRoadObjectsIfNeeded = street => (dispatch, getState) => {
  if (shouldFetchRoadObjects(getState(), street)) {
    return dispatch(fetchRoadObjects(street));
  }
  return false;
};
