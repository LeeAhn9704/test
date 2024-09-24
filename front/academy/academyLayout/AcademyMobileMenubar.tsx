import theme from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { deviceQuery } from "@/styles/media";
import { removeCookie } from "@/api/cookie";
import { centerMenu } from "@/page_component/common/CenterMenuBar";
import { academyMenu } from "./AcademyHeader";
import { Noto_Sans_KR } from "next/font/google";

type Props = {
  isMenu: boolean;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
  pathname1: string;
  pathname2: string;
};

const sans = Noto_Sans_KR({
  subsets: ["latin"],
});

export default function AcademyMobileMenubar({
  isMenu,
  setIsMenu,
  pathname1,
  pathname2,
}: Props) {
  const router = useRouter();

  const [checked, setChecked] = useState("");

  // 로그아웃
  const onClickLogout = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    removeCookie("accessToken");
    removeCookie("refreshToken");
    window.location.href = "/login";
  };

  useEffect(() => {
    setChecked(pathname1);
  }, [pathname1]);

  return (
    <>
      {isMenu && <_wrapper onClick={() => setIsMenu(false)} />}
      <Wrap isMenu={isMenu} id={"sideMenu"} className={sans.className}>
        <InfoBox>
          <LogoBox>
            <Link href={"/"}>
              <_logo src={logo} alt="logo" onClick={() => router.reload()} />
            </Link>
            <span onClick={() => setIsMenu(false)}>{/* <Close /> */}</span>
          </LogoBox>

          <Logout>
            <span onClick={(e) => onClickLogout(e)}>로그인</span>
          </Logout>
        </InfoBox>

        <Container>
          {academyMenu.map((menu, idx) => (
            <React.Fragment key={idx}>
              <List
                clicked={false}
                onClick={() => {
                  // setIsMenu(false);
                  // setTimeout(() => router.push(menu.children[0].url), 400);
                  //router.push(menu.children[0].url);
                  setChecked(menu.children[0].url);
                }}
              >
                <span className="icon"></span>
                <span
                  key={idx}
                  className={`${
                    checked.includes(menu.pathname) && "checked"
                  } name`}
                >
                  {menu.name}
                </span>
              </List>
              {/* 서브 메뉴 */}
              <Container>
                {checked.includes(menu.pathname) &&
                  menu.children.map((ch, index) => {
                    return (
                      <List
                        key={index}
                        className={`subList`}
                        clicked={false}
                        onClick={() => {
                          setIsMenu(false);
                          setTimeout(() => router.push(ch.url), 400);
                        }}
                      >
                        <span
                          key={idx}
                          className={`${
                            pathname2 === ch.pathname && "subChecked"
                          } subName`}
                        >
                          {ch.name}
                        </span>
                      </List>
                    );
                  })}
              </Container>
            </React.Fragment>
          ))}
        </Container>
      </Wrap>
    </>
  );
}

const _wrapper = styled.div`
  display: none;
  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 1;
  }
`;

const Wrap = styled.div<{ isMenu: boolean }>`
  margin-left: ${({ isMenu }) => (isMenu ? "0" : "-260px")};
  min-width: 260px;
  width: 260px;
  height: 100vh;
  background: ${theme.color.main2};
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.16);
  transition: 0.5s;
  z-index: 99999;
`;
const InfoBox = styled.div`
  background-color: ${theme.color.white};
  padding: 16px;
`;
const LogoBox = styled.div`
  ${theme.flex.rowBtw}
  width: 100%;
`;
const _logo = styled(Image)`
  cursor: pointer;
  width: 169px;
  height: 64px;
`;
const Logout = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;

  span {
    cursor: pointer;
    text-align: right;
    font-size: 16px;
    font-weight: 500;
    line-height: 160%;
    letter-spacing: -0.64px;
  }
`;
const Container = styled.div``;
const List = styled.div<{ clicked: boolean }>`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.color.gray3};
  background: ${theme.color.main3};
  width: 100%;
  padding: 19px 20px;
  height: 64px;
  cursor: pointer;
  position: relative;

  &.subList {
    background: ${theme.color.main2};
    border-bottom: 1px solid ${theme.color.gray5};
  }
  .icon {
    margin-right: 8px;
  }
  .name {
    color: ${theme.color.gray3};
    font-size: 16px;
    font-weight: 700;
    line-height: 160%;
    letter-spacing: -0.64px;
  }
  .checked {
    color: ${theme.color.white};
  }
  .subName {
    color: ${theme.color.gray3};
    font-size: 14px;
    font-weight: 700;
    line-height: 160%;
    letter-spacing: -0.64px;
  }
  .subChecked {
    color: ${theme.color.white};
  }
  .arrow {
    position: absolute;
    top: 16px;
    right: 16px;
  }
  ${({ clicked }) =>
    clicked &&
    css`
      background: ${theme.color.white};
      .name {
        color: ${theme.color.black};
      }
      .arrow {
        transform: rotate(180deg);
        transition: all ease 0.3s;
      }
    `}
`;
