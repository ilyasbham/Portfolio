import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Education from './Components/Education/Education.jsx'
import Contact from './Components/Contact-me/Contact.jsx'
import Particle from './Components/ParticleBackground/ParticleBg.jsx'
import Skill from './Components/Skill/Skill.jsx'
import CustomCursor from './Components/Cursor/CustomCursor.jsx'
import Reviews from './Components/Review/Reviews.jsx'

function App() {


  document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
  return (
<div className="relaive bg-black  min-h-screen w-full  overflow-x-hidden">
      <Particle/>
      <CustomCursor/>
      <Navbar />
      <Home />
      
      <About />
      <Experience />
      <Skill/>
      <Projects />
       <Reviews/>
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App