import React, { FC, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../../pages/home/home.page";
import Register from '../../pages/register/register.page';
import Login from '../../pages/login/login.page';

import "../../common/styles";
import "./app.component.css";
import "nes.css/css/nes.min.css";

import { CheckAuthentication } from "../../utils/CheckAuthentication"

const App: FC = () => {
  useEffect(() => {
    CheckAuthentication();
   }, []);
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={Home}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
