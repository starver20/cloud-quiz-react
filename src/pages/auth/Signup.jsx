import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Auth.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth/auth-context';

const Signup = () => {
  const { signup } = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitClickHandler = async (e) => {
    e.preventDefault();
    try {
      await signup(firstName, lastName, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar page="auth" />
      <section className={classes['main-content']}>
        <form onSubmit={submitClickHandler} className={classes['card']}>
          <h1>CloudStore</h1>
          <h3>Signup</h3>
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className={classes['creds']}
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
          />
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className={classes['creds']}
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last Name"
          />
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

          <div className={classes['options']}>
            <span>
              By creating an account you agree to our
              <Link to="/">
                <span className={classes.link}>Privacy Policy</span>
              </Link>{' '}
              and{' '}
              <Link to="/">
                <span className={classes.link}>Terms of Use</span>
              </Link>
            </span>
          </div>
          <button type="submit" className={classes['auth-btn']}>
            SIGNUP
          </button>
          <span>Already a member?</span>
          <Link to="/login">
            <span className={classes.link}>Login</span>
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Signup;
