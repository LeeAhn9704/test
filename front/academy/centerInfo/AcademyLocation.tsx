import styled from "@emotion/styled";
import AcademyLocaFilter from "./AcademyLocaFilter";
import AcademyCenterList from "./AcademyCenterList";
import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { CenterList, CentersResultData } from "@/type/academy/centerList";
import { api } from "@/api";
import { FormProvider, useForm } from "react-hook-form";
import theme from "@/styles/theme";
import { PaginationBox } from "@/styles/CustomStyle";
import Pagination from "@/page_component/common/Pagination";

export interface AcademyCenterFormData {
  centerName: string;
}

const AcademyLocation = () => {
  const method = useForm<AcademyCenterFormData>({});
  const { watch } = method;
  const formData = watch();

  const region1 = useRef<string>("");
  const region2 = useRef<string>("");

  const [page, setPage] = useState(1);
  const { data, refetch } = useQuery<CenterList, AxiosError, CentersResultData>(
    {
      queryKey: ["landingCenters", page],
      queryFn: () =>
        api({
          method: "GET",
          url: "landing/centers",
          params: {
            page: page,
            limit: 10,
            region1: region1.current ? region1.current : undefined,
            region2: region2.current ? region2.current : undefined,
            centerName: formData.centerName ? formData.centerName : undefined,
          },
        }),
      select(data) {
        return data.result.resultData;
      },
    }
  );

  const search = (region1data?: string, region2data?: string) => {
    region1.current = region1data ? region1data : "";
    region2.current = region2data ? region2data : "";
    page === 1 ? refetch() : setPage(1);
  };

  return (
    <_box>
      <h3>LOCATION</h3>
      <_text>
        전국에 110여개의 미술로생각하기 센터가
        <_br /> 여러분들을 기다리고 있습니다
        <br />
        가까운 센터를 찾아 체험수업이나 상담요청을 하시면 <_br />
        곧바로 연락 드리겠습니다.
      </_text>
      <div>
        <FormProvider {...method}>
          <AcademyLocaFilter search={search} />
          <AcademyCenterList data={data} page={page} />
        </FormProvider>
      </div>

      {/* 페이지네이션 */}
      <_paginationBox>
        <Pagination
          current={page}
          setPage={setPage}
          total={data?.totalCount ? data.totalCount : 1}
        />
      </_paginationBox>
    </_box>
  );
};

export default AcademyLocation;

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

  > h3 {
    font-size: 33px;
    background: url(/dda1.png) top center no-repeat;
    padding-top: 50px;
    @media (max-width: 700px) {
      font-size: 30px;
    }
    color: #a10da1;
    font-weight: 800;
    text-align: center;
    position: relative;
    &::after {
      content: "";
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

  /* > p {
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

      > strong {
        font-weight: 600;
      }
    }
  } */
`;

const _br = styled.br`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;
const _paginationBox = styled.div`
  ${theme.flex.row};
  margin-top: 32px;
`;
