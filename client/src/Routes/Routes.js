import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "../Layout/Home/Home.js";
import NavBar from "../Layout/Navbar/Navbar"
import Add from "../Layout/Add/Add.js";
import Edit from "../Layout/Edit/Edit.js";

const Routes = () => {
  return (
    <Fragment>
        <NavBar />
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/add" component={ Add } exact />
          <Route path="/edit" component={ Edit } exact />
        </Switch>
      </Fragment>
  );
};

export default Routes;
