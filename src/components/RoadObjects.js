import React from 'react';
import PropTypes from 'prop-types';

import Paper from '../ui/Paper';
import List from './RoadObject/List/List';

const RoadObjects = props => (
  <Paper>
    <List items={props.roadObjects} />
  </Paper>
);

RoadObjects.propTypes = {
  roadObjects: PropTypes.array.isRequired,
};

export default RoadObjects;
