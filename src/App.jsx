import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import LearnLights from './pages/LearnLights';
import LearnRow from './pages/LearnRow';
import Quiz from './pages/Quiz';
import Contact from './pages/Contact';
import CookieConsent from './components/CookieConsent';
import './index.css';
import LearnSigns from './pages/LearnSigns';

// This component acts as a bouncer. It checks for a login cookie before letting anyone pass.
function ProtectedRoute({ children }) {
  const isAuthenticated = Cookies.get('activeUserSession');
  
  if (!isAuthenticated) {
    // If no cookie is found, kick them back to the login page
    return <Navigate to="/register" replace />;
  }
  
  // If they are logged in, render the page they asked for
  return children;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes - Anyone can see these without logging in */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes - Wrapped in the bouncer component */}
        <Route path="/learn" element={
          <ProtectedRoute><LearnLights /></ProtectedRoute>
        } />
        <Route path="/learn_row" element={
          <ProtectedRoute><LearnRow /></ProtectedRoute>
        } />
        <Route path="/learn_signs" element={
          <ProtectedRoute><LearnSigns /></ProtectedRoute>
        } />
        <Route path="/quiz" element={
          <ProtectedRoute><Quiz /></ProtectedRoute>
        } />
        <Route path="/contact" element={
          <ProtectedRoute><Contact /></ProtectedRoute>
        } />
      </Routes>
      <CookieConsent />
    </Router>
  );
}

export default App;