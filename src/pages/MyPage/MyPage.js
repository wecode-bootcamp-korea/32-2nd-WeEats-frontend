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
    userData && (
      <MypageStyled.BigArticle>
        <MypageStyled.ContentSection>
          <MypageStyled.Section id="first">
            <UserInfo userData={userData} />
          </MypageStyled.Section>
          {userData && userData.length !== 0 ? (
            <MypageStyled.Section>
              <ReservationInfoList />
            </MypageStyled.Section>
          ) : (
            <GoList />
          )}
        </MypageStyled.ContentSection>
      </MypageStyled.BigArticle>
    )
  );
};

export default MyPage;
