import AllServices from '@/components/Services/All-Services';
import Breadcrumb from '@/components/ui/Breadcrumb'

import React from 'react'

const Services = () => {
  return (
    <div>
      <Breadcrumb pageName="Services" pageTitle="OUR" pageTitleHighlight="SERVICES"/>
      <AllServices />
    </div>
  )
}

export default Services;
