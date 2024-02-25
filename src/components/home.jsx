import React from 'react'
import Footer from './foot'
import Contact from './contact'
import FAQSection from './faq'
import TeamSection from './team'
import Header from './Header/header'
import Carousel from './caorusel/carouselComp'
import WelcomeMessage from './welcomeMesg/welcomeMessage'
import Services from './services/services'
import WhyUS from './whyUs/whyUs'
import OneStopSolution from './OneStopSolution/oneStopSolution'
import LatestWorkComponent from './ProjectPortfolio/latestWork'
import PortfolioStats from './portfolioStats/portfolioStats'
import TechStackSlider from './techStack/techStack'
import Clients from './clients/clients'

const Home = () => {
  return (
<div>



    <Carousel/>
    <WelcomeMessage/>
    <Services/>
    <WhyUS/>
    <OneStopSolution/>
    <LatestWorkComponent/>
    <PortfolioStats/>
    <TechStackSlider/>
    <Clients/>
 

</div>
  )
}

export default Home
