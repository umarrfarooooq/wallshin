import Image from 'next/image'
import React from 'react'
import SpinnerGif from "@public/spinner.gif"
const Spinner = () => {
  return (
    <div className='flex items-center justify-center'>
      <Image src={SpinnerGif} width={30} height={30} alt='spinner'/>
    </div>
  )
}

export default Spinner
