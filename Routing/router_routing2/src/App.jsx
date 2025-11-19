import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/NavBar.jsx';   
import Home from './pages/home.jsx';            
import Products from './pages/products.jsx';
import Services from './pages/services.jsx';
import Profile from './pages/profile.jsx';
import NotFound from './pages/functionnotfound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
