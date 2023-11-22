import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CompanySlider = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        title: "Indus Enclave",
        description:
          "Indus Enclave is a revolutionary housing project situated in the heart of Nooriabad City, Pakistan. Launched in 2020, this project offers highly affordable villas and plots, ensuring a high standard of living and investment safety for our valued clients. Chairman Mr. Ashraf Jabbar Qureshi vision for this project was to make homeownership a reality for every common man in Pakistan, despite the challenging financial circumstances faced by many. Indus Enclave promises investment safety, modern amenities, and high living standards, fulfilling the dream of owning a home for countless families.",
        image: "../assets/04.png",
        // other relevant data for each portfolio item
      },
      {
        id: 2,
        title: "Viral Marketing",
        description:
        "Viral Marketing is our digital marketing company, poised to empower brands by achieving popularity, reach, and engagement through innovative online marketing strategies. Viral Marketing is a cutting-edge digital marketing company that partners with brands to help them achieve their popularity, reach, and engagement goals. Through innovative and strategic digital marketing campaigns, Viral Marketing harnesses the power of the internet and social media to create viral content that captivates audiences and drives brand recognition. With a team of experts, the company strives to boost brand visibility and online presence, positioning its clients as leaders in their respective industries.",
        image: "../assets/07.png",
      },
      {
        id: 3,
        title: "Armarch",
        description:
        "ArmArch, an emerging architectural engineering firm, specializes in sustainable and innovative building designs. Their focus on sustainability, innovation, and aesthetics defines their work. Offering comprehensive services—from planning to execution—they collaborate closely with clients to craft functional and captivating spaces, aligning with their surroundings. Spanning residential to commercial projects, ArmArch's expertise covers diverse architectural needs. With a blend of creativity and innovation, they aspire to make a lasting impact on the construction and architecture industry",
        image: "../assets/01.png",
      },
    ];
    setPortfolioItems(dummyData);
  }, []);

  return (
    <section className="bg-black py-16 mt-16">
      <div className="container mx-auto px-4 h-auto w-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gold">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div className="flip-card" key={item.id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-center"
                  />
                </div>
                <div className="flip-card-back flex flex-col justify-center items-center">
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-gold text-base">{item.description}</p>
                    {/* Add additional details for each portfolio item */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex place-content-center justify-center mt-8">
          <Link to="/portfolio" className="bg-gold py-2 px-4 rounded-md text-white font-semibold hover:bg-black transition duration-200">
            View More ...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanySlider;
