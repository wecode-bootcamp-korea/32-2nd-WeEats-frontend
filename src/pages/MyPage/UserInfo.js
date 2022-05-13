import * as UserInfoStyled from './styles/UserInfo.styled';

const UserInfo = ({ userData }) => {
  const { profile_image, name, email } = userData;
  return (
    <UserInfoStyled.UserInfoStyle>
      <UserInfoStyled.UserInfoContainer>
        <UserInfoStyled.UserImage src={profile_image} alt="유저프로필" />
        <UserInfoStyled.UserName>
          <span>{name}</span>
        </UserInfoStyled.UserName>
      </UserInfoStyled.UserInfoContainer>
      <div>{email && <span>{email}</span>}</div>
    </UserInfoStyled.UserInfoStyle>
  );
};

export default UserInfo;
