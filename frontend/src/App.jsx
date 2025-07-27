// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      
<Routes>

      <Route path="/" element={<Home/>}/>
       
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
     
</Routes>
      </BrowserRouter>
    
    
  );
}

export default App;
