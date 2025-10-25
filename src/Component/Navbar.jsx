import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHamburger } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

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
        <div className="flex items-center gap-3">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-90}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 text-white font-extrabold text-xl sm:text-2xl px-3 py-1 rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
              UJ
            </div>
            <span className="text-fuchsia-600 font-bold text-lg sm:text-xl tracking-wide hidden sm:inline ">
              Uday<span className="text-zinc-400">.dev</span>
            </span>
          </Link>
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
                offset={-90}
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
          className="absolute top-16 left-0 w-full md:hidden shadow-lg rounded-b-md p-6 bg-white/10 backdrop-blur-md border-t border-white/20 text-white flex flex-col items-end gap-4 text-base font-medium z-40"
        >
          {navLinks.map((link) => (
            <li key={link.to} className="hover:text-fuchsia-500 cursor-pointer">
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-90}
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
