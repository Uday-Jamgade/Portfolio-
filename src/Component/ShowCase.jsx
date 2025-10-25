import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const ShowCase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [active, setActive] = useState('projects') // default active

  const buttonBase =
    'font-bold text-sm sm:text-base md:text-lg border-2 border-white hover:bg-white hover:text-black text-white px-4 sm:px-5 md:px-6 py-2 transition-all duration-300 rounded-3xl whitespace-nowrap'

  const getButtonClass = (key) =>
    `${buttonBase} ${active === key ? 'bg-fuchsia-600' : 'bg-transparent hover:bg-fuchsia-600'}`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      id="Portfolio"
      className="px-4 py-12 -mb-10  w-full"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl  sm:text-4xl md:text-6xl font-extrabold text-center text-fuchsia-600"
      >
        Portfolio Showcase
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm sm:text-base md:text-xl text-center mt-5 text-zinc-400"
      >
        Explore my journey through projects, certifications, and technical skills. Each section <br />
        represents a milestone in my continuous learning path.
      </motion.p>

      <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.5 }}
  className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-2 mt-10 px-2 sm:px-4"
>
  <Link to="/" onClick={() => setActive('projects')}>
    <button className={getButtonClass('projects')}>Projects</button>
  </Link>
  <Link to="/skills" onClick={() => setActive('skills')}>
    <button className={getButtonClass('skills')}>Skills</button>
  </Link>
  <Link to="/certificates" onClick={() => setActive('certificates')}>
    <button className={getButtonClass('certificates')}>Certificates</button>
  </Link>
  
</motion.div>

    </motion.div>
  )
}

export default ShowCase
