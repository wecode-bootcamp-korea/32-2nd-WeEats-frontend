import React, { useState, useEffect } from 'react';
import MainList from './MainList/MainList';
import Pick from './Pick/Pick';
import styled from 'styled-components';
import CategoryList from './CategoryList';
import SideCategory from './SideCategory';

const List = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentMenuId, setCurrentMenuId] = useState(1);
  const [currentMenuName, setCurrentMenuName] = useState('Korean');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleChange = value => {
    setCurrentMenuId(value.id);
    setCurrentMenuName(value.title);
  };

  useEffect(() => {
    fetch(`http://10.58.0.45:8000/restaurants/${currentMenuId}`)
      .then(res => res.json())
      .then(result => {
        setRestaurants(result.result);
      });
  }, [currentMenuId]);

  return (
    <StyledMain>
      <StyledSide>
        {SideCategory.map(value => {
          return (
            <CategoryList
              key={value.id}
              changeMenu={() => handleChange(value)}
              value={value}
            />
          );
        })}
      </StyledSide>
      <div>
        <StyledPickWrapper>
          <StyledPickName>Today's pick</StyledPickName>
          <Pick restaurants={restaurants} />
        </StyledPickWrapper>
        <StyledMenuName>{currentMenuName}</StyledMenuName>

        <StyledMap>맵</StyledMap>

        <StyledMainListWrapper>
          <MainList restaurants={restaurants} />
        </StyledMainListWrapper>
      </div>
      {showButton && (
        <StyledBackToTop onClick={scrollToTop}>&#8679;</StyledBackToTop>
      )}
    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin: 100px 50px;
  align-items: center;
`;

const StyledBackToTop = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  font-size: 40px;
  background: white;
  color: black;
  cursor: pointer;
  border-radius: 100px;
  border: solid 2px;
  padding: 10px;
  box-shadow: 0 5px 10px #ccc;
`;
const StyledMenuName = styled.div`
  margin-bottom: 50px;
  font-size: 30px;
`;

const StyledMap = styled.div`
  margin: 50px 0px;
  width: 850px;
  height: 300px;
  border: 1px solid;
  border-radius: 10px;
`;

const StyledPickWrapper = styled.div`
  width: 850px;
  margin-bottom: 50px;
  margin-top: 100px;
`;
const StyledPickName = styled.div`
  margin-bottom: 50px;
  font-size: 30px;
`;
const StyledMainListWrapper = styled.div`
  width: 850px;
`;

export default List;
