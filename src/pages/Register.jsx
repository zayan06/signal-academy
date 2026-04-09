import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Register() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const pass = data.get('pass');
    
    if (pass.length < 8) return alert("Password must be 8+ characters.");

    let users = JSON.parse(localStorage.getItem('signalAcademyUsers')) || [];
    if (users.some(u => u.email === email)) {
      alert("Account exists! Please login.");
      setIsLogin(true);
      return;
    }

    users.push(Object.fromEntries(data.entries()));
    localStorage.setItem('signalAcademyUsers', JSON.stringify(users));
    
    Cookies.set('activeUserSession', email, { expires: 7 });
    alert('Registration Complete!');
    navigate('/learn');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get('email');
    const pass = data.get('pass');

    let users = JSON.parse(localStorage.getItem('signalAcademyUsers')) || [];
    const foundUser = users.find(u => u.email === email && u.pass === pass);

    if (foundUser) {
      Cookies.set('activeUserSession', foundUser.email, { expires: 7 });
      alert(`Welcome back!`);
      navigate('/learn');
    } else {
      alert("Incorrect email or password.");
    }
  };

  return (
    <div className="form-container">
      {!isLogin ? (
        <div>
          <h2 style={{ textAlign: 'center' }}>Student Registration</h2>
          <form onSubmit={handleRegister}>
            <label>Full Name</label>
            <input type="text" name="name" required minLength="3" />
            <label>Email Address</label>
            <input type="email" name="email" required />
            <label>Password</label>
            <input type="password" name="pass" required />
            <button type="submit" className="btn-submit">Create Account</button>
          </form>
          <p style={{marginTop: '1rem'}}>
            Already have an account? <span style={{ cursor: 'pointer', color: 'var(--secondary)' }} onClick={() => setIsLogin(true)}>Login here</span>
          </p>
        </div>
      ) : (
        <div>
          <h2 style={{ textAlign: 'center' }}>Student Login</h2>
          <form onSubmit={handleLogin}>
            <label>Email Address</label>
            <input type="email" name="email" required />
            <label>Password</label>
            <input type="password" name="pass" required />
            <button type="submit" className="btn-submit">Login</button>
          </form>
          <p style={{marginTop: '1rem'}}>
            Don't have an account? <span style={{ cursor: 'pointer', color: 'var(--secondary)' }} onClick={() => setIsLogin(false)}>Register here</span>
          </p>
        </div>
      )}
    </div>
  );
}