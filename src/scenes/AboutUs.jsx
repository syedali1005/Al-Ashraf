import React from 'react';
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const AboutUs = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="about-us" className="pt-10 pb-24 ">
      {/* HEADER AND IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-4 flex justify-center md:order-2 margin-tb">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {isAboveLarge ? (
            <div>
              <img
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[600px] md:max-w-[1200px]" // Increase max-w values when isAboveLarge is true
                src="assets/logo-text.png"
              />
            </div>
          ) : (
            <img
              alt="profile"
              className="z-10 w-full max-w-[300px] md:max-w-[600px] margin-bottom: 300px;"
              src="assets/logo-text.png"
            />
          )}

          <LineGradient width="w-1/3" />
          <p className=" mt-8">
            "The people who make up the team of Al- Ashraf Group of Companies
            embody our values of strength, performance and passion. Our
            employees have strong connections to these ideals, which has
            contributed significantly to the progressive growth and success. Our
            greatest competitive advantage is the expertise and passion of our
            people. We are motivated to achieve the elements needed to provide
            the project success and build structure and roadways that will leave
            a lasting impression for our clients, our society and our
            communities."
          </p>
        </motion.div>
      </div>

      {/* ABOUT */}
      <div className="md:flex md:justify-between mt-10 gap-32">
        {/* VISION */}

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10" />
            <div className="w-1/2 md:w-3/4 h-32 bg-black absolute right-20 top-0 z-[-1]">
              <p className="font-playfair font-semibold text-4xl mt-3 text-white justify-center text-center">
                VISION
              </p>
            </div>
          </div>
          <p className="mt-5 justify-between">
            To provide the foundation of society for the future, growth and
            progress. Embracing change with a commitment to a brighter tomorrow
          </p>
        </motion.div>

        {/* MISSION */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10" />
            <div className="w-1/2 md:w-3/4 h-32 bg-black absolute right-20 top-0 z-[-1]">
            <p className="font-playfair font-semibold text-4xl mt-3 text-white justify-center text-center">
            MISSION
              </p>
            </div>
          </div>
          <p className="mt-5 justify-between">
            To aspire to be the most esteemed and sought-after company in our
            industry, passionately committed to creating unparalleled value for
            our esteemed stakeholders.
          </p>
        </motion.div>
        {/* VALUES */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10" />
            <div className="w-1/2 md:w-3/4 h-32 bg-black absolute right-20 top-0 z-[-1]">
            <p className="font-playfair font-semibold text-4xl mt-3 text-white justify-center text-center">
            VALUES
              </p>
            </div>
          </div>
          <p className="mt-5 justify-between">
            We're a trusted partner with a solid track record and a skilled
            team, ensuring excellence and innovation. Our commitment extends to
            our people, customers, and communities, reflecting care for all and
            the environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;