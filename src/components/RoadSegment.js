import React from 'react';
import PropTypes from 'prop-types';

import Paper from '../ui/Paper';

const RoadSegment = ({ match }) => (
  <Paper>
    <h2>Road Segment</h2>
    <div>
      <strong>ID</strong>
      <div>{match.params.id}</div>
    </div>
  </Paper>
);

RoadSegment.propTypes = {
  match: PropTypes.object.isRequired,
};

export default RoadSegment;
