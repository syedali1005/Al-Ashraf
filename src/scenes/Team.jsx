import React from "react";

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
    padding: "20px",
    border: "2px solid #b9a874",
    borderRadius: "8px",
    marginLeft: "5px",
    marginRight: "5px"
  };

  const memberStyle = {
    textAlign: "center",
    margin: "0px",
    maxWidth: "300px",
    padding: "15px", // Adding padding
  };

  const imageStyle = {
    width: "2500px",
    height: "300px",
    borderRadius: "50%",
    marginBottom: "10px",
  };
  const nameStyle = {
    fontFamily: "Arial, sans-serif", 
    fontSize: "25px", 
    fontWeight: "bold", 
    color: "#b9a874", 
    marginTop: "10px", 
  };

  const designationStyle = {
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
    color: "#b9a874",
    marginBottom: "10px",
  };

  return (
    <div id="our-team">
      <h1
        className="heading23 text-uppercase text-center font-playfair"
        style={paragraphStyle}
      >
        <b>OUR TEAM</b>
      </h1>
      <section className="team-members mt-15" style={teamStyle}>
        {teamMembers.map((member, index) => (
          <div key={index} style={memberStyle}>
            <img src={member.imageUrl} alt={member.name} style={imageStyle} />
            <h3 style={nameStyle}>{member.name}</h3>
            <p style={designationStyle}>{member.designation}</p>
            <SocialMediaIcons socialMedia={member.socialMedia} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurTeam;
