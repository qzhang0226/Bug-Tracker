import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history'
import Login from "../components/Login";

export const history = createHistory();

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Login} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default AppRouter;
