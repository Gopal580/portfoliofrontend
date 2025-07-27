// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Gopal Patil. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
