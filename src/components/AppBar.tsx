import React, { useEffect, useRef, useState } from 'react'
import CODE_ICON from "../assets/code-icon.svg"

const AppBar = () => {
  const menuRef = useRef<HTMLDivElement>();
const [isActive, setIsActive] = useState(false)

  const toggleNav = ()=>{
    setIsActive(!isActive)
  }

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

  }, [isActive]);

  return (
    <div>
      <nav>
        <div className="logo">
          <img src={CODE_ICON} alt="logo" />
          <h1 className='text-3xl font-Poppins'>Tarun</h1>
        </div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skillsection">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleNav}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>
      <div ref={menuRef} className={`menubar ${isActive ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
        <ul>
          <li>
            <a href="#home" onClick={toggleNav}>Home</a>
          </li>
          <li>
            <a href="#skillsection" onClick={toggleNav}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={toggleNav}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleNav}>Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AppBar