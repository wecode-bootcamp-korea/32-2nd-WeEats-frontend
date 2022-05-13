import React from 'react';
import styled from 'styled-components';

const CategoryList = ({ value, changeMenu }) => {
  return (
    <StyledCategoryList onClick={changeMenu}>
      <StyledCategoryImg alt="food" src={value.img} />
      <StyledCategoryText>{value.title}</StyledCategoryText>
    </StyledCategoryList>
  );
};

const StyledCategoryText = styled.div`
  font-size: 20px;
`;

const StyledCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  cursor: pointer;
`;

const StyledCategoryImg = styled.img`
  width: 80px;
  height: 80px;
  padding: 5px;
  border: 2px solid black;
  border-radius: 20%;
`;

export default CategoryList;
