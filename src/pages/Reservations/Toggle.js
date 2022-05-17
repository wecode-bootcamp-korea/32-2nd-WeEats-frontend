import { ToggleWapper } from './styles/ReservationForm.styled';
import { ToggleBtn } from './styles/Toggle.styled';

const Toggle = ({ text, id, setIsItOpen }) => {
  const openToggle = e => {
    const { id } = e.target;
    setIsItOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <ToggleWapper>
      <span>{text}</span>
      <ToggleBtn
        type="button"
        id={id}
        key={id}
        onClick={e => {
          openToggle(e);
        }}
      >
        <i className="fa-solid fa-chevron-down" id={id} name={id} />
      </ToggleBtn>
    </ToggleWapper>
  );
};

export default Toggle;
