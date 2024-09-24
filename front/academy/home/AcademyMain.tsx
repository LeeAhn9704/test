import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import home1 from "@/public/home1.png";
import home2 from "@/public/home2.png";
import home3 from "@/public/home3.png";
import brandBg from "@/public/brandBg.png";
import brand1 from "@/public/brand1.png";
import brandObj from "@/public/brandObj.png";
import conceptObj from "@/public/conceptObj.png";
import conceptTxt from "@/public/conceptTxt.svg";
import concept1 from "@/public/concept1.svg";
import concept2 from "@/public/concept2.svg";
import concept3 from "@/public/concept3.svg";
import insta from "@/public/insta.svg";
import plus from "@/public/center/common/plus.svg";
import cs2 from "@/public/cs2.svg";
import cs3 from "@/public/cs3.svg";
import cs4 from "@/public/cs4.svg";

import Link from "next/link";
import PreviewNotice from "./PreviewNotice";
import { useRouter } from "next/router";
import { deviceQuery } from "@/styles/media";

const AcademyMain = () => {
  const router = useRouter();
  return (
    <>
      <_section1>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src={home1} alt="home1" quality={100} fill />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={home2} alt="home2" quality={100} fill />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={home3} alt="home3" quality={100} fill />
          </SwiperSlide>
        </Swiper>
        {/* <_wrap /> */}
      </_section1>
      <_main>
        <_section2>
          <Image src={brandBg} alt="" quality={100} />
          <_textWrap>
            <h2 style={{ color: "#ff9500" }}>BRAND</h2>
            <h3>
              <strong>미술로생각하기</strong>
            </h3>
            <p>
              미술로생각하기는 1999년 <br />
              <strong>국내 최초</strong>로 개발되었습니다
              <br />
              <strong>지난 20여년간</strong> 국내외 <br />
              아이들과 엄마들에게
              <br />
              꾸준히 인정과 사랑을 받고 있는
              <br />
              <strong>영, 유아 놀이미술 전문 교육 센터</strong> 입니다
              <br />
              앞으로도 꾸준히 노력하는 <br />
              미술로생각하기가 되도록 노력하겠습니다
            </p>
            <_brandImgWrap>
              <Image className="brand1" src={brand1} alt="brand" />
            </_brandImgWrap>

            <_linkWrap>
              <Link href={"/academy/introduce"}>브랜드소개 자세히 보기</Link>
            </_linkWrap>
            <_imgWrap style={{ left: 0, transform: "translate(-50%, -50%)" }}>
              <Image src={brandObj} alt="" fill />
            </_imgWrap>
          </_textWrap>
        </_section2>
        <_section2 style={{ backgroundColor: "white" }}>
          <_textWrap>
            <h2 style={{ color: "#ec193a" }}>CONCEPT</h2>
            <h3>교육개념</h3>
            <Image src={conceptTxt} alt="" />

            <p>
              미술로생각하기는 <br />
              미술놀이와 체험을 통해
              <br />
              스스로 바른 마음과 생각을 조절하여 <br />
              바르게 행동하는 능력을 키워줍니다
              <br />
              그리고{" "}
              <strong>
                즐겁고 행복하고 <br />
                자신감
              </strong>{" "}
              있는 아이로 <strong>성장</strong>하게 도와줍니다
            </p>
            <_ul>
              <li>
                <Link href={"/academy/intro/philosophy"}>
                  <div>
                    <Image src={concept1} alt="concept1" />
                    <div>
                      <strong>Philosophy</strong>
                      <strong>교육철학</strong>
                      <p>
                        아이의 무한 잠재력을 키워주는 곳<br />
                        미술로생각하기
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/academy/intro/benefit"}>
                  <div>
                    <Image src={concept2} alt="concept2" />
                    <div>
                      <strong>Effect</strong>
                      <strong>교육효과</strong>
                      <p>
                        미술로생각하기 프로그램은
                        <br />
                        자기주도적인 아이로 성장시켜 줍니다
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/academy/intro/character"}>
                  <div>
                    <Image src={concept3} alt="concept3" />
                    <div>
                      <strong>Character</strong>
                      <strong>교육특징</strong>
                      <p>
                        208개의 미술로생각하기 컨텐츠가
                        <br />
                        아이 스스로를 조절할수 있는
                        <br />
                        능력을 향상시켜 줍니다
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            </_ul>
            <_imgWrap className="robot">
              <Image src={conceptObj} alt="" fill />
            </_imgWrap>
          </_textWrap>
        </_section2>
      </_main>
      <_article>
        <_wrap />
        <_textWrap>
          <Link
            className="big"
            href="https://www.instagram.com/bigto_misulo/"
            style={{ color: "black" }}
          >
            <Image src={insta} alt="instagram" />
            미술로 생각하기 공인 인스타그램
          </Link>
          <_title>
            <p>주요 소식과 이벤트를 확인해 보세요!</p>
            <h2 className="big">미술로 생각하기 고객센터</h2>
          </_title>
          <_section>
            <section>
              <h3>공지사항</h3>
              <_absolute
                onClick={() => router.push(`/academy/community/notice`)}
              >
                <Image src={plus} alt="공지 전체로" />
              </_absolute>
              <PreviewNotice />
            </section>
            <section>
              <Link href={"/academy/community/faq"}>
                <h3>
                  <Image src={cs2} alt="faq" />
                  자주 묻는 질문
                </h3>
                <span>
                  FAQ에서 미술로생각하기의
                  <br />
                  궁금증을 해결하세요
                  <Image src={cs3} alt="faq 전체로" />
                </span>
              </Link>
            </section>
            <section>
              <h3>
                <Image src={cs4} alt="고객센터" /> 고객센터
              </h3>
              <strong style={{ fontSize: "32px" }}>02-2026-1461~5</strong>
              <span style={{ display: "block" }}>
                Week. 09:00 ~ 18:00
                <br />
                Holiday. dayoff
              </span>
            </section>
          </_section>
        </_textWrap>
      </_article>
    </>
  );
};

export default AcademyMain;

const _main = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateY(-5px);
  z-index: 1;
`;

const _section1 = styled.section`
  width: 100%;
  background-color: transparent;
  position: relative;
  .swiper-slide {
    width: 100%;
    height: 0;
    position: relative;
    padding-top: calc(906 / 2000 * 100%);
    img {
      @media (max-width: 1200px) {
        width: 100%;
        height: 100%;
      }
    }
  }

  .swiper-pagination {
    top: none;
    bottom: 50px;
    .swiper-pagination-bullet {
      width: 15px;
      height: 15px;
      opacity: 1;
      background-color: white;
      &.swiper-pagination-bullet-active {
        background-color: rgb(246, 153, 44);
      }
    }
  }

  ${deviceQuery.tablet} {
    .swiper-slide {
      padding-top: calc(1106 / 2000 * 100%);
    }
    .swiper-pagination {
      bottom: 25px;
    }
  }
`;

const _section2 = styled.section`
  width: 100%;
  min-height: 500px;
  background-color: #f9f9f9;
  padding: 100px 0 100px;
  position: relative;
  > img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    width: 1900px;
    height: 900px;
    @media (max-width: 1900px) {
      width: 100%;
    }
    @media (max-width: 1200px) {
      width: 100%;
    }
    @media (max-width: 450px) {
      height: 500px;
    }
  }
  //background: url('/brandBg.png') center repeat;
  h2 {
    position: relative;
    padding: 10px 0;
    font-size: 42px;
    font-weight: 700;
    &::after {
      content: "";
      display: block;
      width: 35px;
      height: 1px;
      background: #222;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
  h3 {
    font-size: 39px;
    color: #000;
    font-weight: 600;
    margin: 25px 0 22px;
  }
  p {
    font-size: 17px;
    color: #555;
    line-height: 1.6em;
    margin-top: 22px;

    br {
      &:nth-of-type(odd) {
        display: none;
      }
    }

    > strong {
      font-size: 22px;
      color: #222;
      font-weight: 800;
    }

    @media (max-width: 650px) {
      padding: 0 10px;
      font-size: 22px;
      margin-top: 50px;
      strong {
        font-size: 24px;
      }
      br {
        &:nth-of-type(odd) {
          display: block;
        }
      }
    }
    @media (max-width: 450px) {
      font-size: 16px;
      line-height: 150%;
      margin-top: 50px;
      strong {
        font-size: 20px;
        line-height: 150%;
      }
    }
  }
`;

const _textWrap = styled.div`
  position: relative;
  z-index: 2;
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 1200px) {
    width: 100%;
  }
  a {
    text-decoration: none;
  }
`;

const _imgWrap = styled.div`
  position: absolute;
  width: 440px;
  height: 550px;
  top: 100%;
  z-index: 2;
  @media (max-width: 1200px) {
    display: none;
  }
  &.robot {
    right: 0;
    transform: translate(80%, -50%);
    @media (max-width: 1900px) {
      display: none;
    }
  }
`;

const _wrap = styled.div`
  width: 100%;
  height: 70px;
  background: url(/deco.svg) center repeat;
  position: absolute;
  top: 0;
  left: 0;
`;

const _linkWrap = styled.div`
  width: 222px;
  line-height: 50px;
  font-size: 16px;
  border: 1px solid #555;
  border-radius: 30px;
  margin: 84px auto 0px;
  text-align: center;
  > a {
    display: block;
    color: #000;
    text-decoration: none;
    width: 100%;
    height: 50px;
  }
`;

const _article = styled.article`
  width: 100%;
  min-height: 450px;
  position: relative;
  background-color: #eeedd9;
  padding-top: 180px;
  padding-bottom: 80px;
  //z-index: 1;
  //background: url('/instaBg.png') center repeat;
  .big {
    font-size: 44px;
    color: #000;
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.08em;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      margin-right: 10px;
    }
    @media (max-width: 650px) {
      font-size: clamp(20px, 6vw, 35px);
      > img {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

const _ul = styled.ul`
  display: flex;
  margin-top: 65px;

  @media (max-width: 650px) {
    flex-direction: column;
    > li {
      margin-bottom: 50px;
    }
  }

  > li {
    flex: 1;
    br {
      display: block !important;
    }
    img {
      margin-bottom: 25px;
    }
    strong {
      display: block;
      font-size: 22px;
      color: #000;
      font-weight: 600;
      line-height: 1.9em;
      position: relative;

      @media (max-width: 900px) {
        font-size: 18px;
      }
      @media (max-width: 650px) {
        font-size: 26px;
      }
      @media (max-width: 450px) {
        font-size: 18px;
      }

      &:nth-of-type(1) {
        &::after {
          display: block;
          content: "";
          width: 15px;
          height: 1px;
          background: #222;
          position: absolute;
          left: 50%;
          bottom: 2px;
          transform: translate(-50%, 0%);
        }
      }
    }

    p {
      @media (max-width: 900px) {
        font-size: 14px;
      }

      @media (max-width: 650px) {
        font-size: 22px;
      }
      @media (max-width: 450px) {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
`;

const _section = styled.section`
  display: flex;
  padding: 0 10px;
  position: relative;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    padding: 0 5%;
  }
  @media (max-width: 550px) {
    flex-wrap: wrap;
    padding: 0 10px;
  }

  > section {
    border-radius: 40px;
    min-height: 266px;
    position: relative;

    &:nth-of-type(1) {
      width: 530px;
      min-height: 266px;
      max-height: 315px;
      padding: 24px 40px;
      background: #fff;
      text-align: left;
      margin-right: 20px;
      @media (max-width: 1200px) {
        width: auto;
        flex: 2;
      }
      @media (max-width: 1000px) {
        width: 800px;
        flex: auto;
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
    &:nth-of-type(2) {
      flex: 1;
      margin-right: 10px;
      background-color: #91c71e;
      padding: 40px 0;

      a {
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);

        > span {
          word-break: keep-all;
          margin-top: 10px;
          display: inline-block;
          line-height: 1.6em;
          font-size: 16px;
        }
      }

      img {
        display: block;
        width: max-content;
        margin: 10px auto;
      }

      @media (max-width: 1000px) {
        flex: auto;
        width: 25%;
      }
    }
    &:nth-of-type(3) {
      flex: 1;
      color: white;
      background-color: #f58e18;
      padding: 40px 0;
      > span {
        word-break: keep-all;
      }
      @media (max-width: 1000px) {
        flex: auto;
        width: 25%;
        margin-left: 0px;
      }

      img {
        display: block;
        width: max-content;
        margin: 10px auto;
      }
    }

    h3 {
      font-size: 22px !important;
      font-weight: 600;
    }
  }
`;

const _title = styled.div`
  margin: 100px 0 50px;
  > p {
    font-size: 21px;
    color: #000;
    font-weight: 400;
    margin-bottom: 17px;
  }
`;

const _brandImgWrap = styled.div`
  width: 80%;
  margin: 30px auto 0;
  height: 0px;
  position: relative;
  padding-top: calc((400 / 947) * 80%);
  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  /* > .brand1 {
    @media (max-width: 1200px) {
      width: 70%;
      height: 70%;
    }
    @media (max-width: 650px) {
      width: 100%;
      height: 100%;
      padding: 0 10px;
    }
    @media (max-width: 450px) {
      display: none;
    }
  } */
`;

const _absolute = styled.div`
  position: absolute;
  top: 24px;
  right: 40px;
  cursor: pointer;
`;
