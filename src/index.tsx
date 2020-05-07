import ReactDOM from "react-dom";
import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./containers/Home/Home";
import ViewDevice from "./containers/ViewDevice/ViewDevice";
import ScanDevices from "./containers/ScanDevices/ScanDevices";
const routing = (
      <HashRouter>
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/Home" />
          )} />
          <Route path="/Home" component={Home} />
          <Route path="/ViewDevice" component={ViewDevice} />
          <Route path="/ScanDevices" component={ScanDevices} />
        </Switch>
      </HashRouter>
  );
  ReactDOM.render(routing, document.getElementById("root"));
