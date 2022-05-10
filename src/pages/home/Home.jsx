import React from 'react';
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { quizData } from '../../data/quizData';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <section className={classes['quiz-layout']}>
          <div className={`${classes.card} card card-shadow`}>
            <div className="overlay-main">
              <div className="content">
                <img
                  className="img-text-over-media"
                  src="https://picsum.photos/350/250"
                  alt=""
                />
                <div className="overlay-title">
                  <h4 className="text-over-media-title">Legends of Cricket</h4>
                </div>
                <p className="text-over-media-content">
                  Are you a typical Indian cricket fan? Take this quiz to test
                  your craze for cricket.
                </p>
              </div>
            </div>
            <div className="footer">
              <Link to={`rules/${quizData[1].category}`}>
                <button className="btn">Play</button>
              </Link>
            </div>
          </div>
          <div className={`${classes.card} card card-shadow`}>
            <div className="overlay-main">
              <div className="content">
                <img
                  className="img-text-over-media"
                  src="https://picsum.photos/350/250"
                  alt=""
                />
                <div className="overlay-title">
                  <h4 className="text-over-media-title">NBA All Stars</h4>
                </div>
                <p className="text-over-media-content">
                  A quiz for all the NBA fans. Take this quiz and prove you are
                  the no 1 fan of NBA.
                </p>
              </div>
            </div>
            <div className="footer">
              <Link to={`rules/${quizData[0].category}`}>
                <button className="btn">Play</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
