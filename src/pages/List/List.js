import React, { useState, useEffect } from 'react';
import MainList from './MainList/MainList';
import Pick from './Pick/Pick';
import styled from 'styled-components';
import CategoryList from './CategoryList';
import SideCategory from './SideCategory';
import KaKaoMap from '../../components/KaKaoMap/KaKaoMap';
import LoadingModal from '../../components/LoadingModal/LoadingModal';

const LIMIT = 9;

const List = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loadingBar, setLoadingBar] = useState(false);
  const [currentMenuId, setCurrentMenuId] = useState(0);
  const [page, setPage] = useState(1);
  const [currentMenuName, setCurrentMenuName] = useState('전체');
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = e => {
    window.innerHeight + e.target.documentElement.scrollTop >=
      e.target.documentElement.scrollHeight && setPage(prev => prev + 1);
  };

  const throttle = (callback, ms) => {
    let timer = null;
    return function (...args) {
      if (timer === null) {
        timer = setTimeout(() => {
          callback.apply(this, args);
          timer = null;
        }, ms);
      }
    };
  };

  const handleChange = value => {
    setCurrentMenuId(value.id);
    setCurrentMenuName(value.title);
  };

  const fetchRestaurants = async () => {
    setLoadingBar(true);

    const response = await fetch(
      `http://10.58.0.45:8000/restaurants?category_id=${currentMenuId}&limit=${LIMIT}&offset=${
        (page - 1) * LIMIT
      }`
    );
    const results = await response.json();
    setLoadingBar(false);
    return results;
  };

  const fetchRestaurantsAll = async () => {
    setLoadingBar(true);
    const response = await fetch(
      `http://10.58.0.45:8000/restaurants?limit=${LIMIT}&offset=${
        (page - 1) * LIMIT
      }`
    );
    const results = await response.json();
    setLoadingBar(false);
    return results;
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', throttle(handleScroll, 400));
  }, []);

  useEffect(() => {
    currentMenuId > 0
      ? fetchRestaurants().then(data => setRestaurants(data.restaurant_detail))
      : fetchRestaurantsAll().then(data =>
          setRestaurants(prev => [...prev, ...data.restaurant_detail])
        );
  }, [currentMenuId, page]);

  console.log(restaurants);

  return (
    <StyledMain>
      {loadingBar && <LoadingModal />}
      <StyledSideWrapper>
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
      </StyledSideWrapper>

      <StyledPickWrapper>
        <StyledPickHeader> 선릉 백년가게 노포 맛집</StyledPickHeader>
        <StyledPickName>오늘의 추천메뉴!!</StyledPickName>
        <Pick restaurants={restaurants} />
        <StyledMenuName>{currentMenuName}</StyledMenuName>

        <KaKaoMap restaurants={restaurants} currentMenuId={currentMenuId} />

        <StyledMainListWrapper>
          <MainList restaurants={restaurants} />
        </StyledMainListWrapper>
      </StyledPickWrapper>

      {showButton && (
        <StyledBackToTop onClick={scrollToTop}>&#8679;</StyledBackToTop>
      )}
    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: flex;
`;

const StyledSideWrapper = styled.div`
  position: fixed;
  width: 185px;
  height: 100%;
  left: 0px;
  background-color: #fff;
  border-right: 1px solid black;
  z-index: 100;

  @media screen and (max-width: 1153px) {
    display: none;
  }
`;

const StyledPickHeader = styled.header`
  width: 100%;
  height: 50px;
  font-size: 30px;
  font-weight: 900;
  text-align: center;
`;

const StyledSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  line-height: 50px;
  margin: 100px 50px;
`;

const StyledBackToTop = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  font-size: 40px;
  background: white;
  color: black;
  border-radius: 100px;
  border: solid 2px;
  padding: 10px;
  box-shadow: 0 5px 10px #ccc;
  cursor: pointer;
`;
const StyledMenuName = styled.div`
  margin-bottom: 50px;
  font-size: 30px;
`;

const StyledPickWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
  transform: translateX(95px);
`;
const StyledPickName = styled.div`
  padding-top: 50px;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: 700;
`;
const StyledMainListWrapper = styled.div`
  width: 850px;
`;
export default List;
