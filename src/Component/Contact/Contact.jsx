import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MdArrowCircleRight } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import smile from '../Image/Other/smile.png';

function Contact() {
  const headRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);

  const headView = useInView(headRef, { once: false, amount: 0.5 });
  const textView = useInView(textRef, { once: false, amount: 0.5 });
  const formView = useInView(formRef, { once: false, amount: 0.6 });

  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const formVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const [form,setFrom] = useState({
    name:'',
    email:'',
    message:''
  })

  const handleChange = (e)=>{
    setFrom({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setFrom({
    name:'',
    email:'',
    message:''
  })
  }

  return (
    <div className='w-full mt-10 px-4' id='contact'>
      {/* Heading */}
      <motion.div
        className='flex justify-center gap-2 items-center'
        ref={headRef}
        initial={{ scale: 1 }}
        animate={headView ? { scale: 1.2 } : { scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1 className='text-2xl sm:text-3xl md:text-4xl uppercase font-semibold text-center'>
          Let's <span className='text-emerald-400'>Talk</span>
        </h1>
        <img src={smile} alt="About-Icon" className='h-10 sm:h-12 md:h-14' />
      </motion.div>

      {/* Form and Contact Info */}
      <div className='w-full flex flex-col md:flex-row justify-center gap-8 mt-10'>

        {/* Contact Info */}
        <motion.div
          className='w-full md:w-1/2 lg:w-1/4 min-h-96 flex flex-col justify-center gap-6'
          variants={textVariant}
          ref={textRef}
          animate={textView ? "visible" : "hidden"}
        >
          <motion.div 
          className='flex items-center gap-2 cursor-pointer'
          whileHover={{
            x: 10, // moves 10px to the right
            transition: { type: "spring", stiffness: 300 }
          }}
          >
            <PiPhoneCallFill className='text-xl text-blue-500' />
            <h1 className='text-base text-gray-400 font-semibold'>8744908898</h1>
          </motion.div>
          <motion.div 
          className='flex items-center gap-2 cursor-pointer'
          whileHover={{
            x:10,
            trasnition:{type:"spring", stiffness:300}
          }}
          >
            <MdEmail className='text-xl text-blue-500' />
            <h1 className='text-base text-gray-400 font-semibold'>  Laxmanbaisoya004@gmail.com</h1>
          </motion.div>
          <motion.div 
          className='flex items-center gap-2 cursor-pointer'
          whileHover={{
            x:10,
            transition:{type:"spring",stiffness:300}
          }}
          >
            <IoLogoLinkedin className='text-xl text-blue-500' />
            <h1 className='text-base text-gray-400 font-semibold'>example@gmail.com</h1>
          </motion.div>
          <div className='flex gap-4 items-center mt-4'>
            <a href="https://github.com/Lucky-Code-01" target='_black' rel="noopener noreferrer"><FaGithub className='text-2xl cursor-pointer text-blue-400' /></a>
            <FaLinkedin className='text-2xl cursor-pointer text-blue-400' />
            <FaInstagram className='text-2xl cursor-pointer text-blue-400' />
          </div>
        </motion.div>

        {/* Form Box */}
        <motion.div
          className='w-full md:w-1/2 lg:w-1/3 min-h-96'
          ref={formRef}
          variants={formVariant}
          animate={formView ? "visible" : "hidden"}
        >
          <p className='text-white font-semibold text-sm sm:text-base'>
            Whether you're building a new website, improving your existing platform, or have a unique idea — I'm here to help.
            Also Connect With Gmail..!
          </p>

          {/* Form */}
          <form className='mt-6 flex flex-col space-y-4 w-full'>
            <div>
              <label className='font-semibold text-sm sm:text-base'>Full Name</label>
              <input type="text" name="name" value={form.name} placeholder='Enter your name'
                className='w-full bg-white text-gray-600 font-semibold py-2 px-3 rounded mt-1' onChange={handleChange}/>
            </div>
            <div>
              <label className='font-semibold text-sm sm:text-base'>Email Address</label>
              <input type="email" name="email" value={form.email} placeholder='Enter your email'
                className='w-full bg-white text-gray-600 font-semibold py-2 px-3 rounded mt-1' onChange={handleChange}/>
            </div>
            <div>
              <label className='font-semibold text-sm sm:text-base'>Your Message</label>
              <textarea rows={3} name='message' value={form.message} placeholder='Share your thoughts...'
                className='w-full bg-white text-gray-600 font-semibold py-2 px-3 rounded mt-1' onChange={handleChange}/>
            </div>
            <div>
              <div className="inline-flex p-[2px] rounded-3xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" onClick={handleSubmit}>
                <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-black rounded-3xl text-white text-sm sm:text-base">
                  Let's Talk
                  <MdArrowCircleRight size={18} className='text-blue-500' />
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
