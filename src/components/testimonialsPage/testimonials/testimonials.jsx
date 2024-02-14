import React from 'react'
import DeilveredProjects from '../deliveredProjects/deliveredProjects'
import Testimonials from './testimonials'
import Clients from '../../clients/clients'
import AskProject from '../askProject/askProject'
import TestimonialsBanner from '../testimonialBanner/TestimonialsBanner'
import OneStopSolution from '../../OneStopSolution/oneStopSolution'

const TestimonialsPage = () => {
  return (
    <div>
      <TestimonialsBanner/>
      <DeilveredProjects/>
      <Testimonials/>
      <OneStopSolution/>
     <AskProject/>
    </div>
  )
}

export default TestimonialsPage
