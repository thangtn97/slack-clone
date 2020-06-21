import React from "react";
import Homepage from "./components/Homepage/Homepage";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default App;
