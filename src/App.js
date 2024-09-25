import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
// import About from './components/About'
import Skills from './components/Skills';
import Project from './components/Project';

import './App.css';


function App() {
  return (
    <div className="app">
      <Header/>
      <div style={{ margin: '0 auto', maxWidth: '800px', padding: '1em', }}>
          
          <Home/>
          {/* <About/> */}
      <Skills/>
      <Project/>
      </div>
    </div>
  );
}

export default App;