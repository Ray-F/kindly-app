import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProfilePage from "./ProfilePage";
import DashboardPage from "./DashboardPage";
import OnboardingFinishSlack from "./OnboardingFinishSlack";
import OnboardingPage from "./OnboardingPage";

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={LandingPage} />
        <Route exact path={"/profile"} component={ProfilePage} />
        <Route path={"/dashboard"} component={DashboardPage} />
        <Route exact path={"/onboarding"} component={OnboardingPage} />
        <Route
          exact
          path={"/onboarding/slack"}
          component={OnboardingFinishSlack}
        />
        {/* Default path if nothing matches */}
        <Route path={"/"} component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}
