import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
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

  return (
    <div className="App">

      <Router>
        <Header />
        {
          Post.map(posts => (
            <Post username={post.username} caption={post.caption} imgUrl={post.imgUrl} />
          ))
        }
      </Router>

    </div>
  );
}

export default App;
