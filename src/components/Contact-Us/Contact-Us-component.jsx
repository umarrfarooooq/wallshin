"use client";
import React, { useState } from "react";
import './Contact-us.css';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const ContactUsComponent = () => {
  const { toast } = useToast();
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

    try {
      const response = await axiosInstance.post("api/v1/messages/add", formData);
      if (response.status === 201) {
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
      console.error("Error sending message:", error);
      toast({
        description: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <div className="contact-us-main container">
      <div className="contact-form-page pt-4 pb-12 flex items-start gap-x-8">
        <div className="contact-inTouch-form">
          <h2 className="font-bold text-3xl py-4">
            Get In Touch
          </h2>
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
              type="submit"
              className="gradient-background text-white w-full inline-block text-center transition-all font-bold rounded-lg py-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComponent;
