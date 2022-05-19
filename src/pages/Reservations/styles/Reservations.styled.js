import styled from 'styled-components';
export const FullArticle = styled.article`
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 150px 150px 150px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Article = styled.article`
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  padding: 0px 150px 150px 150px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  padding-top: 100px;
  width: 900px;
`;
export const TopNav = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavText = styled.span`
  margin: 2px;
  i {
    color: #bcbcbc;
  }
`;

export const ReservationSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #ffff;
`;
export const StoreInfoSection = styled.section`
  margin-right: 15px;
  background-color: #ffff;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0px 14px 0px 10px;
  }
`;

export const Line = styled.hr`
  width: 100%;
`;
