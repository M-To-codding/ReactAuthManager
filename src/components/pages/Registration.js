import React, { Component } from 'react';

import User from "../../models/User";
import RegForm from "../common/RegForm";

class Registration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: localStorage.getItem('user') || []
    }
  }


  render() {

    return (
      <section className="registration">
        <RegForm users={this.state.users}/>
      </section>
    );
  }
}

export default Registration;
