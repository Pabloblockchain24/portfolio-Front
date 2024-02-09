import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import "./Navbar.css"
import "./ScrollAnimation.css"
import { PiListFill } from "react-icons/pi";
import { AiFillCloseSquare } from "react-icons/ai";

function Navbar({ onLinkClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleClick = (targetId, event) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      onLinkClick();
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
            <li><a href="#home" onClick={(e) => handleClick('home', e)}>{'<About me/>'}</a></li>
            <li><a href="#projects" onClick={(e) => handleClick('projects', e)}>{'<Projects/>'}</a></li>
            <li><a href="#skills" onClick={(e) => handleClick('skills', e)}>{'<Skills/>'}</a></li>
            <li><a href="#contact" onClick={(e) => handleClick('contact', e)}>{'<Contact/>'}</a></li>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar