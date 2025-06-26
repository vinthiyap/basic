import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ margin: '0 10px' }}>Goals</Link>
        <Link to="/home" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/tracker" style={{ margin: '0 10px' }}>Tracker</Link>
        <Link to="/service" style={{ margin: '0 10px' }}>Service</Link>
      </nav>
      <Outlet />
    </div>
  );
}