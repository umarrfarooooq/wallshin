import ApplyForm from '@/components/Apply-Component/Apply'
import Breadcrumb from '@/components/ui/Breadcrumb'
import React from 'react'

const Apply = () => {
  return (
    <div>
      <Breadcrumb pageName="Apply" pageTitle="APPLY FOR" pageTitleHighlight="JOBS"/>
      <ApplyForm />
    </div>
  )
}

export default Apply
