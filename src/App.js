import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { db } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]); // post hook, fetch post data from state
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);

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

const signUp = (event) => {

}

  return (
    <>
    <div className="App">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img 
              className="app_headerImage"
              src=""
              alt=""
              />
              <input
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </center>
          <h2>I am a modal</h2>
        </div>
      </Modal>
      <title>instagram-clone</title>
      <Router>
        <Header />
        {posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imgUrl={post.imageUrl} />
        ))}
      </Router>

    </div>
    <Button onClick={() => setOpen(true)}>Sign Up</Button>
      </>
  );
}

export default App;
