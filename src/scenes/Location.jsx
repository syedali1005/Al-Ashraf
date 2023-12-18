import React from "react";

const Location = () => {
  return (
    <div className="location-container text-center">
      <h1 className="heading23 text-uppercase LOCATION text-center font-playfair text-gold mt-0" >
        <b>OUR LOCATION</b>
      </h1>
      <div className="map-container">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14475.242599878242!2d67.0788017!3d24.9044396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f270f5c4833%3A0x93ec33cb852bbc69!2sOsif%20Arcade!5e0!3m2!1sen!2s!4v1699598257885!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;