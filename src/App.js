import React from 'react';
import BrochureViewer from './components/BrochureViewer';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#contact">Contact Us</a>
        <a href="#location">Location</a>
      </nav>
      <header className="header">
        <h1>Ananta Spa & Resort Karjat</h1>
        <p>Scroll through our brochure to discover luxury and relaxation.</p>
      </header>
      <BrochureViewer />
    </div>
  );
}

export default App;
