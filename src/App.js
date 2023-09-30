import React from 'react';
import { useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Servecises} from "./components/Servecises"
import { PacmanLoader} from 'react-spinners';
import {Loader} from "./components/Loader"


function App() {
  const [loading,setloading] = useState(false)
  useEffect (()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },5000)

  },[])
  return (
    <div className="App">
      {
        loading ?
      <Loader/>
      :
      <> 
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </>

      }
 
    </div>
  );
}

export default App;
