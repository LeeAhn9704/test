import styled from '@emotion/styled';
import Image from 'next/image';
import expe1 from '@/public/expe1.png';
import expe2 from '@/public/expe2.png';
import expe3 from '@/public/expe3.png';
import expe4 from '@/public/expe4.png';
import expe5 from '@/public/expe5.png';
import Link from 'next/link';

const data = [
  { title: '대상연령', content: `13개월부터\n시작합니다`, img: expe1 },
  {
    title: '팀구성',
    content: `또래별 4명이하\n소수정예로 구성됩니다`,
    img: expe2,
  },
  {
    title: '수업시간',
    content: `월별 프로그램으로\n연중 자유롭게 가능합니다`,
    img: expe3,
  },
  { title: '회원가입', content: `주1회 50분 수업입니다`, img: expe4 },
  {
    title: '체험수업',
    content: `무료로 아이들이\n직접 체험할수 있습니다`,
    img: expe5,
  },
];

const AcademyExperience = () => {
  return (
    <>
      <_box>
        <h3>EXPERIENCE</h3>
        <_text>
          우리 아이의 즐겁고 행복한 <_br />
          미술놀이를 경험해보세요
          <br />
          전국의 미술로생각하기 센터에서
          <br />
          아이가 미술로생각하기 프로그램을 <_br />
          직접 체험해 볼 수 있습니다
        </_text>
        <_btn>
          <Link href={'/academy/classes/experience/list'}>
            체험수업 신청하기
          </Link>
        </_btn>
      </_box>
      <_box>
        <h3 className="entrance">ENTRANCE</h3>
        <_text>
          미술로생각하기 수업은 13개월의
          <_br />
          영아부터 시작 할 수 있습니다
          <br />
          상세한 수업기준은 아래와 같으며
          <br />
          전국의 센터가 동일한 기준으로 진행됩니다 <br />
          회원 가입은 전국 미술로생각하기 <_br />
          센터에 신청하실 수 있습니다
        </_text>
        <_wrap>
          <_btn className="entrance">
            <Link href={'/academy/centerInfo/location'}>센터소개</Link>
          </_btn>
          <span> (교육비는 지역별 차등이 있습니다.)</span>
        </_wrap>
      </_box>
      <_ol>
        {data.map((ele, idx) => {
          return (
            <li key={idx}>
              <Image src={ele.img} alt="" />
              <span>{ele.title}</span>
              <p>{ele.content}</p>
            </li>
          );
        })}
      </_ol>
    </>
  );
};

export default AcademyExperience;

const _box = styled.div`
  width: 1200px;
  margin-bottom: 15px;
  position: relative;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 100px 16px;
  }
  @media (max-width: 650px) {
    padding: 50px 16px;
  }
  padding: 60px 90px 65px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 3px 2px 2px -2px rgba(0, 0, 0, 0.3);
  position: relative;
  border: 1px solid #e8e8e8;

  > h3 {
    font-size: 33px;
    background: url(/dda1.png) top center no-repeat;
    padding-top: 50px;
    @media (max-width: 700px) {
      font-size: 30px;
    }
    color: #fa9830;
    font-weight: 800;
    text-align: center;
    position: relative;
    &::after {
      content: '';
      display: block;
      width: 35px;
      height: 1px;
      background: #222;
      position: absolute;
      left: 50%;
      bottom: -5px;
      transform: translateX(-50%);
    }

    &.entrance {
      color: #70ad01;
    }
  }
`;

const _text = styled.p`
  width: max-content;
  margin: 0 auto;
  padding: 25px 0 50px;
  text-align: center;
  background: url(/dda2.png) bottom center no-repeat;

  font-size: clamp(20px, 2vw, 24px);
  @media (max-width: 700px) {
    font-size: clamp(15px, 4vw, 22px);
  }

  line-height: 1.6em;
`;

const _br = styled.br`
  display: none;
  @media (max-width: 650px) {
    display: block;
  }
`;

const _ol = styled.ol`
  list-style: none;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  padding-bottom: 50px;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding-bottom: 0px;
    //height: 500px;
  }
  > li {
    flex: 1;
    height: 295px;
    text-align: center;
    padding: 0 20px;
    background: #fff;
    border-radius: 0 0 30px 30px;
    box-shadow: 3px 2px 2px -2px rgba(0, 0, 0, 0.3);
    margin-right: 12px;
    overflow: hidden;
    position: relative;

    @media (max-width: 1200px) {
      flex: auto;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      border-radius: 30px;
      margin-bottom: 20px;
      padding: 30px 20px;
    }
    @media (max-width: 600px) {
      flex-direction: column;
    }

    &:nth-last-of-type(1) {
      margin-right: 0;
    }
    > span {
      font-size: 19px;
      font-weight: 400;
      line-height: 1.4em;
      padding-top: 50px;
      display: block;
      @media (max-width: 1200px) {
        padding-top: 0;
      }
    }
    > p {
      text-align: center;
      font-size: 16px;
      color: #222;
      line-height: 1.6em;
      margin-top: 15px;
      white-space: break-spaces;
      @media (max-width: 1200px) {
        white-space: normal;
        margin-top: 0;
      }
    }
    > img {
      display: block;
      margin: 44px auto 0;
      width: 79px;
      height: 64px;
      object-fit: contain;
      @media (max-width: 1200px) {
        margin: 0;
      }
    }
  }
`;

const _btn = styled.button`
  display: block;
  position: relative;
  cursor: pointer;
  width: 250px;
  height: 58px;
  line-height: 58px;
  font-size: 21px;
  text-align: center;
  background: #f6921d;
  border-radius: 30px;
  box-shadow: 3px 2px 2px -2px rgba(0, 0, 0, 0.3);
  margin: 30px auto 50px;
  > a {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &.entrance {
    background: #70ad01;
  }
`;

const _wrap = styled.div`
  position: relative;
  > span {
    position: absolute;
    top: 65px;
    font-size: 15px;
    color: #666;
    width: 100%;
    text-align: center;
    @media (max-width: 450px) {
      font-size: 13px;
    }
  }
`;
