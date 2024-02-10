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
import Services from './components/services';
import Clients from './components/clients/clients';
import TeamSection from './components/team';
import Contact from './components/contact';
import FAQ from './components/faq';
import Footer from './components/foot';
import Portfolio from './components/portfolio';
import { BrowserRouter } from 'react-router-dom';
import Carousel from './components/caorusel/carouselComp';
import TechStack from './components/techStack/techStack';
import PortfolioStats from './components/portfolioStats/portfolioStats';
import WelcomeMessage from './components/welcomeMesg/welcomeMessage';
import WhyUS from './components/whyUs/whyUs';
import GetQuotePage from './components/getQuotePage/getQuotePage';
import ReqQuotePage from './components/getQuotePage/reqQuote/reqQuote';
import DeliveredProjects from './components/testimonialsPage/deliveredProjects/deliveredProjects';
import AskProject from './components/testimonialsPage/askProject/asjProject';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>

    {/* <App /> */}
   {/* <Home/> */}
   {/* <About/> */}
   {/* <Carousel/>
   <WelcomeMessage/>
   <Services/>
   <WhyUS/> */}
<DeliveredProjects/>
   <Clients/>
<AskProject/>
  {/* <TeamSection/> */}
  {/* <Contact/> */}
  {/* <FAQ/> */}
  {/* <Footer/> */}
  {/* <Portfolio/> */}
{/* <TechStack/> */}
{/* <PortfolioStats/> */}

{/* <FlagApp/> */}
{/* <GetQuotePage/> */}
{/* <ReqQuotePage/> */}

  </BrowserRouter>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
