import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Goals from './pages/Goals.jsx';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Tracker from './pages/Tracker.jsx';
import Service from './pages/Service.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Goals />} />
          <Route path="home" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="service" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
