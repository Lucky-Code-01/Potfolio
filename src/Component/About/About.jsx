import { motion, useInView } from 'framer-motion';
import about from '../Image/Other/aboutme.png';
import study from '../Image/Other/Study.png';
import { MdOutlineArrowOutward } from "react-icons/md";
import { useRef } from 'react';

function About() {
  const currentRef1 = useRef(null);
  const currentRef2 = useRef(null);
  const currentRef3 = useRef(null);

  const view1 = useInView(currentRef1, { once: false, amount: 0.5 });
  const view2 = useInView(currentRef2, { once: false, amount: 0.5 });
  const view3 = useInView(currentRef3, { once: false, amount: 0.5 });

  const imageVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className='w-full mt-10 px-4' id='about'>
      {/* heading */}
      <motion.div
        className='flex justify-center gap-2 items-center'
        ref={currentRef1}
        initial={{ scale: 1 }}
        animate={view1 ? { scale: 1.2 } : { scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className='text-2xl sm:text-3xl md:text-4xl uppercase font-semibold text-center'>
          About <span className='text-emerald-400'>Me</span>
        </h1>
        <img src={about} alt="About-Icon" className='h-10 sm:h-12 md:h-14' />
      </motion.div>

      {/* about section */}
      <div className='w-full flex flex-col md:flex-row justify-center items-center gap-10 mt-10'>
        {/* text section */}
        <motion.div
          className='w-full md:w-1/2'
          ref={currentRef2}
          variants={textVariant}
          animate={view2 ? "visible" : "hidden"}
        >
          <h1 className='text-2xl sm:text-3xl font-semibold'>Hey I'm Laxman Baisoya</h1>
          <p className='mt-2 text-gray-400 font-semibold'>
            I'm a Full Stack Developer with a passion for building web apps using the MERN stack. My journey started in college when I created my first website for fun — since then, I’ve never looked back.
          </p>
          <p className='mt-2 text-gray-400 font-semibold'>
            I love working on meaningful projects that solve real-world problems. Recently, I built apps like StaffSync, Notenation, and Resume Builder.
          </p>
          <p className='mt-2 text-gray-400 font-semibold'>
            When I’m not coding, you’ll find me playing chess, exploring tech YouTube channels, or experimenting with UI design.
          </p>
          <p className='mt-2 text-gray-400 font-semibold'>
            I'm always excited to learn new things and collaborate with like-minded people!
          </p>
          <div className="inline-flex mt-3 p-[2px] rounded-3xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
            <a href="#contact">
              <div className="flex items-center gap-2 px-4 py-1 bg-black rounded-3xl text-white">
                <button className='text-sm sm:text-base'>Let's Talk </button>
                <MdOutlineArrowOutward size={18} />
              </div>
            </a>
          </div>
        </motion.div>

        {/* image section */}
        <motion.div
          className='w-full md:w-1/3'
          ref={currentRef3}
          variants={imageVariant}
          animate={view3 ? "visible" : "hidden"}
        >
          <img src={study} alt="study" className='w-full max-w-sm mx-auto md:mx-0' />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
