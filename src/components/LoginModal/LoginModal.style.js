import styled from 'styled-components';

export const LoginContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const LoginFormLayOut = styled.div`
  position: absolute;
  width: 900px;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%);
  z-index: 100000;
`;

export const KaKaoLayOut = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  border: 3px solid black;
  background-color: #fff;
  z-index: 100000;
`;

export const KaKaoLoginImg = styled.div`
  background-image: url('/images/common/kakao_login.png');
  position: absolute;
  width: 180px;
  height: 40px;
  top: 50%;
  left: 15%;
`;

export const KaKaoLoginBanner = styled.div`
  background-image: url('/images/common/loginBanner.png');
  background-size: cover;
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
`;

export const WeEatsLogoImg = styled.div`
  background-image: url('/images/common/weEatsLogo.png');
  background-size: cover;
  position: absolute;
  width: 300px;
  height: 200px;
  top: 10%;
  left: 9%;
`;

export const HideScreen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: 1;
`;
