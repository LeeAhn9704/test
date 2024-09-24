import styled from '@emotion/styled';
import Image from 'next/image';
import philoTit from '@/public/philoTit.png';
import philo1 from '@/public/philo1.png';

const Philosophy = () => {
  return (
    <_inner>
      <_text>
        <h3>
          PHILOSOPHY <Image src={philoTit} alt="philosophy" />
        </h3>
        <p>
          아이의 무한 잠재력을 키워주는 곳 <br />
          미술로생각하기
        </p>
        <p>
          아이에게 놀이는 삶이며 본능입니다
          <br />
          그리고 놀이는 성장 발달의 <strong>필수요소</strong>입니다
          <br />
          미술로생각하기의 미술놀이와 체험은
          <br />
          아이의 <strong>무한 잠재력</strong>을 키워줍니다
        </p>
      </_text>
      <_imgWrap>
        <Image src={philo1} alt="" quality={100} />
      </_imgWrap>
    </_inner>
  );
};

export default Philosophy;

const _inner = styled.section`
  width: 1200px;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 16px;
    justify-content: center;
  }

  height: 818px;
  @media (max-width: 900px) {
    height: 600px;
  }
  @media (max-width: 650px) {
    height: 485px;
  }

  padding: 60px 80px 65px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 3px 2px 2px -2px rgba(0, 0, 0, 0.3);
  position: relative;
  border: 1px solid #e8e8e8;
`;

const _text = styled.div`
  width: 463px;
  margin-right: 20px;

  @media (max-width: 550px) {
    width: 100%;
    padding: 50px 0px;
    margin-right: 0;
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
      width: 182px;
      height: 23px;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  > p {
    &:nth-of-type(1) {
      font-size: 32px;
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
      margin-top: 25px;
      font-size: 24px;
      line-height: 1.6em;
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
  top: 60px;
  right: 65px;

  width: 45%;
  height: 0;
  padding-top: calc(687 / 512 * 45%);

  @media (max-width: 1200px) {
    position: relative;
    top: auto;
    right: auto;
  }
  @media (max-width: 900px) {
    display: none;
  }

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
`;
