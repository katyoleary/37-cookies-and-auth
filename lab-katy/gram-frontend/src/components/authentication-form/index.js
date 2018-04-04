'use strict';

//used for signup and login

import React from 'react';
import * as util from '../../lib/util.js'; //primarily pulling in for class toggler and renderIf

class AuthenticationForm extends React.Component {
  constructor(props) {
    super(props);
    //stateful component bc of line below
    this.state = {
      //initial values set up for state of this component.
      username: '', 
      email: '',
      password: '', 
      usernameError: null, //hook 
      passwordError: null, 
      emailError: null, 
      error: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value, //[name] bc its a variable 
      usernameError: name === 'username' && !value ? 'username required' : null,
      emailError: name === 'email' && !value ? 'email required' : null, 
      passwordError: name === 'password' && !value ? 'password required' : null
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onComplete(this.state)
    .then( () => {
      this.setState({ username: '', email: '', password: '' })
    })
    .catch( error => {
      console.error(error);
      this.setState({ error });
    });
  }

  render() {
    return (
      <form 
        onSubmit={this.handleSubmit}
        className='auth-form' >
      
      {util.renderIf(this.props.authentication === 'signup', 
        <input 
          type='email'
          name='email'
          placeholder='email'
          value={this.state.email}
          onChange={this.handleChange} />
        )}

        <input
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange} />

        <input 
          type='password'
          name='password'
          placeholder='enter password'
          value={this.state.password}
          onChange={this.handleChange} /> 

        <button type='submit'>{this.props.authentication}</button>
      
      </form>
    )
    //for our UI layer, we need username, email and password. for login only username and password
  }
}

export default AuthenticationForm;

