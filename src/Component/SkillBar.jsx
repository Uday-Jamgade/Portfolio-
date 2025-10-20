import React from 'react'
import { motion } from 'framer-motion'


const SkillBar = ({ name, level, progress, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-white font-semibold">{name}</span>
        </div>
        <span className="text-fuchsia-300 text-sm">{level}</span>
      </div>
      <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden mb-4">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-fuchsia-500 h-full rounded-full"
        />
      </div>
    </motion.div>
  )
}


export default SkillBar
