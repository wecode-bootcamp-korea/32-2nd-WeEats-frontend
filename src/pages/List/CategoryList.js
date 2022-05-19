import React from 'react';
import styled from 'styled-components';

const CategoryList = ({ value, changeMenu }) => {
  return (
    <StyledCategoryText onClick={changeMenu}>{value.title}</StyledCategoryText>
  );
};

const StyledCategoryText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.pointColor};
  }
`;
export default CategoryList;
