import styled from "@emotion/styled";
import { Head } from "next/document";
import Script from "next/script";
import { ReactNode } from "react";

type Props = {
  h2: string;
  children?: ReactNode;
};

const AcademyInnerLayout = ({ h2, children }: Props) => {
  return (
    <>
      <_inner>
        <h2>{h2}</h2>
        <_main>{children}</_main>
      </_inner>
    </>
  );
};

export default AcademyInnerLayout;

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
