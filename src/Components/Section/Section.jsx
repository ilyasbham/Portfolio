import React from 'react'
import img from '../../assets/mine.jpg' 

const Section = () => {
  return (
    <div className='bg-black h-svh relative w-full flex items-center justify-center text-white'>
        <div className='bg-gray-900 w-240 h-100 flex'>

 <div className="w-full h-100 md:w-1/2 flex justify-center">
                    <img className="w-2/3 md:w-3/4 object-cover p-4      " src={img} alt="" />
                  </div>
            <div className="w-full md:w-1/2">
                    <h1 className="text-2xl md:text-6xl font-bold">
                      Hello I am Software Engineer
                    </h1>
            
                    <p className="text-sm md:text-2xl mt-4">
                      A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                      I make meaningful and delightful digital products that create an equilibrium
                      between user needs and business goals.        </p>
            
                    <div className="flex gap-6 mt-6">
                      <button className="mt-5 py-2 px-4 rounded-3xl bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:scale-105 duration-300 cursor-pointer ">
                        Contact Me
                      </button>
            
            
                      <a
                        href="/cv.pdf"
                        download
                        className="mt-5 inline-block py-2 px-4 rounded-3xl bg-cyan-500 shadow-lg shadow-cyan-500/50  hover:scale-105 duration-300 cursor-pointer"
                      >
                        DOWNLOAD CV
                      </a>
                    </div>
                  </div>
            
                 
            

        </div>
    </div>
  )
}

export default Section