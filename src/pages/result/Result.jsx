import React, { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import classes from './Result.module.css';
import { useResult } from '../../context/result/result-context';
import { useParams } from 'react-router-dom';

const Result = () => {
  const { result, total } = useResult();
  const { category } = useParams();

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <section className="quiz-layout">
          <h1 className="quiz-header">{category}</h1>
          <h2 className={classes['quiz-result']}>Result</h2>
          <p className={classes['quiz-score']}>
            Final Score: <span>{total}/25</span>
          </p>
          {result.map((question, index) => (
            <>
              <div className={classes.question}>
                <h3 className={classes['question-number']}>{index + 1}.</h3>

                <h3 className={classes['question-text']}>
                  {question.question}
                </h3>
              </div>
              <ul className={classes.options}>
                {question.options.map(({ option }, index) => (
                  <li
                    className={`${classes.list} stacked option ${
                      option === question.answer
                        ? classes['correct-option']
                        : question.selectedOptioin === option
                        ? classes['wrong-option']
                        : null
                    }`}
                  >
                    <span className="option-alpha">{index + 1}.</span> {option}
                  </li>
                ))}
              </ul>
            </>
          ))}
          {/* <ul className={classes.options}>
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
          </ul> */}
        </section>
      </main>
    </div>
  );
};

export default Result;
