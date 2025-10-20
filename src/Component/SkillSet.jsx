import React from 'react'
import SkillBar from './SkillBar'
import {
  SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs,
  SiExpress, SiMongodb, SiTailwindcss, SiBootstrap,
  SiCplusplus
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', level: 'Intermediate', progress: 90, icon: <SiJavascript className="text-yellow-400 text-2xl" /> },
  { name: 'C/C++', level: 'Intermediate', progress: 90, icon: <SiCplusplus className="text-yellow-400 text-2xl" /> },
  { name: 'HTML', level: 'Advanced', progress: 95, icon: <SiHtml5 className="text-orange-500 text-2xl" /> },
  { name: 'CSS', level: 'Advanced', progress: 90, icon: <SiCss3 className="text-blue-500 text-2xl" /> },
  { name: 'React.js', level: 'Intermediate', progress: 85, icon: <SiReact className="text-cyan-400 text-2xl" /> },
  { name: 'Node.js', level: 'Beginner', progress: 75, icon: <SiNodedotjs className="text-green-500 text-2xl" /> },
  { name: 'Express.js', level: 'Beginner', progress: 70, icon: <SiExpress className="text-gray-300 text-2xl" /> },
  { name: 'MongoDB', level: 'Intermediate', progress: 70, icon: <SiMongodb className="text-green-600 text-2xl" /> },
  { name: 'Tailwind CSS', level: 'Advanced', progress: 90, icon: <SiTailwindcss className="text-teal-400 text-2xl" /> },
  { name: 'Bootstrap', level: 'Intermediate', progress: 80, icon: <SiBootstrap className="text-purple-500 text-2xl" /> },
  { name: 'Git & GitHub', level: 'Intermediate', progress: 85, icon: <SiBootstrap className="text-purple-500 text-2xl" /> },
]



const SkillSet = () => {
  return (
   <div className="px-6 py-10 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center text-fuchsia-400 mb-12">My Skills</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}
      </div>
    </div>

  )
}

export default SkillSet
