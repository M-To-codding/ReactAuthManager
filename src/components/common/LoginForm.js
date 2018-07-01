import React, {Component} from 'react';
import {Form, Text, Field} from 'react-form';
import {Link} from "react-router-dom";

class LoginForm extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.users);
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
      <Form>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="login-form">

            <label htmlFor="Email">Your email</label>
            <Text field="Email" type="email" validate={validateEmail}/>

            <label htmlFor="Passw">Password</label>
            <Text field="Passw" type="password" validate={validatePassw}/>

            {formApi.errors &&
            <p className="error">{formApi.errors.Email}</p>
            }
            {formApi.errors &&
            <p className="error">{formApi.errors.Passw}</p>
            }

            <p className="tip">You are not registred? Register <Link to="/registration">here</Link></p>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </Form>
    );
  }
}

export default LoginForm;