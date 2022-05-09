import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Result.module.css';

const Result = () => {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <section className="quiz-layout">
          <h1 className="quiz-header">NBA All Stars</h1>
          <h2 className={classes['quiz-result']}>Result</h2>
          <p className={classes['quiz-score']}>
            Final Score: <span>10/25</span>
          </p>
          <div className={classes.question}>
            <h3 className={classes['question-number']}>1.</h3>

            <h3 className={classes['question-text']}>
              Nullam lobortis condimentum pellentesque. Suspendisse a eros mi.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada.
            </h3>
          </div>
          <ul className={classes.options}>
            <li
              className={`${classes.list} stacked option ${classes['correct-option']}`}
            >
              <span className="option-alpha">A.</span> Clippers
            </li>
            <li
              className={`${classes.list} stacked option ${classes['wrong-option']}`}
            >
              <span className="option-alpha">B.</span> Lakers
            </li>
            <li className={`${classes.list} stacked option`}>
              <span className="option-alpha">C.</span> Golden State
            </li>
            <li className={`${classes.list} stacked option`}>
              <span className="option-alpha">D.</span> Celtics
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Result;
