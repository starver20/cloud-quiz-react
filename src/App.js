import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Rules from './pages/rules/Rules';
import Questions from './pages/questions/Questions';
import Result from './pages/result/Result';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules/:category" element={<Rules />} />
        <Route path="/questions/:category" element={<Questions />} />
        <Route path="/result/:category" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
