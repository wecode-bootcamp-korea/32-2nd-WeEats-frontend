import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import BestRestaurant from './BestRestaurant';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledArrow = styled.button`
  &::before {
    content: '${props => props.arrow}';
    color: black;
    font-size: 30px;
  }
`;

function Pick({ restaurants }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <StyledArrow arrow=">" />,
    prevArrow: <StyledArrow arrow="<" />,
  };
  return (
    <div>
      <Slider {...settings}>
        {restaurants.map((restaurant, index) => {
          return <BestRestaurant key={index} restaurant={restaurant} />;
        })}
      </Slider>
    </div>
  );
}

export default Pick;
