import Link from "next/link";
import HeroSectionImage from "@public/assets/Hero.png"
import React from "react";
import Image from "next/image";
import "@/app/globals.css"

const Hero = () =>{
    const imageStyle = {
        height:"fit-content",
        width:"100%"
    }
    return(
        <>
            <section className="bg-white">
                <div className="grid py-8 lg:gap-6 lg:py-16 lg:grid-cols-12 container">
                    <div className="mainCont mr-auto place-self-center lg:col-span-7">
                    <h1 style={{color: "#313131", lineHeight:"1.3"}} className="max-w-2xl mb-2 md:mb-3 lg:mb-4 text-2xl lg:text-5xl font-bold tracking-tight leading-none md:text-5xl">
                    Your <span className="text-[#61BB46]"> Trusted, Reliable</span> <br></br><span style={{color: "#313131"}}> <span className="text-[#731012]">Partner</span> for Hospitality <br></br> Services</span>
                    </h1>
                    
                    <p style={{color: "var(--neutral-700, #313131)"}} className="max-w-2xl mb-6 text-justify font-normal lg:mb-8 text-sm md:text-[1rem]">
                    Helping you get the quality staff since years !
                    </p>
                    <span  className="hidden lg:inline-block">
                    <Link className="bg-[#731012] hover:bg-[#9e1518] transition-all text-gray-200 font-bold rounded-lg px-8 py-4" href="#">
                        Contact Us
                    </Link>
                    </span>
                    
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 lg:flex justify-end">
                    
                    <Image loading="lazy" width={500} height={300} style={imageStyle} src={HeroSectionImage} alt="Hero Section." />
                    <span className="inline-block lg:hidden mt-6 w-full">
                    <Link className="bg-[#731012] w-full inline-block text-center text-gray-200 font-bold rounded-lg px-8 py-4" href="#">
                        Contact Us
                    </Link>
                    </span>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero;