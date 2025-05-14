import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import html from '../Image/Skill/html.png';
import css from '../Image/Skill/css.png';
import js from '../Image/Skill/js.png';
import react from '../Image/Skill/react.png';
import c from '../Image/Skill/c1.png';
import cplus from '../Image/Skill/c++1.png';
import github from '../Image/Skill/github.png';
import mongodb from '../Image/Skill/mongodb.png';
import node from '../Image/Skill/node1.png';
import python from '../Image/Skill/python1.png';
import redux from '../Image/Skill/redux.png';
import express from '../Image/Skill/express.png'

const logos = [
  html,
  css,
  js,
  react,
  c,
  cplus,
  github,
  mongodb,
  node,
  python,
  redux,
  express
];

const AutoPauseSlider = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear"
          }
        }
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <div
      className="overflow-hidden w-full sm:w-3/4 md:w-1/2 bg-[#0A0F2C] py-6 rounded-md"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-6 sm:gap-10 md:gap-12 min-w-max"
        animate={controls}
        ref={sliderRef}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center"
          >
            <img src={logo} alt="tech-logo" className="w-full h-full object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoPauseSlider;