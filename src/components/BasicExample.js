import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';

import ResponsiveDrawer from './ResponsiveDrawer';

const BasicExample = () => (
  <Router>
    <div>
      <Reboot />
      <ResponsiveDrawer />
    </div>
  </Router>
);

export default BasicExample;
