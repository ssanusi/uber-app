import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../Pages/Home";

interface IProps {
  isLoggedIn: boolean;
}

const AppRoute: React.FC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    <>{isLoggedIn ? <LoggedInRoute /> : <LoggedOutRoute />}</>
  </BrowserRouter>
);

const LoggedOutRoute: React.FC = () => (
  <Switch>
    <Route path="/" exact={true} component={HomePage} />
    <Route />
    <Redirect from={"*"} to="/" />
  </Switch>
);
const LoggedInRoute: React.FC = () => (
  <Switch>
    <Route path="/" exact={true} component={HomePage} />
    <Route />
    <Redirect from={"*"} to="/" />
  </Switch>
);

export default AppRoute;
