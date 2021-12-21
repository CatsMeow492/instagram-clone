import React from 'react';
import './App.css';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      
      <AppHeader>

        <img className=""
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="" 
          />

      </AppHeader>
    </div>
  );
}

const AppHeader = styled.div`
  margin: 0;

  img {
    object-fit: contain;
  }
`;

export default App;
