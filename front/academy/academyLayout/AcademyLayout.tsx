import styled from '@emotion/styled';
import { ReactNode } from 'react';
import AcademyHeader from './AcademyHeader';
import AcademyFooter from './AcademyFooter';
import { Noto_Sans_KR } from 'next/font/google';
import AcademyAside from './AcademyAside';

const sans = Noto_Sans_KR({
  subsets: ['latin'],
});

type Props = {
  children: ReactNode;
  transparent?: boolean;
  pathname1: string;
  pathname2: string;
};

const AcademyLayout = ({
  children,
  transparent,
  pathname1,
  pathname2,
}: Props) => {
  return (
    <>
      <AcademyHeader
        transparent={transparent ? true : false}
        pathname1={pathname1}
        pathname2={pathname2}
      />
      <_wrap className={sans.className}>{children}</_wrap>
      <AcademyAside />
      <AcademyFooter />
    </>
  );
};

export default AcademyLayout;

const _wrap = styled.div`
  width: 100%;
  //background-color: #f9f9f9;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
