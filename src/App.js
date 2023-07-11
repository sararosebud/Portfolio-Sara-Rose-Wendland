

// We import useState and useEffect in our component
// import React, { useState, useEffect } from 'react';
import Header from './components/Header';
// import Project from './components/Project';
import AboutMe from './components/AboutMe'
import ContactForm from './components/ContactForm'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './custom.scss';
import "animate.css/animate.min.css";








function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <ContactForm />
      
      
    </div>

    
   
  )
}

export default App;
