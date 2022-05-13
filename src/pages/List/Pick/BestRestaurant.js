import React from 'react';
import styled from 'styled-components';

function BestRestaurant({ restaurant }) {
  const { name, thumbnail_image } = restaurant;
  return (
    <StyledBlock>
      <StyledImg alt="restaurant" thumbnail_image={thumbnail_image} />
      <StyledInfoName>{name}</StyledInfoName>
    </StyledBlock>
  );
}

const StyledBlock = styled.div`
  width: 170px; ;
`;

const StyledImg = styled.div`
  background-image: url(${props => props.thumbnail_image});
  width: 100%;
  height: 150px;
  border-radius: 20px;
`;

const StyledInfoName = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 20px 0px;
  height: 20px;
`;

export default BestRestaurant;
