import React from 'react';
import PropTypes from 'prop-types';
import Tabs, { Tab } from 'material-ui/Tabs';

const RoadSegmentTabs = ({ value, match: { params: { id } } }) => (
  <Tabs centered value={value}>
    <Tab label="Road Segment" href={`/segment/${id}`} />
  </Tabs>
);

RoadSegmentTabs.propTypes = {
  value: PropTypes.number.isRequired,
  match: PropTypes.object.isRequired,
};

export default RoadSegmentTabs;
