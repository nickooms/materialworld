import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody as Body,
  TableHead as Head,
  TableRow as Row,
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';

import Title from '../ui/Title';

const styles = () => ({
  table: {
    minWidth: 700,
  },
});

const SimpleTable = props => (
  <Fragment>
    <Toolbar>
      <Title>{props.title}</Title>
    </Toolbar>
    <Table className={props.classes.table}>
      <Head>
        <Row>
          {props.columns}
        </Row>
      </Head>
      <Body>
        {props.data.map(props.row)}
      </Body>
    </Table>
  </Fragment>
);

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  row: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(SimpleTable);
