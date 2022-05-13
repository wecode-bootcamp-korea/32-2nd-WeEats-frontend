import { useNavigate } from 'react-router-dom';
import * as GoListStyled from './styles/GoList.styled';
const GoList = () => {
  const navigate = useNavigate();
  return (
    <GoListStyled.MainDiv>
      <GoListStyled.Container>
        <GoListStyled.Info>앗! 예약 내역이 없어요</GoListStyled.Info>
        <GoListStyled.Info>새로운 맛집을 보러 가볼까요?😉</GoListStyled.Info>
        <GoListStyled.GoListBtn
          onClick={() => {
            navigate('/list');
          }}
        >
          이동
        </GoListStyled.GoListBtn>
      </GoListStyled.Container>
    </GoListStyled.MainDiv>
  );
};

export default GoList;
