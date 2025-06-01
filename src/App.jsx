import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Middle from './Component/Middle/Middle'
import Project from './Component/Project/Project'
import About from './Component/About/About'
import Skills from './Component/Skills/Skills'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import { useScroll,motion } from 'framer-motion'
export default function App() {
  const {scrollYProgress} = useScroll();
  return (
    <div className='bg-[#0F172A] text-gray-300 min-h-screen w-full overflow-hidden'>
      <motion.div id="scroll" style={{scaleX:scrollYProgress}}>
      </motion.div>
      <Navbar/>
      <Hero/>
      <Middle/>
      <Project/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}
