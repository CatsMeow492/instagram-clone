import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';



function App() {
  const [posts, setPosts] = useState([
    {
        username: 'techkat', 
        imageUrl: 'https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/KIT-20171025093455415.jpg', 
        caption: 'meow meow meow meow meow meow meow',
    },
    {
        username: 'businesskat', 
        imageUrl: 'https://www.sadanduseless.com/wp-content/uploads/2020/03/donald-trump-cats1.jpg', 
        caption: 'meow meow meow jfake news cuffufin meow meow',
    },
]); // post hook, fetch post data from state

// useEffect -> runs once when the app loads and jthen doesn't run again
useEffect(() => {


}, [])

  return (
    <div className="App">
      <title>instagram-clone</title>
      <Router>
        <Header />
        {
          posts.map(post => (
            <Post username={post.username} caption={post.caption} imgUrl={post.imageUrl} />
          ))
        }
      </Router>

    </div>
  );
}

export default App;
