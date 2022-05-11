import React from 'react';
import styled from 'styled-components';
import RecommendFoodCard from './RecommendFoodCard';

const CategoryRestaurantList = ({ data, token }) => {
  return (
    <StyledRecommendCard>
      {data.map((value, i) => (
        <StyledCardWrapper key={i}>
          <RecommendFoodCard value={value} token={token} />
        </StyledCardWrapper>
      ))}
    </StyledRecommendCard>
  );
};
const StyledRecommendCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCardWrapper = styled.div`
  width: 25%;
`;

export default CategoryRestaurantList;
