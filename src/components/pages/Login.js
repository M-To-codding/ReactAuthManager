import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import LoginForm from "../common/LoginForm";
import sessionStHandlers from "../../helpers/sessionHandlers";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sessionData: sessionStHandlers.getItems('user')
    }
  }

  render() {
    return (
      <section className="login">
        {this.state.sessionData &&
          <Redirect to="/"/>
        }
        <LoginForm/>
      </section>
    );
  }
}

export default Login;
