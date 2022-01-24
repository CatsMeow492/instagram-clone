import React from 'react';
import styled from 'styled-components';
import { Button, Input, Box } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';

function Header() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  return (
      
    <AppHeader>

        <img className=""
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="" 
          />
         {user ? (
              <Button onClick={() => auth.signOut()}>Log Out</Button>
            ): (
              <div className="app_loginContainer"> 
              <Button onClick={() => setOpen(true)}>Sign In</Button>
              <Button onClick={() => setOpen(true)}>Sign Up</Button>
              </div>
            )}

    </AppHeader>
         
  );
}

const AppHeader = styled.div`

  margin: 0;
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid lightgray;

  img {
    object-fit: contain;
  }

`;

export default Header;
