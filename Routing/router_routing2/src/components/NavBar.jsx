import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
  padding: "1rem",
  borderBottom: "1px solid #ccc",
  color: 'black',
  fontWeight: 'bold',
  display: 'flex',
  gap: '2rem',
  backgroundColor: '#f9f9f9'
};

const activeStyle = {
  color: 'blue',
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <NavLink to="/home" style={({ isActive }) => isActive ? activeStyle : undefined}>
        Home
      </NavLink>
      <NavLink to="/products" style={({ isActive }) => isActive ? activeStyle : undefined}>
        Products
      </NavLink>
      <NavLink to="/services" style={({ isActive }) => isActive ? activeStyle : undefined}>
        Services
      </NavLink>
      <NavLink to="/profile" style={({ isActive }) => isActive ? activeStyle : undefined}>
        Profile
      </NavLink>
      
    </nav>
  );
}

export default Navbar;
