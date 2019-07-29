import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer className="main-footer">
      <div className="container">

        <div className="row">

          <div className="col-9 copyright">
            <p>&copy; 2019 Dukinfotech</p>
          </div>

          <div className="col-3 socials">
            <Link className="underline-from-left" to="/">
              <i className="zmdi zmdi-facebook"></i>
            </Link>
            <Link className="underline-from-left" to="/">
              <i className="zmdi zmdi-instagram"></i>
            </Link>
            <Link className="underline-from-left" to="/">
              <i className="zmdi zmdi-twitter"></i>
            </Link>
            <Link className="underline-from-left" to="/">
              <i className="zmdi zmdi-youtube-play"></i>
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
};
