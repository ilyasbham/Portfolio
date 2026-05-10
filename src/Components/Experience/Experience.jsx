import React from 'react'
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs,
  FaNodeJs, FaJava, FaDocker, FaGithub, FaAmazon
} from 'react-icons/fa'

import {
  SiExpress, SiC, SiKotlin, SiMongodb,
  SiMysql, SiPostgresql, SiSqlite,
  SiTensorflow, SiPytorch, SiAndroidstudio, SiNetflix
} from 'react-icons/si'

import { FcGoogle } from 'react-icons/fc'
import SectionWrapper from '../SectionWrapper'

import "swiper/css"


const Experience = () => {
  return (
    <div id='experience' className='w-full h-svh text-white flex flex-col gap-10 p-6 md:p-10'>

      {/* TITLE */}
      <div className='flex justify-center items-center'>
        <SectionWrapper>
          <h2 className="section-title text-gradient">My Skills</h2>
        </SectionWrapper>
      </div>

     

        {/* SWIPER ICONS */}
        
        {/* CONTINUOUS MARQUEE ICONS */}
<div className="overflow-hidden w-full py-10">
  <div className="flex gap-10 animate-marquee">

    {[
      <FaReact className="text-cyan-400 text-4xl" />,
      <FaHtml5 className="text-orange-500 text-4xl" />,
      <FaCss3Alt className="text-blue-500 text-4xl" />,
      <FaJs className="text-yellow-400 text-4xl" />,
      <FaNodeJs className="text-green-500 text-4xl" />,
      <SiExpress className="text-gray-300 text-4xl" />,
      <FaJava className="text-red-500 text-4xl" />,
      <SiC className="text-blue-400 text-4xl" />,
      <SiKotlin className="text-purple-400 text-4xl" />,
      <SiMongodb className="text-green-500 text-4xl" />,
      <SiMysql className="text-blue-400 text-4xl" />,
      <SiPostgresql className="text-indigo-400 text-4xl" />,
      <SiSqlite className="text-gray-400 text-4xl" />,
      <SiTensorflow className="text-orange-400 text-4xl" />,
      <SiPytorch className="text-red-400 text-4xl" />,
      <FaDocker className="text-blue-400 text-4xl" />,
      <FaGithub className="text-gray-200 text-4xl" />,
      <SiAndroidstudio className="text-green-400 text-4xl" />
    ]
      
      .concat([
       <FaReact className="text-cyan-400 text-4xl" />,
      <FaHtml5 className="text-orange-500 text-4xl" />,
      <FaCss3Alt className="text-blue-500 text-4xl" />,
      <FaJs className="text-yellow-400 text-4xl" />,
      <FaNodeJs className="text-green-500 text-4xl" />,
      <SiExpress className="text-gray-300 text-4xl" />,
      <FaJava className="text-red-500 text-4xl" />,
      <SiC className="text-blue-400 text-4xl" />,
      <SiKotlin className="text-purple-400 text-4xl" />,
      <SiMongodb className="text-green-500 text-4xl" />,
      <SiMysql className="text-blue-400 text-4xl" />,
      <SiPostgresql className="text-indigo-400 text-4xl" />,
      <SiSqlite className="text-gray-400 text-4xl" />,
      <SiTensorflow className="text-orange-400 text-4xl" />,
      <SiPytorch className="text-red-400 text-4xl" />,
      <FaDocker className="text-blue-400 text-4xl" />,
      <FaGithub className="text-gray-200 text-4xl" />,
      <SiAndroidstudio className="text-green-400 text-4xl" />
      ])
      .map((icon, index) => (
        <div
          key={index}
          className="flex items-center justify-center hover:scale-125 transition duration-300"
        >
          {icon}
        </div>
      ))}

  </div>
</div>

        {/* EXPERIENCE CARDS */}
        <div className='flex flex-col gap-6 w-full'>

          <div className='bg-[#171d45] p-4 rounded-lg flex gap-4'>
            <FcGoogle className="text-3xl" />
            <div>
              <h2 className='font-bold'>Software Engineer, Google</h2>
              <p className='text-xs'>Worked on web apps using React & Node.js.</p>
            </div>
          </div>

          <div className='bg-[#171d45] p-4 rounded-lg flex gap-4'>
            <SiNetflix className="text-red-600 text-3xl" />
            <div>
              <h2 className='font-bold'>Software Engineer, Netflix</h2>
              <p className='text-xs'>Worked on scalable systems.</p>
            </div>
          </div>

          <div className='bg-[#171d45] p-4 rounded-lg flex gap-4'>
            <FaAmazon className="text-yellow-500 text-3xl" />
            <div>
              <h2 className='font-bold'>Software Engineer, Amazon</h2>
              <p className='text-xs'>Built cloud-based solutions.</p>
            </div>
          </div>

        </div>

      </div>
    
  )
}

export default Experience