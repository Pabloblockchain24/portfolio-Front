import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const scrolling = () => {
      let header = document.querySelector("header");
      let icon = document.querySelector(".header-open_mobile-icon");
      header.classList.toggle("scrolled", window.scrollY > 0);
      icon.classList.toggle("scrolled-icon", window.scrollY > 0);
    };
    window.addEventListener("scroll", scrolling);
    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
      <header className='header'>
        <button className="header-open_mobile" onClick={toggleMenu}> <PiListFill className='header-open_mobile-icon' /> </button>
        <nav className={menuOpen ? 'header-nav visible' : 'header-nav'}>
          <ul className='header-nav-list'>
            <button className="header-close_mobile" onClick={toggleMenu}><AiFillCloseSquare /></button>
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