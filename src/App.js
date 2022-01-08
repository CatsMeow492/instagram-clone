import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';


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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChagned((authUser) => {
      if (authUser) {
        // User has logged in...
        console.log(authUser);
        setUser(authUser);
      } else {
        // user has logged out...
        setUser(null);
      }
    }) 
  }, []);

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
  event.preventDefault();
  auth
    .createUserWithEmailAndPassword(email, password); // This comes with cool back-end validation
    .catch((error) => alert(error.message));
}

  return (
    <>
    <div className="App">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup">
            <center>
              <img 
                className="app_headerImage"
                src=""
                alt=""
                />
            </center>
            <Input
                  placeholder="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  placeholder="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" onClick={signUp}>Sign Up</Button>
              </form>
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
