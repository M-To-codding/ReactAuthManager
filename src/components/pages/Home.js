import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Contacts from "./Contacts";
import Info from "./Info";
import Sidebar from "../sidebar/Sidebar";

class Home extends Component {
  render() {
    return (
      <Router>

        <section className="home-page-data">
          <h1>Home work!</h1>

          <Sidebar/>

          <Route
            exact
            path="/info"
            component={Info}
          />
          <Route
            exact
            path="/contacts"
            component={Contacts}
          />
        </section>

      </Router>

    );
  }
}

export default Home;
