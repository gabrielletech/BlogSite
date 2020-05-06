//this component is for fetching an individual blog post to continue reading

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Spinner from '../spinner.gif';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [author, setAuthor] = useState('');

    //to grab item by id 
    useEffect(() => {
        axios.get(`/blogs/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setPost(res.data.post),
            setAuthor(res.data.author)
        ])
        .catch(err => console.log(`Error: ${err}`))
    }, [props]);

    return (
        <Post>
            {!title || !post || !author ?  ( <img style={{width: '10rem', display: 'block', margin: 'auto'}} src={Spinner} alt="Loading.." /> ) : (
            <>
                <h2>{title}</h2>
                <p>{post}</p>
                <p>{author}</p> 
                <br />
                <Link to="/" className="btn">Back to home page</Link> 
            </>
            )}
        </Post>
    );
};

export default Blog;

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