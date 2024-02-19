import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css'
import './App.css';
import Home from './components/home';
import About from './components/about';
import Team from './components/team';
import Careers from './components/careers';
import Contact from './components/contact';
import Faq from './components/faq';
import Navbar from './components/navbar';
import Footer from './components/foot';
import GoToTop from './components/gotoTop/goToTop';
import LatestWorkComponent from './components/ProjectPortfolio/latestWork';
import Services from './components/services/services';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<LatestWorkComponent />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>

    
        <Footer />
      </div>
    </Router>
  );
}

export default App;
