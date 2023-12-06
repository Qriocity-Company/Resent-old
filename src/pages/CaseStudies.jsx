import React, { useEffect, useState } from 'react'
import CaseStudyItem from '../components/CaseStudyItem'
import { useParams } from 'react-router-dom';

import js from '../assets/icons8-js.svg'
import sheets from '../assets/icons8-google-sheets.svg'
import python from '../assets/icons8-python.svg'

import documentation from '../assets/documentation-img.png'
import analytics from '../assets/data-analyticsImg.png'
import healthcare from '../assets/healthcare.png'

const CaseStudies = () => {


  const [caseStudy,setCaseStudy]  = useState([
    {
      "classname":"documentation",
      "title": {"first":"Document","second":"Automation"},
      "coverImage": documentation,
      "problem": [
        "Traditional documentation often requires significant manual effort for creation, editing, and distribution.",
        "Human error is inevitable, leading to inaccuracies in documentation.",
        "Difficulty in managing and tracking multiple versions of documents, especially in collaborative environments.",
        "Physical documentation may not be easily accessible to remote or geographically dispersed teams. Lack of real-time collaboration capabilities.",
        "As organizations grow, manual documentation processes may struggle to scale efficiently."
      ],
      "solution": "Implementing Artificial Intelligence (AI) for documentation automation addresses manual inefficiencies by streamlining tasks, reducing errors, and fostering collaboration. It ensures scalability, diminishes reliance on experts, and contributes to environmental sustainability. The shift to AI signifies a transformative leap towards heightened productivity, precision, and eco-friendly information management.",
      "obstacles": [
        "Introducing AI documentation systems may face challenges in integration with existing infrastructure, requiring careful planning and execution.",
        "Ensuring accurate and high-quality data input poses a challenge, as AI documentation heavily relies on the integrity of the information it processes.",
        "Overcoming resistance to change and providing adequate training for employees to effectively utilize AI-powered documentation tools can be a significant challenge."
      ],
      "tools": [
        
        { "name": "JavaScript", "image": js },
        { "name": "Python", "image": python }
      ]
    },
    {
      "classname":"analytics",
      "title": {"first":"Customer Data","second":"Analytics"},
      "coverImage": analytics,
      "problem": [
        "Challenges in processing and analyzing vast volumes of customer data manually.",
        "Difficulty in extracting meaningful insights and patterns from complex datasets.",
        "Inability to provide personalized recommendations, hindering customer engagement.",
        "Struggling to keep up with the dynamic nature of customer preferences and behavior."
      ],
      "solution": "Our AI-powered customer data analytics solution addresses these challenges by automating data processing, extracting actionable insights, and delivering personalized recommendations. This results in a 25% improvement in customer satisfaction and a substantial boost in overall business performance.",
      "obstacles": [
        "Integration challenges with existing data infrastructure, requiring strategic planning.",
        "Ensuring data privacy and security while implementing advanced analytics algorithms.",
        "Overcoming skepticism and resistance to AI-driven decision-making processes.",
        "Providing comprehensive training to ensure effective utilization of AI tools by the team."
      ],
      "tools": [
        
        { "name": "Google Sheets", "image": sheets },
        { "name": "Python", "image": python }
      ]
    },
    {
      "classname":"healthcare",
      "title": {"first":"AI in","second":"Healthcare"},
      "coverImage": healthcare,
      "problem": [
        "Extended diagnosis times leading to delays in treatment.",
        "Challenges in optimizing treatment plans for individual patients.",
        "Limited efficiency in managing and analyzing vast healthcare data.",
        "Difficulty in staying updated with the latest medical research and advancements."
      ],
      "solution": "Our AI-driven patient care solution addresses these challenges by reducing diagnosis times by 20%, optimizing personalized treatment plans, and incorporating real-time medical research updates. This results in elevated patient care standards and improved overall healthcare efficiency.",
      "obstacles": [
        "Ensuring seamless integration of AI technologies with existing healthcare infrastructure.",
        "Addressing concerns related to data privacy and security in healthcare settings.",
        "Providing comprehensive training for medical professionals to effectively utilize AI tools.",
        "Overcoming resistance to AI adoption in traditional healthcare practices."
      ],
      "tools": [
        
        { "name": "Google Sheets", "image": sheets },
        { "name": "JavaScript", "image": js }
      ]
    }
    
    
  ]);

  const { caseStudyType } = useParams();
  const [index,setIndex]=useState(0);

  useEffect(()=>{

    if(caseStudyType==='documentation'){
      setIndex(0);
    }
    else if(caseStudyType=='dataAnalytics'){
      setIndex(1);
    }
    else{
      setIndex(2);
    }

  },[caseStudyType])

  return (
    <div className='mt-20 w-full md:w-[750px] lg:w-[1440px] font-Sg relative'>
      <CaseStudyItem title={caseStudy[index].title} problems={caseStudy[index].problem} solution={caseStudy[index].solution} obstacles={caseStudy[index].obstacles} tools={caseStudy[index].tools} coverImage={caseStudy[index].coverImage} classname={caseStudy[index].classname}/>
    </div>
  )
}

export default CaseStudies