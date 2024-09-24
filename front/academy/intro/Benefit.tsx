import styled from '@emotion/styled';
import Image from 'next/image';
import beneTit from '@/public/beneTit.png';
import bene1 from '@/public/bene1.png';

const Benefit = () => {
  return (
    <_inner>
      <_text>
        <h3>
          Benefit <Image src={beneTit} alt="beneTit" />
        </h3>
        <p>
          미술로생각하기 프로그램은 <br />
          자기주도적인 아이로 성장시켜 줍니다
        </p>
        <p>
          아이는 미술로생각하기를 통해 <br />
          매번 즐겁고 만족한 성공의 경험을 하게 해줍니다
          <br /> <strong>즐거움, 만족,</strong> 그리고{' '}
          <strong>성공의 경험</strong>은
          <br /> 아이를 <strong>긍정적이고 자기주도적인</strong> 아이로
          성장시켜줍니다
        </p>
      </_text>
      <_imgWrap>
        <Image src={bene1} alt="" quality={100} />
      </_imgWrap>
    </_inner>
  );
};

export default Benefit;

const _inner = styled.div`
  width: 1200px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 16px;
  }
  height: 950px;
  @media (max-width: 900px) {
    display: flex;
    align-items: start;
    justify-content: center;
    margin-top: 0;
  }
  @media (max-width: 650px) {
    height: 485px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  padding: 60px 90px 65px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 3px 2px 2px -2px rgba(0, 0, 0, 0.3);
  position: relative;
  border: 1px solid #e8e8e8;
`;

const _text = styled.div`
  width: 570px;
  margin-left: 40px;
  @media (max-width: 1200px) {
    margin-top: 30px;
  }
  @media (max-width: 900px) {
  }
  @media (max-width: 650px) {
    margin-top: 0;
  }
  @media (max-width: 550px) {
    width: 100%;
    padding: 50px 0px;
  }
  padding: 50px 0;
  text-align: center;
  background: url(/dda1.png) top center no-repeat,
    url(/dda2.png) bottom center no-repeat;

  > h3 {
    width: 100%;
    position: relative;
    color: transparent;
    margin-bottom: 25px;
    > img {
      position: absolute;
      width: 102px;
      height: 23px;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  > p {
    &:nth-of-type(1) {
      font-size: 34px;
      font-weight: 800;
      line-height: 1.6em;
      @media (max-width: 900px) {
        font-size: 26px;
      }
      @media (max-width: 550px) {
        font-size: 24px;
      }
      @media (max-width: 450px) {
        font-size: 18px;
      }
    }
    &:nth-of-type(2) {
      font-size: 24px;
      line-height: 1.6em;
      margin-top: 25px;
      @media (max-width: 550px) {
        font-size: 16px;
      }
      @media (max-width: 450px) {
        font-size: 14px;
      }
      > strong {
        font-weight: 600;
      }
    }
  }
`;

const _imgWrap = styled.div`
  /* width: 50%;
  height: 0;
  padding-top: calc(512 / 687 * 100%); */
  /* width: 512px;
  height: 687px; */
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);

  width: 90%;
  height: 0;
  padding-top: calc(618 / 1065 * 90%);

  @media (max-width: 900px) {
    width: 680px;
    height: 395px;
    padding-top: 0;
  }

  @media (max-width: 750px) {
    width: 90%;
    height: 0;
    padding-top: calc(618 / 1065 * 90%);
  }

  @media (max-width: 650px) {
    display: none;
  }

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
`;

const _br = styled.br`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;
