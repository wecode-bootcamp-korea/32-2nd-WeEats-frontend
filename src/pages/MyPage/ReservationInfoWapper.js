import { Container } from './styles/ReservationInfoWapper.style';

const ReservationInfoWapper = props => {
  return (
    <Container>
      <h1>예약 내역</h1>
      {props.children}
    </Container>
  );
};

export default ReservationInfoWapper;
