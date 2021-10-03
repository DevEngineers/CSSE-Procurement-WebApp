import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AllOrderView from "./components/AllOrderView";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllOrderView} />
      </Switch>
    </Router>
  );
}

export default App;
