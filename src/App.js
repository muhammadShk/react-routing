import React from 'react';
import {Router} from '@reach/router';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Interpret from './components/Interpret'


function App() {
  return (
    <div className="App">
      
      <Router>
        <Home path="/home"/>
        <Interpret path="/:id"/>
      </Router>

    </div>
  );
}

export default App;
