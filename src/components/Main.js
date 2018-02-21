import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

import AsyncApp from '../containers/AsyncApp';
import AsyncCities from '../containers/AsyncCities';
import AsyncStreets from '../containers/AsyncStreets';
import Street from './Street';
import AsyncHousenumbers from '../containers/AsyncHousenumbers';
import AsyncRoadObjects from '../containers/AsyncRoadObjects';
import AsyncRoadObject from '../containers/AsyncRoadObject';
import AsyncRoadSegments from '../containers/AsyncRoadSegments';
import AsyncRoadSegment from '../containers/AsyncRoadSegment';

const styles = theme => ({
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

const Main = ({ classes }) => (
  <main className={classes.content}>
    <Route exact path="/" component={AsyncApp} />
    <Route exact path="/street/:id" component={Street} />
    <Route exact path="/street/:id/housenumbers" component={AsyncHousenumbers} />
    <Route exact path="/street/:id/objects" component={AsyncRoadObjects} />
    <Route exact path="/street/:id/segments" component={AsyncRoadSegments} />
    <Route exact path="/object/:id" component={AsyncRoadObject} />
    <Route exact path="/segment/:id" component={AsyncRoadSegment} />
    <Route path="/region/:id/cities" component={AsyncCities} />
    <Route path="/city/:id/streets" component={AsyncStreets} />
  </main>
);

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);
