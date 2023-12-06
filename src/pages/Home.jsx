import React from "react";
import triangle from '../assets/Polygon 1.png'
import robot from '../assets/unsplash_2EJCSULRwC8.png'
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CaseStudy from "../components/CaseStudy";
import Robot from "../components/Robot";
const Home = () => {
  return (
    <div className="mt-20 w-full  md:w-[750px] lg:w-[1440px] font-Sg">

      {/* hero section */}
      <div className="relative flex items-center h-[100vh] p-4 lg:p-8 lg:pl-20">
        
        <div className="flex flex-col gap-2 z-10">
          <h1 className="font-bold text-4xl sm:text-6xl font-Sg text-[#D61426]">Artificial</h1>
          <h1 className="font-bold text-4xl sm:text-6xl font-Sg text-[#D61426] inline">Intelligence  <span className=" font-bold text-6xl font-Sg text-[#412C28]">&</span> </h1>
          <h1 className="font-bold text-4xl sm:text-6xl font-Sg text-[#D61426]">Machine Learning</h1>
          <h1 className="font-bold text-4xl sm:text-6xl font-Sg text-[#412C28]">Consulting</h1>
          <h1 className="font-bold text-4xl sm:text-6xl font-Sg text-[#412C28] flex gap-6">Services  <img src={triangle} alt="" /> <img src={triangle} alt="" /> </h1>
        </div>

        <div className="h-[100%] absolute right-0 -top-20 ">
          <img src={robot} alt="" className="h-full w-full object-cover z-2 brightness-[80%] lg:brightness-[100%] "/>

        </div>
      </div>

      <Services/>

      <CaseStudy/>

      <Testimonials/>
      


    </div>
  );
};

export default Home;
