import React, { useEffect } from 'react'
import DeilveredProjects from '../deliveredProjects/deliveredProjects'
import Testimonials from './testimonials'
import AskProject from '../askProject/askProject'
import TestimonialsBanner from '../testimonialBanner/TestimonialsBanner'
import OneStopSolution from '../../OneStopSolution/oneStopSolution'

const TestimonialsPage = () => {
  useEffect(()=>{
    document.title='Testimonals - Client Speaks | DevVerse';
  },[])
  return (
    <div>
      <TestimonialsBanner/>
      <DeilveredProjects/>

      <OneStopSolution/>
     <AskProject/>
    </div>
  )
}

export default TestimonialsPage
