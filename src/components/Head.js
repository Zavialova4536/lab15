import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Head.css';

function Head() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link
          to="/news"
          className={`nav-link ${isActive('/news') || location.pathname === '/' ? 'active' : ''}`}
        >
          Новости
        </Link>
        <Link
          to="/about"
          className={`nav-link ${isActive('/about') ? 'active' : ''}`}
        >
          О проекте
        </Link>
        <Link
          to="/contacts"
          className={`nav-link ${isActive('/contacts') ? 'active' : ''}`}
        >
          Контакты
        </Link>
      </nav>
    </header>
  );
}

export default Head;
