import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Option.module.css';

const Option = () => {
  return (
    <>
      <Link to={'/result/asxa'}>
        <li className={`${classes.list} stacked option`}>
          <span className={classes.key}>Key </span>
          <span className={classes['option-alpha']}>A.</span> Clippers
        </li>
      </Link>
    </>
  );
};

export default Option;
