import * as StoreInfoStyled from './styles/StoreInfo.styled';

const StoreInfo = ({ restaurantInfo }) => {
  const { name, open_time, close_time, thumbnail_image, detail_image } =
    restaurantInfo;

  return (
    <>
      <StoreInfoStyled.StoreImg>
        <img alt={name} src={thumbnail_image} />
      </StoreInfoStyled.StoreImg>
      <StoreInfoStyled.StoreText>
        <StoreInfoStyled.StoreContact>
          <h1>{name}</h1>
        </StoreInfoStyled.StoreContact>
        <StoreInfoStyled.Line />
        <StoreInfoStyled.OpenAndClose>
          <span>{open_time}</span>
          <span>~</span>
          <span>{close_time}</span>
        </StoreInfoStyled.OpenAndClose>
        <StoreInfoStyled.Line />
        <StoreInfoStyled.MoreInfo>
          <h1>상세정보</h1>
          <img src={detail_image} />
        </StoreInfoStyled.MoreInfo>
      </StoreInfoStyled.StoreText>
    </>
  );
};

export default StoreInfo;
