import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

const MenuButton = ({ classes: { navIconHide }, onClick }) => (
  <IconButton
    color="inherit"
    aria-label="open drawer"
    onClick={onClick}
    className={navIconHide}
  >
    <MenuIcon />
  </IconButton>
);

MenuButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(MenuButton);
