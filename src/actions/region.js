export const SELECT_REGION = 'SELECT_REGION';
export const INVALIDATE_REGION = 'INVALIDATE_REGION';

export const selectRegion = region => ({
  type: SELECT_REGION,
  region,
});

export const invalidateRegion = region => ({
  type: INVALIDATE_REGION,
  region,
});
