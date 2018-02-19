import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MuiAppBar from 'material-ui/AppBar';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
});

const AppBar = props => (
  <MuiAppBar className={props.classes.root} {...props} />
);

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
