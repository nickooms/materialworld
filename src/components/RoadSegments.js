import React from 'react';
import PropTypes from 'prop-types';

import Paper from '../ui/Paper';
import List from './RoadSegment/List/List';

const RoadSegments = props => (
  <Paper>
    <List items={props.roadSegments} />
  </Paper>
);

RoadSegments.propTypes = {
  roadSegments: PropTypes.array.isRequired,
};

export default RoadSegments;
