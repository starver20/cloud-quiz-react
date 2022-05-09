import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Question from '../../components/question/Question';

const Questions = () => {
  const { category } = useParams();

  return (
    <div>
      <Navbar />
      <main className="main-content">
        <section className="quiz-layout">
          <h1 className="quiz-header">{category}</h1>
          <h1>30 sec</h1>
          <Question />
          <Question />
          <Question />
        </section>
      </main>
    </div>
  );
};

export default Questions;
