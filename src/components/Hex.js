import React from 'react';
import PropTypes from 'prop-types';

const Hex = ({ children }) => (
  <span>
    {children.toString(16).toUpperCase()}
  </span>
);

Hex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hex;
