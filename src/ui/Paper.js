import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MuiPaper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 6,
  },
});

const Paper = props => (
  <MuiPaper className={props.classes.root} elevation={6} {...props} />
);

Paper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paper);
