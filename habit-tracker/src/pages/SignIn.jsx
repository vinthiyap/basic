import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="container">
      <h2>🔐 Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
      </form>
      <p style={{ marginTop: '20px' }}>
        Don't have an account? <Link to="/signup">Create one</Link>
      </p>
    </div>
  );
}