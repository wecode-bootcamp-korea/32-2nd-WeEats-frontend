import { useEffect, useState } from 'react';
import UserInfo from './UserInfo';
import GoList from './GoList';
import ReservationInfoList from './ReservationInfoList';
import * as MypageStyled from './styles/MyPage.styled';

const MyPage = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch(`http://10.58.0.45:8000/mypage`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setUserData(data.user_info);
      });
  }, []);

  return (
    <MypageStyled.BigArticle>
      {userData.length !== 0 ? (
        <MypageStyled.ContentSection>
          <MypageStyled.Section id="first">
            <UserInfo userData={userData && userData} />
          </MypageStyled.Section>
          <MypageStyled.Section>
            <ReservationInfoList />
          </MypageStyled.Section>
        </MypageStyled.ContentSection>
      ) : (
        <GoList />
      )}
    </MypageStyled.BigArticle>
  );
};

export default MyPage;
