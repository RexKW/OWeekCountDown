import React, { useState, Component } from 'react';
import Slider from 'react-slick';
import '../styles/Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/DSC02055.jpg';
import image2 from '../assets/DSC04355.jpg';
import image3 from '../assets/DSC05340.jpg';
import image4 from '../assets/DSC05425.jpg';
import image5 from '../assets/DSC06386.jpg';
import image6 from '../assets/DSC06609.jpg';
import image7 from '../assets/DSCF0757.jpg';
import image8 from '../assets/DSCF1448.jpg';
import image9 from '../assets/DSCF8338.jpg';
import image10 from '../assets/DSCF8651.jpg';
import image11 from '../assets/DSC_0052.jpg';

const images = [image1, image2, image3,image4,image5,image6,image7,image8,image9,image10,image11];

function CarouselHorizontal() {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    lazyLoad: true,
    speed: 600,
    arrows: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    cssEase: "linear",
    centerPadding: 0,  // Ensure there is no padding so the slide is perfectly centered
    beforeChange: (current, next) => setImageIndex(next),
    
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img src={img} alt={`Slide ${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarouselHorizontal;