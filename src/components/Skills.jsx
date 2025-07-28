import React from 'react';

import { motion } from 'framer-motion';

const skills = [
  "HTML", "CSS", "Tailwind CSS", "Java", "JavaScript",
  "React", "Node.js", "Express", "MongoDB"
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

// Assign a Tailwind color for each skill
const colorPalette = [
  //"bg-blue-100 text-blue-700",
   //"bg-yellow-100 text-yellow-700",
  "bg-purple-100 text-purple-700",
   //"bg-pink-100 text-pink-700",
  // "bg-green-100 text-green-700",
  // "bg-red-100 text-red-700",
  // "bg-indigo-100 text-indigo-700",
  //"bg-orange-100 text-orange-700",
  // "bg-teal-100 text-teal-700",
];

const Skills = () => {
  return (
    <>
  
      <div className="min-h-screen py-20 bg-gradient-to-b from-white via-pink-50 to-purple-100" id="skills">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">
            Skills
          </h2>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl font-semibold shadow-md transition-transform transform hover:scale-105 ${colorPalette[0]}`}
                variants={itemVariants}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;
