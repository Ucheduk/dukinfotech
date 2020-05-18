import { Link } from "gatsby";
import React, { useEffect, useState} from "react";
const logo = require('../assets/img/logo.png');

const Header = () => {

  const [mode, setMode] = useState(localStorage.getItem('mode'));
  const checkMode = () => {
    if (mode === 'dark') {
      const root = document.querySelector(':root');
      const toggle = document.querySelector('.toggle');
      toggle.classList.add("dark-mode");
      root.style.setProperty('--bg-color', 'rgb(22, 7, 39)');
      root.style.setProperty('--font-color', '#fff');
      root.style.setProperty('--box-shadow', 'rgba(255,255,255,0.35)');
    }
  }
  useEffect(() => checkMode(), [])

  const toggleMode = () => {
    const root = document.querySelector(':root');
    const toggle = document.querySelector('.toggle');
    // const bgColor = root.style.getPropertyValue('--bg-color')
    if (mode === 'dark') {
      root.style.setProperty('--bg-color', '#fff');
      root.style.setProperty('--font-color', '#030805');
      root.style.setProperty('--box-shadow', 'rgba(0,0,0,0.35)');
      localStorage.setItem('mode', 'light');
      setMode('light')
    } else {
      root.style.setProperty('--bg-color', 'rgb(22, 7, 39)');
      root.style.setProperty('--font-color', '#fff');
      root.style.setProperty('--box-shadow', 'rgba(255,255,255,0.35)');
      localStorage.setItem('mode', 'dark');
      setMode('dark')
    }
    toggle.classList.toggle("dark-mode");
  }

  const openMobileNav = () => {
    let mainHeader = document.querySelector(".main-header");
    let mobileNav = document.querySelector(".mobile-nav");
    let menu = document.querySelector(".menu");
    let close = document.querySelector(".close");
    if(mobileNav) mobileNav.classList.add("show");
    if(mainHeader) mainHeader.classList.add("open");
    if(menu) menu.classList.add("hide");
    if(close) close.classList.add("display");
  }

  const closeMobileNav = () => {
    let mainHeader = document.querySelector(".main-header");
    let mobileNav = document.querySelector(".mobile-nav");
    let menu = document.querySelector(".menu");
    let close = document.querySelector(".close");
    if(mobileNav) mobileNav.classList.remove("show");
    if(mainHeader) mainHeader.classList.remove("open");
    if(menu) menu.classList.remove("hide");
    if(close) close.classList.remove("display");
  }

  return (
    <header className="main-header">
      <div className="container main-header-row">
        <Link to="/"><img className="main-header-logo" src={logo} alt="My Logo" /></Link>
        <nav className="main-header-nav">
          <ul>
            <li><Link to="/" className="underline-from-left" activeClassName="active">Home</Link></li>
            <li><Link to="/about" className="underline-from-left" activeClassName="active">About</Link></li>
            <li><Link to="/portfolio" className="underline-from-left" activeClassName="active">Portfolio</Link></li>
            <li><Link to="/blog" className="underline-from-left" activeClassName="active">My Blog</Link></li>
            <li><Link to="/contact" className="underline-from-left" activeClassName="active">Contact</Link></li>
          </ul>
          
        </nav>
          
        <span onClick={openMobileNav} className="menu">
          <i className="zmdi zmdi-menu "></i>
        </span>
        <i onClick={closeMobileNav} className="zmdi zmdi-close close"></i>
        <div className="toggle-wrapp">
            <span className="toggle" onClick={toggleMode}></span>
          </div>
      </div>
      <nav className="mobile-nav">
        <ul>
          <li><Link onClick={closeMobileNav} to="/" className="underline-from-left" activeClassName="active">Home</Link></li>
          <li><Link onClick={closeMobileNav} to="/about" className="underline-from-left" activeClassName="active">About</Link></li>
          <li><Link onClick={closeMobileNav} to="/portfolio" className="underline-from-left" activeClassName="active">Portfolio</Link></li>
          <li><Link onClick={closeMobileNav} to="/blog" className="underline-from-left" activeClassName="active">My Blog</Link></li>
          <li><Link onClick={closeMobileNav} to="/contact" className="underline-from-left" activeClassName="active">Contact</Link></li>
        </ul>
      </nav> 
    </header>
  )
}

export default Header
