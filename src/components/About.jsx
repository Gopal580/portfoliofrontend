import React from 'react';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
    {/* <div className="min-h-screen py-16 bg-white" id="about"> */}

      
      <div className="min-h-screen py-20 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100" id="about">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-gray-800 leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="font-semibold text-pink-600">Hi, I'm Gopal Patil</span> — a passionate{" "}
            <span className="text-purple-600 font-semibold">Frontend Web Developer</span> focused on
            building beautiful and responsive websites and web applications.
            <br />
            <br />
            Explore my work in the <span className="font-semibold text-yellow-600">Projects</span>{" "}
            section to see real-world applications of my skills.
            <br />
            <br />
            I'm open to{" "}
            <span className="text-blue-600 font-semibold">exciting job opportunities</span> where I
            can grow, contribute, and build amazing things. Feel free to{" "}
            <span className="underline decoration-pink-400 font-semibold">reach out</span> if you
            think we'd be a great match!
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default About;
