import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo-icon.png"; 

const Footer = () => {
  return (
    <footer className="bg-black text-gold py-8 pl-8 pr-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>Email: <a href="mailto:info@alashrafgoc.com">info@alashrafgoc.com</a></p>
          <p>Phone: <a href="tel:+111ASHRAF">(111) ASHRAF</a> (274-723)</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold pb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=61552719850210&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com/alashraf_group_of_companies?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/al-ashraf-group-of-companies/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/@IndusEnclaveHousingProject"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          {/* Replace "Subscribe" with your logo */}
          <img src={logo} alt="Your Logo" className="w-24 h-24 mb-2 ml-20" />
          <p className="text-gold ">&copy; 2023 Al-Ashraf Group Of Companies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
