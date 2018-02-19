import React from 'react';
import PropTypes from 'prop-types';

import { Cell, Row } from '../ui/Table';

const StreetRow = ({ id, name }) => (
  <Row hover>
    <Cell>{name}</Cell>
    <Cell numeric>{id}</Cell>
  </Row>
);

StreetRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default StreetRow;
