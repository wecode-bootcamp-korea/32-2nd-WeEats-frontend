import { useEffect, useState } from 'react';
import * as ReservationInfoStyled from './styles/ReservationInfo.styled';

const TIMESBTN = [
  { 1: '12:00' },
  { 2: '14:00' },
  { 3: '16:00' },
  { 4: '18:00' },
  { 5: '20:00' },
];

const ReservationInfo = () => {
  const [userReservation, setUserReservation] = useState([]);
  useEffect(() => {
    fetch(`http://10.58.0.45:8000/mypage`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setUserReservation(data.reservation_info);
      });
  }, []);

  const handleDelete = e => {
    alert('삭제하시겠습니까?');
    const { id } = e.target;
    e.preventDefault();
    fetch(`http://10.58.0.45:8000/mypage/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.status === 204) {
          fetch(`http://10.58.0.45:8000/mypage`, {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          })
            .then(res => res.json())
            .then(data => {
              setUserReservation(data.reservation_info);
            });
        }
      })
      .catch(error => alert(`${error}가 발생했습니다`));
  };

  return (
    <>
      {userReservation.map(({ name, date, id, timeslot }) => (
        <ReservationInfoStyled.FirstCon key={id}>
          <ReservationInfoStyled.DateCon>
            <ReservationInfoStyled.ImgCon
              src="/images/KERO.jpg"
              alt="카테고리 사진"
            />
            <ReservationInfoStyled.TextContainer>
              <h1>{name}</h1>
              <div>
                <ReservationInfoStyled.Text>{date}</ReservationInfoStyled.Text>
                <ReservationInfoStyled.Text className="bar">
                  |
                </ReservationInfoStyled.Text>
                <ReservationInfoStyled.Text>
                  {TIMESBTN.map(items => items[timeslot])}
                </ReservationInfoStyled.Text>
              </div>
            </ReservationInfoStyled.TextContainer>
          </ReservationInfoStyled.DateCon>
          <ReservationInfoStyled.StoreInfoCon>
            <ReservationInfoStyled.StoreTitleCon>
              <h1>{name}</h1>
            </ReservationInfoStyled.StoreTitleCon>
            <ReservationInfoStyled.DeleteBtn
              id={id}
              onClick={e => {
                handleDelete(e);
              }}
            >
              <i className="fa-solid fa-x" id={id} />
            </ReservationInfoStyled.DeleteBtn>
          </ReservationInfoStyled.StoreInfoCon>
        </ReservationInfoStyled.FirstCon>
      ))}
    </>
  );
};

export default ReservationInfo;
