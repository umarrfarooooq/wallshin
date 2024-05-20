import Image from 'next/image'
import React from 'react'
import CompanyLogo from "@public/assets/Company Logo.svg"
import "@/app/globals.css"

const CompaniesLists = () => {
  return (
    <div className='dark-background'>
      <div className='container py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        <div><Image src={CompanyLogo} width={205} height={18} alt='company logo'/></div>
        <div><Image src={CompanyLogo} width={205} height={18} alt='company logo'/></div>
        <div><Image src={CompanyLogo} width={205} height={18} alt='company logo'/></div>
        <div><Image src={CompanyLogo} width={205} height={18} alt='company logo'/></div>
        <div><Image src={CompanyLogo} width={205} height={18} alt='company logo'/></div>
      </div>
    </div>
  )
}

export default CompaniesLists
