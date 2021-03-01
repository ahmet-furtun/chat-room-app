import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.component";

import { CheckAuthentication } from "./utils/CheckAuthentication"

//redux stuff
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
