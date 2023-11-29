import React, { useState } from "react";
import { motion } from "framer-motion";

const TeamMemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleFlip}
    >
      <motion.div className="flip-card-inner1">
        <motion.div className="flip-card-front1">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="team-member-image"
          />
          <p className="font-bold text-4xl">{member.designation}</p>
        </motion.div>
        <motion.div className="flip-card-back1 flex flex-col justify-center items-center">
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2 mt-4">{member.name}</h3>
            <p className="text-gold text-base text-center">{member.description}</p>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex justify-center mt-10">
        {Object.entries(member.socialMedia).map(([platform, url]) => (
          <a
            key={platform}
            className="hover:opacity-50 transition duration-500 mx-2"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <img alt={`${platform}-link`} src={`../assets/${platform}.png`} />
          </a>
        ))}
      </div>
    </motion.div>
  );
};
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Mr. Ashraf Jabbar Qureshi",
      designation: "Chairman",
      description:
        "Ashraf Jabbar Qureshi, Chairman/Founder of Al-Ashraf Group of Companies, hails from a prestigious lineage known for fruit exporting. He diverged from this legacy, exploring varied sectors from restaurants to real estate, construction, and online retail. His ventures expanded globally, notably founding Indus Enclave in Karachi. His success rests on values of integrity, passion, and hard work. Leveraging his construction background, he embarked on establishing an architectural firm, driven by a profound love for architecture. Ashraf Qureshi's journey epitomizes a dynamic entrepreneurial spirit and a commitment to innovation.",
      imageUrl: "../assets/Ashraf Uncle.jpg",
      socialMedia: {
        linkedin:
          "https://www.linkedin.com/company/al-ashraf-group-of-companies/",
        facebook: "https://www.facebook.com/AshrafJQureshi?mibextid=PzaGJu",
        instagram:
          "https://instagram.com/ashrafqureshipti?igshid=OGQ5ZDc2ODk2ZA==",
      },
    },
    {
      name: "Dai Ali Daniyal",
      designation: "Chief Executive Officer (CEO)",
      description:
        "Dai Ali Daniyal, the CEO of Al-Ashraf Group of Companies, inherits a strong entrepreneurial legacy and honed his skills within the family business. His pursuit of global business knowledge through degrees in Business Management and International Business paved the way for his leadership at Al-Ashraf Group. His strategic vision expanded the group across industries, and his passion for sustainable architecture led him to helm ArmArch, pioneering innovative designs in Pakistan. His journey reflects dedication, vision, and a relentless pursuit of excellence in business and architecture.",
      imageUrl: "../assets/Daniyal.jpg",
      socialMedia: {
        linkedin:
          "https://www.linkedin.com/in/dai-ali-daniyal-a50077183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        facebook:
          "https://www.facebook.com/profile.php?id=61552761699032&mibextid=PzaGJu",
        instagram:
          "https://instagram.com/thedaialidaniyal?igshid=OGQ5ZDc2ODk2ZA==",
      },
    },
    {
      name: "Armash Ashraf",
      designation: "Chief Operating Officer (COO)",
      description:
        "Eng. Armash Ashraf, COO of Al-Ashraf Group and Chief Engineer at ArmArch, holds a Bachelor's in Architectural Engineering from Heriot-Watt University. With a focus on sustainability, he completed 31 courses in sustainability techniques and building services technology. Guided by his father's expertise, Armash excels in operations, management, communication, and creativity. He founded ArmArch Architectural Engineering during his studies to revolutionize Pakistan's construction industry with a sustainability focus. In October 2023, ArmArch was launched, marking a significant step toward a more sustainable future in architecture and construction. Armash remains dedicated to driving innovation and excellence.",
      imageUrl: "../assets/Armash.jpg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/johndoe/",
        facebook: "https://www.facebook.com/janesmith/",
        instagram: "https://www.instagram.com/janesmith/",
      },
    },
  ];

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#b9a874",
    textAlign: "center",
    justifyContent: "center",
  };

  const teamStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "16px",
    borderRadius: "2px",
    marginLeft: "5px",
    marginRight: "5px",
  };

  const memberStyle = {
    textAlign: "center",
    margin: "0px",
    maxWidth: "400px",
    padding: "20px", // Adding padding
  };

  return (
    <section id="our-team" className="my-20 borderteam">
      <h1
        className="heading23 text-uppercase text-center font-playfair"
        style={paragraphStyle}
      >
        <b>OUR TEAM</b>
      </h1>
      <div className="team-members mt-15" style={teamStyle}>
        {teamMembers.map((member, index) => (
          <div key={index} style={memberStyle}>
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
      {/* Additional history paragraphs */}
      <div className="container history-section mt-28 text-center md:ml-48 mb-20">
        <h1 className="heading23 text-center font-playfair font-semibold text-gold">
          Mr. Ashraf Jabbar Qureshi (Chairman Al-Ashraf Group of Companies)
        </h1>
        <p className="text-lg text-white justify-center">
          Ashraf Jabbar Qureshi, a luminary in the business world, wears the
          esteemed hat of Chairman/Founder at Al-Ashraf Group of Companies. His
          journey is marked by a rich lineage and an unwavering entrepreneurial
          spirit that has propelled both organizations to remarkable success. A
          scion of the illustrious Qureshi family, Ashraf Jabbar Qureshi, traces
          his roots to Aligarh, India, and eventually, to Karachi, Pakistan
          post-partition The Qureshi family, renowned for their flourishing
          fruit exporting business, once held the esteemed position of being the
          largest fruit exporter in Pakistan. Inheriting the legacy of
          entrepreneurship, Ashraf Jabbar Qureshi displayed a keen interest in
          the family business from a remarkably young age, deftly balancing both
          work and education. Armed with a degree in business, he steered his
          entrepreneurial compass towards diverse sectors, charting a course
          distinct from the family's fruit export business. Starting afresh, he
          ventured into the restaurant industry and progressively expanded into
          a myriad of domains. This expansion journey encompassed land
          provision, construction, real estate, cattle and milk industry,
          farmhouses, farming, online grocery stores, and even a construction
          material processing factory. The crowning achievement came in the form
          of founding renowned housing societies such as Indus Enclave in
          Karachi. Ashraf Qureshi's enterprising spirit knew no bounds as he
          extended the reach of his brands beyond borders, earning a reputation
          as a respected and reputable businessman. At the core of his success
          lie attributes of honesty, integrity, trustworthiness, unbridled
          passion, and relentless hard work. Fuelled by a profound passion for
          architecture and drawing from his extensive experience in the
          construction industry, particularly through successful ventures like
          Al Ashraf Construction, Ashraf Jabbar Qureshi embraced the vision of
          establishing his architectural firm.
        </p>
        <h1 className="heading23 text-center font-playfair font-semibold text-gold mt-20">
          Mr. Dai Ali Daniyal (CEO Al-Ashraf Group of Companies)
        </h1>
        <p className="text-lg font-sans text-white justify-center">
          Meet Dai Ali Daniyal, a stalwart in the world of business and
          architecture, serving as the dynamic Chief Executive Officer of
          Al-Ashraf Group of Companies. With an inspiring entrepreneurial
          lineage and a passion for innovative business practices, Dai Ali
          Daniyal is at the forefront of shaping the future of multiple
          industries. Inheriting a legacy of entrepreneurial excellence from his
          father, Ashraf Jabbar Qureshi, Dai Ali Daniyal, was steeped in the
          ethos of business from a young age. Recognizing his natural
          inclination and flair for entrepreneurship, he honed his skills within
          the family business, paving the way for a remarkable educational and
          professional journey. Driven by a desire to combine his passion for
          business with international exposure, Dai Ali Daniyal pursued a
          Bachelor’s degree in Business Management (Marketing) from Middlesex
          University. This was a stepping stone towards a broader understanding
          of global business dynamics. Eager to expand his horizons and further
          augment his business acumen, he embarked on a Masters in International
          Business at Hult International, delving deep into the intricacies of
          the international business landscape. Equipped with a wealth of
          knowledge and a global perspective, Dai Ali Daniyal returned to
          Pakistan, assuming the pivotal role of CEO within Al-Ashraf Group of
          Companies. In this capacity, he displayed remarkable prowess in
          business analytics and strategy implementation, significantly
          elevating various entities under the group. His leadership saw the
          group’s expansion across diverse industries, each venture meticulously
          planned and executed. A deep-rooted passion for the construction and
          design industry, coupled with a love for architecture, led Dai Ali
          Daniyal to take the helm at ArmArch. As the CEO, he champions
          sustainable architectural solutions, an idea that resonates strongly
          with him. Under his guidance, ArmArch has emerged as a beacon of
          innovation, pioneering sustainable designs that are set to transform
          the architectural landscape of Pakistan. Dai Ali Daniyal’s journey
          epitomizes dedication, vision, and a commitment to excellence.
        </p>
        <h1 className="heading23 text-center font-playfair font-semibold text-gold mt-20">
          Engr. Armash Ashraf (COO Al-Ashraf Group of Companies/Chief Engineer
          ArmArch)
        </h1>
        <p className="text-lg font-sans text-white justify-center">
          Welcome to the world of innovation and sustainability, guided by the
          vision and expertise of Eng. Armash Ashraf, the Chief Operating
          Officer of Al-Ashraf Group of Companies and the visionary Chief
          Engineer at ArmArch. Eng. Armash Ashraf embarked on his journey
          towards architectural engineering with a passion for revolutionizing
          the construction and building design industry. His academic prowess
          began at Heriot-Watt University, where he attained an Honors
          Bachelor's degree in Architectural Engineering with a remarkable
          Second Class Upper Division. A testament to his dedication, he
          achieved a Grade A for his final year dissertation titled 'Parametric
          Facade Design of Daylighting and its Impact on the Energy Demand of
          the Office Building.' Driven by a quest for knowledge and a desire to
          address future sustainability needs, Eng. Armash completed a total of
          31 highly challenging and enlightening courses during his bachelor's,
          focusing on sustainability techniques and building services
          technology. Yet, Eng. Armash's journey into the world of engineering
          and business began much earlier, nurtured by the expertise and
          guidance of his father, Ashraf Jabbar Qureshi, in the Al-Ashraf Group
          of Companies. At an early age, he showcased his inherent skills in
          business operations, management, communication, and creativity within
          various departments of the family business. Inspired by his early
          experiences and the need to blend creativity with engineering
          expertise, Eng. Armash chose to pursue a degree that encompassed both
          aspects. Thus, he enrolled in the prestigious Heriot-Watt University
          to undertake a BEng in Architectural Engineering. During his academic
          journey, the vision of establishing an architectural firm with a
          sustainable concept began to take shape. Recognizing the lack of
          sustainability awareness in the construction industry of Pakistan,
          Eng. Armash was determined to make a significant impact. In the second
          year of his degree, the concept of ArmArch Architectural Engineering
          firm was born, with a mission to revolutionize architecture in
          Pakistan. After completing his degree, Eng. Armash returned to
          Pakistan, dedicated to making his dream a reality. In October 2023,
          his tireless dedication and hard work culminated in the launch of the
          architectural firm, heralding a new era of sustainable architecture in
          the region. Eng. Armash Ashraf continues to drive innovation,
          sustainability, and excellence in both the Al-Ashraf Group of
          Companies and ArmArch. With a blend of education, experience, and
          passion, he is spearheading a movement towards a more sustainable and
          innovative future in the construction and architectural industry.
        </p>
      </div>
    </section>
  );
};
export default OurTeam;
