import styled from '@emotion/styled';

import franIco1 from '@/public/franIco1.gif';
import franIco2 from '@/public/franIco2.gif';
import franIco3 from '@/public/franIco3.gif';
import franIco4 from '@/public/franIco4.gif';
import franIco5 from '@/public/franIco5.gif';
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    title: '01. 가맹자격',
    content:
      '대졸 이상 학력의 소지자로 유아 및 조기교육에 관심과 열정이 있으신 분',
    img: franIco1,
  },
  {
    title: '02. 전공 과목',
    content:
      '전공에는 특별한 제한은 없으나 미술 또는 유아교육 전공자 또는 관련 업종 유경험자를 우선 선발합니다',
    img: franIco2,
  },
  {
    title: '03. 상권 및 입지분석',
    content: `미술로생각하기 센터의 상권은 3단계로 나뉘며 1급~3급지로 구분됩니다 창업을 희망하시는 \n원장님들의 기준에 맞춰 본사의 다년간의 데이터를 통한 과학적인 상권분석과 입지 선정을 도와드립니다`,
    img: franIco3,
  },
  {
    title: '04. 시설기준',
    content:
      '미술로생각하기 센터의 시설은 30평~50평 정도의 규모로 예상 상권의 규모와 원장님의 사업계획에 따라 결정하게 됩니다',
    img: franIco4,
  },
  {
    title: '05. 투자내용 및 예상비용',
    content:
      '미술로생각하기 센터를 신규 오픈하기 위한 투자 비용은 가맹비, 인테리어비, 그리고 시설집기비로 이루어지며 내용은 아래와 같습니다',
    img: franIco5,
  },
];

const AcademyFranchise = () => {
  return (
    <>
      <_box>
        <h3>FRANCHISE</h3>
        <_text>
          미술로생각하기는 지난
          <_br /> 20여년간 최고의 브랜드 파워와 경험
          <br />
          그리고 다양한 데이터를 통해 여러분들의 <_br />
          성공적인 비즈니스를 도와드립니다
        </_text>
      </_box>
      <_ol>
        {data.map((ele, idx) => {
          return (
            <_li key={idx}>
              <_flex>
                <_imgWrap>
                  <Image src={ele.img} alt="" />
                </_imgWrap>
                <_textWrap>
                  <span>
                    <strong>{ele.title}</strong>
                  </span>
                  <span>{ele.content}</span>
                </_textWrap>
              </_flex>

              {idx === 4 && (
                <_ul>
                  <_li2>
                    <span>
                      <strong>항목</strong>
                    </span>
                    <span>
                      <strong>내용</strong>
                    </span>
                    <span>
                      <strong>비용</strong>
                    </span>
                  </_li2>
                  <li>
                    <span>가맹비</span>
                    <ul>
                      <li>
                        <span>
                          상권규모 특성에 따라 본사 기준의 1~3급지로 구분함
                        </span>
                        <span>1천~3천만원(급지별차등)</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>인테리어</span>
                    <ul>
                      <li>
                        <span>{`A안) 본사표준모델에 따른 본사지정업체 시공`}</span>
                        <span>1평당 130만원 예상</span>
                      </li>
                      <li>
                        <span>{`B안) 본사 표준 인테리어 매뉴얼에 따른 설계 및 감리`}</span>
                        <span>1평당 15만원 예상</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>시설집기</span>
                    <ul>
                      <li>
                        <span>간판, 냉난방기, 기타 집기 등</span>
                        <span>500 ~ 1500만원 예상</span>
                      </li>
                    </ul>
                  </li>
                </_ul>
              )}
            </_li>
          );
        })}
      </_ol>
      <_btn>
        <Link href={'/academy/centerInfo/councel'}>가맹상담 신청하기</Link>
      </_btn>
    </>
  );
};

export default AcademyFranchise;

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
    color: #d783d7;
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
    font-size: clamp(15px, 4vw, 24px);
  }

  line-height: 1.6em;
`;

const _br = styled.br`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;

const _ol = styled.ol`
  list-style: none;
`;

const _li = styled.li`
  width: 1200px;
  margin-bottom: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 100px 16px;
  }
  @media (max-width: 650px) {
    padding: 50px 16px;
  }
  padding: 32px 50px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 3px 2px 2px -2px rgba(0, 0, 0, 0.3);
  position: relative;
  border: 1px solid #e8e8e8;
`;

const _flex = styled.div`
  display: flex;
`;

const _imgWrap = styled.div`
  padding-top: 5px;
`;

const _textWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  word-break: keep-all;
  font-size: 18px;
  @media (max-width: 550px) {
    font-size: 15px;
    padding: 0 15px;
  }
  line-height: 150%;
  font-weight: 400;
  //font-size: clamp( 19px);
  > span {
    display: block;
    white-space: break-spaces;
    margin-bottom: 10px;
    > strong {
      font-size: 20px;
      @media (max-width: 550px) {
        font-size: 18px;
      }
    }
  }
`;

const _btn = styled.button`
  display: block;
  position: relative;
  cursor: pointer;
  width: 300px;
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
`;

const _ul = styled.ul`
  list-style: none;
  display: block;
  width: 800px;
  margin: 20px auto 0;
  word-break: break-all;
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
  span {
    padding: 10px 5px;
  }

  > li {
    display: flex;
    align-items: center;
    background: #f9f9f9;
    border-bottom: 1px solid #e8e8e8;
    font-size: clamp(12px, 3vw, 15px);
    line-height: 150%;
    > span {
      flex: 2;
      text-align: center;
      color: #222;
      font-weight: 600;
    }
    > ul {
      flex: 8;
      display: flex;
      flex-direction: column;
      background-color: white;
      > li {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
        border-left: 1px solid #e8e8e8;
        &:nth-last-of-type(1) {
          border-bottom: none;
        }
        > span {
          padding: 10px !important;
          @media (max-width: 600px) {
            padding: 10px !important;
          }

          &:nth-of-type(1) {
            flex: 6.5;
            padding-left: 10px;
          }
          &:nth-of-type(2) {
            flex: 3.5;
          }
        }
      }
    }
  }
`;

const _li2 = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000022 !important;

  > span {
    text-align: center;
    border-bottom: 1px solid #e8e8e8;
    background-color: white;

    &:nth-of-type(1) {
      flex: 2;
    }
    &:nth-of-type(2) {
      flex: 5;
    }
    &:nth-of-type(3) {
      flex: 3;
    }
  }
`;
