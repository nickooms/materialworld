import React from 'react';
import PropTypes from 'prop-types';

import DrawerMenuItem from './DrawerMenuItem';

const MenuItem = ({ path, name }) => (
  <DrawerMenuItem to={path} primary={name} />
);

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MenuItem;
