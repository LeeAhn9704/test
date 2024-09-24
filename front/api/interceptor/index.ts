import axios from "axios";
import mem from "mem";
import { getCookie, removeCookie, setCookie } from "../cookie";
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const REFRESH_URL = `auth/refresh`;

// 초기 interceptor 값
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
  },
  withCredentials: true,
});

// ============================= request interceptor ===================================
instance.interceptors.request.use(async (config) => {
  if (!config.headers) return config;
  let token: string | null = null;

  //console.log("config.url=>", config);
  //console.log("window=>", window.location.href);

  // refresh token을 호출하는 경우는 refresh 토큰을 찾아서 token 값에 넣어준다.
  if (config.url === REFRESH_URL) {
    token = getCookie("refreshToken");
  } else {
    token = getCookie("accessToken");
  }

  //console.log("🚀 token==>", token);
  // 토큰이 있으면 토큰을 header에 담아서 서버에 보낸다.
  if (token !== undefined) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  if (config.baseURL === process.env.NEXT_PUBLIC_BASE_URL) {
    if (config.data) {
      config.data = {
        ...config.data,
      };
    }
  }
  return config;
});

// 응답이 왔는데, 토큰이 만료되어 다시 리프레쉬 토큰으로 토큰 값 호출
const getRefreshToken = mem(
  async (): Promise<{
    accessToken: string;
    refreshToken: string;
  } | void> => {
    try {
      console.log("================ 리프레쉬 토큰 재호출 ====================");
      const REFRESH_TOKEN = getCookie("refreshToken");

      const res = await instance.post<{
        result: {
          resultData: {
            // 유효한 refreshToken일 경우 새로운 accessToken, refreshToken 반환
            accessToken: string;
            refreshToken: string;
          };
          resultStatus: {
            code: number;
            message: string;
          };
        };
      }>(REFRESH_URL, {
        refreshToken: REFRESH_TOKEN,
      });

      console.log("===========data=============", res);

      setCookie("accessToken", res.data.result.resultData.accessToken);
      setCookie("refreshToken", res.data.result.resultData.refreshToken);
      return {
        accessToken: res.data.result.resultData.accessToken,
        refreshToken: res.data.result.resultData.refreshToken,
      };
    } catch (error) {
      console.log(
        "================ 토큰 오류 발생 getRefreshToken ================"
      );
      console.log("error : ", error);
      deleteData();
    }
  },
  { maxAge: 1000 }
);
// ============================= response interceptor ===================================
instance.interceptors.response.use(
  // 응답 요청 성공했을 떄
  (response) => response,
  // 응답 요청 실패했을 떄
  async (err) => {
    // console.log("=============interceptor 에러 ===============", err);

    const {
      config,
      response: {
        status,
        data: {
          result: {
            resultStatus: { code, message },
          },
        },
      },
    } = err;

    const originalRequest = config;
    /** 1 */
    //  로컬 스토리지에 토큰 자체가 없는데 요청을 보낸 경우 데이터 전체 삭제하고 메인페이지로 이동
    /** 2 */
    // 에세스 토큰이 만료되면 리프레쉬 토큰을 헤더에 담아서 다시 서버로 받아와서 보낸다.

    console.log("🚀 code==>", code);
    console.log("🚀 message==>", message);

    if (code === "1101" && message === "권한이 없습니다.") {
      deleteData(); // 데이터 삭제
    }

    if (code === "1204" && message === "로그인이 필요합니다.") {
      deleteData(); // 데이터 삭제
    }
    // return;
    if (code === "1205" && message === "만료된 토큰입니다.") {
      const REFRESH_TOKEN = getCookie("refreshToken");
      // console.log("🚀 REFRESH_TOKEN==>", REFRESH_TOKEN);
      if (!REFRESH_TOKEN) {
        deleteData(); // 데이터 삭제
      }

      originalRequest.sent = true;
      const tokens: { accessToken: string; refreshToken: string } | void =
        await getRefreshToken(); // 갱선한 토큰

      // console.log("🚀 tokens==>", tokens);

      if (tokens?.accessToken && tokens?.refreshToken) {
        originalRequest.headers.Authorization = `Bearer ${tokens?.accessToken}`;
        return await axios(originalRequest);
      }
    }

    return Promise.reject(err);
  }
);

// 리프레쉬 토큰을 요청하였는데도 실패가 했다는 건, 리프레쉬 토큰도 만료가 되었다는 것이기에 로그아웃 처리를 진행한다.
const deleteData = async () => {
  // alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
  await removeCookie("accessToken");
  await removeCookie("refreshToken");
  window.location.href = "/";
};

export default instance;
