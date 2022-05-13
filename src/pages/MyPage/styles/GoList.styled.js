import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const GoListBtn = styled.button`
  padding: 6px;
  width: 70px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.pointColor};
  border: none;
  :hover {
    cursor: pointer;
  }
`;
