import React from "react";
import Form from "../form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/pages/1"></Redirect>
      </Route>
      <Route exact path="/pages/1" component={Form}></Route>
      <Route exact path="/pages/2" component={Form}></Route>
      <Route exact path="/pages/success" component={Form}></Route>
    </Switch>
  </Router>
);

export default App;
