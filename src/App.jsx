import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [animationKey, setAnimationKey] = useState(0);

  const handleAnimationReload = () => {
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <BrowserRouter>

      <div key={animationKey}>
        <Navbar onLinkClick={handleAnimationReload} />
        
        <main className='main'>
          <Home />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>

    </BrowserRouter>

  )
}
export default App
