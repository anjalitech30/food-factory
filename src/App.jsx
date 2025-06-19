// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Menu      from './pages/Menu';
import Cart      from './pages/Cart';
import About     from './pages/About';
import Feedback  from './pages/Feedback';
import Login     from './pages/Login';
import Footer    from './components/Footer';
import useUser   from './hooks/useUser';

export default function App() {
  const user = useUser();        // reads email saved after login

  return (
    <Router>
      {/* ---------- NAV BAR ---------- */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 24px',
          background: '#ff6347'
        }}
      >
        {/* left links */}
        <div>
          <Link to="/"     style={link}>Menu</Link>
          <Link to="/cart" style={link}>Cart</Link>
        </div>

        {/* right links */}
        <div>
          <Link to="/about" style={link}>About</Link>
          <Link to="/login" style={{ ...link, marginRight: 0 }}>Login</Link>
          {user && (
            <span style={{ color: '#fff', marginLeft: 12 }}>
              Hi, {user}
            </span>
          )}
        </div>
      </nav>

      {/* ---------- ROUTES ---------- */}
      <Routes>
        <Route path="/"         element={<Menu />} />
        <Route path="/cart"     element={<Cart />} />
        <Route path="/about"    element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/login"    element={<Login />} />
      </Routes>

      {/* ---------- FOOTER ---------- */}
      <Footer />
    </Router>
  );
}

/* shared link style */
const link = {
  marginRight: 16,
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 600
};
