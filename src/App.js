import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Post />
      </Router>

    </div>
  );
}

export default App;
