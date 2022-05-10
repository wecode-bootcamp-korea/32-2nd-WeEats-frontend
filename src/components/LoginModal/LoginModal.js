import { URI } from '../../auth';
import * as S from './LoginModal.style';
import useLockBodyScroll from '../Hooks/useLockBodyScroll';

const Login = ({ isModalOn, handleIsModalOn }) => {
  return (
    <S.LoginContainer>
      <S.LoginFormLayOut>
        <S.KaKaoLayOut>
          <S.WeEatsLogoImg />
          <a href={URI}>
            <S.KaKaoLoginImg />
          </a>
          <S.KaKaoLoginBanner />
        </S.KaKaoLayOut>
      </S.LoginFormLayOut>
      {isModalOn && (
        <>
          <S.HideScreen onClick={handleIsModalOn} />
          {useLockBodyScroll}
        </>
      )}
    </S.LoginContainer>
  );
};
export default Login;
