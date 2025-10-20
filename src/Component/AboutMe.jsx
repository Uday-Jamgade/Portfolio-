import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-scroll';

const AboutMe = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: '100px 0px -100px 0px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id='about' className='w-full min-h-screen flex lg:mb-[-100px] flex-col justify-center items-center px-4 sm:px-10 py-10'>
      <motion.div
      ref={headingRef}
        variants={containerVariants}
        initial="hidden"
        animate={isHeadingInView ? 'visible' : 'hidden'}
      transition={{delay:0.3}}
        className='w-full max-w-7xl p-6 sm:p-10 text-center border-4 border-white rounded-lg'
      >
        <motion.h1
          ref={headingRef}
          variants={itemVariants}
          className='text-3xl sm:text-4xl md:text-5xl font-bold text-fuchsia-700 mb-6'
        >
          About Me
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className='text-base sm:text-lg md:text-xl text-white leading-relaxed mb-8'
        >
          Hey there! I’m Uday — a BCA student and frontend enthusiast with a passion for crafting immersive web experiences. I specialize in building responsive, animated interfaces using the MENR stack (MongoDB, Express.js, Node.js, React), blending backend logic with pixel-perfect frontend magic.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className='px-6 py-2 font-bold bg-fuchsia-900 text-white text-lg sm:text-xl rounded-xl hover:bg-fuchsia-800 transition duration-300'
          >
            <a href="/Uday_Satishrao_Jamgade_Resume.pdf" download="/Uday_Satishrao_Jamgade_Resume.pdf">Download CV</a>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className='px-6 py-2 font-bold border-2 border-white text-white text-lg sm:text-xl rounded-xl hover:bg-white hover:text-black transition duration-300'
          >
            <Link to="Portfolio" smooth={true} duration={500} offset={-70}> View Project </Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
