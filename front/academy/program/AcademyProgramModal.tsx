import styled from '@emotion/styled';
import Image from 'next/image';
import pop1 from '@/public/pop1.png';
import pop2 from '@/public/pop2.png';
import pop3 from '@/public/pop3.png';
import pop4 from '@/public/pop4.png';
import closeIcon from '@/public/center/common/close.svg';
import { useContext } from 'react';
import { ModalDispatchContext } from '@/page_component/common/contextUI/modal/ModalContext';

type Props = {
  num: number;
};

const AcademyProgramModal = ({ num }: Props) => {
  const { close } = useContext(ModalDispatchContext);
  const list = [pop1, pop2, pop3, pop4];
  return (
    <_box>
      <_button onClick={close}>
        <Image src={closeIcon} alt="닫기" />
      </_button>
      <_imgWrap>
        <Image src={list[num]} alt="수업표" quality={100} />
      </_imgWrap>
    </_box>
  );
};

export default AcademyProgramModal;

const _box = styled.div`
  width: 1126px;
  height: 620px;
  text-align: center;
  box-sizing: border-box;
  padding-top: 70px;
  padding-bottom: 30px;
  background-color: white;
  position: relative;

  @media (max-width: 1200px) {
    width: 100%;
    height: max-content;
    margin: 0 auto;
  }
`;
const _imgWrap = styled.div`
  width: 960px;
  height: 0;
  margin: 0 auto;
  padding-top: calc(399 / 960 * 100%);
  position: relative;
  @media (max-width: 1200px) {
    width: 90vw;
  }
  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const _button = styled.button`
  cursor: pointer;
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: white;
  width: 30px;
  height: 30px;
  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
