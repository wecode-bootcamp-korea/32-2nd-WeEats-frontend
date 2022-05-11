import React from 'react';
import styled from 'styled-components';

const CategoryCard = ({ value, selectedCategory, handleCategory }) => {
  const { category_id, img, title } = value;
  return (
    <StyledCategoryCard
      onClick={() => {
        handleCategory(category_id);
      }}
    >
      <StyledCategoryImg alt="food" src={img} />
      <StyledTitle isSelected={category_id === selectedCategory}>
        {title}
      </StyledTitle>
    </StyledCategoryCard>
  );
};

const StyledCategoryCard = styled.span`
  display: flex;
  flex-direction: column;
  margin: 40px 10px;
  align-items: center;
`;

const StyledCategoryImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid;
  border-color: #ffbe02;
  cursor: pointer;
`;

const StyledTitle = styled.div`
  color: ${props => (props.isSelected ? '#ffbe02' : '#cecdcc')};
`;
export default CategoryCard;
