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
import Login from './components/GoogleLogin';
import LocalLogin from './components/LocalLogin';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import AddPost from './components/AddPost'; 
import EditPost from './components/EditPost';
import Homestyling from './components/Homestyling';

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
    <h5 className="subheading">Fashion | Beauty | Homestyling </h5><br></br>
    <Route exact path='/' render={() => <Blogs posts={posts}/>} />
    <Route path='/about' render={() => <About />} />
    <Route path='/contact' render={() => <Contact />} />
    <Route path='/homestyling' render={() => <Homestyling /> } />
    <Route path='/googleLogin' render={() => <Login />} />
    <Route path='/localLogin' render={() => <LocalLogin />} />
    <Route path='/register' render={() => <Register />} />
    <Route path='/blog/:id' render={props => <Blog {...props} posts={posts}/>} />
    <Route path='/blogs' render={props => <Dashboard {...props} posts={posts} />} />
    <Route path='/addPost' render={() => <AddPost />} />
    <Route path='/update/:id' render={props => <EditPost {...props} posts={posts}/>} />
    <Footer />
    </div>
  );
}

export default App;
