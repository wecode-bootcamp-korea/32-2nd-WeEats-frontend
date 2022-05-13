import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import Button from './Button';
import * as FormStyled from './styles/ReservationForm.styled';
import { Line } from './styles/Reservations.styled';
import { BtnContainer } from './styles/Reservations.styled';
import 'react-calendar/dist/Calendar.css';

const DAY = ['월', '화', '수', '목', '금', '토', '일'];

const ReservationForm = ({
  dates,
  impossibleTime,
  initValue,
  setInitValue,
}) => {
  console.log(impossibleTime);
  const [personnel, setPersonnel] = useState(1);
  const [time, setTime] = useState('');
  const params = useParams();
  const result = format(dates, 'yyyy-MM-dd');

  const userDate = result + `(${DAY[dates.getUTCDay()]})`;

  const handlePersonnel = e => {
    e.preventDefault();
    const { id } = e.target;
    if (
      id === 'plus' &&
      personnel < impossibleTime.get(Number(initValue.timeslot))
    ) {
      setPersonnel(prve => (prve += 1));
      setInitValue(prve => ({ ...prve, visitor_count: personnel }));
    }
    if (id === 'minus' && personnel > 1) {
      setPersonnel(prve => (prve -= 1));
      setInitValue(prve => ({ ...prve, visitor_count: personnel }));
    } else if (personnel === 0) {
      return personnel;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      initValue.visitor_count &&
      initValue.timeslot &&
      initValue.date !== null
    ) {
      checkDate();
      fetch(`http://10.58.2.211:8000/reservations`, {
        method: 'post',
        headers: {
          Authorization: localStorage.getItem('token'),
        },

        body: JSON.stringify({
          restaurant_id: 1,
          visitor_count: initValue.visitor_count,
          timeslot: initValue.timeslot,
          date: initValue.date,
        }),
      })
        .then(response => {
          return response.json();
        })
        .then(item => {
          if (item.message === 'USER_HAS_ANOTHER_RESERVATION') {
            alert('앗 이미 이날짜를 예약하셨어요!');
          }
        });
    } else alert('시간과 인원을 모두 작성해주세요');
  };

  const checkDate = () => {
    if (dates) {
      alert(
        `현재 선택한 날짜는 ${userDate} 입니다. ${personnel}명을 예약하시겠습니까?`
      );
    } else return;
  };

  return (
    <FormStyled.ReservationFormDiv>
      <FormStyled.SectionWapper>
        <FormStyled.UserTitle>날짜</FormStyled.UserTitle>
        <FormStyled.UserTitle id="userDate">{userDate}</FormStyled.UserTitle>
      </FormStyled.SectionWapper>
      <Line />
      <form onSubmit={e => handleSubmit(e)}>
        <FormStyled.SectionWapper>
          <div>시간</div>
          <BtnContainer>
            {impossibleTime &&
              [1, 2, 3, 4, 5].map(items => {
                return (
                  <Button
                    key={items}
                    id={items}
                    name="timeslot"
                    item={impossibleTime.get(items)}
                    setTime={setTime}
                    seats={impossibleTime.get(items)}
                    setInitValue={setInitValue}
                  />
                );
              })}
          </BtnContainer>
        </FormStyled.SectionWapper>
        <Line />
        <FormStyled.SectionWapper>
          <div>인원</div>
          <FormStyled.SeatsContainer>
            <FormStyled.PlusMinusBtn
              className="plueMinus"
              value={personnel}
              name="available_seats"
              id="plus"
              onClick={e => {
                handlePersonnel(e);
              }}
            >
              +
            </FormStyled.PlusMinusBtn>
            <h1>{personnel}</h1>
            <FormStyled.PlusMinusBtn
              className="plueMinus"
              value={personnel}
              name="available_seats"
              id="minus"
              onClick={e => {
                handlePersonnel(e);
              }}
            >
              -
            </FormStyled.PlusMinusBtn>
          </FormStyled.SeatsContainer>
        </FormStyled.SectionWapper>
        <Line />
        <FormStyled.BtnDiv>
          <FormStyled.Btn>
            <i className="fa-solid fa-utensils" />
          </FormStyled.Btn>
        </FormStyled.BtnDiv>
      </form>
    </FormStyled.ReservationFormDiv>
  );
};

export default ReservationForm;
