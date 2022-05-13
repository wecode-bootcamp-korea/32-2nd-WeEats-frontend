import React from 'react';
import styled from 'styled-components';
function Restaurant({ restaurant }) {
  const { name, thumbnail_image, open_time, close_time, address } = restaurant;

  return (
    <StyledRestaurant>
      <StyledRestaurantImg src={thumbnail_image} alt="restaurant" />
      <StyledRestaurantInfoName>{name}</StyledRestaurantInfoName>
      <StyledRestaurantInfoAdd>{address}</StyledRestaurantInfoAdd>
      <StyledRestaurantInfoTime>
        영업시간 : {open_time} ~ {close_time}
      </StyledRestaurantInfoTime>
    </StyledRestaurant>
  );
}

const StyledRestaurant = styled.div`
  width: 32%;
  margin: 5px;
  margin-bottom: 100px;
  border-radius: 20px;
`;

const StyledRestaurantImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  object-fit: cover;
`;

const StyledRestaurantInfoName = styled.p`
  font-size: 25px;
  text-align: center;
  margin: 10px;
`;

const StyledRestaurantInfoAdd = styled.p`
  font-size: 15px;
  margin: 10px 0px;
  text-align: center;
`;

const StyledRestaurantInfoTime = styled.p`
  font-size: 15px;
  text-align: center;
`;

export default Restaurant;
