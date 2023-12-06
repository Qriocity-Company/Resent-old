import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import contact from "../assets/contact.png";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phno: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your logic to handle the form data (e.g., send it to a server)
  };
  return (
    <div className=" flex justify-center items-center my-20 mt-28 w-full max-w-[1440px] font-Sg ">
      <div className="flex lg:flex-row flex-col  w-full mx-40 gap-36 bg-white rounded-2xl">
        <div className=" w-[350px] md:w-[750px] flex-[1] text-black ml-auto  pt-5 bg-white rounded-2xl ">
          <div className=" flex flex-col justify-start items-start gap-5 mx-6 mb-20 ">
            <h1 className="shrink-0 text-[#1E1E1E] text-[24px] mt-8 ml-6 not-italic font-bold leading-[normal] tracking-[2px]">
              Get In Touch
            </h1>
            <div className="mt-1 ml-6 text-[12px] md:text-[17px] font-[400] text-right font-Sg tracking-[1.28px] ">
              We are here for you! How can we help?
            </div>
          </div>
          <form
            action="https://formsubmit.co/gowthamr.quriocity@gmail.com"
            method="post"
            className="px-5 justify-end flex flex-col "
          >
            <div className="mb-4 px-5">
              <input
                required
                type="text"
                id="username"
                name="username"
                placeholder="Enter your name"
                
                className="w-full  py-4  px-4 focus:outline-none focus:border-none border-0 bg-[#F5F5FF] rounded-xl"
              />
            </div>

            <div className="mb-4 px-5">
              <input
                required
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                
                
                className="w-full  py-4  px-4 focus:outline-none focus:border-none border-0 bg-[#F5F5FF] rounded-xl"
              />
            </div>
            <div className="mb-4 px-5">
              <input
                required
                type="number"
                id="phno"
                name="pgno"
                placeholder="Enter your Contact Number "
                
                className="w-full  py-4  px-4 focus:outline-none focus:border-none border-0 bg-[#F5F5FF] rounded-xl"
              />
            </div>

            <div className="mb-4 px-5">
              <textarea
                id="message"
                name="message"
                
                placeholder="Go ahead, We are listening..."
              
                rows="4"
                className="w-full  py-4  px-4 focus:outline-none focus:border-none border-0 bg-[#F5F5FF] rounded-xl"
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white stroke-[1px] flex px-8 py-4 items-center justify-center mb-4 self-end  bg-[#D61426] "
            >
              Submit
              <BsArrowRight />
            </button>
          </form>
        </div>
        <img src={contact} alt="" className="hidden lg:flex" />
      </div>
    </div>
  );
};

export default ContactUs;
