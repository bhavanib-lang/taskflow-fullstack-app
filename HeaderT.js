import React from 'react';
import './HeaderT.css';
import { Link } from 'react-router-dom';

function HeaderT() {
  return (
    <header className="header">
      <h1>TaskFlow</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderT;
