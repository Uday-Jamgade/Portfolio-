import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import { HiPaperAirplane } from 'react-icons/hi'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.')
      return
    }

    emailjs.sendForm(
      'service_czc6rcf',
      'template_1ihrojr',
      formRef.current,
      'ls43CzXlHPst-YfFG'
    )
    .then(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    })
    .catch((error) => {
      console.error('Email send error:', error)
      alert('Something went wrong. Please try again.')
    })
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-zinc-950 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        id='contact'
        className="text-4xl font-bold text-center text-fuchsia-400  mb-10"
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col-reverse md:flex-row justify-center items-start gap-10 px-4 sm:px-6 lg:px-20 w-full max-w-8xl">
        {/* Contact Info */}
        <div className="flex flex-col gap-6 lg:gap-15 p-10 lg:h-120 bg-zinc-900 rounded-lg shadow-lg text-white w-full md:w-1/2 lg:w-1/3">
          <div className="flex items-center gap-3">
            <MdEmail className="text-fuchsia-500 text-2xl lg:text-6xl" />
            <div>
              <h2 className="lg:text-2xl text-xl font-bold">Email</h2>
              <p className="text-md">udayjamgade@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MdPhone className="text-fuchsia-500 text-2xl lg:text-6xl" />
            <div>
              <h2 className="lg:text-2xl text-xl font-bold">Phone</h2>
              <p className="text-md">+91 7558602951</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MdLocationOn className="text-fuchsia-500 text-2xl lg:text-6xl" />
            <div>
              <h2 className="lg:text-2xl text-xl font-bold">Location</h2>
              <p className="text-md">Nagpur, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-zinc-900 p-6 rounded-lg shadow-lg space-y-6 text-white"
        >
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            <HiPaperAirplane className="text-xl rotate-45" />
            Send Message
          </button>

          {submitted && (
            <p className="text-green-400 text-center mt-4">
              Thanks! Your message has been sent.
            </p>
          )}
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
