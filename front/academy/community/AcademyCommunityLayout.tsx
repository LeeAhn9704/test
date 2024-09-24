import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  on: string;
};

const AcademyCommunityLayout = ({ children, on }: Props) => {
  return (
    <_inner>
      <h2>커뮤니티</h2>
      <_main>
        <ul>
          <li>
            <Link
              href="/academy/community/notice"
              className={on === 'notice' ? 'on' : ''}
            >
              공지 및 이벤트
            </Link>
          </li>
          <li>
            <Link
              href="/academy/community/faq"
              className={on === 'faq' ? 'on' : ''}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/academy/community/instagram"
              className={on === 'instagram' ? 'on' : ''}
            >
              인스타그램
            </Link>
          </li>
        </ul>
        <_wrap>{children}</_wrap>
      </_main>
    </_inner>
  );
};

export default AcademyCommunityLayout;

const _inner = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  padding-top: 100px;
  > h2 {
    text-align: center;
    font-size: 50px;
    color: #222;
    font-weight: 600;
    text-align: center;
    padding: 80px 0 100px;
    @media (max-width: 1200px) {
      padding: 80px 0 50px;
    }
    @media (max-width: 500px) {
      padding: 40px 0 20px;
      font-size: 30px;
    }
  }
`;

const _main = styled.main`
  width: 1200px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 16px;
  }
  @media (max-width: 500px) {
    padding: 0px 6px;
  }
  margin: 0 auto;
  > ul {
    display: flex;
    > li {
      flex: 1;
      text-align: center;
      a {
        display: inline-block;
        color: black;
        position: relative;
        width: 100%;
        font-size: 24px;
        @media (max-width: 500px) {
          font-size: 17px;
        }
        padding-bottom: 23px;
        font-weight: 600;
        border-bottom: none;
        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 2px;
          left: 0;
          top: 100%;
          background-color: black;
        }

        &.on {
          color: #f6921d;
          &::after {
            background-color: #f6921d;
            height: 8px;
            top: 100%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
`;

const _wrap = styled.div`
  padding: 42px 0 115px;
`;
