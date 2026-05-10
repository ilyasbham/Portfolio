import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Footer = () => {
  return (
    <div
      id='footer'
      className='w-full text-white py-16 flex flex-col items-center justify-center'
    >
      {/* Title */}
      <h1 className='section-title text-gradient text-4xl font-bold'>
        Contact Me
      </h1>

      <p className='mt-3 text-gray-300 text-center max-w-xl'>
        Feel free to reach out for collaborations, internships, projects,
        or just to connect.
      </p>

      {/* Buttons */}
      <div className='flex flex-wrap gap-5 mt-8 justify-center'>

        {/* GitHub */}
        <a
          href='https://github.com/ilyasbham'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 hover:bg-white/20 transition duration-300 shadow-lg'
        >
          <FaGithub className='text-3xl' />
          <span className='text-lg font-medium'>GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href='https://www.linkedin.com/in/zin-ko-ko-latt-22b30438a/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-3 px-6 py-3 rounded-2xl bg-blue-500/20 border border-blue-400/30 hover:scale-105 hover:bg-blue-500/30 transition duration-300 shadow-lg'
        >
          <FaLinkedin className='text-3xl text-blue-400' />
          <span className='text-lg font-medium'>LinkedIn</span>
        </a>

        {/* Gmail */}
        <a
          href='mailto:ilyasbham1@gmail.com'
          className='flex items-center gap-3 px-6 py-3 rounded-2xl bg-red-500/20 border border-red-400/30 hover:scale-105 hover:bg-red-500/30 transition duration-300 shadow-lg'
        >
          <FcGoogle className='text-3xl' />
          <span className='text-lg font-medium'>Email Me</span>
        </a>

      </div>

      {/* Bottom Text */}
      <p className='mt-10 text-sm text-gray-400 text-center'>
        © 2026 ZIN KO KO LATT | Final Year Computer Engineering Student
      </p>
    </div>
  )
}

export default Footer