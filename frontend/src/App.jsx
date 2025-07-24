import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Board from './components/Board'
import Profile from './components/Profile'
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Board />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
