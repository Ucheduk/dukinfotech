import { Link } from "gatsby";
import React from "react";

const Footer = () => (
  
  <footer className="container main-footer">
    <div className="copyright">
      <p>&copy; {new Date().getFullYear()} Duk Stack. Made with 💜 for Gatsby</p>
    </div>

    <div className="social social-footer">
      <i className="zmdi zmdi-linkedin"></i>
      <i className="zmdi zmdi-twitter"></i>
      <i className="zmdi zmdi-instagram"></i>
      <i className="zmdi zmdi-facebook"></i>
      <i className="zmdi zmdi-github"></i>
      <i className="zmdi zmdi-behance"></i>
      <i className="zmdi zmdi-dribbble"></i>
    </div>
  </footer>
)

export default Footer
