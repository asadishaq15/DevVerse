import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Careers from './components/careers';
import Home from './components/home';
import About from './components/about';
import Clients from './components/clients/clients';
import TeamSection from './components/team';
import Contact from './components/contact';
import FAQ from './components/faq';
import Footer from './components/foot';
import { BrowserRouter } from 'react-router-dom';
import Carousel from './components/caorusel/carouselComp';
import TechStack from './components/techStack/techStack';
import PortfolioStats from './components/portfolioStats/portfolioStats';
import WelcomeMessage from './components/welcomeMesg/welcomeMessage';
import WhyUS from './components/whyUs/whyUs';
import GetQuotePage from './components/getQuotePage/getQuotePage';
import ReqQuotePage from './components/getQuotePage/reqQuote/reqQuote';
import DeliveredProjects from './components/testimonialsPage/deliveredProjects/deliveredProjects';
import AskProject from './components/testimonialsPage/askProject/askProject';
import Testimonials from './components/testimonialsPage/testimonials/testimonials';
import TestimonialsPage from './components/testimonialsPage/testimonials/testimonials';
import TestimonialsBanner from './components/testimonialsPage/testimonialBanner/TestimonialsBanner';
import Header from './components/navbar';
import OneStopSolution from './components/OneStopSolution/oneStopSolution';
import LatestWorkComponent from './components/ProjectPortfolio/recentProjects';
import ChatIcon from './components/chatIcon/chatIcon';
import GoToTop from './components/gotoTop/goToTop';
import Services from './components/services/services';
import WebDevelopmentPage from './Pages/Services/WebDevelopment/webDevlopment';
import Categories from './Pages/Services/WebDevelopment/categories/webDevCategories';
import GraphicDesign from './Pages/Services/GraphicDesigning/graphicDesigning';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>

    {/* <App /> */}
   {/* <Home/> */}
   {/* <About/> */}
 {/* <Header/> */}
   {/* <Carousel/>
   <WelcomeMessage/>
   <Services/>
   <WhyUS/> */}
{/* <DeliveredProjects/>
   <Clients/>
<AskProject/> */}
  {/* <TeamSection/> */}
  {/* <Contact/> */}
  {/* <FAQ/>
  <Footer/> */}


{/* <TestimonialsPage/> */}

{/* <TestimonialsBanner/> */}
{/* <PortfolioStats/> */}
{/* <Carousel/>
<WelcomeMessage/>
<LatestWorkComponent/>

<TechStack/>
<OneStopSolution/>
<WhyUS/>
<ChatIcon/>
<GoToTop/>
<Footer/> */}
{/* <WebDevelopmentPage/> */}
{/* <Categories/> */}
<GraphicDesign/>
  </BrowserRouter>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
