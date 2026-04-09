import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/learn" element={<LearnLights />} />
        <Route path="/learn_row" element={<LearnRow />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/learn_signs" element={<LearnSigns />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CookieConsent />
    </Router>
  );
}

export default App;