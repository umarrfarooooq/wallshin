import ContactUsComponent from '@/components/Contact-Us/Contact-Us-component'
import Breadcrumb from '@/components/ui/Breadcrumb'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <Breadcrumb pageName="Contact Us" pageTitle="CONTACT" pageTitleHighlight="US"/>
      <ContactUsComponent />
    </div>
  )
}

export default Contact
