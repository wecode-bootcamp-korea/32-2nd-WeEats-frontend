import { useEffect, useState } from 'react';
import ReservationCalendar from './ReservationCalendar';
import StoreInfo from './StoreInfo';
import Maps from './Maps';
import ReservationForm from './ReservationForm';
import * as ReservationStyled from './styles/Reservations.styled';

const Reservations = () => {
  const initSeat = [
    {
      timeslot: 1,
      remaining_seats: 0,
    },
    {
      timeslot: 2,
      remaining_seats: 0,
    },

    {
      timeslot: 3,
      remaining_seats: 0,
    },
    {
      timeslot: 4,
      remaining_seats: 0,
    },
    {
      timeslot: 5,
      remaining_seats: 0,
    },
  ];

  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [impossibleTime, setImpossibleTime] = useState([]);
  const [date, setDate] = useState(new Date());
  const [initValue, setInitValue] = useState({
    user_id: 1,
    status_id: 2,
    restaurant_id: 3,
    visitor_count: null,
    timeslot: null,
    date: null,
  });

  const makeMap = items => {
    if (items) {
      const newMap = new Map(
        initSeat.map(item => [item.timeslot, item.remaining_seats])
      );
      const dataMap = new Map(
        items && items.map(item => [item.timeslot, item.remaining_seats])
      );

      for (let i = 1; i < newMap.size + 1; i++) {
        if (dataMap.get(i) === undefined) {
          newMap.set(i, newMap.get(i));
        } else if (dataMap.get(i) > newMap.get(i)) {
          newMap.set(i, dataMap.get(i));
        }
      }
      return setImpossibleTime(newMap);
    } else {
      setImpossibleTime(initSeat);
    }
  };

  useEffect(() => {
    fetch('http://10.58.2.211:8000/restaurants')
      .then(re => re.json())
      .then(data => setRestaurantInfo(data.restaurant_detail));
  }, []);

  useEffect(() => {
    fetch('/data/checkTime.json')
      .then(re => re.json())
      .then(data => makeMap(data));
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
        {impossibleTime && (
          <ReservationForm
            dates={date}
            impossibleTime={impossibleTime}
            initValue={initValue}
            setInitValue={setInitValue}
          />
        )}
        <Maps latitude="" longitude="" />
      </ReservationStyled.ReservationSection>
    </ReservationStyled.Article>
  );
};

export default Reservations;
