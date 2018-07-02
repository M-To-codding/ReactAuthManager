import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import RegForm from "../common/RegForm";
import sessionStHandlers from "../../helpers/sessionHandlers";

class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sessionData: sessionStHandlers.getItems('user')
    }
  }

  render() {

    return (
      <section className="registration">
        {this.state.sessionData &&
        <Redirect to="/"/>
        }

        <RegForm/>
      </section>
    );
  }
}

export default Registration;
