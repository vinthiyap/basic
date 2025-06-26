import React from 'react';

export default function Service() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          background: '#ffffffdd',
          padding: '30px 40px',
          borderRadius: '16px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          animation: 'fadeIn 1.2s ease-in-out',
        }}
      >
        <h2 style={{ fontSize: '2rem', color: '#2c3e50' }}>💡 Our Service</h2>
        <p style={{ fontSize: '1.1rem', marginTop: '15px', color: '#333' }}>
          This Habit Tracker helps users build strong routines by tracking daily habits such as exercising, reading, meditating, and more. Stay motivated and on top of your goals every day!
        </p>
        <p style={{ fontSize: '1.1rem', marginTop: '10px', color: '#333' }}>
          We provide a simple and interactive calendar-based habit tracking interface that saves progress in your browser so you can revisit and continue your goals without registration or complex logins.
        </p>
      </div>

      {/* Animation Keyframe */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
