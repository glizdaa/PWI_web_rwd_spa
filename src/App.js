import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './globalStyles.css'; // Upewnij się, że tutaj importujesz swoje style CSS

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar-handle"></div> {/* Uchwyt na hover dla sidebaru */}
        <div className="main-content">
          <Sidebar />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* Tutaj możesz dodać więcej ścieżek, jeśli są potrzebne */}
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;