import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  const href =
    lowerCasePage === "about us"
      ? "#about-us"
      : lowerCasePage === "contact us"
      ? "#contact"
      : lowerCasePage === "team"
      ? "#our-team" // Update this to match your team section ID
      : `#${lowerCasePage}`;      

  const handleClick = () => {
    setTimeout(() => {
      setSelectedPage(lowerCasePage);
    }, 100);
  };
  return (
    <AnchorLink
      className={`hover:text-gold transition duration-500`}
      href={href}
      onClick={handleClick}
    >
      {page}
    </AnchorLink>
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
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Team"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Companies"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Careers"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
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
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
              page="Team"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
              <Link
                page="Companies"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Careers"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
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
