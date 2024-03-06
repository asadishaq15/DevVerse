import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css'
import './App.css';
import Contact from './components/Contact/contact';
import Faq from './components/faq';
import Footer from './components/Footer/foot';
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
import BARS from './Pages/ProjectsPages/Project1/project1';
import SmartCode from './Pages/ProjectsPages/Project2/project2';
import UPMobile from './Pages/ProjectsPages/Project3/project3';
import OCEAM from './Pages/ProjectsPages/Project4/project4';
import SwipeGallery from './Pages/ProjectsPages/Project6/project6';
import TheDrawers from './Pages/ProjectsPages/Project7/project7';
import ScrollToTopOnRouteChange from './components/scrollToTopOnPageChange/scrollTop';
import GetQuotePage from './components/getQuotePage/getQuotePage';
import GoToTop from './components/gotoTop/goToTop';
import ChatIcon from './components/chatIcon/chatIcon';
import Home from './Pages/Home/home';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTopOnRouteChange/>
        <ChatIcon/>
        <Header />  
        <GoToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/request-quote" element={<GetQuotePage />} />
          <Route path="/portfolio" element={<LatestWorkComponent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
          <Route path="/mobile-apps" element={<MobileAppDevelopment />} />
          <Route path="/graphic-designing" element={<GraphicDesign />} />
          <Route path="/seo-services" element={<SeoServices />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/project/115/bars-application" element={<BARS />} />
          <Route path="/project/116/smart-code-application" element={<SmartCode />} />
          <Route path="/project/117/up-mobile-application" element={<UPMobile />} />
          <Route path="/project/118/oceam-application" element={<OCEAM />} />
          <Route path="/project/119/swipe-gallery" element={<SwipeGallery />} />
          <Route path="/project/121/the-drawers" element={<TheDrawers />} />



        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
