import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import Header from './components/Header';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
      </Router>

    </div>
  );
}

export default App;
