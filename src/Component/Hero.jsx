import React, { useRef, useEffect } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiGeeksforgeeks } from 'react-icons/si'
import { motion, useInView, useAnimation } from 'framer-motion'

const Hero = () => {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { threshold: 0.5,
    rootMargin: "70%"
   })

  useEffect(() => {
    if (isInView) {
      controls.start({ scale: 1, opacity: 1 })
    } else {
      controls.start({ scale: 0.8, opacity: 0 })
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.3, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5  }}
      className='w-screen h-[90vh] sm:h-screen flex flex-col justify-center items-center gap-8 px-4 text-center'
    >
      {/* Social Icons */}
      <ul className='list-none flex gap-6 text-2xl sm:text-3xl'>
        <motion.li whileHover={{scale: 1.1}} className='shadow-[0_0_10px_8px_rgba(255,0,255,0.5)] w-12 h-12 rounded-full flex justify-center items-center'>
          <a href="https://www.linkedin.com/in/udayjamgade"><FaLinkedinIn /></a>
        </motion.li>
        <motion.li whileHover={{scale: 1.1}} className='shadow-[0_0_10px_8px_rgba(255,0,255,0.5)] w-12 h-12 rounded-full flex justify-center items-center'>
          <a href="https://github.com/Uday-Jamgade"><FaGithub /></a>
        </motion.li>
        <motion.li whileHover={{scale: 1.1}} className='shadow-[0_0_10px_8px_rgba(255,0,255,0.5)] w-12 h-12 rounded-full flex justify-center items-center'>
          <a href="https://www.geeksforgeeks.org/user/udayjamgade"><SiGeeksforgeeks /></a>
        </motion.li>
      </ul>

      {/* Headings */}
      <div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Welcome To My</h1>
        <h1 className='text-4xl  sm:text-5xl md:text-6xl font-bold text-fuchsia-600'>Portfolio Website</h1>
      </div>

      {/* Button */}
      <button className='bg-fuchsia-900 font-bold text-white py-2 px-6 rounded text-sm sm:text-base md:text-lg'>
         <a href="/Uday_Satishrao_Jamgade_Resume.pdf" download="/Uday_Satishrao_Jamgade_Resume.pdf">Download CV</a>
      </button>
    </motion.div>
  )
}

export default Hero
