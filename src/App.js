import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { db, auth } from './firebase';
import { Button, Input, Box } from '@material-ui/core';
import ImageUpload from './components/ImageUpload';
import InstagramEmbed from 'react-instagram-embed';

function App() {
  const [posts, setPosts] = useState([]); // post hook, fetch post data from state
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  // useEffect -> runs once when the app lodads and jthen doesn't run again. Runs a piece jof code based on a specific condition
  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // every ttime a new post is added, this code fires
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
        })
        ));
      })
    }, []);

  const displayPosts = posts.map(({ id, post }) => (
    <Post key={id} username={post.username} caption={post.caption} imgUrl={post.imageUrl} />
  ));

  return (

    <>

    <Header />

    <div className="App">
        <h3>Post should be loading here</h3>
        <div className="app__posts">
          <div className="app__postsLeft">
              {
              posts.map(({ id, post }) => (
              <Post key={id} username={post.username} caption={post.caption} imgUrl={post.imageUrl} />
              ))
            }
          </div>
          <div className="app__postsRight">
            <InstagramEmbed
              url='https://instagr.am/p/Zw9o4/'
              maxWidth={320}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScriptonLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
              />
            </div>
        </div>

      {user ? (
        <ImageUpload username={user.displayName} />
      ):(
        <h3>Login to Upload</h3>
      )}

    </div>
      </>
  );
}


export default App;
