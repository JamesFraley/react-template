import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/"       className={({ isActive }) => isActive ? 'isActive' : ''}>Dashboard</NavLink><br/><br/>
    <NavLink to="/create" className={({ isActive }) => isActive ? 'isActive' : ''}>Create Expense</NavLink><br/><br/>
    <NavLink to="/help"   className={({ isActive }) => isActive ? 'isActive' : ''}>Help</NavLink>
  </header>
);

export default Header;
