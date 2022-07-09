import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexPage from './IndexPage';
import ProfilePage from './ProfilePage';
import DashboardPage from './DashboardPage'

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={IndexPage} />
        <Route exact path={'/profile'} component={ProfilePage} />
        <Route path={'/dashboard'} component={DashboardPage} />
        {/* Default path if nothing matches */}
        <Route path={'/'} component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}
