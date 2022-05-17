import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  const navigate = useNavigate();
  const gotoMain = () => {
    navigate('/');
  };
  return (
    <Section>
      <ContentWarp
        onClick={() => {
          gotoMain();
        }}
      >
        <MainBtn>
          <i className="fa-solid fa-4 fa-2xl" />
          <i className="fa-solid fa-0 fa-2xl" />
          <i className="fa-solid fa-4 fa-2xl" />
        </MainBtn>
      </ContentWarp>
      <Div>
        <Title>길을 잃으셨군요!</Title>
      </Div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContentWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: ${prop => prop.theme.pointColor};
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const MainBtn = styled.div`
  border-radius: 15px;
  background-color: ${prop => prop.theme.pointColor};
  border: none;
  padding: 5px;
`;
export default NotFound;
