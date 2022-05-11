import React from 'react';
import classes from './Question.module.css';
import Option from '../option/Option';
import { useResult } from '../../context/result/result-context';
import { useEventListener } from '../../hooks/useEventListener';

const Question = ({ question, options, answer, questionNo, onOptionClick }) => {
  const { resultDispatch } = useResult();

  const optionClickHandler = (option) => {
    console.log(option);
    resultDispatch({
      type: 'UPDATE_RESULT',
      payload: {
        question,
        options,
        selectedOptioin: option,
        answer,
      },
    });
    onOptionClick();
  };

  const keyPressHander = (e) => {
    let arr = [1, 2, 3, 4];
    if (arr.includes(Number(e.key))) {
      resultDispatch({
        type: 'UPDATE_RESULT',
        payload: {
          question,
          options,
          selectedOptioin: options[e.key - 1].option,
          answer,
        },
      });
      onOptionClick();
    }
  };

  useEventListener('keydown', keyPressHander);

  return (
    <div>
      <div className={classes.question}>
        <h3 className={classes['question-number']}>{questionNo}.</h3>

        <h3 className={classes['question-text']}>{question}</h3>
      </div>
      <ul className={classes.options}>
        {options.map((option, index) => (
          <Option
            option={option}
            clickHandler={optionClickHandler}
            optionNo={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Question;
