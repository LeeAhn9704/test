import styled from '@emotion/styled';
import Image from 'next/image';
import charTit from '@/public/charTit.png';
import char1 from '@/public/char1.png';
const Character = () => {
  return (
    <_inner>
      <_text>
        <h3>
          Character <Image src={charTit} alt="Character" />
        </h3>
        <p>
          208개의 미술로생각하기 콘텐츠가
          <br />
          아이 스스로를 조절할수 있는
          <br />
          능력을 향상시켜 줍니다
        </p>
        <p>
          아이는 미술로생각하기에서 4년간 <_br />
          매주 다른 208개의 콘텐츠를 만납니다
          <br />
          208번의 <strong>문제를 해결</strong>하는 <_br /> 경험과 생각과 행동을
          조절한 아이는
          <br />
          <strong>
            스스로 하고 싶은 것을 찾아서
            <_br /> 성공
          </strong>
          하는 아이로 자라게 됩니다
        </p>
      </_text>
      <_imgWrap>
        <Image src={char1} alt="" quality={100} />
      </_imgWrap>
    </_inner>
  );
};

export default Character;

const _inner = styled.div`
  width: 1200px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 16px;
  }
  height: 818px;
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

  > img {
    position: absolute;
    bottom: 100px;
    @media (max-width: 1200px) {
      width: 800px;
      height: 400px;
      left: 50%;
      transform: translateX(-50%);
      bottom: 50px;
      object-fit: cover;
    }
  }
`;

const _text = styled.div`
  width: 600px;
  position: absolute;
  top: 60px;
  right: 90px;

  @media (max-width: 1200px) {
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 900px) {
    top: 50px;
  }
  @media (max-width: 650px) {
    position: relative;
    top: auto;
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
      width: 173px;
      height: 23px;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  > p {
    &:nth-of-type(1) {
      font-size: 30px;
      font-weight: 800;
      line-height: 1.6em;
      @media (max-width: 1200px) {
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
      font-size: 20px;
      line-height: 1.6em;
      margin-top: 25px;
      @media (max-width: 1200px) {
        font-size: 18px;
      }
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

  width: 95%;
  height: 0;
  padding-top: calc(515 / 1020 * 95%);

  @media (max-width: 1200px) {
    width: 805px;
    height: 406px;
    padding-top: 0;
  }

  @media (max-width: 900px) {
    width: 595px;
    height: 300px;
    bottom: 50px;
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
