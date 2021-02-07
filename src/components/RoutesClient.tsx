// Handles the routing between the pages

// React imports
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Import pages
import Browse from "../pages/Browse";
import BankSearch from "../pages/bank_search/BankSearch";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/home/home";
import NearbyBanks from "../pages/nearby_banks/nearby_banks";

function RoutesClient() {
  return (
    <Switch>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/register" exact>
        <Redirect to="/signup"></Redirect>
      </Route>
      <Route path="/banks" exact component={NearbyBanks}></Route>
      <Route path="/browse" exact component={Browse}>
        <Redirect to="/banks"></Redirect>
      </Route>
      <Route path="/search" exact component={BankSearch}></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default RoutesClient;
