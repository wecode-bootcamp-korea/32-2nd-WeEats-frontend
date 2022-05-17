import styled from 'styled-components';

export const Article = styled.article`
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  justify-content: center;
  padding: 150px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ReservationSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 50px;
  background-color: ${props => props.theme.backgroundColor};
`;
export const StoreInfoSection = styled.section`
  margin-right: 10px;
  background-color: #f8f9fa;
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
