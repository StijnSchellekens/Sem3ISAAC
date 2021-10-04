import React from 'react';


import Dashboard from '../Dashboard';
import Heatmap from '../Heatmap';
import Notifications from '../Notifications';
import Advanced from '../Advanced';
import Settings from '../Settings';

import {
  Switch,
  Route,
} from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route path="/heatmap">
        <Heatmap />
      </Route>
      <Route path='/notifications'>
        <Notifications />
      </Route>
      <Route path='/advanced'>
        <Advanced />
      </Route>
      <Route path='/settings'>
        <Settings />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
