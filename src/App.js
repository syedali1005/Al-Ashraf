import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import CompanyPortfolio from "./scenes/Portfolio";

const App = () => {
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
    <BrowserRouter>
      <div className="app bg-gold">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
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
                </div>
                <div className="mx-auto md:h-full mb-10">
                  <Team />
                </div>
                <div className="mb-32">
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
              </>
            }
          />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/portfolio" element={<CompanyPortfolio />} />
          <Route exact path="/location" element={<Location />} />
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
        <LineGradient />
      </div>
    </BrowserRouter>
  );
};

export default App;
