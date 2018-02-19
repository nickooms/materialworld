import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';

import Title from '../../ui/Title';
import DrawerMenu from '../Navigation/DrawerMenu';

const Drawer = () => (
  <div>
    <Toolbar>
      <Title>Racing</Title>
    </Toolbar>
    <Divider />
    <DrawerMenu />
  </div>
);

export default Drawer;
