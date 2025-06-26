import React from 'react';
import { Link } from 'react-router-dom';

export default function Goals() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to right, #d0f0fd, #f0fbff)', // light blue gradient
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#2c3e50',
        fontFamily: 'Segoe UI, sans-serif',
        overflow: 'hidden',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          🎯 Set Your Goals with Habit Tracker
        </h1>

        <div style={{ marginTop: '30px' }}>
          <Link to="/signin">
            <button style={buttonStyle}>Login</button>
          </Link>

          <Link to="/signup">
            <button style={{ ...buttonStyle, marginLeft: '20px' }}>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '12px 25px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: '0.3s ease',
};
