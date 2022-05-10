import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Rules from './pages/rules/Rules';
import Questions from './pages/questions/Questions';
import Result from './pages/result/Result';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import RequiresAuth from './components/auth/RequiresAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/rules/:category"
          element={
            <RequiresAuth>
              <Rules />
            </RequiresAuth>
          }
        />
        <Route
          path="/questions/:category"
          element={
            <RequiresAuth>
              <Questions />
            </RequiresAuth>
          }
        />
        <Route
          path="/result/:category"
          element={
            <RequiresAuth>
              <Result />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
