import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IndexPage from './IndexPage';
import ProfilePage from './ProfilePage';

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={IndexPage} />
        <Route exact path={'/profile'} component={ProfilePage} />

        {/* Default path if nothing matches */}
        <Route path={'/'} component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}
