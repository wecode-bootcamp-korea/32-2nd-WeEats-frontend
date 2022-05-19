import * as footer from './Footer.style';

const BottomList = [
  { id: 1, info: '브랜드 스토리' },
  { id: 2, info: '회사소개' },
  { id: 3, info: '채용정보' },
  { id: 4, info: '이용약관' },
  { id: 5, info: '개인정보처리방침' },
  { id: 6, info: '공지사항' },
  { id: 7, info: '고객센터' },
  { id: 8, info: '고객의 소리' },
  { id: 9, info: '전문가 등록' },
  { id: 10, info: '사업자 구매회원' },
  { id: 11, info: '제휴/광고 문의' },
  { id: 12, info: '입점신청 문의' },
];

const Footer = () => {
  return (
    <footer.FooterContainer>
      <footer.FooterWrapper>
        <footer.FooterTop>
          <footer.FooterTopInfo>
            <span>고객센터</span>
            <strong>1600-0123</strong>
            <span>평일 09:00 ~ 18:00 (주말 & 공휴일 제외)</span>
          </footer.FooterTopInfo>
        </footer.FooterTop>
        <footer.InfoList>
          {BottomList.map(list => {
            return <li key={list.id}>{list.info}</li>;
          })}
        </footer.InfoList>
        <footer.CopyRight>
          Copyright 2022. WeEats, Co, Ltd, All rights reserved
        </footer.CopyRight>
      </footer.FooterWrapper>
    </footer.FooterContainer>
  );
};

export default Footer;
