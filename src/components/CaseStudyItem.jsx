import React,{useEffect, useState} from 'react'
import aboutvector1 from "../assets/about-vetor1.svg";
import triangle from '../assets/Polygon 1.png'
import caseStudy from '../assets/caseStudy-img.png'
import gpt from '../assets/gpt.svg'
import { useParams } from 'react-router-dom';

const CaseStudyItem = ({title , problems,solution,obstacles,tools,coverImage,classname}) => {

    useEffect(() => {
    
        window.scrollTo(0, 0);
    
      }, []);

  return (
    <div className='text-white font-Sg md:mt-24 w-full md:pt-[16vh] '>
        
        <div className='absolute left-[50%] md:left-[56%] md:top-[1%] lg:top-[1%] -translate-x-[50%] h-[5rem] md:h-[15rem] flex items-center z-10'>
            <img src={aboutvector1} alt="" className='h-full absolute -left-[30%] md:-left-[35%] top-0 z-1'/>
            <div className='z-5 relative text-[28px] md:text-[50px] lg:text-[64px] font-bold'>
                <h1 className='font-bold'>{title.first}</h1>
                <div className='flex items-center gap-5'>
                    <h1 className='font-bold'>{title.second}</h1>
                    <img src={triangle} alt="" className='w-[15%] md:w-full '/>
                    <img src={triangle} alt="" className='w-[15%] md:w-full ' />
                </div>
            </div>
        </div>

        {/* Problemm */}
        <div className='red-gradient px-12 md:px-32 py-32  sm:pb-[30vh] md:pb-[40vh] lg:pb-[50vh] relative z-5'>
            <h2 className='text-2xl sm:text-5xl font-semibold'>Problems</h2>
            <ol className='md:text-2xl lg:text-3xl mt-4 sm:mt-12 list-decimal'>
                {
                    problems.map((element,index)=>{
                        return (
                            <li className='mt-4' key={`problem ${index}`}>{element}</li>
                        )
                    })
                }
            </ol>
            <div className='absolute -bottom-[8%]  md:-bottom-[10%] lg:-bottom-[28%] left-[50%] -translate-x-[50%] w-[60%] z-5'>
                <img src={coverImage} alt="" className={`w-full h-full object-contain aspect-video ${classname}`} />
            </div>
        </div>

        {/* Solution */}

        <div className='red-gradient px-12 md:px-32 py-32 md:py-48 md:pt-[44vh] z-2 '>
            <h2 className='text-2xl sm:text-5xl font-semibold'>Solution</h2>
            <p className='md:text-2xl lg:text-3xl mt-4 md:mt-10'>
                {solution}
            </p>
        </div>

        {/* Obstacle Faced */}

        <div className='px-12 md:px-32 py-20'>

            <h2 className='text-2xl sm:text-5xl font-semibold'>Obstacles Faced</h2>

            <ol className='md:text-2xl lg:text-3xl mt-4 sm:mt-12 list-decimal'>
                {
                    obstacles.map((element,index)=>{
                        return (
                            <li className='mt-4' key={`obstacle ${index}`}>{element}</li>
                        )
                    })
                }

            </ol>


        </div>

        <div className='px-12 md:px-32 py-10 md:py-20'>
            <h2 className='text-5xl '>Tools Used</h2>

            <div className='flex justify-around items-center mt-8 md:mt-16 gap-6'>

                <div className='flex items-center gap-2 lg:gap-8'>
                    <div className='bg-[#ffffff] h-[30px] w-[30px] md:h-auto md:w-auto p-1 md:p-1 rounded-md flex items-center justify-center'>
                        <img src={gpt} alt="" className='md:h-full md:w-full'/>
                    </div>
                    <div className='md:text-2xl lg:text-3xl'>
                        GPT
                    </div>
                </div>
                {
                    tools.map((tool,index)=>{
                        return(

                        <div className='flex items-center gap-2 lg:gap-8 ' key={`tool ${index}`}>
                            <div className='bg-[#ffffff] h-[30px] w-[30px] md:h-auto md:w-auto md:p-4 rounded-md flex items-center justify-center'>
                                <img src={tool.image} alt="" className='h-full w-full'/>
                            </div>
                            <div className='md:text-2xl lg:text-3xl'>
                                {tool.name}
                            </div>
                        </div>
                        )
                    })
                }
               
                {/* <div className='flex items-center gap-2 lg:gap-8'>
                    <div className='bg-[#ffffff] p-1 md:p-4 rounded-md flex items-center justify-center'>
                        <img src={gpt} alt="" className='md:h-full md:w-full'/>
                    </div>
                    <div className='md:text-2xl lg:text-3xl'>
                        Chat GPT
                    </div>
                </div>
                <div className='flex items-center gap-2 lg:gap-8'>
                    <div className='bg-[#ffffff] p-1 md:p-4 rounded-md flex items-center justify-center'>
                        <img src={gpt} alt="" className='md:h-full md:w-full'/>
                    </div>
                    <div className='md:text-2xl lg:text-3xl'>
                        Chat GPT
                    </div>
                </div> */}
    
            </div>
        </div>


    </div>
  )
}

export default CaseStudyItem