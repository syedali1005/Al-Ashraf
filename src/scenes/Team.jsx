import React, { useState } from "react";
import { motion } from "framer-motion";


const SocialMediaIcons = ({ socialMedia }) => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7 ml-16 mr-16">
        {Object.entries(socialMedia).map(([platform, url]) => (
          <a
            key={platform}
            className="hover:opacity-50 transition duration-500"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <img alt={`${platform}-link`} src={`../assets/${platform}.png`} />
          </a>
        ))}
      </div>
    );
  };

  const TeamMemberCard = ({ member }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <motion.div
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleFlip}
      >
        <motion.div className="flip-card-inner1">
          <motion.div className="flip-card-front1">
            <img src={member.imageUrl} alt={member.name} className="team-member-image" />
            <h3>{member.name}</h3>
            <p>{member.designation}</p>
          </motion.div>
          <motion.div className="flip-card-back1">
           
            <SocialMediaIcons socialMedia={member.socialMedia} />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };
  
  
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Ashraf Jabbar Qureshi",
      designation:"Chairman",
      imageUrl: "../assets/Ashraf Uncle.jpg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/johndoe/",
        facebook: "https://www.facebook.com/janesmith/",
        instagram: "https://www.instagram.com/janesmith/",
      },
    },
    {
      name: "Dai Ali Daniyal",
      designation:"Cheif Executive Officer (CEO)",
      imageUrl: "../assets/Daniyal.jpg",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/janesmith",
        facebook: "https://www.facebook.com/janesmith/",
        instagram: "https://www.instagram.com/janesmith/",
      },
    },
    {
      name: "Armash Ashraf",
      designation:"Chief Operating Officer (COO)",
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
    border: "1px solid #b9a874",
    borderRadius: "2px",
    marginLeft: "5px",
    marginRight: "5px"
  };

  const memberStyle = {
    textAlign: "center",
    margin: "0px",
    maxWidth: "300px",
    padding: "2px", // Adding padding
  };

  return (
    <div id="our-team" className="my-20">
      <h1
        className="heading23 text-uppercase text-center font-playfair"
        style={paragraphStyle}
      >
        <b>OUR TEAM</b>
      </h1>
      <section className="team-members mt-15" style={teamStyle}>
      {teamMembers.map((member, index) => (
        <div key={index} style={memberStyle}>
          <TeamMemberCard member={member} />
        </div>
      ))}
    </section>
  </div>
);
};

export default OurTeam;