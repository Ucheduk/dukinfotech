import { Link } from "gatsby";
import React from "react";
const logo = require('../assets/img/logo.png');

const Header = () => (
  
  <header className="container main-header">
    <div className="main-header-row">
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
    </div>
   
  </header>
)

export default Header
