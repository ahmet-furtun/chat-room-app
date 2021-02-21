import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../../pages/home/home.component";

import "../../common/styles";
import "./app.component.css";
import "nes.css/css/nes.min.css";

const App: FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Home} />
          <Route exact path="/register" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
