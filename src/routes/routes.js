import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { PublicRoute } from "../helpers/router.helper";

import Screen__LandingPage from "../pages/Screen__LandingPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" exact component={Screen__LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
