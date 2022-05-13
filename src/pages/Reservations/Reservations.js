import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import ReservationCalendar from './ReservationCalendar';
import StoreInfo from './StoreInfo';
import Maps from './Maps';
import ReservationForm from './ReservationForm';
import * as ReservationStyled from './styles/Reservations.styled';

const Reservations = () => {
  const initSeat = [
    {
      timeslot: 1,
      remaining_seats: 20,
    },
    {
      timeslot: 2,
      remaining_seats: 20,
    },

    {
      timeslot: 3,
      remaining_seats: 20,
    },
    {
      timeslot: 4,
      remaining_seats: 20,
    },
    {
      timeslot: 5,
      remaining_seats: 20,
    },
  ];

  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [impossibleTime, setImpossibleTime] = useState([]);
  //date를 아얘 비워 놓는 방법으로
  //date 디폴트 값 설정: useForm이용 해주는 방향
  // 그러면 useForm 없이는?
  const [date, setDate] = useState(new Date('2022-06-01'));
  const result = format(date, 'yyyy-MM-dd');

  const [initValue, setInitValue] = useState({
    user_id: 1,
    status_id: 2,
    restaurant_id: 3,
    visitor_count: null,
    timeslot: null,
    date: null,
  });

  const makeMap = items => {
    console.log(items);
    if (items) {
      const newMap = new Map(
        initSeat.map(item => [item.timeslot, item.remaining_seats])
      );

      const dataMap = new Map(
        items.map(item => [item.timeslot, item.remaining_seats])
      );

      for (let i = 1; i < newMap.size + 1; i++) {
        if (dataMap.get(i) === undefined) {
          newMap.set(i, newMap.get(i));
        } else if (dataMap.get(i) < newMap.get(i)) {
          newMap.set(i, dataMap.get(i));
        }
      }
      return setImpossibleTime(newMap);
    }
  };

  useEffect(() => {
    fetch('http://10.58.2.211:8000/restaurants/1', {})
      .then(re => re.json())
      .then(data => setRestaurantInfo(...data.restaurant_detail));
  }, []);
  console.log(restaurantInfo);

  useEffect(() => {
    fetch(`http://10.58.2.211:8000/reservations?restaurant_id=2&date=${result}`)
      .then(re => re.json())
      .then(data => makeMap(data.available_seats_list))
      .catch(e => {
        alert(`${e}가 발생했어요!`);
      });
  }, [date]);

  return (
    <ReservationStyled.Article>
      <ReservationStyled.StoreInfoSection>
        <StoreInfo restaurantInfo={restaurantInfo} />
      </ReservationStyled.StoreInfoSection>
      <ReservationStyled.ReservationSection>
        <ReservationCalendar
          dates={date}
          setDate={setDate}
          restaurantInfo={restaurantInfo}
          initValue={initValue}
          setInitValue={setInitValue}
        />
        <ReservationStyled.Line />
        {impossibleTime.length !== 0 && (
          <ReservationForm
            dates={date}
            impossibleTime={impossibleTime}
            initValue={initValue}
            setInitValue={setInitValue}
          />
        )}
        <Maps
          latitude={restaurantInfo.latitude}
          longitude={restaurantInfo.longitude}
        />
      </ReservationStyled.ReservationSection>
    </ReservationStyled.Article>
  );
};

export default Reservations;
