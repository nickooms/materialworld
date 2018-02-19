import React from 'react';
// import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
// import Collapse from 'material-ui/transitions/Collapse';
// import { MenuList, MenuItem } from 'material-ui/Menu';
import HomeIcon from 'material-ui-icons/Home';
// import StarIcon from 'material-ui-icons/StarBorder';

import Favorites from './Favorites';

// import Item from './Item';
// import routes from './routes';

const DrawerMenu = () => (
  <List>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText inset primary="Home" />
    </ListItem>
    <Favorites />
    {/* { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/midi', name: 'Midi' },
    { path: '/topics', name: 'Topics' },
    { path: '/city', name: 'Cities', children: cities },
    { path: '/street', name: 'Streets', children: streets }, */}
  </List>
);

export default DrawerMenu;
