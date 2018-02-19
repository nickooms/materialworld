import React from 'react';
import PropTypes from 'prop-types';

import { Cell, Row } from '../ui/Table';

const CityRow = ({ id, name }) => (
  <Row hover>
    <Cell>{name}</Cell>
    <Cell numeric>{id}</Cell>
  </Row>
);

CityRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default CityRow;
