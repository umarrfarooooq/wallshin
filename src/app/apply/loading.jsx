import React from "react";
import Logo from "@public/assets/Logo.svg"
import Image from "next/image";
const Loading = () =>{
    return(
        <>
            <div className="flex items-center justify-center h-screen animate-pulse">
                <Image src={Logo} alt="Company Logo"/>
            </div>
        </>
    )
}

export default Loading;