import React, { useState, useEffect } from 'react';
import './Main.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import Blogs from './components/Home';
import Blog from './components/Blog';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SideBar from './components/Sidebar';
import About from './components/About';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import AddPost from './components/AddPost'; 
import EditPost from './components/EditPost';

function App(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/blogs')
    .then(res => setPosts(res.data))
    .catch(err => console.log(`Error: ${err}`))
  });

  return (
    <div className="App">
    <Header /><br />
    <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
    <h2 className="heading">By Vongai</h2><br />
    <Route exact path='/' render={() => <Blogs posts={posts}/>} />
    <Route path='/About' render={() => <About />} />
    <Route path='/Contact' render={() => <Contact />} />
    <Route path='/Login' render={() => <Login />} />
    <Route path='/blog/:id' render={props => <Blog {...props} posts={posts}/>} />
    <Route path='/Dashboard' render={props => <Dashboard {...props} posts={posts} />} />
    <Route path='/AddPost' render={() => <AddPost />} />
    <Route path='/update/:id' render={props => <EditPost {...props} posts={posts}/>} />
    <Footer />
    </div>
  );
}

export default App;
