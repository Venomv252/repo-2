import React, { useState } from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import AuthPage from './components/auth/auth.jsx';
import Profile from './components/Profile/profile.jsx';
import WorkforceDashboard from './workforce/dashboard/dashboard.jsx';

const App = () => {
  const [page, setPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setPage('profile');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setPage('home');
  };

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home />;
      case 'leaderboard': return <Leaderboard />;
      case 'profile': return isAuthenticated ? <Profile user={user} onLogout={handleLogout} /> : <AuthPage onLogin={handleLogin} />;
      case 'auth': return <AuthPage onLogin={handleLogin} />;
      case 'workforce': return <WorkforceDashboard />;
      case 'privacy': return <div><h2>Privacy Policy</h2><p>Coming soon...</p></div>;
      case 'terms': return <div><h2>Terms of Service</h2><p>Coming soon...</p></div>;
      case 'contact': return <div><h2>Contact Us</h2><p>Reach us at support@educonnect.com</p></div>;
      default: return <Home />;
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <button onClick={() => setPage('home')} className="brand">
            <span className="brand-name">EduConnect</span>
            <span className="brand-tagline">Learn. Grow. Succeed.</span>
          </button>
          <nav className="main-nav">
            <button onClick={() => setPage('leaderboard')} className="nav-link">Leaderboard</button>
            {isAuthenticated ? (
              <>
                <button onClick={() => setPage('profile')} className="nav-link">Profile</button>
                <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
              </>
            ) : (
              <button onClick={() => setPage('auth')} className="nav-link login-btn">Login/Signup</button>
            )}
          </nav>
        </div>
      </header>

      <main className="main-content">
        {renderPage()}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">© 2025 EduConnect. All rights reserved.</p>
          <div className="footer-links">
            <button onClick={() => setPage('privacy')} className="footer-link">Privacy Policy</button>
            <button onClick={() => setPage('terms')} className="footer-link">Terms of Service</button>
            <button onClick={() => setPage('contact')} className="footer-link">Contact Us</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
