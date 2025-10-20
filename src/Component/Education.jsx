import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EducationTimeline = () => {
  const educationData = [
    {
      level: "10th Grade",
      college: " Jaibai Choudhary Dhyanpeth",
      address: "Sadar, Nagpur, Maharashtra",
      board: "Maharashtra State Board",
      year: "2019 – 2020",
      percentage: "86.40%",
    },
    {
      level: "12th Grade",
      college: "Tidke Junior College",
      address: "Chhaoni, Nagpur, Maharashtra",
      board: "Maharashtra State Board",
      year: "2021 – 2022",
      percentage: "72.60%",
    },
    {
      level: "BCA",
      college: "St. Francis De Sales College",
      address: "Seminary Hills, Nagpur",
      board: "Nagpur University",
      year: "2023 – Present",
      percentage: "Current CGPA: 7/10",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-bold text-center mb-12  text-fuchsia-800">
        🎓 Education Timeline
      </h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line for md+ */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-fuchsia-500"></div>

        {educationData.map((edu, index) => {
          const isLeft = index % 2 === 0;
          const ref = useRef(null);
          const inView = useInView(ref, { once: true, margin: "-100px" });

          return (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } items-center justify-between w-full`}
            >
              {/* Content */}
              <div className="w-full md:w-5/12">
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-fuchsia-600 mb-2">
                    {edu.level}
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <strong>College:</strong> {edu.college}
                    <br />
                    <strong>Address:</strong> {edu.address}
                    <br />
                    <strong>Board/University:</strong> {edu.board}
                    <br />
                    <strong>Year:</strong> {edu.year}
                    <br />
                    <strong>Percentage:</strong> {edu.percentage}
                  </p>
                </motion.div>
              </div>

              {/* Circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.2,
                }}
                className="z-10 my-6 md:my-0"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-fuchsia-600 text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
              </motion.div>

              {/* Spacer for symmetry */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationTimeline;
