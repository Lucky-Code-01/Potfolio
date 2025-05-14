import Skill from '../Image/Other/Skill.png';
import Slider from '../Slider/Slider.jsx';
import { MdOutlineComputer } from "react-icons/md";
import { VscCodeReview } from "react-icons/vsc";
import Earth from '../Image/Other/earth.png';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

function Skills() {
  const headRef = useRef(null);
  const ishead = useInView(headRef, { once: false, amount: 0.5 });

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const imageRef = useRef(null);
  const istext1 = useInView(textRef1, { once: false, amount: 0.5 });
  const istext2 = useInView(textRef2, { once: false, amount: 0.5 });
  const isimage = useInView(imageRef, { once: false, amount: 0.5 });

  const textVariant1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const textVariant2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const imageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className='w-full mt-10 px-4'>
      {/* Heading */}
      <motion.div
        className='flex justify-center gap-2 items-center'
        ref={headRef}
        initial={{ scale: 1 }}
        animate={ishead ? { scale: 1.2 } : { scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className='text-2xl sm:text-3xl md:text-4xl mt-4 uppercase font-semibold text-center'>
          My <span className='text-emerald-400'>Skills</span>
        </h1>
        <img src={Skill} alt="About-Icon" className='h-10 sm:h-12 mb-2 md:h-14' />
      </motion.div>

      {/* Skills section */}
      <div className='w-full mt-10 flex flex-col justify-around md:flex-row items-center gap-10'>
        {/* Text1 box */}
        <motion.div
          className='w-full md:w-1/3'
          ref={textRef1}
          variants={textVariant1}
          animate={istext1 ? "visible" : "hidden"}
          initial="hidden"
        >
          <div className='flex items-center gap-2'>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Designer
            </h1>
            <MdOutlineComputer className='text-2xl sm:text-3xl text-blue-500' />
          </div>
          <p className='text-sm sm:text-base font-semibold text-gray-400 mt-2'>
            I have expertise in HTML, CSS, JAVASCRIPT, and design Amazon Clon Netflix Clon. My strength lies in blending aesthetics with functionality to create seamless user experiences.
          </p>
        </motion.div>

        {/* Image box */}
        <motion.div
          className='w-[80%] sm:w-[60%] md:w-[30%] h-60 sm:h-80 md:h-96'
          ref={imageRef}
          variants={imageVariant}
          animate={isimage ? "visible" : "hidden"}
          initial="hidden"
        >
          <img src={Earth} alt="earth" className='w-full h-full object-contain' />
        </motion.div>

        {/* Text2 box */}
        <motion.div
          className='w-full md:w-1/3'
          ref={textRef2}
          variants={textVariant2}
          animate={istext2 ? "visible" : "hidden"}
          initial="hidden"
        >
          <div className='flex items-center gap-2'>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Coder
            </h1>
            <VscCodeReview className='text-2xl sm:text-3xl text-blue-500' />
          </div>
          <p className='text-sm sm:text-base font-semibold text-gray-400 mt-2'>
            I'm skilled in HTML, CSS, JavaScript, and frameworks like React and Node.js. I also have experience with database management using MongoDB and MySQL.
          </p>
        </motion.div>
      </div>

      {/* Slider */}
      <div className='w-full mt-10 flex justify-center px-2 sm:px-4 md:px-10'>
        <Slider />
      </div>
    </div>
  );
}

export default Skills;