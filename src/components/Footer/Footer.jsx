import Link from 'next/link'
import React from 'react'
import "@/app/globals.css"
import Image from 'next/image'
import Logo from "@public/assets/Logo.svg"

const Footer = () => {
  return (
    <div className='py-20 gradient-background text-white-color'>
      <div className='container'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex sm:items-center gap-6 flex-col sm:flex-row'>
                <div>
                    <Link href="/">Home</Link>
                </div>
                <div>
                    <Link href="/about">About</Link>
                </div>
                <div>
                    <Link href="/services">Services</Link>
                </div>
                <div>
                    <Link href="/contact">Contact Us</Link>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div className='cursor-pointer'>
                <span>
                    <a href='https://www.instagram.com/hospitality.service_/' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                            <path d="M18.1297 22.0862C19.8735 22.0862 21.3008 20.6659 21.3008 18.9151C21.3008 18.226 21.0758 17.5862 20.7032 17.0659C20.1266 16.2714 19.1914 15.744 18.1367 15.744C17.0821 15.744 16.1469 16.2643 15.5703 17.0659C15.1977 17.5862 14.9727 18.226 14.9727 18.9151C14.9657 20.6659 16.386 22.0862 18.1297 22.0862Z" fill="white"/>
                            <path d="M25.0486 15.0479V12.3901V11.9963H24.6549L21.9971 12.0034L22.0111 15.0549L25.0486 15.0479Z" fill="white"/>
                            <path d="M23.0518 18.9221C23.0518 21.6362 20.8439 23.844 18.1299 23.844C15.4158 23.844 13.208 21.6362 13.208 18.9221C13.208 18.2682 13.3416 17.6424 13.5736 17.0729H10.8877V24.4416C10.8877 25.3908 11.6611 26.1643 12.6104 26.1643H23.6494C24.5986 26.1643 25.3721 25.3908 25.3721 24.4416V17.0729H22.6861C22.9252 17.6424 23.0518 18.2682 23.0518 18.9221Z" fill="white"/>
                            <path d="M18.1299 0.922119C8.1877 0.922119 0.129883 8.97993 0.129883 18.9221C0.129883 28.8643 8.1877 36.9221 18.1299 36.9221C28.0721 36.9221 36.1299 28.8643 36.1299 18.9221C36.1299 8.97993 28.0721 0.922119 18.1299 0.922119ZM27.1299 17.0729V24.4417C27.1299 26.3612 25.5689 27.9221 23.6494 27.9221H12.6104C10.6908 27.9221 9.12988 26.3612 9.12988 24.4417V17.0729V13.3956C9.12988 11.476 10.6908 9.91509 12.6104 9.91509H23.6494C25.5689 9.91509 27.1299 11.476 27.1299 13.3956V17.0729Z" fill="white"/>
                        </svg>
                    </a>
                    </span>
                </div>
                <div className='cursor-pointer'><span>
                <a href='https://web.facebook.com/profile.php?id=61560746413095' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path d="M33.8709 17.0233C33.8698 7.70721 26.3176 0.15509 17.0004 0.15509C7.68313 0.15509 0.129883 7.70834 0.129883 17.0256C0.129883 25.4125 6.24988 32.3695 14.2666 33.6756L14.3634 33.6891V21.9013H10.0794V17.0233H14.3634V13.3086C14.342 13.1207 14.3308 12.9025 14.3308 12.682C14.3308 9.39359 16.997 6.72734 20.2854 6.72734C20.444 6.72734 20.6015 6.73409 20.7579 6.74534L20.7376 6.74422C22.0865 6.76334 23.3915 6.88259 24.665 7.09521L24.5143 7.07384V11.2251H22.3858C22.289 11.2116 22.1776 11.2037 22.0651 11.2037C20.7185 11.2037 19.6261 12.295 19.6261 13.6427C19.6261 13.7192 19.6295 13.7946 19.6363 13.87L19.6351 13.8598V17.0233H24.314L23.5659 21.9013H19.6351V33.6891C27.7498 32.3683 33.8698 25.4102 33.8709 17.0233Z" fill="white"/>
                    </svg>
                </a>
                </span></div>
            </div>
        </div>
        <hr className='my-[2.3rem] bg-white'></hr>
        <div className='flex md:items-center md:justify-between flex-col md:flex-row gap-6'>
            <div><p>© 2024 Walshinn Group. All rights reserved.</p></div>
            <Link href="/"><Image width={136} height={59} src={Logo} alt="Company Logo"/></Link>
            <div><p>Terms of Service</p></div>
            <div><p>Privacy Policy</p></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
