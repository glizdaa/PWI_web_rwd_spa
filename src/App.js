import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar'; // Upewnij się, że Sidebar jest zaimportowany
import './globalStyles.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Stan dla Sidebar

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Funkcja do przełączania Sidebar

  return (
    <Router>
      <div className="App">
        <Header />
        <button onClick={toggleSidebar} className="sidebar-toggle">Toggle Sidebar</button> {/* Przycisk do przełączania widoczności Sidebar */}
        <Sidebar isOpen={isSidebarOpen} /> {/* Przekazanie stanu do Sidebar jako props */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;