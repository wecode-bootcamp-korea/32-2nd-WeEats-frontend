import styled from 'styled-components';

export const ReservationFormDiv = styled.div`
  width: 100%;
`;

export const SectionWapper = styled.section`
  display: flex;
  margin: 5px 0px;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  padding: 5px;
  height: 35px;
  width: 100%;
`;

export const UserTitle = styled.span`
  margin: 0px 14px 0px 10px;
  font-weight: ${prop => prop.id === 'userDate' && 700};
`;

export const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
`;

export const Btn = styled.button`
  width: 70px;
  height: 30px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 15px;
  font-weight: 600;

  :hover {
    cursor: pointer;
    background-color: #eaeaea;
  }
`;

export const SeatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    margin: 5px;
  }
`;

export const PlusMinusBtn = styled.button`
  margin: 0px 3px;
  width: 25px;
  padding: 5px;
  background-color: '#afdef0';
  border: none;
  border-radius: 5px;
  font-weight: 600;
  :hover {
    cursor: pointer;
  }
`;
