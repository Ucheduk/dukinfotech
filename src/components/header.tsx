import { Link } from "gatsby";
import React from "react";
const logo = require('../assets/img/logo.png');

const Header = () => (
  
  <header className="container main-header">
    <div className="main-header-row">
      <Link to="/"><img className="main-header-logo" src={logo} alt="My Logo" /></Link>
      <nav className="main-header-nav">
        <ul>
          <li><Link to="/" className="underline-from-left active">Home</Link></li>
          <li><Link to="/" className="underline-from-left">About</Link></li>
          <li><Link to="/" className="underline-from-left">Portfolio</Link></li>
          <li><Link to="/" className="underline-from-left">My Blog</Link></li>
          <li><Link to="/" className="underline-from-left">Contact</Link></li>
        </ul>
      </nav>
    </div>
   
  </header>
)

export default Header
