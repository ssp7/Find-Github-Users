import React from "react";
import About from "./components/Pages/About";
import Navbar from "./components/Layouts/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";
import "./App.css";
import Alert from "./components/Layouts/Alert";
import Home from "./components/Pages/Home";
import User from "./components/Users/User";
import NotFound from "./components/Pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
