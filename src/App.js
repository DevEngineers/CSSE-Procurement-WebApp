import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import AllOrderView from "./components/AllOrderView";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DeclineOrder from "./components/DeclineOrder";

function App() {
    return (
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/" component={DeclineOrder}/>
              <Route exact path="/l" component={AllOrderView}/>
          </Switch>
          <Footer/>
      </Router>
    );
}

export default App;
