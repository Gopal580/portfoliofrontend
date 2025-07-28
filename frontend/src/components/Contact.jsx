// src/components/Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg('');
    setErrorMsg('');
    setLoading(true);

    try {
      const response = await axios.post("https://myportfolio-ye6f.onrender.com/api/contact", formData);

      if (response.data.success) {
        setResponseMsg("✅ Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMsg("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("❌ Failed to send. Check your internet or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    
      <div className="min-h-screen py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100" id="contact">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Contact Me
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-left bg-white p-8 rounded-xl shadow-xl"
          >
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              ></textarea>
            </div>

            <button
  type="submit"
  disabled={loading}
  className={`w-full mt-4 py-3 rounded-md font-semibold shadow-md transition duration-300 ${
    loading
      ? 'bg-gray-400 cursor-not-allowed'
      : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:shadow-lg text-white'
  }`}
>
  {loading ? "Sending..." : "Send Message"}
</button>

            {responseMsg && (
              <p className="text-green-600 text-sm mt-2">{responseMsg}</p>
            )}
            {errorMsg && (
              <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
