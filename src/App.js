import React, { Fragment } from "react";
import About from "./components/Pages/About";
import Navbar from "./components/Layouts/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";
import "./App.css";
import Alert from "./components/Layouts/Alert";
import Users from "./components/Users/Users";
import User from "./components/Users/User";
import Search from "./components/Users/Search";

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
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
