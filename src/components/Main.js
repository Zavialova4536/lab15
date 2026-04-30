import React from 'react';
import '../styles/Main.css';
import Section from './Section';
import Article from './Article';
import Aside from './Aside';

function Main({ page }) {
  return (
    <main className="main">
      <Section />
      <div className="divider"></div>
      <Article currentPage={page} />
      <div className="divider"></div>
      <Aside />
    </main>
  );
}

export default Main;
