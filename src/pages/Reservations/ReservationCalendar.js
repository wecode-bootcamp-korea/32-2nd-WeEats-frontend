import { Calendar } from 'react-calendar';
import { differenceInCalendarDays, format } from 'date-fns';
import * as CalendarStyled from './styles/ReservationCalendar.styled';
import 'react-calendar/dist/Calendar.css';

const ReservationCalendar = ({
  dates,
  setDate,
  restaurantInfo,
  setInitValue,
}) => {
  const checkedDate =
    restaurantInfo.date && restaurantInfo.date.map(item => new Date(item));

  const isSameDay = (firstDay, secondDay) => {
    return differenceInCalendarDays(firstDay, secondDay) === 0;
  };

  const handleClick = item => {
    setDate(item);
    setInitValue(prve => ({ ...prve, date: format(item, 'yyyy-MM-dd') }));
  };

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      return checkedDate && checkedDate.find(dDate => isSameDay(dDate, date));
    }
  };

  return (
    <CalendarStyled.CalendarBox>
      <Calendar
        onChange={e => {
          handleClick(e);
        }}
        name="date"
        value={dates}
        tileDisabled={tileDisabled}
      />
      <CalendarStyled.ColoredBox>
        <CalendarStyled.DisabledDate>
          <CalendarStyled.BoxColored id="disable" />
          <span>불가</span>
        </CalendarStyled.DisabledDate>
        <CalendarStyled.DisabledDate>
          <CalendarStyled.BoxColored />
          <span>선택</span>
        </CalendarStyled.DisabledDate>
      </CalendarStyled.ColoredBox>
    </CalendarStyled.CalendarBox>
  );
};

export default ReservationCalendar;
