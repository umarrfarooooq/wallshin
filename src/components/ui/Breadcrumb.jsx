import React from 'react'
import "@/app/globals.css"
import BreadCrumbBg from "@public/assets/BreadCrumbBg.png"

const Breadcrumb = (props) => {
  return (
    <div className='text-white-color'>
      <div>
        <div className='py-3 bg-[#731012]'>
          <p className='py-3 container'>Home &gt; {props.pageName}</p>
        </div>
        <div 
          className='h-28 lg:h-56 flex flex-col items-start justify-center relative' 
          style={{
            backgroundImage: `url(${BreadCrumbBg.src})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center'
          }}
        >
          <div 
            className='absolute inset-0' 
            style={{background: 'rgba(115, 16, 18, 0.60)'}}
          ></div>
          <div className='relative z-10 container'>
            <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold'>{props.pageTitle} <span className='text-[#61BB46]'>{props.pageTitleHighlight}</span></h3>
            <div className='w-16 h-1 bg-[#61BB46] mt-3 rounded-xl'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
