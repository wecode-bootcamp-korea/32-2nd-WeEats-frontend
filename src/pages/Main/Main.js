import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryCard from './components/CategoryCard';
import RecommendFoodCarousel from './components/RecommendFoodCarousel';
import CategoryRestaurantList from './components/CategoryRestaurantList';
import CarouselBanner from './components/CarouselBanner';
import CategoryInfo from './CategoryInfo';

const Main = () => {
  const [totalData, setTotalData] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const token = localStorage.getItem('token');

  //mockdata 연결
  // useEffect(() => {
  //   fetch('http://localhost:3000/data/MockData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setTotalData(data);
  //       setRandomData(data);
  //     });
  // }, []);

  useEffect(() => {
    fetch('http://10.58.2.211:8000/restaurants')
      .then(res => res.json())
      .then(data => {
        setTotalData(data.restaurant_detail);
        setRandomData(data.restaurant_detail);
      });
  }, []);

  const enterKey = e => {
    if (window.event.keyCode === 13) {
      setDataList(totalData.filter(el => el.name.includes(e.target.value)));
    }
    if (e.target.value === '') {
      setDataList([]);
    }
  };

  const handleCategory = categoryId => {
    setSelectedCategory(categoryId);
    if ((CategoryInfo.category_id = categoryId)) {
      setDataList(totalData.filter(el => el.category_id === categoryId));
    }
    if (CategoryInfo.category_id === 7) {
      setDataList(totalData);
    }
  };

  return (
    <StyledMain>
      <StyledBannerWrap>
        <StyledVideo>
          <StyledImg
            alt="muckbang"
            src="https://ac-p2.namu.la/20210802/65bd0fefd74ede9e7374a69e00c295f096a5457c0739e90352094700097a7051.mp4.gif?type=orig"
          />
        </StyledVideo>
        <StyledCarousel>
          <CarouselBanner />
        </StyledCarousel>
      </StyledBannerWrap>
      <StyledRecommendTitle>오늘의맛집</StyledRecommendTitle>
      <StyledRecommendCarousel>
        <RecommendFoodCarousel randomData={randomData} />
      </StyledRecommendCarousel>
      <StyledFoodCategory>
        {CategoryInfo.map((value, i) => (
          <CategoryCard
            key={i}
            value={value}
            selectedCategory={selectedCategory}
            handleCategory={handleCategory}
          />
        ))}
      </StyledFoodCategory>
      <StyledSearchBar>
        <StyledInput
          onKeyUp={enterKey}
          type="text"
          placeholder="🔍️ &nbsp; 오늘의집 통합검색"
        />
      </StyledSearchBar>
      <CategoryRestaurantList data={dataList} token={token} />
    </StyledMain>
  );
};

const StyledMain = styled.section`
  max-width: 1008px;
  margin: 0 auto;
  padding-top: 90px;
`;

const StyledBannerWrap = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1008px;
  margin-bottom: 50px;
`;

const StyledVideo = styled.div`
  width: 75%;
  margin-right: 10px;
`;

const StyledImg = styled.img`
  width: 100%;
  max-height: 378px;
  border-radius: 5px;
`;

const StyledCarousel = styled.div`
  width: 25%;
  border-radius: 5px;

  .slick-slider {
    border-radius: 5px;
  }

  .slick-prev,
  .slick-next {
    width: 81px;
    font-family: ‘slick’;
    font-size: 40px;
    line-height: 1;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    line-height: 1;
    color: #ffbe02;
  }
`;

const StyledSearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 40px 40px 40px;
`;

const StyledRecommendCarousel = styled.div`
  width: 100%;
  margin-top: 10px;

  .slick-prev,
  .slick-next {
    width: 35px;
    font-family: ‘slick’;
    font-size: 40px;
    line-height: 1;
    opacity: 0.75;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    line-height: 1;
    color: #ffbe02;
  }
`;

const StyledInput = styled.input`
  width: 80%;
  height: 40px;
  font-size: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  :focus {
    outline: none;
  }
`;

const StyledRecommendTitle = styled.span`
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #ffbe02;
`;

const StyledFoodCategory = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

export default Main;
