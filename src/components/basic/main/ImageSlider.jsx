import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

function ImageSlider() {
  const images = [
    '/assets/images/image1.jpg',
    '/assets/images/image2.jpg',
    '/assets/images/image3.jpg',
    '/assets/images/image4.jpg',
    '/assets/images/image5.jpg'
  ]

  const settings = {
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />, // 커스텀 이전 버튼
    nextArrow: <NextArrow />, // 커스텀 다음 버튼
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-screen">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          Welcome to the Slider
        </h1>
      </div>
    </div>
  );
}

export default ImageSlider;
