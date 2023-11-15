import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanySlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of logos to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Time between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const companyLogos = [
    {
      src: "../assets/logo1@1.5x-8 (1).png",
      url: "https://www.facebook.com/creteda/",
    },
    {
      src: "../assets/logo2@1.5x-8 (1).png",
      url: "https://company2-website.com",
    },
    {
      src: "../assets/logo3@1.5x-8 (1).png",
      url: "https://company3-website.com",
    },
    {
      src: "../assets/logo4@1.5x-8 (1).png",
      url: "https://company3-website.com",
    },
    {
      src: "../assets/logo5@1.5x-8 (1).png",
      url: "https://company3-website.com",
    },
    {
      src: "../assets/logo6@1.5x-8 (1).png",
      url: "https://company3-website.com",
    },
    {
      src: "../assets/logo7@1.5x-8 (1).png",
      url: "https://www.facebook.com/destinycattlefarm/",
    },

  ];

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#b9a874",
  };

  const logoStyle = {
    marginTop: "10px", 
  };

  return (
    <div id="companies">
      <h1
        className="heading23 text-uppercase text-center font-playfair"
        style={paragraphStyle}
      >
        <b>GROUP OF COMPANIES</b>
      </h1>
      <section className="mysection mb-5 bg-gold">
        <div className="container">
          <div className="row com_logos">
            <Slider {...settings}>
              {companyLogos.map((company, index) => (
                <div
                  key={index}
                  className="col-md-3"
                  style={logoStyle}
                >
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="slider_logos"
                      src={company.src}
                      alt={`Company Logo ${index + 1}`}
                    />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <span>
        <span></span>
      </span>
    </div>
  );
};

export default CompanySlider;
