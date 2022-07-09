import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IndexPage from './IndexPage';
import DashboardPage from './DashboardPage'

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={IndexPage} />
        <Route path={'/dashboard'} component={DashboardPage} />
        <Route path={'/'} component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}
