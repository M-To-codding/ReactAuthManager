import React, {Component} from 'react';

import LoginForm from "../common/LoginForm";

class Login extends Component {

  constructor(props) {
    super(props);
    this.user = {};
    this.state = {
      users: localStorage.getItem('user')
    }
  }

  render() {
    return (
      <section className="login">
        <LoginForm/>
      </section>
    );
  }
}

export default Login;
