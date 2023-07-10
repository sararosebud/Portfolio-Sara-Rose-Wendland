

// We import useState and useEffect in our component
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
// import Project from './components/Project';
import AboutMe from './components/AboutMe'


import './custom.scss';








function App() {
  return (
    <div>
      <Header />
      <AboutMe/>
      
      
    </div>
   
  )
}

export default App;
