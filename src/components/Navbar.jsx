import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Navbar() {
  const navigate = useNavigate();
  // useLocation tells the Navbar to update whenever the page changes
  const location = useLocation(); 

  // Check if the user has an active session cookie
  const isAuthenticated = Cookies.get('activeUserSession');

  const handleLogout = () => {
    Cookies.remove('activeUserSession');
    alert('You have been logged out successfully!');
    navigate('/register');
  };

  return (
    <nav>
      {/* Home is always visible */}
      <Link to="/">Home</Link>
      
      {/* Only show Register/Login if they ARE NOT logged in */}
      {!isAuthenticated && (
        <Link to="/register">Register / Login</Link>
      )}

      {/* Only show these links if they ARE logged in */}
      {isAuthenticated && (
        <>
          <Link to="/learn">Lights</Link>
          <Link to="/learn_row">Right of Way</Link>
          <Link to="/learn_signs">Road Signs</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={handleLogout} className="logout-btn btn">Logout</button>
        </>
      )}
    </nav>
  );
}