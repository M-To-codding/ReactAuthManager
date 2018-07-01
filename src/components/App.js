import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Redirect} from 'react-router-dom'

import './App.css';
import Menu from "./menu/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import setAdmin from "../resources/setAdmin";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lsData: JSON.parse(localStorage.getItem('user' || '')),
      sessionData: JSON.parse(sessionStorage.getItem('user' || '')),
      userEmail: ''
    };
    this.component = {};

    if(!this.state.lsData){
      setAdmin();
    }

    console.log(this.state.lsData)
  }

  checkLocalStorage() {
    this.findUser();

    if (this.state.sessionData) {
      this.component = Home;
    } else {
      this.component = Login;
    }
  }

  render() {

    this.checkLocalStorage();

    return (

      <Router>

        <div className="App">

          {!this.localStData &&
          <Redirect to="/login"/>
          }

          <header className="App-header">
            <Menu/>
          </header>

          <main>
            <Route
              exact
              path="/"
              component={this.component}
            />
            <Route
              exact
              path="/login"
              component={Login}
            />
            <Route
              exact
              path="/registration"
              component={Registration}
            />
          </main>
        </div>

      </Router>
    );
  }
}

export default App;
