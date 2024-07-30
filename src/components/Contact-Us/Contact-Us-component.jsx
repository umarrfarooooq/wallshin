"use client";
import React, { useState } from "react";
import './Contact-us.css';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Spinner from "../ui/Spinner";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const ContactUsComponent = () => {
  const { toast } = useToast();
  const [loader, setLoader] = useState(false)
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
      const response = await axiosInstance.post("api/v1/messages/add", formData);
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
    <div className="contact-us-main container">
    <h2 className="font-bold text-3xl py-4">
            Get In Touch
          </h2>
      <div className="contact-form-page pt-4 pb-12 flex items-start md:flex-row flex-col  justify-between gap-8">
        <div className="contact-inTouch-form">
          <form className="contactUsForm" onSubmit={handleSubmit}>
            <div className="inputts flex items-center justify-between">
              <Input
                placeholder="Name"
                className="bg-[#D9D9D9]"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                className="rtlinputt ml-2 bg-[#D9D9D9]"
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <Input
              className="block w-full bg-[#D9D9D9]"
              placeholder="Phone Number"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <Textarea
              required
              className="block w-full resize-none bg-[#D9D9D9]"
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <button
              disabled={loader}
              type="submit"
              className="gradient-background text-white w-full inline-block text-center transition-all font-bold rounded-lg py-2"
            >
              {loader ? <Spinner /> : "Send Message"}
            </button>
          </form>
        </div>
          <div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <LocateIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">Walshinn Groups</p>
                    <p className="text-gray-500 dark:text-gray-400">SILVER TOWER # 2206, 22TH FLOOR, BUSINESS BAY, DUBAI.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <PhoneIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">+971 52122 5646</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MailIcon className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">MARKETING@WALSHINNGROUP.COM</p>
                    <p className="text-gray-500 dark:text-gray-400">We will get back to you as soon as possible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

    </div>
  );
};

function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function LocateIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>)
  );
}


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}

export default ContactUsComponent;
