import React, {Component} from 'react';
import {Form, Text} from 'react-form';
import './form-styles.css'

import localStHandlers from './../../helpers/localStHandlers';
import User from "../../models/User";

class RegForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      values: [],
      users: localStHandlers.getItems('user')
    };
    this.message = '';
  }

  submitForm(values) {
    this.setState({values:values});
    this.handleValues();
  }

  handleValues() {
    let values = new User(this.state.values.Name, this.state.values.Email, this.state.values.Passw);

    if (this.findItemsByEmail('user', values)) {
      this.message = `User with email ${values.email} is exist.`;
    } else {
      localStHandlers.setItems('user', values);
    }
  }

  findItemsByEmail(key, currentItem) {
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].email === currentItem.email) {
        return true;
      }
    }
  }


  render() {
    let inputVal = '';

    const validateName = value => ({
      error: !value || value.length <= 2 ? 'Name length must be longer then 2 symbols' : null,
      success: value && value.length >= 2 ? 'Hello, ' + value + '!' : null
    });

    const validateEmail = value => ({
      error: !value || value.length <= 2 ? 'Write correct email' : null
    });

    const validatePassw = value => ({
      error: !value || value.length < 5 ? 'Password must be longer then 5 characters' : null,
      success: inputVal = value
    });

    const duplicateValidation = value => ({
      error: value !== inputVal ? 'Passwords is not match.' : null
    });

    return (
      <Form
        onSubmit={(values) => this.submitForm(values)}>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="login-form">
            <div className="message">
              <small>{this.message}</small>
            </div>

            <label htmlFor="Name">Your name</label>
            <Text field="Name" validate={validateName}/>
            {formApi.success &&
            <p className="success">{formApi.success.Name}</p>
            }

            <div>
              <label htmlFor="Email">Your email</label>
              <Text field="Email" type="email" validate={validateEmail}/>
            </div>

            <div>
              <label htmlFor="Passw">Password</label>
              <Text field="Passw" type="password" validate={validatePassw}/>
            </div>

            <div>
              <label htmlFor="ConfirmPassw">Confirm password</label>
              <Text field="ConfirmPassw" type="password" validate={duplicateValidation}/>
            </div>

            {formApi.errors &&
            <p className="error">
              <small>{formApi.errors.Name}</small>
            </p>
            }
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
            {formApi.errors &&
            <p className="error">
              <small>{formApi.errors.ConfirmPassw}</small>
            </p>
            }

            <button type="submit" className="btn btn-primary" disabled={formApi.errors}>
              Submit
            </button>
          </form>
        )}
      </Form>
    );
  }
}

export default RegForm;