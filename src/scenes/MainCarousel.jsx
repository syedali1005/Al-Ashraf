import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  { id: 1, src: "../assets/Banner.jpeg", alt: "Image 1" },
  { id: 2, src: "../assets/banner1.jpeg", alt: "Image 2" },
  { id: 3, src: "../assets/banner2.jpeg", alt: "Image 3" },
  { id: 4, src: "../assets/banner3.jpeg", alt: "Image 4" },
  { id: 5, src: "../assets/banner4.jpeg", alt: "Image 5" },
  { id: 6, src: "../assets/banner6.jpeg", alt: "Image 6" },
  // Add more images as needed
];

const MainCarousel = () => {
  return (
    <div id="home" style={{ marginTop: "0px" }}>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={false}
        interval={2000}
      >
        {images.map((image) => (
          <div key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              onError={() =>
                console.error(`Failed to load image: ${image.src}`)
              }
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
