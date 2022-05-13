import React from 'react';
import styled from 'styled-components';
import Restaurant from './Restaurant';

const StyledMainList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: solid;
  width: 100%;
  border: none;
`;

function MainList({ restaurants }) {
  return (
    <StyledMainList>
      {restaurants.map((restaurant, index) => {
        return <Restaurant key={index} restaurant={restaurant} />;
      })}
    </StyledMainList>
  );
}

export default MainList;
