export const SELECT_ROAD_OBJECT = 'SELECT_ROAD_OBJECT';
export const INVALIDATE_ROAD_OBJECT = 'INVALIDATE_ROAD_OBJECT';

export const selectRoadObject = roadObject => ({
  type: SELECT_ROAD_OBJECT,
  roadObject,
});

export const invalidateRoadObject = roadObject => ({
  type: INVALIDATE_ROAD_OBJECT,
  roadObject,
});
