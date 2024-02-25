import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router instead of BrowserRouter
import '@fortawesome/fontawesome-svg-core/styles.css'
import './App.css';
import Home from './components/home';
import Contact from './components/contact';
import Faq from './components/faq';
import Footer from './components/foot';
import LatestWorkComponent from './components/ProjectPortfolio/latestWork';
import Services from './components/services/services';
import Header from './components/Header/header';
import TestimonialsPage from './components/testimonialsPage/testimonials/testimonials';
import ReqQuotePage from './components/getQuotePage/reqQuote/reqQuote';
import WebDevelopmentPage from './Pages/Services/WebDevelopment/webDevlopment';
import MobileAppDevelopment from './Pages/Services/MobileAppDevelopment/mobileAppDevelopment';
import GraphicDesign from './Pages/Services/GraphicDesigning/graphicDesigning';
import SeoServices from './Pages/Services/SeoServices/seoServices';
import DigitalMarketing from './Pages/Services/DigitalMarketing/digitalMarketing';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/request-quote" element={<ReqQuotePage />} />
          <Route path="/portfolio" element={<LatestWorkComponent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/mobile-apps" element={<MobileAppDevelopment />} />
          <Route path="/graphic-designing" element={<GraphicDesign />} />
          <Route path="/seo-services" element={<SeoServices />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
