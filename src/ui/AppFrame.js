import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});

const AppFrame = props => (
  <div className={props.classes.appFrame} {...props} />
);

AppFrame.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppFrame);
