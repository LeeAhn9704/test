import axios, { AxiosResponse } from "axios";
import instance, { BASE_URL } from "./interceptor";
import { getCookie } from "./cookie";

interface ApiProps {
  method: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
  url: string;
  data?: any;
  params?: any;
}

export const testIdx = "123e4567-e89b-12d3-a456-426614174000";

// API
export const api = async (apiInfo: ApiProps): Promise<any> => {
  const { method, url, data, params } = apiInfo;
  return await instance({
    method,
    url,
    data,
    params,
  }).then((res) => res.data);
};
// 이미지, 파일등록
// export async function multerApi(formData: FormData): Promise<ImgResponse> {
export async function multerApi(formData: FormData): Promise<any> {
  return axios({
    method: "POST",
    url: `/v1/files`,
    data: formData,
    headers: {
      "content-type": "multipart/form-data; charset=EUC-KR",
      accept: "*/*",
    },
    withCredentials: true,
  }).then((res) => res.data);
}

export async function ClassPhotoApi(data: {
  classIdx: string;
  formData: FormData;
}): Promise<any> {
  return axios({
    method: "POST",
    url: `${BASE_URL}uploads/class-photos/${data.classIdx}`,
    data: data.formData,
    headers: {
      ContentType: "multipart/form-data; charset=EUC-KR",
      Accept: "*/*",
    },
    withCredentials: true,
  }).then((res) => res.data);
}

// 센터 다중 이미지 POST
export async function multiMulterPost(formData: FormData): Promise<any> {
  const token = getCookie("accessToken");

  return axios({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}photo-boards/uploads`,
    data: formData,
    headers: {
      "content-type": "multipart/form-data; charset=EUC-KR",
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  }).then((res) => res.data);
}

// 센터 사진게시판 PATCH
export async function multiMulterPatch(formData: FormData): Promise<any> {
  const token = getCookie("accessToken");

  return axios({
    method: "PATCH",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}photo-boards`,
    data: formData,
    headers: {
      "content-type": "multipart/form-data; charset=EUC-KR",
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  }).then((res) => res.data);
}

interface MulterProps {
  method: "POST" | "PATCH";
  url: string;
  formData: FormData;
}

export interface ProductRes {
  result: {
    resultData: {
      productImgUrl: string;
    };
    resultStatus: {
      code: number;
      message: string;
    };
  };
}
// 상품관리 사진이미지 업로드
export async function multerProductApi(
  formData: FormData
): Promise<ProductRes> {
  const token = getCookie("accessToken");

  return axios({
    method: "POST",
    url: `${BASE_URL}office/products/photo`,
    data: formData,
    headers: {
      "content-type": "multipart/form-data; charset=EUC-KR",
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  }).then((res) => res.data);
}

// formData POST / PATCH
export async function multerPost(data: MulterProps): Promise<any> {
  const token = getCookie("accessToken");

  return axios({
    method: data.method,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${data.url}`,
    data: data.formData,
    headers: {
      "content-type": "multipart/form-data; charset=EUC-KR",
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  }).then((res) => res.data);
}

// 엑셀 다운로드
export const excelGetApi = async (
  endPoint: string,
  param?: { [key: string]: unknown },
  responseType?: string,
  needHeader?: string
) => {
  const token = getCookie("accessToken");
  const config: { [key: string]: unknown } = {
    withCredentials: true,
    headers: {
      "content-type": "multipart/form-data; charset=EUC-KR",
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  };
  if (responseType) config.responseType = responseType;
  if (param) config.params = param;

  const req = axios.get(`${BASE_URL}${endPoint}`, config);
  const res = await req;
  if (needHeader) {
    return res;
  } else {
    return res.data;
  }
};
