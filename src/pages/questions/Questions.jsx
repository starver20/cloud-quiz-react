import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Question from '../../components/question/Question';
import { quizData } from '../../data/quizData';
import { useResult } from '../../context/result/result-context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const { category } = useParams();

  let navigate = useNavigate();

  const { resultDispatch } = useResult();

  useEffect(() => {
    resultDispatch({ type: 'INITIALIZE' });
  }, [resultDispatch]);

  const quiz = quizData.find((quiz) => quiz.category === category);

  const onOptionClick = () => {
    if (currentQuestion < quiz.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate(`/result/${category}`);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <section className="quiz-layout">
          <h1 className="quiz-header">{category}</h1>
          {/* <h1>30 sec</h1> */}
          <Question
            question={quiz.questions[currentQuestion - 1].question}
            options={quiz.questions[currentQuestion - 1].options}
            answer={quiz.questions[currentQuestion - 1].answer}
            questionNo={currentQuestion}
            onOptionClick={onOptionClick}
          />
        </section>
      </main>
    </div>
  );
};

export default Questions;
