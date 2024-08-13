import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;