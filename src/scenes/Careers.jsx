import React from "react";
import { motion } from "framer-motion";
import { FaUpload } from "react-icons/fa";
import LineGradient from "../components/LineGradient";

const Careers = () => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id="careers" className="careers py-16 bg-black-100 mt-4">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="text-center mb-8"
      >
        <p className="heading23 text-uppercase text-center font-playfair text-gold">
          <b>CAREERS</b>
        </p>
        <div className="flex justify-center my-2">
          <LineGradient />
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-center gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="w-full md:w-1/2"
        >
          <form
            onSubmit={handleFormSubmit}
            action="https://forms.gle/CgKbhAAzUtaE6KwbA"
            encType="multipart/form-data"
            className="bg-gold p-8 rounded-md shadow-md"
          >
            <p className="text-2xl font-semibold mb-4 text-black">To Join Us</p>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-black">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 p-2 w-full border rounded-md text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="resume" className="block text-sm font-medium text-black">
                Upload Resume (PDF only)
              </label>
              <div className="flex items-center gap-2 mt-1">
                <label htmlFor="resume" className="cursor-pointer text-black">
                  <FaUpload />
                  Choose File
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf"
                  className="hidden"
                  required
                />
              </div>
            </div>
            {/* Nest the anchor tag inside the button */}
            <button
              type="submit"
              className="bg-gold text-black p-3 font-semibold hover:bg-black hover:text-gold transition duration-500"
            >
              <a href="https://forms.gle/CgKbhAAzUtaE6KwbA">APPLY NOW</a>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;