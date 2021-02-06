// Handles the routing between the pages

// React imports
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Import pages
import Browse from "../pages/Browse";
import Login from "../pages/Login";
import Home from "../pages/Home";

function RoutesClient() {
  return (
    <Switch>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/browse" exact component={Browse}></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default RoutesClient;
