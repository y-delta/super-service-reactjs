import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import RegisterPage from "views/examples/RegisterPage";
import LoginPage from "views/examples/LoginPage.js";
import StorePage from "views/examples/StorePage.js";
import SectionStore from "views/index-sections/SectionStore.js";
import LandingPage from "views/examples/LandingPage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <LandingPage {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/login-page"
        render={props => <LoginPage {...props} />}
      />
      <Route
        path="/store-page"
        render={props => <StorePage {...props} />}
      />
      <Route
        path="/items"
        render={props => <SectionStore {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
