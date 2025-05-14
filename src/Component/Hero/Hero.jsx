import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import './Hero.css'
export default function Hero() {
  const currentDiv = useRef(null);

  // live value
  const userX = useMotionValue(0);
  const userY = useMotionValue(0);

  const rotateX = useTransform(userX, [0, 300], [15, -15]);
  const rotateY = useTransform(userY, [0, 300], [15, -15]);

  const handleMouseMove = (e) => {
    const react = currentDiv.current.getBoundingClientRect();
    const x = e.clientX - react.left;
    const y = e.clientY - react.top;
    userX.set(x);
    userY.set(y);
  }

  const handleMouseLeave = () => {
    userX.set(150); // reset to center
    userY.set(150);
  };

  return (
    <div className='w-full min-h-full p-2 flex flex-col items-center gap-4 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-10 overflow-hidden' id="home">
      {/* image section  */}
      <motion.div className='w-80 h-96 cursor-pointer lg:w-96 '
        ref={currentDiv}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src={"https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100221.jpg?ga=GA1.1.1347283698.1647342753&semt=ais_hybrid&w=740"}
          alt=""
          className='w-full h-full rounded shadow-lg object-cover'
        />
      </motion.div>
      {/* text section */}
      <motion.div
        className='w-full flex flex-col px-2 lg:w-1/2'
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1,ease:"easeOut"}}
        >
        <div><span className='bg-emerald-400 text-xl text-black px-2 py-0.5 lg:py-1 rounded font-semibold'>Laxman Baisoya</span></div>
        <h1 className='text-3xl font-semibold mt-1'>Hey I'm Laxman Baisoya</h1>
        <div className='main-box'>
          <h3 className='static-text'>I'm a </h3>
          <ul className='link-div'>
            <li><span>Web developer</span></li>
            <li><span>Software Developer</span></li>
            <li><span>Programmer</span></li>
            <li><span>Desginer</span></li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-lg font-semibold'>I’m a passionate Full Stack Developer with a Bachelor’s degree in Computer Applications (BCA) from IGNOU. I love building modern, scalable web applications that solve real-world problems. From creating responsive frontends to managing robust backends, I enjoy working across the full development stack. Let's build something amazing together.</p>
          <div className='flex gap-5 items-center'>
            <div><FaGithub className='text-2xl cursor-pointer text-emerald-400' /></div>
            <div><FaLinkedin className='text-2xl cursor-pointer text-emerald-400' /></div>
            <div><FaInstagram className='text-2xl cursor-pointer text-emerald-400' /></div>
          </div>
        </div>
        <div className='flex items-center'>
          <a href="/WebResume.pdf" download="/WebResume.pdf" target='_blank' rel="noopener noreferrer">
            <div className='text-3xl font-semibold mt-2'>Download <span className='text-emerald-400 cursor-pointer'>Resume </span></div>
          </a>
            <MdOutlineArrowOutward size={18} className='text-emerald-400'/>
        </div>
      </motion.div>

    </div>
  )
}