import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Payments from './pages/Payments';
import Messaging from './pages/Messaging';
import Parking from './pages/Parking';
import Visitors from './pages/Visitors';
import AuthPage from './pages/AuthPage';
import { useAuth } from './context/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Auth Page Routes */}
        {!isAuthenticated ? (
          <Route path="/auth" element={<AuthPage />} />
        ) : (
          <Route path="/" element={<Navigate to="/dashboard/home" />} />
        )}

        {/* Protected Routes */}
        {isAuthenticated && (
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="payments" element={<Payments />} />
            <Route path="parking" element={<Parking />} />
            <Route path="messaging" element={<Messaging />} />
            <Route path="visitors" element={<Visitors />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard/home" />} /> {/* Redirect to home if the route is not found */}
          </Route>
        )}

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard/home" : "/auth"} />} />
      </Routes>
    </Router>
  );
}

export default App;
