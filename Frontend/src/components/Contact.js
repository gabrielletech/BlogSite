import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export class Contact extends Component {
  render() {
    return (
      <Post>
        <h1 className="lead-title">Get In Touch With Me </h1>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <p className="contact-icon mt-3 mb-2">
                  <a className="hvr-grow contact-link" href="veemavingire@gmail.com" mailto="veemavingire@gmail.com."><MdEmail /> Email </a> </p>
              </div>
              <div className="col-3">
              <p className="contact-icon mt-3 mb-2">
                 <a className="hvr-grow contact-link" href="https://www.linkedin.com/in/vongai-mavingire-a61b6558/"><FaLinkedin /> LinkedIn</a></p>
              </div>
              <div className="col-3">
              <p className="contact-icon mt-3 mb-2">
                 <a className="hvr-grow contact-link" href="https://www.youtube.com/channel/UCxonCbqcCgJ4DqyjWXmYcdg"><FaYoutube /> YouTube</a></p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <p className="contact-icon mt-3 mb-2">
                  <a className="hvr-grow contact-link" href="https://www.instagram.com/vongai.mapho"><FaInstagram /> Instagram</a></p>
              </div>
              <div className="col-3">
              <p className="contact-icon mt-3 mb-2">
                 <a className="hvr-grow contact-link" href="https://www.facebook.com/vongaimaphoo/"><FaFacebook /> FaceBook</a> </p>
              </div>
              <div className="col-3">
              <p className="contact-icon mt-3 mb-2">
                <a className="hvr-grow contact-link" href="https://twitter.com/vongaimapho"><FaTwitter /> Twitter</a>  </p>
              </div>
            </div>
          </div>
        
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
