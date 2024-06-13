"use client";
import React, { useState } from 'react';
import '../Contact-Us/Contact-us.css';
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Spinner from '../ui/Spinner';
const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const ApplyForm = () => {
  const [loader, setLoader] = useState(false)
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      cv: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true)
    const applicationData = new FormData();
    applicationData.append('name', formData.name);
    applicationData.append('email', formData.email);
    applicationData.append('phone', formData.phone);
    applicationData.append('cv', formData.cv);

    try {
      const response = await axiosInstance.post("api/v1/applications/apply", applicationData);
      if (response.status === 201) {
        setLoader(false)
        toast({
          description: "Your application has been sent.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          cv: null,
        });
      }
    } catch (error) {
      setLoader(false)
      console.error("Error sending application:", error);
      toast({
        description: "Failed to send application. Please try again later.",
      });
    }
  };

  return (
    <div>
      <div className='container py-8 md:py-12 lg:py-20'>
        <div className='flex flex-col gap-8'>
          <div>
            <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold'>Apply for Jobs at Walshinn Group</h3>
          </div>
          <div>
            <p className='text-[#434343]'>At Walshinn Group, we believe in fostering talent, empowering growth, and creating a dynamic work environment that encourages innovation and collaboration. If you&apos;re passionate about making a difference and thrive in a fast-paced, results-driven setting, we invite you to explore career opportunities with us.</p>
          </div>
          <div>
            <p className='text-[#434343]'>To apply for a job at Walshinn Group, please fill out the form below and upload your resume:</p>
          </div>
        </div>
        <form className="contactUsForm py-6 md:w-3/4" onSubmit={handleSubmit}>
          <div className="inputts flex items-center justify-between">
            <Input
              placeholder="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <Input
              className="rtlinputt ml-2"
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <Input
            className="block w-full"
            placeholder="Phone Number"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <div className="flex items-center mb-4 justify-center w-full">
            <label htmlFor="cv-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click here to upload your resume</span></p>
              </div>
              <input required id="cv-file" type="file" name="cv" onChange={handleFileChange} hidden />
            </label>
          </div>
          <button type="submit" disabled={loader} className="gradient-background text-white w-full inline-block text-center transition-all font-bold rounded-lg py-2">
            {loader ? <Spinner /> : "Apply Now"}
          </button>
        </form>
        <div className='flex flex-col gap-8'>
          <div>
            <p className='text-[#434343]'>Note: By submitting this form, you agree to our Privacy Policy and consent to the processing of your personal data for recruitment purposes.</p>
          </div>
          <div>
            <p className='text-[#434343]'>After Submission: Upon receiving your application, our HR team will review your qualifications. If your profile matches our current requirements, we will contact you to discuss next steps.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
