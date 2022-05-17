import styled from 'styled-components';

export const CalendarBox = styled.div`
  .react-calendar {
    border: none;
    font-size: 18px;

    abbr {
      text-decoration: none;
    }

    .react-calendar__tile--active {
      background-color: ${props => props.theme.pointColor};
      color: ${props => props.theme.fontColor};
      font-weight: 600;
    }

    .react-calendar__navigation {
      .react-calendar__navigation__next2-button {
        display: none;
      }
      .react-calendar__navigation__prev2-button {
        display: none;
      }
    }
  }
`;

export const ColoredBox = styled.div`
  display: flex;
`;

export const DisabledDate = styled.div`
  margin: 10px 10px;
  display: flex;
`;
export const BoxColored = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  font-size: 10px;
  background-color: ${[
    prop =>
      prop.id === 'disable' ? '#e9ecef' : props => props.theme.pointColor,
  ]};
`;
