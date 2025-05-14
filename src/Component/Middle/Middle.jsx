import { motion } from 'framer-motion';
import html from '../Image/Skill/html.png';
import css from '../Image/Skill/css.png';
import react from '../Image/Skill/react.png';
import js from '../Image/Skill/js.png';
import mern from '../Image/Skill/mern1.png';
import fire from '../Image/Other/fire.png';


function Middle() {
  const parentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const childVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] // easeOutCubic
      }
    }
  };

  const technologies = [
    {
      name: "HTML",
      logo: html,
      definition: "HTML is the standard language used to create and structure content on the web."
    },
    {
      name: "CSS",
      logo: css,
      definition: "CSS is used to style and layout web pages, including colors, fonts, and spacing."
    },
    {
      name: "JavaScript",
      logo: js,
      definition: "JavaScript is a scripting language used to create dynamic and interactive web content."
    },
    {
      name: "React",
      logo: react,
      definition: "React is a JavaScript library for building user interfaces, maintained by Meta."
    },
    {
      name: "MERN Stack",
      logo: mern,
      definition: "MERN Stack is a JavaScript-based stack comprising MongoDB, Express, React, and Node.js."
    }
  ];

  return (
    <div className="w-full py-8 px-4 lg:mt-10">
        {/* Heading */}
      <motion.div 
      className='flex justify-center items-center gap-2'
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <h1 className="text-3xl sm:text-4xl uppercase font-semibold text-center">
            Top <span className="text-emerald-400">Skills</span>
        </h1>
        <img src={fire} alt="" className='h-10 sm:h-12 md:h-14' />
      </motion.div>

      {/* Responsive Cards */}
      <motion.div
        className="w-full flex flex-wrap justify-center gap-6 mt-10"
        variants={parentVariant}
        initial="hidden"
        animate="visible"
      >
        {technologies.map((data, index) => (
          <motion.div
            key={index}
            variants={childVariant}
            className="w-72 sm:w-64 min-h-[200px] border border-gray-500 shadow-[0px_4px_10px_rgba(255,255,255,0.2)] flex flex-col items-center gap-4 p-6 rounded-xl bg-[#0f172a] hover:shadow-[0px_6px_20px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            <img src={data.logo} alt={data.name} className="w-20 h-20 object-contain" />
            <p className="font-medium text-sm text-gray-300 text-center">
              {data.definition}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Middle;
