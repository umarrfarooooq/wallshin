import React from 'react'
import ServiceCard from './Services-Card'
import ServiceData from "./Services.json"
const AllServices = () => {
  return (
    <div>
      <section className="bg-[#EAEAEA]">
      <div className="py-12 md:py-20 lg:py-24 container">
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ServiceData.servicesData.map((data, index) => (
              <ServiceCard key={index} data={data} />
            ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default AllServices
