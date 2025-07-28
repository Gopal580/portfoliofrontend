import React from 'react';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
     
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200">
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-400"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I'm Gopal 👋
          </motion.h1>

          <motion.p
            className="mt-4 text-xl text-gray-800"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            A passionate full-stack developer
          </motion.p>

          <motion.a
            href="/projects"
            className="inline-block mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
