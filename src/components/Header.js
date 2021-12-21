import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
 
      
    <AppHeader>

        <img className=""
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="" 
          />

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
