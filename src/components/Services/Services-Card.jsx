import Link from 'next/link'
import React from 'react'

const ServiceCard = () => {
  return (
    <div
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950">
            <Link className="block" href="#">
              <img
                alt="Course Image"
                className="h-48 w-full object-cover transition-all group-hover:scale-105"
                height={400}
                src="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/ilgxvplznejhqvlo1xv9"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
                </p>
              </div>
            </Link>
          </div>
  )
}

export default ServiceCard
