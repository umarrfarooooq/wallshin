import React from 'react'
import ServiceCard from './Services-Card'

const AllServices = () => {
  return (
    <div>
      <section className="bg-[#EAEAEA]">
      <div className="py-12 md:py-20 lg:py-24 container">
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
    </div>
  )
}

export default AllServices
