import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Home", "Projects", "About", "Contact"];

    const menuVariant = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const parentVarient = {
        hidden:{},
        visible:{
            transition:{
                staggerChildren:0.2
            }
        }
    }

    const chlidVarient = {
        hidden:{opacity :0,y:-20},
        visible:{opacity:1,y:0,transition:{duration:0.5, ease:'easeOut'}}
    }

    return (
        <motion.nav className="relative bg-[#1F2937] h-20 w-full flex justify-between items-center px-6 md:px-12" variants={parentVarient} initial="hidden"
        animate="visible"> 
            {/* Logo */}
            <motion.div className="text-white text-4xl font-semibold cursor-pointer" variants={chlidVarient}>
                Laxman <span className='text-emerald-400'>Baisoya</span>
            </motion.div>

            {/* Hamburger Icon (Only visible when menu is closed) */}
            {!isOpen && (
                <button className="md:hidden text-white text-2xl z-20" onClick={() => setIsOpen(true)}>
                    <IoMdMenu/>
                </button>
            )}

            {/* Full-screen Menu Overlay */}
            {isOpen && (
                <motion.div 
                    className="fixed top-0 left-0 w-full h-screen bg-[#0F172A] flex flex-col items-center justify-center space-y-6 z-10"
                    variants={menuVariant}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Close Button (Only visible when menu is open) */}
                    <button className="absolute top-6 right-6 text-gray-300 text-3xl" onClick={() => setIsOpen(false)}>
                        ✖
                    </button>

                    {/* Navigation Links */}
                    {navLinks.map((data, index) => (
                        <motion.div key={index} 
                            className="text-3xl text-white font-semibold cursor-pointer hover:text-emerald-400 transition duration-300"
                            whileHover={{ scale: 1.1 }}
                            onClick={() => setIsOpen(false)}
                        >
                            <a href={`#${data.toLowerCase()}`}>{data}</a>
                        </motion.div>
                    ))}
                </motion.div>
            )}

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
                {navLinks.map((data, index) => (
                    <motion.li key={index} className="text-white cursor-pointer text-2xl hover:text-emerald-400" variants={chlidVarient}>
                        <a href={`#${data.toLowerCase()}`}>{data}</a>
                    </motion.li>
                ))}
            </ul>
        </motion.nav>
    );
}

export default Navbar;