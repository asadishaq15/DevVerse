import React from 'react'
import DeilveredProjects from '../deliveredProjects/deliveredProjects'
import Testimonials from './testimonials'
import AskProject from '../askProject/askProject'
import TestimonialsBanner from '../testimonialBanner/TestimonialsBanner'
import OneStopSolution from '../../OneStopSolution/oneStopSolution'

const TestimonialsPage = () => {
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
