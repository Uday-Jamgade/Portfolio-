import React, { useRef, useEffect } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiGeeksforgeeks } from 'react-icons/si'
import { motion, useInView, useAnimation, useScroll } from 'framer-motion'
import { Link } from 'react-scroll'

const About = () => {
  const textRef = useRef(null)
  const imageRef = useRef(null)

  const { scrollYProgress } = useScroll()
  console.log(scrollYProgress);
  

  const textControls = useAnimation()
  const imageControls = useAnimation()

  const isTextInView = useInView(textRef, {
    threshold: 0.3,
    rootMargin: "-70% 0px -70% 0px"
  })
  const isImageInView = useInView(imageRef, {
    threshold: 0.3,
    rootMargin: "-70% 0px -70% 0px"
  })

  useEffect(() => {
    if (isTextInView) {
      textControls.start({ y: 0, opacity: 1 })
    } else {
      textControls.start({ y: 120, opacity: 0 })
    }
  }, [isTextInView, textControls])

  useEffect(() => {
    if (isImageInView) {
      imageControls.start({ x: 0, opacity: 1 })
    } else {
      imageControls.start({ x: 120, opacity: 0 })
    }
  }, [isImageInView, imageControls])

  return (
    <div id='home' className='w-full  min-h-screen flex flex-col-reverse md:flex-row justify-around lg:mt-[-100px]  items-center gap-10 md:gap-20 px-6 py-10'>
      {/* Text Section */}
      <motion.section
        ref={textRef}
        initial={{ y: 120, opacity: 0 }}
        animate={textControls}
        transition={{ duration: 0.8 , delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
        className='max-w-md w-full  space-y-2 text-center md:text-left'
      >
        <h2 className='text-xl lg:text-4xl md:text-2xl font-semibold'>Hello it's me</h2>
        <h1 className='text-4xl lg:text-6xl md:text-6xl font-bold text-fuchsia-700'>Uday Jamgade</h1>
        <h2 className='text-xl lg:text-4xl md:text-2xl font-semibold'>Web Developer</h2>
        <p className='mt-2 text-sm md:text-base'>
          I am a passionate web developer with experience in building dynamic and responsive web applications.
        </p>

        {/* Tech Stack */}
        <ul className='flex flex-wrap justify-center md:justify-start gap-4 mt-4'>
          {['React', 'Node', 'Express', 'MongoDB'].map((tech, index) => (
            <li key={index} className='text-sm bg-zinc-700 rounded-2xl p-1 px-4 hover:border-fuchsia-700'>
              {tech}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div>
          <button className='mt-4 px-6 py-2 font-bold bg-fuchsia-900 text-white text-xl rounded-xl hover:bg-fuchsia-800'>
             <Link to="contact" smooth={true} duration={500} offset={-70}> Contact Me </Link>
          </button>
        </div>

        {/* Social Icons */}
        <ul className='list-none flex justify-center md:justify-start gap-4 sm:gap-6 mt-5 text-xl sm:text-2xl'>
          <motion.li whileHover={{scale:1.1}} className='shadow-[0_0_10px_8px_rgba(255,0,255,0.5)] w-10 h-10 rounded-full flex justify-center items-center'>
            <a href="https://www.linkedin.com/in/udayjamgade"><FaLinkedinIn /></a>
          </motion.li>
          <motion.li whileHover={{scale:1.1}} className='shadow-[0_0_10px_8px_rgba(255,0,255,0.5)] w-10 h-10 rounded-full flex justify-center items-center'>
            <a href="https://github.com/Uday-Jamgade"><FaGithub /></a>
          </motion.li>
          <motion.li whileHover={{scale:1.1}} className='shadow-[0_0_10px_8px_rgba(255,0,255,0.5)] w-10 h-10 rounded-full flex justify-center items-center'>
            <a href="https://www.geeksforgeeks.org/user/udayjamgade"><SiGeeksforgeeks /></a>
          </motion.li>
        </ul>
      </motion.section>

      {/* Image Section */}
      <motion.section
        ref={imageRef}
        initial={{ x: 120, opacity: 0 }}
        animate={imageControls}
        transition={{ duration: 0.5  , delay: 0.2}}
        className=' h-48 w-48 lg:w-120 lg:h-120  md:w-72 md:h-72 rounded-full shadow-[0_0_10px_8px_rgba(255,0,255,0.5)]'
      >
        <img
          className='object-cover w-full h-full   rounded-full shadow-lg'
          src="./src/assets/green.png"
          alt="About Me"
        />
      </motion.section>
    </div>
  )
}

export default About
