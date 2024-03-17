import React, { useEffect } from 'react'
import DeilveredProjects from '../deliveredProjects/deliveredProjects'
import AskProject from '../askProject/askProject'
import TestimonialsBanner from '../testimonialBanner/TestimonialsBanner'
import OneStopSolution from '../../OneStopSolution/oneStopSolution'
import UserReviews from '../UserReviews/userReviews'

const TestimonialsPage = () => {
  useEffect(()=>{
    document.title='Testimonals - Client Speaks | DevVerse';
  },[])
  return (
    <div className='Testimonials-Page-Container'>
      <TestimonialsBanner/>
      <DeilveredProjects/>
        <UserReviews/>    
      <OneStopSolution/>
     <AskProject/>
    </div>
  )
}

export default TestimonialsPage
