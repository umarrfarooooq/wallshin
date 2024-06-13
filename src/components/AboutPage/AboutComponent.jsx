import React from 'react'
import HeroSectionImage from "@public/assets/About.png"
import Image from "next/image";
import "@/app/globals.css"

const AboutComponent = () => {
    
  return (
        <section className="bg-white py-8 lg:py-16 flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between container">
                    <div className="mainCont mr-auto place-self-center lg:col-span-6">
                    <h1 style={{color: "#313131", lineHeight:"1.3"}} className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-5xl font-bold tracking-tight leading-none md:text-5xl">
                        About
                    </h1>
                    <p style={{color: "var(--neutral-700, #313131)"}} className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-[1rem]">
                        Welcome to Walshinn Group, your trusted partner in delivering excellence  across diverse industries. With a commitment to innovation, quality,  and client satisfaction, we specialize in providing top-notch services  tailored to meet your unique needs. From hospitality to facility  management and beyond, Walshinn Group is your key to success in today&apos;s  dynamic business landscape.
                    </p>
                    </div>
                    <div className="lg:mt-0 lg:col-span-6 lg:flex justify-end">
                    <Image loading="lazy" width={400} height={300} src={HeroSectionImage} alt="Hero Section." />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between container">
                <div className="mainCont mr-auto lg:inline-block hidden">
                    <Image loading="lazy" width={400} height={300} src={HeroSectionImage} alt="Hero Section." />
                    </div>
                    <div className="lg:mt-0">
                    <h1 style={{color: "#313131", lineHeight:"1.3"}} className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-5xl font-bold tracking-tight leading-none md:text-5xl">
                    Our Mission
                    </h1>
                    <p style={{color: "var(--neutral-700, #313131)"}} className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-[1rem]">
                    At Walshinn Group, our mission is to empower businesses and  organizations by delivering tailored solutions that drive growth,  efficiency, and success. We are committed to fostering long-term  partnerships built on trust, integrity, and mutual success.
                    </p>
                    </div>
                </div>
        </section>
  )
}

export default AboutComponent
