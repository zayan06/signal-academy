import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('activeUserSession');
    alert('You have been logged out successfully!');
    navigate('/register');
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register / Login</Link>
      <Link to="/learn">Lights</Link>
      <Link to="/learn_row">Right of Way</Link>
      <Link to="/learn_signs">Road Signs</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={handleLogout} className="logout-btn btn">Logout</button>
    </nav>
  );
}