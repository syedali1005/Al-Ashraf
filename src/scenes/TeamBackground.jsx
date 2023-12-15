import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const TeamMemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

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
            <p className="text-gold text-base">{member.description}</p>
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
      designation: "Chairman/Founder",
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
      designation: "Chief Executive Officer",
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
      designation: "Chief Operating Officer",
      description: "Eng. Armash Ashraf, COO of Al-Ashraf Group and Chief Engineer at ArmArch, holds a Bachelor's in Architectural Engineering from Heriot-Watt University. With a focus on sustainability, he completed 31 courses in sustainability techniques and building services technology. Guided by his father's expertise, Armash excels in operations, management, communication, and creativity. He founded ArmArch Architectural Engineering during his studies to revolutionize Pakistan's construction industry with a sustainability focus. In October 2023, ArmArch was launched, marking a significant step toward a more sustainable future in architecture and construction. Armash remains dedicated to driving innovation and excellence.",
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
  };

  const teamStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "15px",
    borderRadius: "2px",
    marginLeft: "5px",
    marginRight: "5px",
  };

  const memberStyle = {
    textAlign: "center",
    margin: "0px",
    maxWidth: "300px",
    padding: "2px", // Adding padding
  };

  return (
    <section id="our-team" className="my-28 borderteam">
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
      <div className="flex justify-center mt-4 mb-8 ml-4">
        <Link
          to="/team"
          className="bg-gold text-white py-2 px-4 rounded-lg"
        >
          View More
        </Link>
      </div>
    </section>
  );
};

export default OurTeam;
