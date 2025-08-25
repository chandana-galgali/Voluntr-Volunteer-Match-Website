import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Footer from './components/Footer'; 
import AboutPage from './pages/AboutPage'; 
import HomePage from './pages/HomePage';  
import VolunteerListPage from './pages/VolunteerListPage';  
import VolunteerFormPage from './pages/VolunteerFormPage';  
import NotFoundPage from './pages/NotFoundPage';  
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/volunteer-list" element={<VolunteerListPage />} />
          <Route path="/volunteer-form" element={<VolunteerFormPage />} />
          <Route path="*" element={<NotFoundPage />} />  {}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;