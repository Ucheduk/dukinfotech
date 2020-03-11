import { Link } from "gatsby";
import React, { Fragment } from "react";
const logo = require('../assets/img/logo.png');

class Header extends React.Component {

  openMobileNav = () => {
    let mainHeader = document.querySelector(".main-header");
    let mobileNav = document.querySelector(".mobile-nav");
    let menu = document.querySelector(".menu");
    let close = document.querySelector(".close");
    let body = document.querySelector("body");
    body.style.overflow = 'hidden';
    if(mobileNav) mobileNav.classList.add("show");
    if(mainHeader) mainHeader.classList.add("open");
    if(menu) menu.classList.add("hide");
    if(close) close.classList.add("display");
  }

  closeMobileNav = () => {
    let mainHeader = document.querySelector(".main-header");
    let mobileNav = document.querySelector(".mobile-nav");
    let menu = document.querySelector(".menu");
    let close = document.querySelector(".close");
    let body = document.querySelector("body");
    body.style.overflow = 'auto';
    if(mobileNav) mobileNav.classList.remove("show");
    if(mainHeader) mainHeader.classList.remove("open");
    if(menu) menu.classList.remove("hide");
    if(close) close.classList.remove("display");
  }

  render() {
    return (
      <Fragment>
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
            <i onClick={this.openMobileNav} className="zmdi zmdi-menu menu"></i>
            <i onClick={this.closeMobileNav} className="zmdi zmdi-close close"></i>
          </div>
          
        </header>
        <nav className="mobile-nav">
        <div className="avatar">
          <div className="avatar-img"></div>
          <p>Uche Nwakwuo<br/>{'{duk_stack}'}</p>
        </div>
          <ul>
            <li><Link onClick={this.closeMobileNav} to="/" className="underline-from-left" activeClassName="active">Home</Link></li>
            <li><Link onClick={this.closeMobileNav} to="/about" className="underline-from-left" activeClassName="active">About</Link></li>
            <li><Link onClick={this.closeMobileNav} to="/portfolio" className="underline-from-left" activeClassName="active">Portfolio</Link></li>
            <li><Link onClick={this.closeMobileNav} to="/blog" className="underline-from-left" activeClassName="active">My Blog</Link></li>
            <li><Link onClick={this.closeMobileNav} to="/contact" className="underline-from-left" activeClassName="active">Contact</Link></li>
          </ul>
        </nav>
      </Fragment> 
    )
  }
}

export default Header
