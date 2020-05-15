//home page for the public

import React from 'react';
import styled from 'styled-components';
import { Badge } from 'reactstrap';
import Spinner from '../spinner.gif';
import { Link } from 'react-router-dom';

const Blogs = ({ posts }) => {

    return (
      <>
      <Post>
      {!posts.length ? (
          <img style={{width: '10rem', display: 'block', margin: 'auto'}} src={Spinner} alt="loading..." />) : (
          posts.map((post, key) => (
            <div className='container' key={key}>
            <Link to={{
                  pathname: `/blog/${post._id}`}}><h2 style={{color: '#000'}}>{post.title}</h2>
                </Link>
              <p>{post.post}
                </p>
              <span><Badge color="tan">{post.author}</Badge></span><hr></hr>
            </div>
          )))}
      </Post>
      </>
    );
}

export default Blogs;

const Post = styled.div`
      margin: 5rem 0;
`;