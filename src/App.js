import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input, Box } from '@material-ui/core';


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
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  }
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]); // post hook, fetch post data from state
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User has logged in...
        console.log(authUser);
        setUser(authUser);

        if (authUser.displayName) {
          // dont update username
        } else {
          // if we just created someone
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        // user has logged out...
        setUser(null);
      }
    }) 
    return () => {
      // perform some cleanup actions before refiring useEffect
      unsubscribe();
    }
  }, [user, username]);

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
    .createUserWithEmailAndPassword(email, password) // This comes with cool back-end validation
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message)); 
}

const signIn = (event) => {
  event.preventDefault();
}

  return (
    <>
    <div className="App">
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup">
            <center>
              <img 
                className="app_headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
                />
            </center>

            {user ? (
              <Button onClick={() => auth.signOut()}>Log Out</Button>
            ): (
              <div className="app_loginContainer"> 
              <Button onClick={() => setOpen(true)}>Sign In</Button>
              <Button onClick={() => setOpen(true)}>Sign Up</Button>
              </div>
            )}
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
        <Button onClick={() => setOpen(true)}>Sign Up</Button>
        {posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imgUrl={post.imageUrl} />
        ))}
      </Router>

    </div>
      </>
  );
}


export default App;
