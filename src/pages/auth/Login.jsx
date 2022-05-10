import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Auth.module.css';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/auth-context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  let navigateTo = location.state?.from?.pathname || '/';

  const { login } = useAuth();

  const loginClickHandler = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate(navigateTo, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const guestLogin = async () => {
    try {
      await login('test@test.com', 'tester');
      navigate(navigateTo, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar page="auth" />
      <section className={classes['main-content']}>
        <form onSubmit={loginClickHandler} className={classes['card']}>
          <h1>CloudStore</h1>
          <h3>Login</h3>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={classes['creds']}
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className={classes['creds']}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />

          <div
            onClick={guestLogin}
            className={`${classes['forgot-pass']} ${classes.guest}`}
          >
            <span className={classes.link}>Guest login</span>
          </div>
          <button type="submit" className={classes['auth-btn']}>
            LOGIN
          </button>

          <span>Not a member?</span>
          <Link to="/signup">
            <span className={classes.link}>Join us</span>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
