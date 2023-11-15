/* 
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10 padding-bt"
    >
      // IMAGE SECTION
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2 margin-tb">
        {isAboveLarge ? (
          <div>
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] margin-bl"
              src="assets/logo.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[200px] md:max-w-[600px] margin-bottom: 300px;"
            src="assets/logo.png"
          />
        )}
      </div>

      // MAIN TEXT
      <div className="margin-top: 0px z-30 basis-2/5 mt-12 md:mt-32 margin-left-x">
        // HEADINGS
        <h1 className="text-center">
          <img
            src="../assets/logo-text (1).png"
            className="w-100 margin-left: 100px;"
            alt="logo-text"
          ></img>
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >

          <p className="mt-10 mb-7 text-sm text-center md:text-start margin-top: 10px">
            The people who make up the team of Al- Ashraf Group of Companies
            embody our values of strength, performance and passion. Our
            employees have strong connections to these ideals, which has
            contributed significantly to the progressive growth and success. Our
            greatest competitive advantage is the expertise and passion of our
            people. We are motivated to achieve the elements needed to provide
            the project success and build structure and roadways that will leave
            a lasting impression for our clients, our society and our
            communities.
          </p>
        </motion.div>
                
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-black text-white rounded-sm py-3 px-7 font-semibold
              hover:bg-gold hover:text-black transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Us
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-black py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          ></AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
        <SocialMediaIcons />
        </motion.div>
        
      </div>
    </section>
  );
};

export default Landing;
*/
