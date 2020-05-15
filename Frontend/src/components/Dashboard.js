//dashboard should only be accessed on Login

import React, { useState } from 'react';
import styled from 'styled-components';
import { Badge } from 'reactstrap';
import Spinner from '../spinner.gif';
import { Route, Link } from 'react-router-dom';
import AddPost from './AddPost';
import EditPost from './EditPost';
import axios from 'axios';

const Dashboard = ({posts}) => {
    const [post, setPost] = useState([]);

  //delete posts by id
  const deletePost = (id) => {
    axios.delete(`/blogs/${id}`)
    .then(res => alert(res.data))
    setPost(post.filter(elem => elem._id !== id));
  }
    return (
        <>
            <Post>
            <Link to='/AddPost' style={{ background: 'tan', marginLeft: 600}}className="btn">Add Post</Link><br></br>
                {!posts.length ? (
                <img style={{width: '10rem', display: 'block', margin: 'auto'}} src={Spinner} alt="loading..." />) : (
                posts.map((post, key) => (
                    <div className='container' key={key}>
                        <h2>{post.title}</h2>
                        <p>{post.post}</p>
                        <span><Badge color="tan">{post.author}</Badge></span>
                            <div className="row my-5">
                                <div className="col-sm-2">
                                    <Link to={`/update/${post._id}`} className="btn btn-outline-success">Edit Post</Link>
                                </div>
                                <div className="col-sm-2">
                                    <button onClick={() => deletePost(post._id)} className="btn btn-outline-success">Delete Post</button>
                                </div>
                            </div>
                            <hr></hr>
                    </div>
                )))}
            </Post>
            <Route path="/addPost" component={AddPost}/>
            <Route path="/update/:id" render={props => <EditPost {...props} posts={posts}/>} />
            
        </>
    );
}

export default Dashboard;

const Post = styled.div`
      margin: 7rem 0;

      .btn add {
        background: #d2b48c;
        margin-left: 9rem;
    }
`;
