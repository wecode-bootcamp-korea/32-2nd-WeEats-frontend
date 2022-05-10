import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 81px;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor};
  background: ${({ theme }) => theme.backgroundColor};
  z-index: 100;
`;

export const NavContainer = styled.div`
  display: ${({ display }) => display || 'flex'};
  align-items: center;
  height: 80px;
  padding: 10px 40px;
`;

export const WeEatsLogoImg = styled(Link)`
  background-image: url('/images/common/weEatsLogo.png');
  background-size: cover;
  display: flex;
  width: 70px;
  height: 50px;
  transform: translateY(-2px);
  cursor: pointer;
`;

export const NavMenu = styled.div`
  flex: 1;
  padding-left: 30px;

  h2 {
    width: 68px;
    color: ${({ theme }) => theme.fontColor};
    font-size: 18px;
    font-weight: 500;

    &:hover {
      color: #35c5f0;
      cursor: pointer;
    }
  }
`;

export const NavIcons = styled.div`
  display: flex;

  justify-content: space-between; ;
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  border: 2px solid ${({ theme }) => theme.fontColor};
  border-radius: 25px;
  background: transparent;
  font-weight: 600;
  transform: translateY(3px);
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.pointColor};
    color: ${({ theme }) => theme.pointColor};
  }
`;

export const NavRightTab = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  i {
    padding-right: 10px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const UserName = styled.div`
  color: ${({ theme }) => theme.pointColor};
  font-weight: 900;
  font-size: 20px;
`;

export const UserImg = styled.img.attrs(props => ({
  src: props.userImg,
}))`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border: 1px solid #424242;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.pointColor};
  }
`;

export const UserModalInfo = styled.div`
  position: absolute;
  right: -15px;
  top: 60px;
  width: 150px;
  height: 150px;
  border: 2px solid #424242;
  border-radius: 32px;
  box-shadow: 2px 3px 5px 0;
  background-color: #fff;

  &::after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #424242;
    content: '';
    position: absolute;
    top: -10px;
    left: 100px;
  }

  ul {
    line-height: 63px;

    li {
      font-size: 16px;
      font-weight: 900;
      text-align: center;
      cursor: pointer;
    }
  }
`;
