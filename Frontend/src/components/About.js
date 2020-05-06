import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
        <>            
            <Post>
            <h1>Vongai who? </h1>
            <p>Vongai Mavingire is a digital entrepreneur ,beauty and lifestyle blogger with a youtube channel 
                that has more than 3.5 million views.In addition to blogging she is also a freelance Makeup Artist 
                and conducts makeup masterclasses regularly .Recently she has collaborated for campaign work with 
                Revlon South Africa,Sorbet Makeup,Johnson's Skincare and Cosmopolitan . When she is not busy with 
                content creation she spends her downtime reading .
            </p><br />
            <Link to="/" className="btn">Back to home page</Link> 
            </Post>
        </>
        )
    }
}

export default About;

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