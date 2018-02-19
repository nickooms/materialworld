import React from 'react';
import PropTypes from 'prop-types';
import { TableRow as Row, TableCell as Cell } from 'material-ui/Table';

import Paper from '../ui/Paper';
import SimpleTable from '../ui/SimpleTable';

const housenumbers = [
  { id: 1856248, number: '2' },
  { id: 99691, number: '6' },
  { id: 760054, number: '8' },
  { id: 1062449, number: '10' },
  { id: 2517739, number: '10A' },
  { id: 1294647, number: '12' },
  { id: 1595092, number: '14' },
  { id: 835029, number: '15' },
  { id: 1827928, number: '16' },
  { id: 1139726, number: '17' },
  { id: 2134212, number: '18' },
  { id: 1373962, number: '19' },
  { id: 866576, number: '20' },
  { id: 1170683, number: '22' },
  { id: 447424, number: '23' },
  { id: 2367470, number: '24' },
  { id: 681182, number: '25' },
  { id: 2375929, number: '26' },
  { id: 984806, number: '27' },
  { id: 2354454, number: '28' },
  { id: 1218161, number: '29' },
  { id: 2372253, number: '30' },
  { id: 11897, number: '31' },
  { id: 314844, number: '33' },
  { id: 2838403, number: '37' },
  { id: 1653112, number: '39' },
  { id: 515211, number: '41' },
  { id: 783088, number: '43' },
  { id: 632921, number: '47' },
  { id: 2557085, number: '49' },
  { id: 372327, number: '51' },
  { id: 641007, number: '53' },
  { id: 907014, number: '55' },
];

const HousenumberRow = ({ id, number }) => (
  <Row key={id}>
    <Cell numeric>{id}</Cell>
    <Cell numeric>{number}</Cell>
  </Row>
);

HousenumberRow.propTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.string.isRequired,
};

const StreetHousenumbers = () => (
  <Paper>
    <SimpleTable
      title="Housenumbers"
      columns={[
        <Cell numeric>ID</Cell>,
        <Cell numeric>Number</Cell>,
      ]}
      row={HousenumberRow}
      data={housenumbers}
    />
  </Paper>
);

StreetHousenumbers.defaultProps = {
  // housenumbers: [],
};

StreetHousenumbers.propTypes = {
  // housenumbers: PropTypes.array,
};

export default StreetHousenumbers;
