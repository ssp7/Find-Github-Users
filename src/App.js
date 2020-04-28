import React, { Component } from "react";
import Navbar from "./components/Layouts/Navbar";
import "./App.css";
import axios from "axios";
import Users from "./components/Users/Users";
import Search from "./components/Users/Search";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    this.setState({ loading: false });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`
    );
    this.setState({ users: res.data, loading: false });
  }

  //Searching github users
  // searchUsers = async (text) => {
  //   this.setState({ loading: "true" });
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID}`
  //   );
  //   this.setState({ users: res.data.items, loading: false });
  // };

  //Clearing users from the state
  clearUsers = () => this.setState({ users: [], loading: false });

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
