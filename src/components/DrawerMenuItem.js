import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';

const DrawerMenuItem = ({ to, primary }) => (
  <NavLink exact to={to} activeStyle={{ /* color: 'red' */ }}>
    <ListItem button selected>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  </NavLink>
);

DrawerMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
};

export default DrawerMenuItem;
