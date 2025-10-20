import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import CertifateCard from './CertifateCard'

const certificates = [
  {
    id: 1,
    Name:"Node.js",
    IssuedBy: "Udemy",
    IssueDate: "July 2025",
    Credential:"https://udemy-certificate.s3.amazonaws.com/image/UC-d1f8ee0d-6c79-4839-95e7-d5eb75e6ed81.jpg",
    img:"./src/assets/Node.png"
  },
  {
    id: 2,
    Name:"DataBase (SQL & NoSQL)",  
    IssuedBy: "Udemy",
    IssueDate: "April 2025",
    Credential:"https://udemy-certificate.s3.amazonaws.com/image/UC-0f4f3b1e-1d6e-4f7c-8a4e-1d2e3f4g5h6i.jpg",
    img:"./src/assets/dataBase.jpg"
  },
  {
    id: 3,
    Name:"React.js",
    IssuedBy: "UpGrad",
    IssueDate: "March 2025",
    Credential:"https://upgrad.certificate.givemycertificate.com/c/c713756a-c2b7-4f8a-9c5c-7adb5e81996d",
    img:"./src/assets/React.png"
  },
  {
    id: 4,
    Name:"JavaScript",
    IssuedBy: "Scaler Academy",
    IssueDate: "November 2024",
    Credential:"https://moonshot.scaler.com/s/sl/tnQ0mLXWYE?_gl=1*1k2hu19*_gcl_au*NjE2NjExMjEyLjE3MzA5OTM2MjM.*FPAU*MTcxNTU4NTYxOC4xNzMwOTkzMTIy*_ga*MzQ1MzI5NzI4LjE3MzA5OTMxMjA.*_ga_53S71ZZG1X*MTczMTM5MTM5MS4xMi4xLjE3MzEzOTU2NTcuMC4wLjE0MjA5ODY5NDM.",
    img:"./src/assets/javaScript.png"
  }

]
const Certification = () => {

 return (
    <div className="px-6 py-10 min-h-screen text-white">
      <h1 className="text-4xl font-bold text-center text-fuchsia-400 mb-12">My Certifications</h1>
      <div className="flex flex-wrap  justify-around gap-8 mx-auto lg:gap-13 lg:mx-12">
        {certificates.map(cert => (
          <CertifateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>


  )
}

export default Certification
