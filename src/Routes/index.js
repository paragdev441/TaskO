import React, { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
import { routes } from "./routes";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          {routes.map(({ exact, path, component }, index) => {
            return (
              <Route
                key={index}
                exact={exact}
                path={path}
                component={component}
              />
            );
          })}
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;
