export const SELECT_CITY = 'SELECT_CITY';
export const INVALIDATE_CITY = 'INVALIDATE_CITY';

export const selectCity = city => ({
  type: SELECT_CITY,
  city,
});

export const invalidateCity = city => ({
  type: INVALIDATE_CITY,
  city,
});
