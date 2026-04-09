import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to Signal Academy</h1>
        <p>We are the world's leading educators on road safety and traffic light automation. Founded in 2025, our mission is to make every intersection safer.</p>
        <Link to="/register" className="btn">Join Now</Link>
      </div>
    </div>
  );
}