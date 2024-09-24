import styled from '@emotion/styled';
const AcademyIntroduce = () => {
  const listata = [
    {
      year: '1999',
      month: [{ num: '3', text: '교육센터용 미술로생각하기 프로그램 개발' }],
    },
    {
      year: '2002',
      month: [{ num: '12', text: 'F/C 사업법인 ㈜미술로생각하기 법인 설립' }],
    },
    {
      year: '2003',
      month: [
        { num: '03', text: '미술로생각하기 F/C 사업 Launching' },
        { num: '07', text: '제1회 한국교육산업 대상 수상(한국일보)' },
      ],
    },
    {
      year: '2005',
      month: [
        { num: '03', text: '미술로생각하기 중국 진출' },
        { num: '07', text: '중국 SCFP 2005 Award상 수상' },
      ],
    },
    { year: '2006', month: [{ num: '04', text: '미술로생각하기 홍콩 진출' }] },
    {
      year: '2007',
      month: [{ num: '04', text: '초등용 미술프로그램 확대개발' }],
    },
    {
      year: '2010',
      month: [
        { num: '08', text: '미술로생각하기 미국 진출' },
        { num: '08', text: '미술로생각하기 싱가폴/말레이시아 진출' },
      ],
    },
    {
      year: '2011',
      month: [{ num: '07', text: '대한민국 교육대상 미술교육부문 수상' }],
    },
    {
      year: '2014',
      month: [
        { num: '01', text: '미술로생각하기 신규BI 및 캐릭터 개발 Launching' },
        { num: '12', text: '중소기업청 우수프랜차이즈 선정' },
      ],
    },
    {
      year: '2016',
      month: [
        { num: '07', text: 'K.misulo 중국 현지법인설립' },
        { num: '12', text: '국립국어원 정다운 상표상 수상' },
      ],
    },
    {
      year: '2017',
      month: [{ num: '02', text: '행정자치부장관상 우수 수상' }],
    },
    {
      year: '2018',
      month: [{ num: '02', text: '숭실대 부설 CK 연구협약 및 연구완료' }],
    },
    { year: '2019', month: [{ num: '07', text: '미술로 마음검사 개발' }] },
  ];
  return (
    <_inner>
      <h2>회사소개</h2>
      <_main>
        <_box>
          <_text>
            <h3>INTRODUCTION</h3>
            <p>
              유아교육의 아버지 <_br />
              프뢰벨(Friedrich Frobel)은 <br />
              놀이는 유아기 아이들의 <_br />
              가장 순수한 영적 활동이라고 말했습니다
            </p>
            <p>
              아이들에게 놀이는 삶이며 권리이고 본능입니다. <_br />
              그리고{' '}
              <span>
                성장발달의 <strong>필수요소</strong>입니다
              </span>
              <br />
              미술로생각하기는 1999년 이후 <_br />
              <span>
                <strong>20여년간</strong>
              </span>{' '}
              꾸준히
              <_br /> 놀이미술 프로그램을 연구해 왔습니다
              <br /> 놀이미술은 우리아이들의 발달과 성장에 <_br />
              중요하고 가치 있는 일이기 때문입니다
              <br /> <br />
              그리고 미술로생각하기는 <_br />
              놀이미술을 통해서 우리아이들에게 <br />
              <strong className="red">
                놀이 이상의 가치, <_br />
                즐거움 이상의 가치, <_br />
                행복이상의 가치
              </strong>
              를 심어 주고자 합니다
            </p>
          </_text>
        </_box>
        <_box>
          <_text>
            <h3>HISTORY</h3>
            <_ol>
              {listata.map((ele, idx) => {
                return (
                  <ul key={idx}>
                    <span>{ele.year}</span>
                    {ele.month.map((mon, index) => {
                      console.log(idx, idx % 0);
                      return (
                        <li key={index}>
                          {idx % 2 === 0 && (
                            <span>
                              <strong>{mon.num}</strong>
                            </span>
                          )}
                          <span>{mon.text}</span>

                          {idx % 2 !== 0 && (
                            <span>
                              <strong>{mon.num}</strong>
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </_ol>
          </_text>
        </_box>
      </_main>
    </_inner>
  );
};

export default AcademyIntroduce;

const _inner = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  padding-top: 100px;
  padding-bottom: 50px;
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
`;

const _box = styled.div`
  width: 1200px;
  margin-bottom: 50px;
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
`;

const _text = styled.div`
  width: max-content;
  @media (max-width: 1200px) {
    width: 100%;
  }
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
  background: url(/dda1.png) top center no-repeat,
    url(/dda2.png) bottom center no-repeat;

  > h3 {
    font-size: 28px;
    color: #209330;
    font-weight: 800;
    text-align: center;
    position: relative;
    margin-bottom: 70px;
    &::after {
      content: '';
      display: block;
      width: 35px;
      height: 1px;
      background: #222;
      position: absolute;
      left: 50%;
      top: 40px;
      transform: translateX(-50%);
    }
  }
  > p {
    &:nth-of-type(1) {
      font-size: 28px;
      font-weight: 800;
      line-height: 1.4em;
      margin-bottom: 15px;
      @media (max-width: 900px) {
        font-size: clamp(22px, 3vw, 24px);
      }

      @media (max-width: 450px) {
        font-size: 18px;
      }
    }
    &:nth-of-type(2) {
      font-size: 24px;
      line-height: 1.6em;
      @media (max-width: 900px) {
        font-size: clamp(16px, 2vw, 20px);
      }
      @media (max-width: 650px) {
        font-size: clamp(15px, 4vw, 20px);
      }
      /* @media (max-width: 450px) {
        font-size: 17px;
      } */
      > strong {
        font-weight: 600;
      }
    }
  }
`;

const _br = styled.br`
  display: none;
  @media (max-width: 650px) {
    display: block;
  }
`;

const _ol = styled.ol`
  display: flex;
  width: 1000px;
  z-index: 1;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
  }
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background-color: #e8e8e8;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  > ul {
    width: 50%;
    z-index: 2;
    &:nth-of-type(odd) {
      text-align: left;
      transform: translate(100%, -30px);
      padding-left: 20px;
      position: relative;

      > span {
        font-size: 26px;
        line-height: 150%;
        color: #209330;
        font-weight: 900;
        transform: translateY(-5px);
        position: relative;
        &::after {
          content: '';
          display: block;
          width: 12px;
          height: 12px;
          background: #1f922f;
          border: 2px solid #1f922f;
          border-radius: 50%;
          box-sizing: border-box;
          position: absolute;
          top: 60%;
          left: -20px;
          transform: translate(-50%, -50%);
        }
      }
    }
    &:nth-of-type(even) {
      text-align: right;
      padding-right: 20px;
      position: relative;
      transform: translate(0, -30px);

      > span {
        position: relative;
        font-size: 26px;
        line-height: 150%;
        color: #209330;
        font-weight: 900;
        &::after {
          content: '';
          display: block;
          width: 12px;
          height: 12px;
          background: white;
          border: 2px solid #1f922f;
          border-radius: 50%;
          box-sizing: border-box;
          position: absolute;
          top: 60%;
          right: -20px;
          transform: translate(50%, -50%);
        }
      }
      > li {
        justify-content: end;
      }
    }
    > li {
      background: #f9f9f9;
      border-radius: 8px;
      padding: 14px 20px;
      margin: 5px 0;
      display: flex;
      word-break: normal;
      > span {
        &:nth-of-type(1) {
          margin-right: 10px;
        }
      }
    }
  }
`;
