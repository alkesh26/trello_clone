import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Board from './components/Board'
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 text-right">
        <Link to="/" className="mr-4 text-blue-600">Board</Link>
        <Link to="/profile" className="text-blue-600">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App
