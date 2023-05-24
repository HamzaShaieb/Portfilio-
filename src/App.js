import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

import Home from './pages/Home/home';
import About from './pages/About/about';
import Projects from './pages/projects/projects';
import Skills from './pages/skills/skills'
import NavbarMenu from './pages/Navbar/navbar';
import Contact from './pages/Contact/contact';
const App = () => {
    return (
         <>
        <NavbarMenu/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
         
         </>
  
    );
}

export default App;
