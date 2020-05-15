import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');

    //function to change state of title, post & author onChange and onSubmit
    const changeOnClick = (e) => {
        e.preventDefault();
        const posts = {
            title,
            post,
            author
        };

        //clears inputs after data is sent to database
        setTitle('');
        setPost('');
        setAuthor('');

        //posts data to the database
        axios.post('/blogs/add', posts)
        .then(res => setMessage(res.data))
        .catch(err => {console.log(`Error: ${err}`)});

    }

    return(
        <>
        <add>
        <h1>Add New Blog Post</h1>
        <span className="message">{message}</span>
            <div className="container">
                <form encType="multipart/form-data" onSubmit={changeOnClick}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            placeholder="Title"
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="blog-post">Blog Post</label>
                        <textarea 
                            className="form-control" 
                            id="blog-post" rows="3"
                            onChange={e => setPost(e.target.value)}
                            value={post}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="author" 
                            placeholder="Author"
                            onChange={e => setAuthor(e.target.value)}
                            value={author}
                        />  
                    </div>
                    <button type="submit" className="btn btn-primary">Add Post</button>
                </form>
                <Link to="/blogs" className="btn">Back </Link> 
            </div>
        </add>
        </>
    );
};

export default AddPost;

const add = styled.div`
    margin: 3rem;
    padding: 4rem;
    width: 31.25rem;

    .message {
        font-weight: 900;
        color: #d2b48c;
        padding: 1rem 1rem 1rem 0;
    }
`;