import React from 'react';
import PropTypes from 'prop-types';

import Paper from '../ui/Paper';

const RoadObject = ({ match }) => (
  <Paper>
    <h2>Road Object</h2>
    <div>
      <strong>ID</strong>
      <div>{match.params.id}</div>
    </div>
  </Paper>
);

RoadObject.propTypes = {
  match: PropTypes.object.isRequired,
};

export default RoadObject;
