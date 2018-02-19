import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MuiDrawer from 'material-ui/Drawer';

const drawerWidth = 240;

const styles = theme => ({
  paper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
});

const Drawer = props => (
  <MuiDrawer
    classes={{ paper: props.classes.paper }}
    {...props}
  />
);

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drawer);
