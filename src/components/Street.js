import React from 'react';
import PropTypes from 'prop-types';

import Paper from '../ui/Paper';

const Street = ({ match }) => (
  <Paper>
    <h2>Street</h2>
    <div>
      <strong>ID</strong>
      <div>{match.params.id}</div>
    </div>
  </Paper>
);

Street.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Street;
