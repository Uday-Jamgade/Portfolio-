import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHamburger } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Portfolio', to: 'Portfolio' },
    { label: 'Contact', to: 'contact' },
  ]

  return (
    <nav className="w-screen fixed top-0 left-0 z-50 px-4 py-3 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/Logo3.png"
            alt="Logo"
            className="h-25 fixed   overflow-hidden w-auto object-contain"
          />
          {/* <span className="text-xl font-bold text-white hidden sm:inline">Uday.dev</span> */}
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <ImCross /> : <FaHamburger />}
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex gap-6 text-base font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.to} className="hover:text-fuchsia-500 cursor-pointer">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Links (Mobile) */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 right-4 md:hidden shadow-lg rounded-md p-4 bg-white/10 backdrop-blur-md border border-white/20 text-white flex flex-col items-end gap-4 text-base font-medium"
        >
          {navLinks.map((link) => (
            <li key={link.to} className="hover:text-fuchsia-500 cursor-pointer">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  )
}

export default Navbar
