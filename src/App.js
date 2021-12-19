import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import AboutMePage from './pages/aboutme';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/aboutme' element={<AboutMePage />} />
      </Routes>
    </Router>
  );
}

export default App;
