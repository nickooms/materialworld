import React from 'react';
import { Provider } from 'react-redux';
import { /* Route, */ BrowserRouter as Router } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';

import ResponsiveDrawer from './ResponsiveDrawer';
import configureStore from '../configureStore';
/* import AsyncApp from './AsyncApp';
import AsyncCities from './AsyncCities';
import AsyncStreets from './AsyncStreets'; */

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Reboot />
        <ResponsiveDrawer />
        {/* <Route exact path="/" component={AsyncApp} />
        <Route path="/region/:id/cities" component={AsyncCities} />
        <Route path="/city/:id/streets" component={AsyncStreets} /> */}
      </div>
    </Router>
  </Provider>
);

export default App;
