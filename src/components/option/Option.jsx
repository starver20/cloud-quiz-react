import React from 'react';
import classes from './Option.module.css';
import { useResult } from '../../context/result/result-context';

const Option = ({ option: { option }, clickHandler, optionNo }) => {
  const onOptionClick = () => {
    clickHandler(option);
  };

  return (
    <>
      <li onClick={onOptionClick} className={`${classes.list} stacked option`}>
        <span className={classes.key}>Key </span>
        <span className={classes['option-alpha']}>{optionNo + 1}.</span>{' '}
        {option}
      </li>
    </>
  );
};

export default Option;
