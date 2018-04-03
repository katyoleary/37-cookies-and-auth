//used for signup and login

import React from 'react';
import * as util from '../../lib/util.js'; //primarily pulling in for class toggler and renderIf

class AuthenticationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', 
      email: '',
      password: '',
      usernameError: null, 
      passwordError: null, 
      emailError: null, 
      error: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
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

      {util.renderIf(this.props.auth === 'signup', 
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

        <button type='submit'>{this.props.auth}</button>
      
      </form>
    )
  }
}

export default AuthenticationForm;