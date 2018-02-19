import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import Table, { Body, Cell, Head, Row } from '../ui/Table';
import StreetRow from './StreetRow';

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

const Streets = (props) => {
  const { classes } = props;
  const streets = [
    { id: 7338, name: 'Markt' },
    { id: 5514, name: 'Papenboslaan' },
  ];
  const rows = streets.map(row => (
    <StreetRow key={row.id} {...row} />
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

Streets.propTypes = {
  classes: PropTypes.object.isRequired,
  // streets: PropTypes.object,
};

export default withStyles(styles)(Streets);
