import { useRef } from 'react';
import project from '../Image/Other/project.png';
import { MdOutlineArrowOutward } from "react-icons/md";
import { useInView, motion } from 'framer-motion';
import pro1 from '../Image/Project/pro1.png'
import pro2 from '../Image/Project/pro2.png'
import pro3 from '../Image/Project/pro3.png'
import pro4 from '../Image/Project/pro4.png'
import pro5 from '../Image/Project/pro5.png'

function Project() {
    const projectList = [
        {
            logo: pro5,
            heading: 'Veggroco – Fresh Groceries at Your Fingertips',
            text: "A clean and responsive static website for an online grocery experience. Showcases categories, featured items, and a modern UI. Built for speed, simplicity, and design aesthetics.",
            link:'https://grocery-beige.vercel.app/'
        },
        {
            logo: pro1,
            heading: 'Staffsync – Efficient Work Management',
            text: "Staffsync is a seamless work management platform featuring both an admin and an employee portal. The admin can easily assign tasks to employees, and employees can effortlessly access and track their work progress through a personalized dashboard. A simple yet effective solution for task management and workflow organization.",
            link : 'https://staffsync-seven.vercel.app/'
        },
        {
            logo: pro2,
            heading: 'TestSeries – Comprehensive Test Paper Catalog',
            text: "TestSeries is a static website showcasing a wide range of test papers available for users. It helps users explore various types of test papers, providing a simple and user-friendly interface.",
            link:'https://test-series-neon.vercel.app/'
        },
        {
            logo: pro3,
            heading: 'Resume Builder – Create Your Perfect Resume',
            text: "Resume Builder is a tool that helps users create a professional resume in no time. Users can customize their resume by changing the color of the headings, dragging and dropping sections, and easily downloading the final version. A quick and efficient way to build a personalized resume with flexibility and ease.",
            link:'https://resume-builder-nu-weld.vercel.app/'
        },
        {
            logo: pro4,
            heading: 'Notify – Your Personal Note-Taking App',
            text: "Notenation is a simple yet powerful note-taking app that allows users to create, edit, and manage their notes. Users can track the word count, change the color of the notes, and easily update or delete them as needed. A flexible tool for organizing and personalizing your notes efficiently.",
            link:'https://notenation.vercel.app/'
        },
        
    ];

    const imageVariant = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const textVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const headRef = useRef(null);
    const isheadinView = useInView(headRef,{once:false,amount:0.5})

    return (
        <div className="w-full mt-4 min-h-full overflow-x-hidden" id='projects'>
            <motion.div 
            className='flex justify-center gap-2 items-center px-4'
            ref={headRef}
            initial={{scale:1}}
            animate={isheadinView?{scale:1.1}:{scale:1}}
            transition={{duration:0.5,ease:"easeInOut"}}
            >
                <h1 className='text-2xl sm:text-3xl md:text-4xl uppercase font-semibold text-center'>
                    My <span className='text-emerald-400'>Projects</span>
                </h1>
                <img src={project} alt="project-icon" className='h-10 sm:h-12 md:h-14' />
            </motion.div>

            <div className='w-full mt-6 flex flex-col gap-24 items-center px-4'>
                {projectList.map((data, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: false, amount: 0.3 });
                    return (
                        <div
                            key={index}
                            ref={ref}
                            className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
                        >
                            <motion.div
                                className='w-full lg:w-[35%] shadow-md bg-[#0f172a] hover:shadow-lg transition-all duration-300 rounded-2xl'
                                variants={imageVariant}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <img src={data.logo} alt="" className='w-full rounded-2xl shadow' />
                            </motion.div>

                            <motion.div
                                className='w-full lg:w-[50%]'
                                variants={textVariant}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                            >
                                <h1 className='text-xl sm:text-2xl font-semibold mb-2'>{data.heading}</h1>
                                <p className='text-sm sm:text-base text-gray-300'>{data.text}</p>

                                <div className="inline-flex mt-3 p-[2px] rounded-3xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                                    <a href={data.link} target='_blank' rel="noopener noreferrer">
                                        <div className="flex items-center gap-2 px-4 py-1 bg-black rounded-3xl text-white">
                                            <button className='text-sm sm:text-base'>Website</button>
                                            <MdOutlineArrowOutward size={18} />
                                        </div>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Project;
