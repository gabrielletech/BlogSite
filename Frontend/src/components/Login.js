//Login component with google login & local login in with email & password 

import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';
import axios from 'axios';
//import Dashboard from './Dashboard';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };

   // this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }

   responseGoogle = (response) => {
    this.props.history.push('/Dashboard');
    console.log(response);
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios.post('http://localhost:3000/sessions', {
      user: {
        email: email,
        password: password
      }
    },
    { withCredentials: true }
    )
    .then(response => {
      console.log('res from login', response);
      //if (response.data.status === 'created') {
        // this.props.handleSuccessfulAuth(response.data);
        // }
      })
      .catch(error => {
        console.log('Login error', error);
      });
      event.preventDefault();
  }
  
  render() {
    return (
        <Post>
        <>
        <h1>Log in with Google </h1>
        <GoogleLogin
          clientId="880827133947-6dejag8fqf3bct0kvleee79alkcttabd.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <h1>Log in with Email & Password</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input 
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type='submit'>Login</button>
        </form>
        </>
        </Post>
      
    );
}
}


export default Login;

const Post = styled.div`
      margin-left: 7rem;
`;