import React from 'react';
import { Button, Input, Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { makeStyles } from '@material-ui/styles';
import Modal from '@material-ui/core/Modal';
import './Header.css';

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

function Header() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [openSignIn, setOpenSignIn] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

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
      setOpen(false);
  }

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    
      setOpenSignIn(false);
  }

  return (
      
    <div className="app__header">
      <title>Intagram-Clone</title>
        <img className="app__headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="" 
        />
        <div className="app__loginContainer">
          
          {user ? (
                <Button onClick={() => auth.signOut()}>Log Out</Button>
              ): (
                <div className="app_loginContainer"> 
                <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
                <Button onClick={() => setOpen(true)}>Sign Up</Button>
                </div>
              )}
        </div>

      <Modal
            open={open}
            onClose={() => setOpen(false)}
          >
            <div style={modalStyle} className={classes.paper}>
              <form className="app_signup">
                <center>
                  <img
                    className="app_headerImage"
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt="" />
                </center>
                <Input
                  placeholder="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />
                <Input
                  placeholder="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <Input
                  placeholder="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" onClick={signUp}>Sign Up</Button>
              </form>
            </div>
          </Modal>
          
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
                      alt="" />
                  </center>
                  <Input
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                  <Input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                  <Button type="submit" onClick={signIn}>Sign In</Button>
                </form>
              </div>
            </Modal>
  </div>
    )
}

export default Header;
