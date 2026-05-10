import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="w-full fixed top-0 left-0 text-[#be3658] flex items-center justify-between px-6 md:px-20 py-4 ">

      <span className="text-xl font-bold text-white"><span className="text-[#bd3658]">ilyas's</span> Portfolio</span>

      {/* Desktop */}
      <ul className="hidden md:flex gap-10 text-lg font-semibold cursor-pointer">
        <li onClick={() => scrollToSection('about')} className="hover:text-fuchsia-600">About</li>
        <li onClick={() => scrollToSection('experience')} className="hover:text-fuchsia-600">Experience</li>
        <li onClick={() => scrollToSection('projects')} className="hover:text-fuchsia-600">Projects</li>
        <li onClick={() => scrollToSection('footer')} className="hover:text-fuchsia-600">Contact</li>
                <li onClick={() => scrollToSection('reviews')} className="hover:text-fuchsia-600">Review</li>
                                <li onClick={() => scrollToSection('skills')} className="hover:text-fuchsia-600">Skills</li>


      </ul>

      {/* Mobile Button */}
      <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="w-6 h-0.5 bg-[#bd3658]"></span>
        <span className="w-6 h-0.5 bg-[#bd3658]"></span>
        <span className="w-6 h-0.5 bg-[#bd3658]"></span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-black flex flex-col items-center gap-6 py-6 text-lg font-semibold md:hidden">
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('experience')}>Experience</li>
          <li onClick={() => scrollToSection('projects')}>Projects</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar