import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export class Contact extends Component {
  render() {
    return (
      <Post>
        <h1>Contact: </h1>
        <p>Email: veemavingire@gmail.com. </p>
        <p>LinkedIn: https://www.linkedin.com/in/vongai-mavingire-a61b6558/</p>
        <p>YouTube: https://www.youtube.com/channel/UCxonCbqcCgJ4DqyjWXmYcdg</p>
        <p>Instagram: https://www.instagram.com/vongai.mapho</p>
        <p>FaceBook: https://www.facebook.com/vongaimaphoo/</p>
        <p>Twitter: https://twitter.com/vongaimapho</p>
        <br />
        <Link to="/" className="btn">Back to home page</Link> 
      </Post>
    );
  }
}

export default Contact;

const Post = styled.div`
      margin: 3rem auto;
      padding: 1rem 10rem;

      h2 {
          text-align: center;
      }

      .btn {
          background: #d2b48c
      }
`;
