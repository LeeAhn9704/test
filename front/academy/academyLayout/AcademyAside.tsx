import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import asideBg from '@/public/asideBg.png';
import quickIco1 from '@/public/quickIco1.png';
import quickIco2 from '@/public/quickIco2.png';
const AcademyAside = () => {
  return (
    <_aside>
      <Link href={'/academy/classes/experience'}>
        <Image src={quickIco1} alt="체험수업" />
      </Link>
      <Link href={'/academy/centerInfo/franchise'}>
        <Image src={quickIco2} alt="가맹상담" />
      </Link>
      <Image src={asideBg} alt="" />
    </_aside>
  );
};

export default AcademyAside;

const _aside = styled.aside`
  width: 84px;
  height: 226px;
  border-radius: 50px;
  position: fixed;
  right: 50px;
  top: 50%;
  margin-top: -113px;
  z-index: 555;
  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border: 5px solid #f6921d;
    border-radius: 50px;
  }

  > a {
    display: block;
    width: 53px;
    height: 77px;
    position: relative;
    margin: 20px auto 0;
    z-index: 2;
    > img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 550px) {
    display: none;
  }
`;
