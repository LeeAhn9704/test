import styled from '@emotion/styled';
import { Noto_Sans_KR } from 'next/font/google';
import Link from 'next/link';
const sans = Noto_Sans_KR({
  subsets: ['latin'],
});

const AcademyFooter = () => {
  return (
    <_footer className={sans.className}>
      <_inner>
        <h2>(주)빅토 미술로 생각하기</h2>
        <_wrap>
          <_ul>
            <li>
              <Link href={'/academy/community/notice'}>공지 및 이벤트</Link>
            </li>
            <li>
              <Link href={'/academy/community/faq'}>FAQ</Link>
            </li>
            <li>
              <Link href={'https://www.instagram.com/bigto_misulo'}>
                인스타그램
              </Link>
            </li>
            <li>
              <Link href={'/academy/introduce'}>회사소개</Link>
            </li>
            <li>
              <Link href={'/academy/terms'}>이용약관</Link>
            </li>
            <li>
              <Link href={'/academy/privacy'}>개인정보처리방침</Link>
            </li>
          </_ul>
          <_address>
            <p>
              ADDRESS 서울특별시 금천구 가산디지털2로 70 대륭테크노타운 19차
              906호
            </p>
            <p>TEL 02.2026.1461~5|FAX 02.2026.1466 </p>
            <p>통신판매업 제 2009-서울금천-0144호</p>
          </_address>
          <p>사업자등록번호 214.87.24223 대표자 김시중</p>
          <p>COPYRIGHT (C) 2019 (주)빅토 미술로생각하기 ALL RIGHTS RESERVED.</p>
        </_wrap>
      </_inner>
    </_footer>
  );
};

export default AcademyFooter;

const _footer = styled.footer`
  width: 100%;
  min-height: 250px;
  padding: 40px 0 55px;
  background: #333;
  font-size: 15px;
  color: #b2b2b2;
  line-height: 1.6em;
  @media (max-width: 550px) {
    font-size: 13px;
  }
`;

const _inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  @media (max-width: 1200px) {
    width: 100%;
    padding-left: 16px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 550px) {
    padding-right: 16px;
  }
`;

const _wrap = styled.div`
  flex: 1;
  margin-left: 50px;
  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;
const _ul = styled.ul`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    padding-right: 16px;
  }
  @media (max-width: 550px) {
    flex-wrap: wrap;
    justify-content: left;
  }
  > li {
    @media (max-width: 550px) {
      margin-right: 10px;
    }
    > a {
      text-decoration: none;
      color: white;
    }
  }
`;

const _address = styled.address`
  font-style: normal;
  margin-top: 20px;
`;
