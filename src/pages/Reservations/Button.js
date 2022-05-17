import { useState } from 'react';
import styled from 'styled-components';

const TIMESBTN = [
  { 1: '12:00' },
  { 2: '14:00' },
  { 3: '16:00' },
  { 4: '18:00' },
  { 5: '20:00' },
];

const Button = ({ id, name, seats, setTime, item, setInitValue }) => {
  const [isitClick, setIsItClick] = useState(false);
  const getValue = e => {
    const { name, id } = e.target;
    if (item) {
      setTime(item);
      setIsItClick(prve => !prve);
      setInitValue(prev => ({ ...prev, [name]: id }));
    }
  };

  return (
    <ButtonStyle
      disabled={seats === 0 ? true : false}
      id={id}
      type="button"
      name={name}
      value={id}
      isitClick={isitClick}
      onClick={e => {
        getValue(e);
      }}
    >
      {TIMESBTN.map(times => times[id])}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  width: 60px;
  height: 30px;
  margin: 5px;
  background-color: ${({ isitClick }) => (isitClick ? '#5CC8F0' : '#afdef0')};
  border: none;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;

export default Button;
