export const SELECT_STREET = 'SELECT_STREET';
export const INVALIDATE_STREET = 'INVALIDATE_STREET';

export const selectStreet = street => ({
  type: SELECT_STREET,
  street,
});

export const invalidateStreet = street => ({
  type: INVALIDATE_STREET,
  street,
});
