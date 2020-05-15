import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export class Contact extends Component {
  render() {
    return (
      <Post>
        <h1>Contact: </h1>
        <p><MdEmail /> Email: veemavingire@gmail.com. </p>
        <p><FaLinkedin /> LinkedIn: https://www.linkedin.com/in/vongai-mavingire-a61b6558/</p>
        <p><FaYoutube /> YouTube: https://www.youtube.com/channel/UCxonCbqcCgJ4DqyjWXmYcdg</p>
        <p><FaInstagram /> Instagram: https://www.instagram.com/vongai.mapho</p>
        <p><FaFacebook /> FaceBook: https://www.facebook.com/vongaimaphoo/</p>
        <p><FaTwitter /> Twitter: https://twitter.com/vongaimapho</p>
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
