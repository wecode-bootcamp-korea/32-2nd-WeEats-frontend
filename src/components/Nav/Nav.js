import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';
import * as S from './Nav.style';

const Nav = () => {
  const [userModal, setUserModal] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const goToCategoryHandler = () => {
    navigate(`/list`);
  };

  const handleIsModalOn = () => {
    setIsModalOn(prev => !prev);
  };

  const handleUserModal = () => {
    setUserModal(prev => !prev);
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    token &&
      fetch('http://10.58.0.45:8000/users/login', {
        headers: { Authorization: token },
      })
        .then(res => res.json())
        .then(res => setUserInfo(res));
  }, [token]);

  return (
    <S.NavWrapper>
      <S.NavContainer>
        <S.WeEatsLogoImg to="/" onClick={token || handleIsModalOn} />
        <S.NavMenu>
          <h2 onClick={goToCategoryHandler}>예약하기</h2>
        </S.NavMenu>
        <S.NavRightTab>
          {token ? (
            <>
              <S.NavIcons>
                <i className="fa-solid fa-magnifying-glass" />
                <i className="fa fa-light fa-cart-shopping" />
              </S.NavIcons>
              <S.UserInfo>
                <S.UserName>{userInfo.name} 님</S.UserName>
                <S.UserImg
                  onClick={handleUserModal}
                  userImg={userInfo.profile_image}
                />
                {userModal && (
                  <S.UserModalInfo>
                    <ul>
                      <li
                        onClick={() => {
                          navigate('/mypage');
                        }}
                      >
                        마이페이지
                      </li>
                      <hr />
                      <li onClick={handleLogOut}>로그아웃</li>
                    </ul>
                  </S.UserModalInfo>
                )}
              </S.UserInfo>
            </>
          ) : (
            <S.LoginButton onClick={handleIsModalOn}>로그인</S.LoginButton>
          )}
        </S.NavRightTab>
      </S.NavContainer>
      {isModalOn && (
        <LoginModal isModalOn={isModalOn} handleIsModalOn={handleIsModalOn} />
      )}
    </S.NavWrapper>
  );
};

export default Nav;
