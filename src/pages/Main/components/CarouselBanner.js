import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const CarouselBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <StyledBannerWrap>
        <StyledBanner>
          <StyledImg src="/images/Main/fabric.jpg" />
        </StyledBanner>
      </StyledBannerWrap>
      <StyledBannerWrap>
        <StyledBanner>
          <StyledImg src="/images/Main/fabric.jpg" />
        </StyledBanner>
      </StyledBannerWrap>
      <StyledBannerWrap>
        <StyledBanner>
          <StyledImg src="/images/Main/fabric.jpg" />
        </StyledBanner>
      </StyledBannerWrap>
    </Slider>
  );
};

const StyledBannerWrap = styled.div`
  width: 100%;
`;

const StyledBanner = styled.div`
  width: 100%;
`;

const StyledImg = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;
export default CarouselBanner;
