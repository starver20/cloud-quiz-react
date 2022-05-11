import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/auth-context';

const Navbar = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const authClickHandler = () => {
    if (user) {
      logout();
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to={'/'}>
          <div className="nav-logo">CloudQuiz</div>
        </Link>

        <div className="nav-action-container">
          <div className="nav-action">
            <button onClick={authClickHandler} className="nav--action__login">
              {user ? 'LOGOUT' : 'LOGIN'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
