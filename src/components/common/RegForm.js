import React, {Component} from 'react';
import {Form, Text} from 'react-form';

class RegForm extends Component {

  constructor(props) {
    super(props);
    this.users = localStorage.getItem('user');
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
      <Form>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="login-form">

            <label htmlFor="Name">Your name</label>
            <Text field="Name" validate={validateName}/>
            {formApi.success &&
            <p className="success">{formApi.success.Name}</p>
            }

            <label htmlFor="Email">Your email</label>
            <Text field="Email" type="email" validate={validateEmail}/>

            <label htmlFor="Passw">Password</label>
            <Text field="Passw" type="password" validate={validatePassw}/>

            <label htmlFor="ConfirmPassw">Confirm password</label>
            <Text field="ConfirmPassw" type="password" validate={duplicateValidation}/>

            {formApi.errors &&
            <p className="error">{formApi.errors.Name}</p>
            }
            {formApi.errors &&
            <p className="error">{formApi.errors.Email}</p>
            }
            {formApi.errors &&
            <p className="error">{formApi.errors.Passw}</p>
            }
            {formApi.errors &&
            <p className="error">{formApi.errors.ConfirmPassw}</p>
            }

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </Form>
    );
  }
}

export default RegForm;