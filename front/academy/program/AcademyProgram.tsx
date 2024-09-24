import styled from '@emotion/styled';
import Image from 'next/image';
import prog1 from '@/public/prog1.png';
import prog2 from '@/public/prog2.png';
import prog3 from '@/public/prog3.png';
import prog4 from '@/public/prog4.png';
import pop1 from '@/public/pop1.png';
import pop2 from '@/public/pop2.png';
import pop3 from '@/public/pop3.png';
import pop4 from '@/public/pop4.png';
import { useContext } from 'react';
import { ModalDispatchContext } from '@/page_component/common/contextUI/modal/ModalContext';
import AcademyProgramModal from './AcademyProgramModal';

const data = [
  {
    color: '#ffcc00',
    step: 'STEP1.FEELING',
    conten: `감각놀이를 통한\n오감으로 느끼기`,
    mon: '13~36M',
    img: prog1,
    table: pop1,
  },
  {
    color: '#95c11f',
    step: 'STEP2.PLAYING',
    conten: `체험놀이를 통한\n놀이로 이해하기`,
    mon: '36~48M',
    img: prog2,
    table: pop2,
  },
  {
    color: '#ef7d00',
    step: 'STEP3.THINKING',
    conten: `지적호기심을 통한\n다양한 생각키우기`,
    mon: '48~60M',
    img: prog3,
    table: pop3,
  },
  {
    color: '#009bd9',
    step: 'STEP4.CREATIVE',
    conten: `창의적 사고와 독창적\n문제해결력 키우기`,
    mon: '60~72M',
    img: prog4,
    table: pop4,
  },
];

const AcademyProgram = () => {
  const { open } = useContext(ModalDispatchContext);

  return (
    <>
      <_box>
        <h3>PROGRAM</h3>
        <_text>
          미술로생각하기 프로그램은
          <br />
          13개월의 어린 아기부터 7세 이하의 어린이까지
          <br />
          아이의 발달에 따라 <_br />
          4스텝 5코스 프로그램으로 구성되어 있습니다
        </_text>
      </_box>
      <_ol>
        {data.map((ele, idx) => {
          return (
            <li key={idx}>
              <span style={{ background: ele.color }}>{ele.step}</span>
              <p>
                {ele.conten}
                <strong style={{ color: ele.color }}>{ele.mon}</strong>
              </p>
              <_imgWrap>
                <Image className="kid" src={ele.img} alt="kid" quality={100} />
                <Image
                  className="table"
                  src={ele.table}
                  alt="kid"
                  quality={100}
                />
              </_imgWrap>
              <button onClick={() => open(<AcademyProgramModal num={idx} />)}>
                자세히 보기
              </button>
            </li>
          );
        })}
      </_ol>
    </>
  );
};

export default AcademyProgram;

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
    color: #429d93;
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
  @media (max-width: 800px) {
    width: 100%;
    flex-wrap: wrap;
  }
  > li {
    flex: 1;
    white-space: break-spaces;
    height: max-content;
    @media (max-width: 800px) {
      width: 100%;
      flex: auto;
      margin: 0 auto 20px;
    }

    background: #fff;
    border-radius: 20px;
    box-shadow: 3px 2px 2px -2px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    margin-right: 10px;
    position: relative;
    overflow: hidden;
    &:nth-last-of-type(1) {
      margin-right: 0;
    }

    > span {
      text-align: center;
      display: block;
      padding: 15px 0;
      color: white;
    }
    > p {
      text-align: center;
      font-size: 19px;
      font-weight: 400;
      line-height: 1.8em;
      padding: 20px 0;
      > strong {
        display: block;
      }
    }
    > img {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
    }
    > button {
      cursor: pointer;
      color: #666;
      font-size: 16px;
      line-height: 150%;
      background: white;
      border: 1px solid #d9d9d9;
      border-radius: 10px;
      padding: 10px 0;
      width: 80%;
      display: block;
      margin: 30px auto;
      @media (max-width: 800px) {
        display: none;
      }
    }
  }
`;

const _imgWrap = styled.div`
  position: relative;
  width: 241px;
  height: 241px;
  margin: 0 auto;
  padding: 0 10px;
  @media (max-width: 1200px) {
    width: 96%;
    height: 0;
    padding-top: calc(241 / 241 * 96%);
  }
  @media (max-width: 800px) {
    padding-top: calc(540 / 960 * 100%);
  }
  > img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    &.kid {
      display: block;
      @media (max-width: 800px) {
        display: none;
      }
    }
    &.table {
      display: none;
      @media (max-width: 800px) {
        display: block;
      }
    }
  }
`;
