import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import "./Navbar.css"
import "./ScrollAnimation.css"
import { PiListFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";

function Navbar({ onLinkClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();


  const handleClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      onLinkClick(); // Llama a la función proporcionada por la prop
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);


  return (
    <header className='nav-header'>
      <button className="menuMobile" onClick={toggleMenu}> <PiListFill className='buttonAbrir' /> </button>
      <nav className={menuOpen ? 'navbarCustom visible' : 'navbarCustom'}>
        <ul className='nav-list'>
          <button className="cerrarMenuMobile" onClick={toggleMenu}><AiFillCloseSquare /></button>
          <li><a href="#home" onClick={() => handleClick('home')}>{'<About me/>'}</a></li>
          <li><a href="#projects" onClick={() => handleClick('projects')}>{'<Projects/>'}</a></li>
          <li><a href="#skills" onClick={() => handleClick('skills')}>{'<Skills/>'}</a></li>
          <li><a href="#contact" onClick={() => handleClick('contact')}>{'<Contact/>'}</a></li>
        </ul>
      </nav>

    </header>
  )
}

export default Navbar