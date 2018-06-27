import React, { Component } from 'react';
import './Contacts';
import './Info';
import Contacts from "./Contacts";
import Info from "./Info";

class Home extends Component {
  render() {
    return (
      <section className="info">
        <h1>Home work!</h1>
        <Contacts/>
        <Info/>
      </section>
    );
  }
}

export default Home;
