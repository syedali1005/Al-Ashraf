import React, { useState, useEffect } from "react";

const CompanyPortfolio = () => {
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
      {
        id: 4,
        title: "Food Master Industries",
        description:
          "Food Master Industries is a prominent player in the food manufacturing sector, producing a diverse range of high-quality food products. Committed to excellence in taste, hygiene, and nutritional value, the company caters to the growing demand for convenient and delicious food items. Food Master Industries is known for its stringent quality control processes and commitment to customer satisfaction, making it a preferred choice for consumers across the region.",
        image: "../assets/Logo Food Master Industries.png",
      },
      {
        id: 5,
        title: "Raashanwala.pk",
        description:
          "Rashanwalaa.pk was launched during the peak of the COVID-19 pandemic, in 2020, to provide a convenient online platform for grocery shopping. This initiative played a crucial role in gaining the trust of customers during challenging lockdown periods when accessing essential goods became difficult. Rashanwalaa.pk is an innovative online platform that facilitates the easy and convenient purchase of groceries and household essentials. Through its userfriendly website and efficient delivery system, Rashanwalaa.pk offers customers a hassle-free shopping experience, saving them time and effort. The platform has become a trusted name in the ecommerce space, with a vast selection of products and a commitment to on-time deliveries.",
        image: "../assets/rashanwala logo modified buddha red.png",
      },
      {
        id: 6,
        title: "DA Crete",
        description:
          "DA Crete specializes in the production and supply of high-quality concrete products. The company caters to the construction industry, offering a wide range of precast concrete solutions that adhere to the highest standards of durability and reliability. DA Crete's products are widely used in residential, commercial, and infrastructure projects, making it a vital player in the construction sector",
        image: "../assets/06.png",
      },
      {
        id: 7,
        title: "Al-Ashraf Construction",
        description:
          "Al-Ashraf Construction is a renowned construction company known for its expertise in delivering top-notch construction and development projects. With a focus on quality, safety, and timely completion, Al-Ashraf Construction has successfully undertaken various projects, including residential complexes, commercial buildings, and infrastructure developments.",
        image: "../assets/09.png",
      },
      {
        id: 8,
        title: "Ali Baba Restaurant",
        description:
          "Ali Baba Restaurant, founded by Abdul Jabbar Qureshi, epitomizes authentic Pakistani and diverse cuisines in Karachi. Over the years, it has stood as a premier dining destination, offering a range of flavorful dishes that captivate diners. Renowned for its rich culinary heritage and welcoming atmosphere, the restaurant has built a dedicated clientele. To honor his father's legacy, Chairman Mr. Ashraf Jabbar Qureshi expanded the establishment into Food Master and Little Karachi Restaurants. These establishments continue the tradition of delivering exceptional dining experiences, reflecting the Qureshi family's commitment to culinary excellence internationally.",
        image: "../assets/08.png",
      },
      {
        id: 9,
        title: "Little Karachi Restaurant",
        description:
          "The first branch of Little Karachi Restaurant was launched in 2023 in Dubai, UAE. Little Karachi Restaurant brings the flavors of Karachi, Pakistan, to the world, serving traditional dishes that celebrate the city's rich culinary heritage. With a blend of aromatic spices and authentic recipes, Little Karachi Restaurant offers a delightful dining experience.",
        image: "../assets/02.png",
      },
      {
        id: 10,
        title: "Destiny Cattle Farm",
        description:
          "Established in 2018 in Karachi, Pakistan, Destiny Cattle Farm swiftly emerged as a reputable supplier of quality livestock and dairy. The farm's dedication to ethical farming practices and animal welfare distinguishes it within the industry. Prioritizing the well-being of their livestock, Destiny Cattle Farm ensures a natural and healthy environment, providing proper nutrition, space, and veterinary care. This commitment not only yields superior livestock but also contributes to sustainable agricultural growth. Their excellence was acknowledged with the 'Best Animal Award' at the 2021 DALFA cattle show in Pakistan.",
        image: "../assets/05.png",
      },
      {
        id: 11,
        title: "Milkman Dairy",
        description:
          "Milkman Dairy is an upcoming dairy company committed to providing fresh and high-quality dairy products to customers. Milkman Dairy is dedicated to providing you with the freshest and finest dairy products that nourish your body and delight your taste buds. With a focus on quality, sustainability, and customer happiness, we aim to be your trusted dairy partner for a healthy and fulfilling lifestyle. Enjoy the goodness of pure dairy with Milkman Dairy – where every drop is packed with care and goodness.",
        image: "../assets/03.png",
      },
      {
        id: 12,
        title: "Hunting Restaurant",
        description:
          "Hunting Restaurant is an upcoming theme restaurant that will unveil its concept very soon. Hunting Restaurant provides a unique dining experience, inspired by the art of hunting and the joy of feasting on freshly prepared game dishes. The restaurant's rustic ambiance, combined with an array of delicious menu options, makes it a popular choice for individuals seeking a taste of adventure.",
        image: "../assets/hunting restaurant.png",
      },
      // Add more portfolio items as needed
    ];
    setPortfolioItems(dummyData);
  }, []);

  return (
    <div id="our-portfolio">
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
                    <h3 className="text-xl font-semibold mb-4 mt-8">{item.title}</h3>
                    <p className="text-gold text-base">{item.description}</p>
                    {/* Add additional details for each portfolio item */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default CompanyPortfolio;
