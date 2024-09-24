import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { Noto_Sans_KR } from "next/font/google";
import { Menu } from "@/type/center/menu";
import AcademyMobileMenubar from "./AcademyMobileMenubar";
import { HiOutlineMenu } from "react-icons/hi";
import { useRouter } from "next/router";

type Props = {
  transparent?: boolean;
  pathname1: string;
  pathname2: string;
};

const sans = Noto_Sans_KR({
  subsets: ["latin"],
});

export const academyMenu: Menu[] = [
  {
    name: "미술로 소개",
    pathname: "intro",
    children: [
      {
        name: "교육철학",
        pathname: "philosophy",
        url: "/academy/intro/philosophy",
      },
      { name: "교육효과", pathname: "benefit", url: "/academy/intro/benefit" },
      {
        name: "교육특징",
        pathname: "character",
        url: "/academy/intro/character",
      },
    ],
  },
  {
    name: "체험수업",
    pathname: "classes",
    children: [
      {
        name: "프로그램",
        pathname: "program",
        url: "/academy/classes/program",
      },
      {
        name: "체험수업",
        pathname: "experience",
        url: "/academy/classes/experience",
      },
    ],
  },
  {
    name: "센터소개",
    pathname: "centerInfo",
    children: [
      {
        name: "센터소개",
        pathname: "location",
        url: "/academy/centerInfo/location",
      },
      {
        name: "가맹상담",
        pathname: "franchise",
        url: "/academy/centerInfo/franchise",
      },
    ],
  },
  {
    name: "커뮤니티",
    pathname: "community",
    children: [
      {
        name: " 공지 및 이벤트",
        pathname: "notice",
        url: "/academy/community/notice",
      },
      { name: "FAQ", pathname: "faq", url: "/academy/community/faq" },
      {
        name: "인스타그램",
        pathname: "instagram",
        url: "/academy/community/instagram",
      },
    ],
  },
];

const AcademyHeader = ({ transparent, pathname1, pathname2 }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();
  const onMenu = () => {
    console.log("메뉴온");
    if (ref.current) {
      ref.current.style.backgroundColor = "white";
      //ref.current.style.height = '250px';
    }
  };
  const offMenu = () => {
    if (ref.current) {
      if (transparent) ref.current.style.backgroundColor = "transparent";
      //ref.current.style.height = '100px';
    }
  };

  const [isMenu, setIsMenu] = useState(false);

  return (
    <_header>
      <_nav ref={ref} menuColor={transparent}>
        <_inner>
          <h1>
            <Link href={"/academy"} className={sans.className}>
              <Image src={logo} alt="logo" />
            </Link>
          </h1>
          <_ul
            className={sans.className}
            menuColor={transparent}
            // onMouseEnter={onMenu}
            // onMouseLeave={offMenu}
          >
            <_li>
              <Link
                href={"/academy/intro/philosophy"}
                className={sans.className}
              >
                미술로 소개
              </Link>
              <ul>
                <li>
                  <Link
                    href={"/academy/intro/philosophy"}
                    className={sans.className}
                  >
                    교육철학
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/academy/intro/benefit"}
                    className={sans.className}
                  >
                    교육효과
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/academy/intro/character"}
                    className={sans.className}
                  >
                    교육특징
                  </Link>
                </li>
              </ul>
            </_li>
            <_li>
              <Link
                href={"/academy/classes/experience"}
                className={sans.className}
              >
                체험수업
              </Link>
              <ul>
                <li>
                  <Link
                    href={"/academy/classes/program"}
                    className={sans.className}
                  >
                    프로그램
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/academy/classes/experience"}
                    className={sans.className}
                  >
                    체험수업
                  </Link>
                </li>
              </ul>
            </_li>
            <_li>
              <Link
                href={"/academy/centerInfo/location"}
                className={sans.className}
              >
                센터소개
              </Link>
              <ul>
                <li>
                  <Link
                    href={"/academy/centerInfo/location"}
                    className={sans.className}
                  >
                    센터소개
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/academy/centerInfo/franchise"}
                    className={sans.className}
                  >
                    가맹상담
                  </Link>
                </li>
              </ul>
            </_li>
            <_li>
              <Link
                href={"/academy/community/notice"}
                className={sans.className}
              >
                커뮤니티
              </Link>
              <ul>
                <li>
                  <Link
                    href={"/academy/community/notice"}
                    className={sans.className}
                  >
                    공지 및 이벤트
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/academy/community/faq"}
                    className={sans.className}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/academy/community/instagram"}
                    className={sans.className}
                  >
                    인스타그램
                  </Link>
                </li>
              </ul>
            </_li>
          </_ul>

          {/* 모바일 */}
          <_hamburgerBox onClick={() => setIsMenu(!isMenu)}>
            <HiOutlineMenu size={24} />
          </_hamburgerBox>
          <AcademyMobileMenubar
            isMenu={isMenu}
            setIsMenu={setIsMenu}
            pathname1={pathname1}
            pathname2={pathname2}
          />
        </_inner>
        <_button
          onClick={(e) => {
            router.push("/login");
          }}
        >
          로그인
        </_button>
      </_nav>
    </_header>
  );
};

export default AcademyHeader;

const _header = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
`;

const _nav = styled.nav<{ menuColor?: boolean }>`
  width: 100%;
  height: 110px;
  margin: 0 auto;
  background-color: ${({ menuColor }) => (menuColor ? "#ffffff0" : "white")};
  position: relative;
  transition: all 0.2s;
  @media (max-width: 1200px) {
    padding: 0 16px;
  }
`;

const _inner = styled.div`
  width: 1200px;
  height: 100%;
  position: relative;
  margin: 0 auto;
  background-color: transparent;
  > h1 {
    width: 212px;
    height: 80px;
    transform: translateY(10px);
    position: relative;
    z-index: 3;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 1400px) {
    width: 100%;
    > h1 {
      display: none;
      /* width: 150px;
      height: 50px;
      transform: translateY(10px);
      position: relative; */
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const _ul = styled.ul<{ menuColor?: boolean }>`
  position: absolute;
  padding-right: 70px;
  top: 0;
  right: 0;
  width: 700px;
  height: 100px;
  background-color: transparent;
  display: flex;
  align-items: center;
  z-index: 2;

  > li {
    > a {
      color: ${({ menuColor }) => (menuColor ? "white" : "black")};
    }
  }

  @media (max-width: 1400px) {
    right: 150px;
  }
  @media (max-width: 1000px) {
    width: 70%;
    //justify-content: space-between;
  }
  @media (max-width: 800px) {
    width: 60%;
    //justify-content: space-between;
  }
  @media (max-width: 950px) {
    display: none;
    //justify-content: space-between;
  }

  &:hover {
    &::after {
      height: 250px;
      background-color: white;
    }
    ul {
      display: block;
    }
    a {
      color: black;
    }
  }

  &::after {
    content: "";
    display: block;
    position: fixed;
    width: 100vw;
    left: 0;
    top: 0px;
    height: 0px;
    background-color: transparent;
    transition: all 0.2s;
    z-index: 1;
  }
`;

const _li = styled.li`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media (max-width: 1000px) {
    flex: 1;
  }
  height: 100%;
  font-family: Noto Sans KR;
  font-size: 24px;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 750px) {
    font-size: 15px;
  }

  font-weight: 500;
  line-height: 140%; /* 33.6px */

  &:hover {
    ul {
      display: block;
    }
  }

  > a {
    color: white;
    text-decoration: none;
  }

  > ul {
    position: absolute;
    width: 100%;
    height: 150px;
    top: 100px;
    text-align: center;
    z-index: 2;
    display: none;
    a {
      font-size: 18px;
      @media (max-width: 1000px) {
        font-size: 16px;
      }
      color: #222;
      text-align: center;
      padding: 8px 0;
      font-weight: 400;
      letter-spacing: 0;
      &:hover {
        color: #ffca02;
      }
    }
  }
`;

const _hamburgerBox = styled.span`
  display: none;
  cursor: pointer;
  @media (max-width: 950px) {
    display: block;
    position: absolute;
    top: 24px;
    right: 0px;
    z-index: 5;
  }
`;
const _button = styled.button`
  background-color: #f58e18;
  border: 2px solid #f58e18;
  color: white;
  border-radius: 8px;
  width: 70px;
  height: 30px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  position: absolute;
  right: 50px;
  top: 38px;
  z-index: 3;

  @media (max-width: 950px) {
    display: none;
    //justify-content: space-between;
  }
`;
