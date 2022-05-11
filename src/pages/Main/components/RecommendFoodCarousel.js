import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RecommendFoodCard from './RecommendFoodCard';

function RecommendFoodCarousel({ randomData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <Slider {...settings}>
      {randomData.map((value, i) => (
        <RecommendFoodCard key={i} value={value} />
      ))}
    </Slider>
  );
}

export default RecommendFoodCarousel;
