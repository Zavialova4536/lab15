import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <p>Дата создания сайта: {currentDate}</p>
        </div>
        <div>
          <p>Автор: Завиалова Ксения</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
