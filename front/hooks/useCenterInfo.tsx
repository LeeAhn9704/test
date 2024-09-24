import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";

interface CenterInfoRes {
  result: {
    resultData: {
      centerInfo: CenterInfo;
    };
    resultStatus: {
      code: number; //200;
      message: string; //"조회완료";
    };
  };
}
interface CenterInfo {
  centerIdx: string;
  admissionFee: number; //입회비
  tuition: number; //교육비
  materialFee: number; //재료비
  smsAccount: string; // "sms_account"; //sms발송용계정(현재 뿌리오 ID)
  smsSenderPhone: string; // "01050480359"; //사전등록 발신자번호, 발신자 번호가 여러개인 경우 '|'으로 구분하여 입력, 예) 010-1234-5678|010-2222-2345|010-3333-1234
  address1: string; //"서울특별시 강서구 공항대로800"; //주소
  address2: string; // "809호"; //상세주소
  postNumber: string; // 정보
  centerPhone: string; //"0201010101"; //센터전화번호
  parentApp: boolean; //학부모앱 사용여부. 사용:true 미사용:false
  smsKey: string; //sms key
}

export default function useCenterInfo(): [
  CenterInfo | undefined,
  boolean,
  boolean,
  () => void
] {
  const { data, isLoading, isError, refetch } = useQuery<
    CenterInfoRes,
    AxiosError,
    CenterInfo
  >({
    queryKey: ["center"],
    queryFn: () =>
      api({
        method: "GET",
        url: "center-info",
      }),

    select(data) {
      return data.result.resultData.centerInfo;
    },
  });

  return [data, isLoading, isError, refetch];
}
