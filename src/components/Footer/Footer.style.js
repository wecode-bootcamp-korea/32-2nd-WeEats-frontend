import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px 30px 30px;
  background-color: #fafafa;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1000;
`;
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 0 25px;
  line-height: 22px;
  color: ${({ theme }) => theme.fontcolor};

  > span {
    font-size: 12px;
  }

  strong {
    font-size: 28px;
    font-weight: 700;
  }
`;

export const InfoList = styled.ul`
  margin: 0 -5px -10px;
  list-style: none;

  li {
    display: inline;
    padding-right: 10px;
    font-size: 12px;
  }
`;

export const CopyRight = styled.p`
  margin: 10px -5px 0;
  font-size: 10px;
  line-height: 30px;
`;
