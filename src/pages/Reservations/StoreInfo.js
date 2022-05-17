import * as StoreInfoStyled from './styles/StoreInfo.styled';

const StoreInfo = ({ restaurantInfo }) => {
  const { name, start_time, end_time } = restaurantInfo;
  return (
    <>
      <StoreInfoStyled.StoreImg>
        <img
          alt={name}
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1-ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
      </StoreInfoStyled.StoreImg>
      <StoreInfoStyled.StoreText>
        <StoreInfoStyled.StoreContact>
          <h1>{name}</h1>
          <StoreInfoStyled.TellBtn>
            <i className="fa-solid fa-phone" />
          </StoreInfoStyled.TellBtn>
        </StoreInfoStyled.StoreContact>
        <StoreInfoStyled.Line />
        <StoreInfoStyled.OpenAndClose>
          <span>open:{start_time}</span>
          <span>close:{end_time}</span>
        </StoreInfoStyled.OpenAndClose>
        <StoreInfoStyled.Line />
        <StoreInfoStyled.MoreInfo>
          <h1>상세정보</h1>
        </StoreInfoStyled.MoreInfo>
      </StoreInfoStyled.StoreText>
    </>
  );
};

export default StoreInfo;
