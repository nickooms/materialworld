import React from 'react';
import List from 'material-ui/List';

import Item from './Navigation/Item';
import routes from './routes';

const DrawerMenu = () => (
  <List>
    {routes.map(item => <Item key={item.path} {...item}>{item.children}</Item>)}
  </List>
);

export default DrawerMenu;
