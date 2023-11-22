import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";

const CustomLink = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  const paths = {
    home: "/",
    "about us": "/about",
    team: "/team", // Update this to match your team route path
    companies: "/Porfolio", // Update this to match your companies route path
    careers: "/careers", // Update this to match your careers route path
    "contact us": "/contact",
  };

  const to = paths[lowerCasePage] || `/${lowerCasePage}`;

  const handleClick = () => {
    setSelectedPage(lowerCasePage);
  };

  return (
    <Link
      to={to}
      className={`hover:text-gold transition duration-500`}
      onClick={handleClick}
    >
      {page}
    </Link>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-black";

  const handleLogoClick = () => {
    // Reload the page when the logo is clicked
    window.location.href = "/";
  };

  return (
    <nav className={`${navbarBackground} z-40 w-full top-0 py-0`}>
      <div className="flex items-center justify-between w-5/6">
        <nav
          className="navbar123 hover:filter hover:saturate-200 cursor-pointer transition duration-500"
          onClick={handleLogoClick}
        >
          <img src={logo} alt="Your Logo" className="logo" />
        </nav>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <CustomLink
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="Team"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="Portfolio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="Careers"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <CustomLink
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full p-2"
            style={{ position: "absolute", top: "12px", right: "15px" }}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div
            className="fixed top-0 right-0 h-full bg-black w-[190px] lg:w-auto"
            style={{ zIndex: 1000 }}
          >
            {/* CLOSE ICON */}
            <div className="flex justify-start p-4">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 text-2xl text-gold p-4">
              <CustomLink
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <CustomLink
                page="About Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <CustomLink
                page="Team"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <CustomLink
                page="Portfolio"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <CustomLink
                page="Careers"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <CustomLink
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
