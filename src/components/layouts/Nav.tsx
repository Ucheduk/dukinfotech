import * as React from 'react';
import { withRouter, Link } from 'react-router-dom';

const logo = require('../../assets/images/icon.png');

class Navbar extends React.Component<any> {

  render() {

    return (
      <header className="main-header">
        <div className="container">
          <div className="row main">
            <a href="/" className="main-header__brand">
              <img src={logo} alt="C8T - Your favorite dev company" />
            </a>
            <nav className="header-nav">
                  <ul>

                      <li className="list active">
                        <a className="underline-from-left" href="/">Home</a>
                      </li>

                      <li className="list active">
                        <Link className="underline-from-left" to="/#about">About</Link>
                      </li>

                      <li className="list active">
                        <Link className="underline-from-left" to="/articles">Articles</Link>
                      </li>

                      <li className="list active">
                        <Link className="underline-from-left" to="/portfolio">Portfolio</Link>
                      </li>

                      <li className="list active">
                        <Link className="underline-from-left" to="/contact">Contact</Link>
                      </li>

                  </ul>
            </nav>
          </div>
          <nav className="mobile-nav">
            <ul>

            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default withRouter(Navbar);
