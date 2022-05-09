import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to={'/'}>
          <div className="nav-logo">CloudQuiz</div>
        </Link>

        <div className="nav-action-container">
          <div className="nav-action">
            <Link to={'/'}>
              <button className="nav--action__login">LOGIN</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
