import React from 'react';

import Drawer from '../../ui/Drawer';

const PermanentDrawer = props => (
  <Drawer
    open
    type="permanent"
    {...props}
  />
);

export default PermanentDrawer;
