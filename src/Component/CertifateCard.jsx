import React from 'react'
import { motion, useInView } from 'framer-motion'   

const CertifateCard = ({ cert }) => {

    const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div>
          <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      className="bg-zinc-900 rounded-lg shadow-fuchsia-900 shadow-md hover:shadow-xl transition-shadow duration-300 max-w-sm w-full overflow-hidden m-4"
    >
      <img
        src={cert.img || 'https://via.placeholder.com/400x250?text=Certificate'}
        alt={cert.Name}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-fuchsia-300 mb-2">{cert.Name}</h2>
        <p className="text-gray-300 mb-1"><strong>Issued By:</strong> {cert.IssuedBy}</p>
        <p className="text-gray-300 mb-3"><strong>Date:</strong> {cert.IssueDate}</p>
        <button
          onClick={() => window.open(cert.Credential, '_blank')}
          className="bg-fuchsia-300 text-black px-4 py-2 rounded-lg hover:bg-fuchsia-400 transition-colors w-full"
        >
          View Credential
        </button>
      </div>
    </motion.div>

    </div>
  )
}

export default CertifateCard
