import React from 'react';

import { motion } from 'framer-motion';

const projects = [
  {
    name: "Project Manager",
    description:
      "Project Manager is a full-stack web application that allows users to create, update, search, sort, view, and download project details. It features a clean dashboard UI with filters and table views to efficiently manage multiple projects.",
    tech: ["#React.js", "#Tailwind CSS", "#Node.js", "#Express.js", "#MongoDB"],
    live: "https://projectmanager-liard.vercel.app",
  link: "https://github.com/Gopal580/ProjectManager",  deployed: true,
  },
  {
    name: "StudyNotion",
    description:
      "StudyNotion is a full-stack EdTech platform that allows users to explore, purchase, and consume online courses. It features user authentication, instructor dashboards, course creation, and secure payments — delivering a complete learning management experience.",
    tech: ["#React.js", "#Tailwind CSS", "#Node.js", "#Express.js", "#MongoDB"],
    link: "https://github.com/Gopal580/Studynotion",
  },
  {
    name: "WeatherApp",
    description:
      "A responsive Weather App that fetches real-time weather data using a public API. Users can search for any city to view temperature, weather conditions, humidity, and more — all styled with custom HTML and CSS.",
    tech: ["#html", "#css", "#js"],
    link: "https://github.com/Gopal580/weatherapp",
  },
  {
    name: "TikTakToe",
    description:
      "A simple and interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. It highlights winning combinations, and provides a reset option for replaying the game.",
    tech: ["#html", "#css", "#js"],
    link: "https://github.com/Gopal580/TikTakToe",
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
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "spring",
    },
  },
};

const badgeColors = [
  "bg-purple-100 text-purple-700",
  "bg-pink-100 text-pink-700",
  "bg-green-100 text-green-700",
  "bg-yellow-100 text-yellow-700",
  "bg-blue-100 text-blue-700",
  "bg-red-100 text-red-700",
];

const Projects = () => {
  return (
    <>
    
      <div
        className="min-h-screen py-20 bg-gradient-to-b from-white via-indigo-50 to-purple-100"
        id="projects"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 drop-shadow-md">
            My Projects
          </h2>

          <motion.div
            className="flex flex-wrap justify-center gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] text-left max-w-sm w-full sm:w-[22rem]"
                variants={cardVariants}
              >
                {/* ✅ Deployed badge */}
                {project.deployed && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow">
                    ✅ Deployed
                  </div>
                )}

                <h3 className="text-2xl font-bold text-indigo-700 mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-3">{project.description}</p>

                <div className="mb-4">
                  <span className="font-semibold text-sm text-gray-600">Technologies:</span>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <li
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full font-medium ${badgeColors[i % badgeColors.length]}`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 🚀 Live Demo button */}
               <div className="flex flex-wrap gap-3 mt-2">
  {project.deployed && project.live && (
    <a
      href={project.live}
      className="text-sm text-white bg-green-500 hover:bg-green-600 font-semibold px-4 py-2 rounded-full transition duration-200 shadow hover:shadow-md"
      target="_blank"
      rel="noopener noreferrer"
    >
      🚀 Live Demo
    </a>
  )}

  <a
    href={project.link}
    className="text-sm text-white bg-indigo-500 hover:bg-indigo-600 font-semibold px-4 py-2 rounded-full transition duration-200 shadow hover:shadow-md"
    target="_blank"
    rel="noopener noreferrer"
  >
    💻 View Project"
  </a>
</div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
