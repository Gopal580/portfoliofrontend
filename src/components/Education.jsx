import React from 'react';

import { motion } from 'framer-motion';

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Chameli Devi Group of Institutions, Indore",
    year: "2021 - 2025"
  },
  {
    degree: "12th Grade (PCM)",
    institution: "Abhigyan International School, Sanawad",
    year: "2020 - 2021"
  },
   {
    degree: "10th Grade ",
    institution: "Drashti Public School, Sanawad",
    year: "2019 - 2020"
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Education = () => {
  return (
    <>
      
      <div className="min-h-screen py-20 bg-gradient-to-b from-white via-purple-50 to-pink-100" id="education">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Education
          </h2>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white via-purple-100 to-pink-50 p-6 rounded-xl shadow-md text-left border-l-4 border-purple-400 hover:shadow-xl hover:scale-105 transition-all duration-300"
                variants={cardVariants}
              >
                <h3 className="text-xl font-bold text-purple-700 mb-1">{edu.degree}</h3>
                <p className="text-gray-800 font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-600">{edu.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Education;
