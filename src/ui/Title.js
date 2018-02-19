import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

const Title = ({ children }) => (
  <Typography type="title" color="inherit" noWrap>
    {children}
  </Typography>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
