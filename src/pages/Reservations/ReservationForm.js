import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import Button from './Button';
import Toggle from './Toggle';
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
  const [personnel, setPersonnel] = useState(1);
  const [isitOpen, setIsItOpen] = useState({ init: false });
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
    if (id === 'minus' && personnel > 0) {
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
      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },

        body: JSON.stringify({
          restaurant_id: 1,
          visitor_count: initValue.visitor_count,
          timeslot: initValue.timeslot,
          date: initValue.date,
        }),
      })
        .then(response => response.json())
        .catch(error => {
          alert(`${error}가발생했습니다`);
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
        <Toggle
          text="시간"
          id="time"
          setIsItOpen={setIsItOpen}
          isitOpen={isitOpen}
        />
        {isitOpen.time && (
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
        )}
        <Line />
        <Toggle
          text="인원"
          id="count"
          setIsItOpen={setIsItOpen}
          isitOpen={isitOpen}
        />
        {isitOpen.count && (
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
        )}
        <Line />
        <FormStyled.BtnDiv>
          <FormStyled.Btn>예약하기</FormStyled.Btn>
        </FormStyled.BtnDiv>
      </form>
    </FormStyled.ReservationFormDiv>
  );
};

export default ReservationForm;
