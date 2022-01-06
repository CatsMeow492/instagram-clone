import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { db } from './firebase';



function App() {
  const [posts, setPosts] = useState([]); // post hook, fetch post data from state

// useEffect -> runs once when the app lodads and jthen doesn't run again. Runs a piece jof code based on a specific condition
useEffect(() => {
  db.collection('posts').onSnapshot(snapshot => {
    // every ttime a new post is added, this code fires
    setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()
    })
    ));
  })
}, []);

  return (
    <div className="App">
      <title>instagram-clone</title>
      <Router>
        <Header />
        {
          posts.map(({id, post}) => (
            <Post key={id} username={post.username} caption={post.caption} imgUrl={post.imageUrl} />
          ))
        }
      </Router>

    </div>
  );
}

export default App;
