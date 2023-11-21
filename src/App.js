import React, { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import MainCarousel from "./scenes/MainCarousel";
import DotGroup from "./scenes/DotGroup";
import AboutUs from "./scenes/AboutUs";
import useMediaQuery from "./hooks/useMediaQuery";
import LineGradient from "./components/LineGradient";
import CompanySlider from "./scenes/CompanySlider";
import Location from "./scenes/Location";
import ContactUs from "./scenes/ContactUs";
import Careers from "./scenes/Careers";
import { motion } from "framer-motion";
import Footer from "./scenes/Footer";
import Team from "./scenes/Team";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <div className="app bg-gold">
      <Navbar  isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <MainCarousel />
      {isDesktop && (
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
      ></motion.div>
      <div className="w-5/6 mx-auto md:h-full">
        <AboutUs />
        <div className="mx-auto md:h-full mb-10">
          <Team />
        </div>
        <div className="w-5/6 mx-auto md:h-full">
          <CompanySlider />
        </div>
        <div className="w-5/6 mx-auto md:h-full">
        <Location />
        </div>
        <div className="w-5/6 mx-auto md:h-full">
          <Careers />
        </div>
        <div className="w-5/6 mx-auto md:h-full">
          <ContactUs />
        </div>
        <Footer />
      </div>
      <LineGradient />
    </div>

  );
}

export default App;

