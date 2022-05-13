import styled from 'styled-components';

export const BigArticle = styled.article`
  display: flex;

  flex-direction: column;
  padding: 150px;
  background-color: #fafafa;
`;

export const MypageTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-left: 210px;
  h1 {
    text-align: center;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const Section = styled.section`
  display: flex;
  padding: 20px;
`;
