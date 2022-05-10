import React from 'react';
import classes from './Question.module.css';
import Option from '../option/Option';

const Question = () => {
  return (
    <div>
      <div className={classes.question}>
        <h3 className={classes['question-number']}>1.</h3>

        <h3 className={classes['question-text']}>
          Nullam lobortis condimentum pellentesque. Suspendisse a eros mi.
          Pellentesque habitant morbi tristique senectus et netus et malesuada.
        </h3>
      </div>
      <ul className={classes.options}>
        <Option />
        <Option />
        <Option />
        <Option />
      </ul>
    </div>
  );
};

export default Question;
