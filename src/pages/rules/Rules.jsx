import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const Rules = () => {
  const { category } = useParams();
  return (
    <div>
      <Navbar />
      <main class="main-content">
        <section class="quiz-layout">
          <h1 class="rules-header">{category}</h1>

          <ul>
            <li>
              <span>🔹 </span>This quiz consists of 5 questions and 4 options
              for each question.
            </li>
            <li>
              <span>🔹 </span>For every correct answer you will gain 5 points,
              and lose 2 points for incorrect answer, and 0 if not attempted.
            </li>
            <li>
              <span>🔹 </span>You have 10 seconds to choose an option.
            </li>
          </ul>
          <div>
            <Link to={`/questions/${category}`}>
              <button class="btn">Start!</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Rules;
