import styled from 'styled-components';

export const FirstCon = styled.div`
  margin: 20px 0px;
`;

export const DateCon = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const ImgCon = styled.img`
  margin-right: 4px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const TextContainer = styled.div`
  margin-left: 5px;
  margin-bottom: 4px;
  h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
export const Text = styled.span`
  margin: 2px;
`;
export const StoreInfoCon = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #c8c8c8;
`;
export const StoreTitleCon = styled.div`
  padding: 10px;
  width: 400px;
  h1 {
    font-size: 20px;
  }
`;

export const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #c8c8c8;
  :hover {
    cursor: pointer;
    color: red;
  }
`;
