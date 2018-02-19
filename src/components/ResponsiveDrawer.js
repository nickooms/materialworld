import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Toolbar from 'material-ui/Toolbar';
import Hidden from 'material-ui/Hidden';

import Main from './Main';
import AppBar from '../ui/AppBar';
import MenuButton from '../containers/MenuButton';
import Title from '../ui/Title';
import Root from '../ui/Root';
import AppFrame from '../ui/AppFrame';
import TemporaryDrawer from './Drawer/TemporaryDrawer';
import PermanentDrawer from './Drawer/PermanentDrawer';
import Drawer from './Drawer/Drawer';
import StreetTabs from './Tabs/Street';

const streetRoutes = [
  '',
  '/housenumbers',
  '/objects',
  '/segments',
];

const ResponsiveDrawer = ({ open, toggle }) => (
  <Root>
    <AppFrame>
      <AppBar>
        <Toolbar>
          <MenuButton />
          <Title>Racing</Title>
        </Toolbar>
        {streetRoutes
          .map(path => `/street/:id${path}`)
          .map((path, index) => (
            <Route
              key={path}
              exact
              path={path}
              render={props => <StreetTabs value={index} {...props} />}
            />
          ))}
      </AppBar>
      <Hidden mdUp>
        <TemporaryDrawer open={open} onClose={toggle}>
          <Drawer />
        </TemporaryDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <PermanentDrawer>
          <Drawer />
        </PermanentDrawer>
      </Hidden>
      <Main />
    </AppFrame>
  </Root>
);

ResponsiveDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ResponsiveDrawer;
