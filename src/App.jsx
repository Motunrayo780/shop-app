
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Projectone/Main';
import Footer from './Projectone/Footer';
import OurStory from './pages/OurStory';
import Careers from './pages/Careers';
// import Side from './Projectone/Side';

function App() {
  return (
    <Router>
      <div>
        {/* Main Content */}
        <Main />

        {/* Routes */}
        <Routes>
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/careers" element={<Careers />} />
          {/* Add routes for each page as needed */}
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
