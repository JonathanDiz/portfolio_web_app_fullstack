import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

// TODO: store the bearer token and actually call a validateToken
//       function instead of checking if user is null but this is 
//       just for POC
if (localStorage.getItem("user") == null) { 
  hist.push("/pages/login-page"); 
}

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);


