import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Cards = ({ proj }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
      className="bg-zinc-900  text-white rounded-lg overflow-hidden  shadow-fuchsia-900 shadow-sm hover:shadow-xl transition-shadow duration-300 max-w-sm w-full"
    >
      <img src={proj.img} alt={proj.name} className="w-full h-64 object-cover" />
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-fuchsia-300 mb-2">{proj.name}</h3>
        <p className="text-gray-300 mb-2">{proj.description}</p>
        <p className="text-sm text-gray-400 mb-4">
          <strong>Tech Stack:</strong> {proj.TeckStack}
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => window.open(proj.Link, '_blank')}
            className="text-md bg-fuchsia-300 rounded-xl px-4 py-2 w-28"
          >
            Live
          </button>
          <button
            onClick={() => window.open(proj.github, '_blank')}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-xl text-sm w-28"
          >
            Frontend
          </button>
          {proj.Backend && (
            <button
              onClick={() => window.open(proj.Backend, '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm w-28"
            >
              Backend
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Cards;
