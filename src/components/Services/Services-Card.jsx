import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <div
            className="group overflow-hidden cursor-pointer rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
              <Image
                alt="Course Image"
                className="h-48 w-full object-cover transition-all group-hover:scale-105"
                height={400}
                src={data.image}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{data.name}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {data.description}
                </p>
              </div>
          </div>
  )
}

export default ServiceCard
