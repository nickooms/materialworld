import React from 'react';
import PropTypes from 'prop-types';
import Tabs, { Tab } from 'material-ui/Tabs';

const StreetTabs = ({
  value,
  match: { params: { id } },
}) => (
  <Tabs value={value}>
    <Tab label="Street" href={`/street/${id}`} />
    <Tab label="Housenumbers" href={`/street/${id}/housenumbers`} />
    <Tab label="Objects" href={`/street/${id}/objects`} />
    <Tab label="Segments" href={`/street/${id}/segments`} />
  </Tabs>
);

StreetTabs.propTypes = {
  value: PropTypes.number.isRequired,
  match: PropTypes.object.isRequired,
};

export default StreetTabs;
