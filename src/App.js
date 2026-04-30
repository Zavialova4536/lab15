import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Head />
        <Routes>
          <Route path="/" element={<Main page="news" />} />
          <Route path="/news" element={<Main page="news" />} />
          <Route path="/about" element={<Main page="about" />} />
          <Route path="/contacts" element={<Main page="contacts" />} />
          <Route path="*" element={<Main page="404" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
