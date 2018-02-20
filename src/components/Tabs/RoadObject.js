import React from 'react';
import PropTypes from 'prop-types';
import Tabs, { Tab } from 'material-ui/Tabs';

const RoadObjectTabs = ({ value, match: { params: { id } } }) => (
  <Tabs centered value={value}>
    <Tab label="Road Object" href={`/object/${id}`} />
  </Tabs>
);

RoadObjectTabs.propTypes = {
  value: PropTypes.number.isRequired,
  match: PropTypes.object.isRequired,
};

export default RoadObjectTabs;
