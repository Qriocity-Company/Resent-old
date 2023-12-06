import React from "react";
import aboutvector1 from "../assets/about-vetor1.svg";
import heroabt from "../assets/hero-abt.png";
import ccs from "../assets/ccs.svg";
import cet from "../assets/cet.svg";
import ad from "../assets/ad.svg";
import tc from "../assets/tc.svg";
import rec1 from "../assets/rec1.png";
import rec2 from "../assets/rec2.png";
import rec3 from "../assets/rec3.png";
import rec4 from "../assets/rec4.png";
import rec5 from "../assets/rec5.png";
import rec6 from "../assets/rec6.png";
import Approaches from "../components/Approaches";
const AboutUs = () => {
  return (
    <div className="flex flex-col my-10 max-w-[1440px]  font-Sg"> 
      <div className="flex justify-center items-center gap-10 mt-28 sm:p-0">
        <div className="px-4">
          <h1 className=" text-[40px] md:text-[64px] not-italic font-bold leading-[normal] text-white">
            We make your <p className="text-[#D61426] "> business scale 10X</p>
          </h1>
          <p className=" w-[320px] md:w-[596px] text-white text-[20px] sm:text-[24px] md:text-2xl not-italic font-normal leading-[normal] mt-9">
          Welcome to Resnet Solutions, a pioneering force in the realm of AI automation and technology solutions. With a relentless commitment to innovation, we stand at the forefront of transforming businesses through cutting-edge artificial intelligence applications. At Resnet, we weave together expertise, creativity, and AI technologies to deliver solutions that propel your business into the future.
          </p>
        </div>
        <img src={heroabt} alt="" className=" hidden lg:flex" />
      </div>
      <div className="flex flex-col gap-20 sm:px-0 justify-between items-center w-full">
        <div className="flex relative justify-between items-center  my-20 md:my-40 gap-5 w-[300px] md:w-[600px] lg:w-[900px]">
          <img
            src={aboutvector1}
            alt=""
            className="absolute -z-10 md:-left-24 -left-4 w-[90px] h-[100px] md:w-[229px] md:h-[249px]"
          />
          <h1 className="text-[20px] md:text-[40px] lg:text-[64px] not-italic font-bold leading-[normal] text-white">
            Our Service <span className="text-[#D61426] ">Approach</span>
          </h1>
          <svg
            className="polygon-3 md:w-[39px] md:h-[45px] w-[20px] h-[20px]"
            viewBox="0 0 39 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39 22.5L0.749998 44.5836L0.75 0.41635L39 22.5Z"
              fill="#D61426"
            />
          </svg>
          <svg
            className="polygon-3 md:w-[39px] md:h-[45px] w-[20px] h-[20px]"
            viewBox="0 0 39 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39 22.5L0.749998 44.5836L0.75 0.41635L39 22.5Z"
              fill="#D61426"
            />
          </svg>
        </div>

        <div className="flex flex-row gap-20 justify-center items-start font-Sg ">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center justify-around">
              <section className="flex gap-4 sm:gap-12">
                <div className=" h-[80px] md:w-[102px] md:h-[102px] bg-white shrink-0 flex justify-center items-center rounded-[5px]">
                  <img src={ccs} alt="" />
                </div>
                <h1 className="w-[250px] md:w-[313px] md:h-[113px] shrink-0 text-[28px] md:text-[44px] text-[#D61426] not-italic font-medium leading-[normal]">
                  {" "}
                  Client-Centric <p className="text-white ">Solutions</p>
                </h1>
              </section>
              <div className=" w-[250px] md:w-[533px] text-white text-sm md:text-2xl not-italic font-normal leading-[normal] mt-8 ">
                <ul className="gap-4 flex flex-col">
                  <li className="animated-service">
                    We prioritize your unique needs and tailor our AI/ML
                    solutions accordingly.
                  </li>
                  <li className="animated-service1 ">
                    Your success is our primary goal, and we ensure our services
                    align with your objectives.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center justify-around">
              <section className="flex gap-4 sm:gap-12">
                <div className="w-[80px] h-[80px] md:w-[102px] md:h-[102px] bg-white shrink-0 flex justify-center items-center rounded-[5px]">
                  <img src={cet} alt="" />
                </div>
                <h1 className="w-[250px] md:w-[313px] md:h-[113px] shrink-0 text-[28px] md:text-[44px] text-[#D61426] not-italic font-medium leading-[normal]">
                  {" "}
                  Cutting-Edge <p className="text-white ">Technology</p>
                </h1>
              </section>
              <div className=" w-[250px] md:w-[533px] text-white text-sm md:text-2xl not-italic font-normal leading-[normal] mt-8 ">
                <ul className="gap-4 flex flex-col">
                  <li className="animated-service">
                    We stay at the forefront of AI/ML advancements to offer you
                    the latest and most innovative solutions.
                  </li>
                  <li className="animated-service1">
                    Our commitment to technological excellence guarantees your
                    competitive advantage.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex">
            <img src={rec1} className=" mt-20 ml-40 " alt="" />
            <img
              src={rec2}
              className="absolute top-64 animated-img-2 "
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row gap-20 justify-center items-start font-Sg">
          <div className="relative hidden lg:flex">
            <img src={rec3} className=" mt-20 mr-40 " alt="" />
            <img
              src={rec4}
              className="absolute top-64 left-40 animated-img"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center justify-around">
              <section className="flex gap-4 sm:gap-12">
                <div className="w-[80px] h-[80px] md:w-[102px] md:h-[102px] bg-white shrink-0 flex justify-center items-center rounded-[5px]">
                  <img src={ad} alt="" />
                </div>
                <h1 className="w-[250px] md:w-[313px] md:h-[113px] shrink-0 text-[28px] md:text-[44px] text-[#D61426] not-italic font-medium leading-[normal]">
                  {" "}
                  Agile <p className="text-white ">Development</p>
                </h1>
              </section>
              <div className=" w-[250px] md:w-[533px] text-white text-sm md:text-2xl not-italic font-normal leading-[normal] mt-8 ">
                <ul className="gap-4 flex flex-col">
                  <li className="animated-service">
                    We adopt an agile approach to quickly adapt to changing
                    requirements and deliver results faster.
                  </li>
                  <li className="animated-service1">
                    Flexibility in development ensures that we meet your
                    evolving business demands.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center justify-around">
              <section className="flex gap-4 sm:gap-12">
                <div className="w-[80px] h-[80px] md:w-[102px] md:h-[102px] bg-white shrink-0 flex justify-center items-center rounded-[5px]">
                  <img src={tc} alt="" />
                </div>
                <h1 className="w-[250px] md:w-[313px] md:h-[113px] shrink-0 text-[28px] md:text-[44px] text-[#D61426] not-italic font-medium leading-[normal]">
                  {" "}
                  Transparent <p className="text-white ">Communication</p>
                </h1>
              </section>
              <div className=" w-[250px] md:w-[533px] text-white text-sm md:text-2xl not-italic font-normal leading-[normal] mt-8 ">
                <ul className="gap-4 flex flex-col">
                  <li className="animated-service">
                    Open and clear communication is at the heart of our service
                    approach.
                  </li>
                  <li className="animated-service1">
                    You'll always know the progress of your project and be
                    informed about any changes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-20 justify-center items-start font-Sg">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center justify-around">
              <section className="flex gap-4 sm:gap-12">
                <div className="w-[80px] h-[80px] md:w-[102px] md:h-[102px] bg-white shrink-0 flex justify-center items-center rounded-[5px]">
                  <div className="streamline-computer-desktop-check-success-approve-device-display-desktop-computer">
                    <svg
                      className="group"
                      width="74"
                      height="66"
                      viewBox="0 0 74 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M69.571 1.85718H4.42815C2.92909 1.85718 1.71387 3.0724 1.71387 4.57146V48C1.71387 49.4991 2.92909 50.7143 4.42815 50.7143H69.571C71.0701 50.7143 72.2853 49.4991 72.2853 48V4.57146C72.2853 3.0724 71.0701 1.85718 69.571 1.85718Z"
                        stroke="#D61426"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M31.571 50.7144L26.1424 64.2859M42.4282 50.7144L47.8567 64.2859M20.7139 64.2859H53.2853M23.4282 29.0001L34.2853 37.143L53.2853 15.4287"
                        stroke="#D61426"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <h1 className="w-[250px] md:w-[313px] md:h-[113px] shrink-0 text-[28px] md:text-[44px] text-[#D61426] not-italic font-medium leading-[normal]">
                  {" "}
                  Proven <p className="text-white ">Methodology</p>
                </h1>
              </section>
              <div className=" w-[250px] md:w-[533px] text-white text-sm md:text-2xl not-italic font-normal leading-[normal] mt-8 ">
                <ul className="gap-4 flex flex-col">
                  <li className="animated-service">
                    Our well-defined AI/ML methodology has a track record of
                    delivering successful outcomes.
                  </li>
                  <li className="animated-service2">
                    You can trust in our structured approach to achieve your
                    desired results.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex">
            <img src={rec5} className="  ml-40 " alt="" />
            <img
              src={rec6}
              className="absolute top-48 animated-img-2 "
              alt=""
            />
          </div>
        </div>
      </div>

      <Approaches />
    </div>
  );
};

export default AboutUs;
