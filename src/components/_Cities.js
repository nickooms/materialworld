import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import Table, { Body, Cell, Head, Row } from '../ui/Table';
import CityRow from './CityRow';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const data = [
  { id: 13, name: 'Kapellen' },
  { id: 23, name: 'Stabroek' },
];

const Cities = (props) => {
  const { classes } = props;
  const rows = data.map(row => (
    <CityRow key={row.id} {...row} />
  ));
  return (
    <Paper className={classes.root} elevation={6}>
      <Table className={classes.table}>
        <Head>
          <Row>
            <Cell>Name</Cell>
            <Cell numeric>ID</Cell>
          </Row>
        </Head>
        <Body>
          {rows}
        </Body>
      </Table>
    </Paper>
  );
};

Cities.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cities);
