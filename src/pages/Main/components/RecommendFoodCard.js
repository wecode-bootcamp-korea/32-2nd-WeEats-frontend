import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecommendFoodCard = ({ value }) => {
  const [isBookMark, setIsBookMark] = useState(false);
  const token = localStorage.getItem('token');

  const handleBookMark = () => {
    token
      ? setIsBookMark(!isBookMark)
      : window.location.reload(alert('로그인이 필요한 서비스입니다.'));
  };
  //TODO
  //머지 후 Link to="/list" 추가
  return (
    <StyledRecommend>
      <Link className="cardLink" to={`/book/${value.id}`}>
        <StyledRecommendCard>
          <StyledRecommendCardImg
            alt="restaurant"
            src={value.thumbnail_image}
          />
          <i
            onClick={handleBookMark}
            className={`fa-${isBookMark ? 'solid' : 'regular'} fa-bookmark`}
          />
        </StyledRecommendCard>
        <StyledRestaurant>{value.name}</StyledRestaurant>
        <StyledRestaurantMenu>{value.address}</StyledRestaurantMenu>
      </Link>
    </StyledRecommend>
  );
};

const StyledRecommend = styled.section`
  display: flex;
  flex-direction: column;

  .cardLink {
    text-decoration: none;
  }
`;

const StyledRecommendCard = styled.div`
  position: relative;
  margin: 0 10px;

  .fa-bookmark {
    position: absolute;
    bottom: 15px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
  }

  .fa-regular {
    color: white;
  }

  .fa-solid {
    color: #ffbe02;
  }
`;

const StyledRecommendCardImg = styled.img`
  width: 100%;
  max-height: 150px;
  border-radius: 5px;
`;

const StyledRestaurant = styled.div`
  margin: 10px 10px;
  font-size: 18px;
  font-weight: bold;
  color: #454545;
`;
const StyledRestaurantMenu = styled.div`
  margin: 10px 10px;
  color: #454545;
`;

export default RecommendFoodCard;
