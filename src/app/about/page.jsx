import AboutComponent from '@/components/AboutPage/AboutComponent'
import WhyChooseUs from '@/components/Main/Why-Choose-Us'
import Breadcrumb from '@/components/ui/Breadcrumb'

import React from 'react'

const About = () => {
  return (
    <div>
      <Breadcrumb pageName="About Us" pageTitle="ABOUT" pageTitleHighlight="US"/>
      <AboutComponent />
      <WhyChooseUs />
    </div>
  )
}

export default About
