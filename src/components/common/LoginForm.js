import React, {Component} from 'react';
import {Form, Text, Field} from 'react-form';
import {Link} from "react-router-dom";
import './form-styles.css';
import Row from 'muicss/lib/react/container';

import LocalStHandlers from "../../helpers/localStHandlers";
import sessionStHandlers from "../../helpers/sessionHandlers";

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: LocalStHandlers.getItems('user')
    }
    this.message = '';
  }

  handleSubmit(val) {
    if (this.findUserInStorage(val)) {
      sessionStHandlers.setItems('user', val);
      window.location.href = '/';
    } else {
      this.message = "Email or password is not correct. Try again.";
    }
  }

  findUserInStorage(item) {
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].passw === item.Passw && this.state.users[i].email === item.Email) {
        return true;
      }
    }
  }


  render() {
    let inputVal = '';

    const validateEmail = value => ({
      error: !value || value.length <= 2 ? 'Write correct email' : null
    });

    const validatePassw = value => ({
      error: !value || value.length < 5 ? 'Password must be longer then 5 characters' : null,
      success: inputVal = value
    });

    return (
      <Row>
        <Form onSubmit={(val) => this.handleSubmit(val)}>
          {formApi => (
            <form onSubmit={formApi.submitForm} id="login-form">

              <p className="message"><small>{this.message}</small></p>

              <div>
                <label htmlFor="Email">Your email</label>
                <Text field="Email" type="email" validate={validateEmail}/>
              </div>

              <div>
                <label htmlFor="Passw">Password</label>
                <Text field="Passw" type="password" validate={validatePassw}/>
              </div>

              {formApi.errors &&
              <p className="error">
                <small>{formApi.errors.Email}</small>
              </p>
              }
              {formApi.errors &&
              <p className="error">
                <small>{formApi.errors.Passw}</small>
              </p>
              }

              <p className="tip">
                <small>You are not registred? Register <Link to="/registration">here</Link></small>
              </p>

              <button type="submit" className="btn btn-primary" disabled={formApi.errors}>
                Submit
              </button>
            </form>
          )}
        </Form>
      </Row>
    );
  }
}

export default LoginForm;