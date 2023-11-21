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
    autoplay: false,
    autoplaySpeed: 2000, // Time between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const companyLogos = [
    {
      src: "../assets/logo1@1.5x-8 (1).png",
      url: "https://www.facebook.com/creteda/",
      description:
      "DA Crete specializes in high-quality concrete products for the construction industry. Their precast solutions meet top standards and are used widely in various projects.",
    },
    {
      src: "../assets/logo2@1.5x-8 (1).png",
      url: "https://company2-website.com",
      description:
      "Launched in 2020, Rashanwalaa.pk is an ecommerce platform for groceries and household items, known for efficient delivery and a wide selection.",
    },
    {
      src: "../assets/logo3@1.5x-8 (1).png",
      url: "https://company3-website.com",
      description:
      "Food Master Industries offers a diverse range of high-quality food products, meeting demands for convenient and nutritious items.",
    },
    {
      src: "../assets/logo4@1.5x-8 (1).png",
      url: "https://company3-website.com",
      description:
      "Milkman Dairy provides fresh, high-quality dairy products, focusing on sustainability and customer satisfaction.",
    },
    {
      src: "../assets/logo6@1.5x-8 (1).png",
      url: "https://company3-website.com",
      description:
      "Al-Ashraf Construction excels in delivering top-notch projects, focusing on quality, safety, and timely completion.",
    },
    {
      src: "../assets/logo7@1.5x-8 (1).png",
      url: "https://www.facebook.com/destinycattlefarm/",
      description:
      "Destiny Cattle Farm, established in 2018, prioritizes animal welfare and sustainability, recognized for exceptional livestock."
    },
  ];

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#b9a874",
  };
  const cardStyle = {
    background: "#b9a874",
    border: "1px solid #b9a874",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    width: "90%",
    maxWidth: "600px", // Adjust the maximum width if needed
    height: "350px", // Set a fixed height for the cards
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const logoStyle = {
    width: "150px", // Set a fixed width for the logos
    height: "150px", // Set a fixed height for the logos
    display: "block", // Ensures the logos don't stretch
    margin: "0 auto 20px", // Centers logos and provides space below
  };

  const descriptionStyle = {
    color: "black",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxHeight: "150px", // Set a fixed height for the description
    lineHeight: "20px", // Adjust line height for consistent text display
    textAlign: "left", // Align text to the left
    margin: "0 auto", // Centers the description text
    padding: "0 20px", // Adds padding to the sides for better readability
    fontFamily: "Arial, sans-serif", // Apply a font family
    fontSize: "14px", // Adjust the font size
  };

  return (
    <div id="companies">
      <h1
        className="heading23 text-uppercase text-center font-playfair"
        style={paragraphStyle}
      >
        <b>GROUP OF COMPANIES</b>
      </h1>
      <section className="mysection bg-black ">
        <div className="container" style={{ padding: "10px" }}>
          <Slider {...settings}>
            {companyLogos.map((company, index) => (
              <div key={index} style={{ padding: "0 5px" }}>
                <div style={cardStyle}>
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={company.src}
                      alt={`Company Logo ${index + 1}`}
                      style={logoStyle}
                    />
                  </a>
                  <p style={descriptionStyle}>{company.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default CompanySlider;
