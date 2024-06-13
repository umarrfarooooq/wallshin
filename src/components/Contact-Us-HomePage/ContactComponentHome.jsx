"use client"
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import Spinner from "../ui/Spinner";
import axios from "axios";
const axiosInstense = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const ContactCompo = () => {
  const [loader, setLoader] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true)
    try {
      const response = await axiosInstense.post("api/v1/messages/add", formData);
      if (response.status === 201) {
        setLoader(false)
        toast({
          description: "Your message has been sent.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      setLoader(false)
      console.error("Error sending message:", error);
      toast({
        description: "Failed to send message. Please try again later.",
      });
    }
  };
  return (
    <div style={{backgroundColor:"rgba(2, 60, 75, 0.10)"}} className="flex flex-col items-center gap-[48px] relative pt-24 pb-32">
      <div className="flex justify-between items-center gap-[24px] relative container">
        <div className="flex flex-col w-full items-start justify-center gap-[24px] pl-0 md:pr-[32px] py-0 relative rounded-[8px]">
          <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
            <div style={{fontSize:"2rem"}} className=" relative self-stretch mt-[-1.00px] font-bold">
            Contact Us
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col h-[318px] items-start gap-[16px] relative self-stretch w-full">
            <div className="flex flex-col items-start gap-[16px] relative flex-1 self-stretch w-full grow">
              <div style={{ border: "1px solid #4E5A5E" }} className="flex items-center gap-[10px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[8px] overflow-hidden">
                <input 
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-transparent w-full h-full outline-none placeholder:text-[#4E5A5E]"
                />
              </div>

              <div style={{border:"1px solid #4E5A5E"}} className="flex items-center gap-[10px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[8px] overflow-hidden">
                <input 
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-transparent w-full h-full outline-none placeholder:text-[#4E5A5E]"
                />
              </div>

              <div style={{border:"1px solid #4E5A5E"}} className="flex items-center gap-[10px] p-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[8px] overflow-hidden">
                <input 
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-transparent w-full h-full outline-none placeholder:text-[#4E5A5E]"
                />
              </div>
              
              <div style={{border:"1px solid #4E5A5E"}} className="flex items-center gap-[10px] pt-[16px] px-[16px] relative self-stretch w-full flex-[0_0_auto] rounded-[8px] overflow-hidden">
                <textarea 
                  name="message"
                  cols="30"
                  rows="6"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-transparent w-full h-full outline-none resize-none placeholder:text-[#4E5A5E]"
                />
              </div>
            </div>
            <button 
              disabled={loader}
              type="submit"
              className="bg-[#731012] transition-all hover:bg-[#942B04] active:bg-[#642107] text-sm rounded-lg py-3 w-full text-white"
            >
              {loader ? <Spinner /> : "Submit"}
            </button>
          </form>
        </div>
        <div className="imageCon hidden lg:inline-block w-full">
          <div>
            <div className="heading text-[3.25rem] font-extrabold">Leave us A message, <br></br>
              We are always <span className="text-[#61BB46]">happy to <br></br>
              reach you out !</span> </div>
            <div className="paragraph text-sm">
            Drop us a message anytime; we&apos;re here and eager to connect with you!  Your feedback, inquiries, or collaboration ideas are always welcomed.  Let&apos;s build something amazing together!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
