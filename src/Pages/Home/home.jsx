import React, { useEffect } from 'react'

import Carousel from '../../components/caorusel/carouselComp'
import WelcomeMessage from '../../components/welcomeMesg/welcomeMessage'
import Services from '../../components/services/services'
import WhyUS from '../../components/whyUs/whyUs'
import OneStopSolution from '../../components/OneStopSolution/oneStopSolution'
import LatestWorkComponent from '../../components/ProjectPortfolio/latestWork'
import PortfolioStats from '../../components/portfolioStats/portfolioStats'
import TechStackSlider from '../../components/techStack/techStack'
import Clients from '../../components/clients/clients'
import './home.css'
const Home = () => {
  useEffect(() => {
    document.title = 'DevVerse | Top Software House'; 
  }, []);
  return (
<div className='homePage-container'>



    <Carousel/>
    <WelcomeMessage/>
    <Services className="hide-on-small-screen"/>
    <WhyUS/>
    <OneStopSolution className="hide-on-small-screen" />
    <LatestWorkComponent className="hide-on-small-screen"/>
    <PortfolioStats />
    <TechStackSlider/>
    <Clients/>
 

</div>
  )
}

export default Home
