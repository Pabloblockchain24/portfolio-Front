import React, { useRef } from 'react';
import "./Navbar.css"
import "./ScrollAnimation.css"

function Navbar({onLinkClick}) {
  const handleClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      onLinkClick(); // Llama a la función proporcionada por la prop
    }
  };


  return (
    <header className='nav-header'>
      <ul className='nav-list'>
        <li><a href="#home" onClick={() => handleClick('home')}>{'<About me/>'}</a></li>
        <li><a href="#projects" onClick={() => handleClick('projects')}>{'<Projects/>'}</a></li>
        <li><a href="#skills" onClick={() => handleClick('skills')}>{'<Skills/>'}</a></li>
        <li><a href="#contact" onClick={() => handleClick('contact')}>{'<Contact/>'}</a></li>
      </ul>
    </header>
  )
}

export default Navbar