import styled from "@emotion/styled";
import AcademyFaqItem from "./acdemyFaq/AcademyFaqItem";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import { FaqRes, FaqResult } from "@/type/academy/faq";
import { AxiosError } from "axios";

const AcademyFaq = () => {
  const { data } = useQuery<FaqRes, AxiosError, FaqResult>({
    queryKey: ["faq"],
    queryFn: () =>
      api({
        method: "GET",
        url: "landing/faq",
      }),
    select(data) {
      return data.result.resultData;
    },
  });

  return (
    <_inner>
      <h3>
        <span>COMMUNITY</span>
      </h3>
      <AcademyFaqItem item={data} />
    </_inner>
  );
};

export default AcademyFaq;

const _inner = styled.section`
  width: 1200px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 50px 16px;
  }

  min-height: 818px;
  @media (max-width: 900px) {
    min-height: 600px;
  }
  @media (max-width: 650px) {
    min-height: 485px;
  }
  @media (max-width: 500px) {
    padding: 50px 6px;
  }
  padding: 60px 90px 65px;
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
