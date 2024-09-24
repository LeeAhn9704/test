import React from "react";
import styled from "@emotion/styled";
import Insta1 from "@/public/academy/insta1.jpg";
import Insta2 from "@/public/academy/insta2.jpg";
import Insta3 from "@/public/academy/insta3.jpg";
import Insta4 from "@/public/academy/insta4.jpg";
import Insta5 from "@/public/academy/insta5.jpg";
import Insta6 from "@/public/academy/insta6.jpg";
import Insta7 from "@/public/academy/insta7.jpg";
import Insta8 from "@/public/academy/insta8.jpg";
import Image from "next/image";
import Link from "next/link";
import theme from "@/styles/theme";
type Props = {};

export default function Instagram({}: Props) {
  return (
    <>
      <_inner>
        <_textBox>
          <p>
            더 많은 사진을 보기를 원하신다면 사진을 클릭해주세요. 클릭시
            미술로생각하기 공식 인스타그램으로 이동합니다.
          </p>
        </_textBox>
        <_grid>
          <_item
            href={"https://www.instagram.com/bigto_misulo/"}
            target="_blank"
          >
            <Image src={Insta1} alt="insta1" fill />
          </_item>
          <_item
            href={"https://www.instagram.com/bigto_misulo/"}
            target="_blank"
          >
            <Image src={Insta2} alt="insta2" fill />
          </_item>
          <_item
            href={"https://www.instagram.com/bigto_misulo/"}
            target="_blank"
          >
            <Image src={Insta3} alt="insta3" fill />
          </_item>
          <_item
            href={"https://www.instagram.com/bigto_misulo/"}
            target="_blank"
          >
            <Image src={Insta4} alt="insta4" fill />
          </_item>
          <_item
            href={"https://www.instagram.com/bigto_misulo/"}
            target="_blank"
          >
            <Image src={Insta5} alt="insta5" fill />
          </_item>
          <_item
            href={"https://www.instagram.com/bigto_misulo/"}
            target="_blank"
          >
            <Image src={Insta6} alt="insta6" fill />
          </_item>
          <_item
            href={"https://www.instagram.com/bigto_misulo/"}
            target="_blank"
          >
            <Image src={Insta7} alt="insta7" fill />
          </_item>
          <_item
            href={"https://www.instagram.com/bigto_misulo/"}
            target="_blank"
          >
            <Image src={Insta8} alt="insta8" fill />
          </_item>
        </_grid>
      </_inner>
    </>
  );
}

const _inner = styled.section`
  width: 1200px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 50px 16px;
  }

  /* height: 818px; */
  @media (max-width: 900px) {
    min-height: 600px;
  }
  @media (max-width: 650px) {
    min-height: 485px;
  }
  @media (max-width: 500px) {
    padding: 50px 6px;
  }
  padding: 30px 90px 65px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 3px 2px 2px -2px rgba(0, 0, 0, 0.3);
  position: relative;
  border: 1px solid #e8e8e8;

  > h3 {
    display: block;
    font-size: 30px;
    color: #f04500;
    font-weight: 800;
    position: relative;
    margin-bottom: 25px;
    text-align: center;

    > span {
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 35px;
        height: 1px;
        background: #222;
        position: absolute;
        left: 50%;
        top: 50px;
        transform: translateX(-50%);
      }
    }
  }
`;
const _textBox = styled.div`
  ${theme.flex.row};
  width: 100%;
  margin-bottom: 30px;
  font-size: 15px;
  font-weight: 600;
  line-height: 140%;
`;
const _grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 26px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;
const _item = styled(Link)`
  width: 100%;
  height: 0;
  padding-top: 100%;
  position: relative;
`;
