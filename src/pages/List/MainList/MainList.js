import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Restaurant from './Restaurant';

function MainList({ restaurants }) {
  const navigate = useNavigate();
  const handleRestaurantDetail = () => {
    navigate(`/book/${restaurants.id}`);
  };
  return (
    <StyledMainList>
      {restaurants.map((restaurant, idx) => {
        return (
          <Restaurant
            key={idx}
            restaurant={restaurant}
            handleRestaurantDetail={handleRestaurantDetail}
          />
        );
      })}
    </StyledMainList>
  );
}

const StyledMainList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: solid;
  width: 100%;
  border: none;
`;

export default MainList;
