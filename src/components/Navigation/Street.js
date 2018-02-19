import React from 'react';
import PropTypes from 'prop-types';

import NestedItem from './NestedItem';
import StreetIcon from '../../icons/Street';

const Street = ({
  id, name, city,
}) => (
  <NestedItem
    to={`/street/${id}`}
    icon={<StreetIcon />}
    primary={name}
    secondary={city}
  />
);

Street.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default Street;
