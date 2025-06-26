import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to right, #d0f0fd, #f0fbff)', // full-screen light blue
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
        fontFamily: 'Segoe UI, sans-serif',
        padding: '30px 20px',
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ color: '#2c3e50', fontSize: '2.5rem', marginBottom: '20px' }}>
        📘 Habit Tracker
      </h1>

      <img
        src="/images.jpg"
        alt="Habit Tracker Motivation"
        style={{
          width: '90%',
          maxWidth: '700px',
          borderRadius: '12px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          marginBottom: '25px',
        }}
      />

      <div
        style={{
          maxWidth: '800px',
          textAlign: 'left',
          color: '#333',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          marginBottom: '30px',
        }}
      >
        <p><strong>🌟 Purpose of a Habit Tracker</strong></p>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>🧠 Awareness:</strong> Helps you become conscious of your daily actions.</li>
          <li><strong>📈 Accountability:</strong> Keeps you committed by visually showing your progress.</li>
          <li><strong>🔥 Motivation:</strong> Seeing your streaks or consistency encourages you to keep going.</li>
          <li><strong>🎯 Goal Setting:</strong> Helps break down big goals into small, consistent actions.</li>
        </ul>
      </div>

      <Link to="/tracker">
        <button
          style={{
            padding: '12px 30px',
            fontSize: '16px',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: '0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#2980b9')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#3498db')}
        >
          Next ➡️
        </button>
      </Link>
    </div>
  );
}


