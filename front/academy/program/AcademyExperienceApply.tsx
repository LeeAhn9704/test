import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/api";
import ModalAlert from "@/page_component/common/modal/ModalAlert";
import { useRouter } from "next/router";
import DateUI from "@/page_component/hq/commonUI/DateUI";
import Loader from "@/page_component/common/Loader";
import { onlyPhoneOnchange } from "@/util/members";
// import Head from "next/head";

export interface CenterConsultingFormData {
  client: string; //개설희망자
  phone: string;
  gender: "male" | "female";
  otherNote: string; //거주지역, 지역목록 optional
}

type Props = {
  idx: string;
};

const AcademyExperienceApply = ({ idx }: Props) => {
  console.log(idx);
  const router = useRouter();
  const method = useForm<CenterConsultingFormData>();
  const { register, handleSubmit, watch, control, setValue } = method;
  const formData = watch();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const agreeRef = useRef<HTMLInputElement>(null);
  const birhRef = useRef<string>("");

  // function googleGtagClick() {
  //   if (typeof gtag_report_conversion === "function") {
  //     return gtag_report_conversion();
  //   } else {
  //     console.error("gtag_report_conversion function is not defined");
  //   }
  // }

  // 네이버 전환 태그 설정
  const addNaverConversionScript = () => {
    if (typeof window !== "undefined") {
      if (!window.wcs_add) window.wcs_add = {};
      window.wcs_add["wa"] = "s_52eb89dab89a";

      if (window.wcs) {
        console.log("if WCS");
        const _nasa: { [key: string]: any } = {};
        _nasa["cnv"] = window.wcs.cnv("4", "0");
        window.wcs_do(_nasa);
      } else {
        console.error("WCS not loaded");
      }
    }
  };

  // 구글 전환 태그 설정
  function gtag_report_conversion(url?: string) {
    var callback = function () {
      if (typeof url !== "undefined") {
        window.location.href = url;
      }
    };
    window.gtag("event", "conversion", {
      send_to: "AW-652647750/Eaf_CODcjrsZEMa6mrcC",
      event_callback: callback,
    });
    return false;
  }

  // 서브밋
  const { mutate, isPending } = useMutation({
    mutationFn: api,
  });
  const submit = (formData: CenterConsultingFormData) => {
    // 페이스북 전한 태그
    if (window.fbq) {
      window.fbq("track", "SubmitApplication");
    }
    // 네이버 전환 태그
    addNaverConversionScript();

    // 구글 전환 태그
    gtag_report_conversion();
    // return;

    const { client, gender, phone, otherNote } = formData;

    const data: { [key: string]: string } = {
      centerIdx: idx,
      protector1Relation: "etc",
      memberName: client, //자녀이름
      protector1Phone: phone,
      gender: gender,
      otherNote: otherNote,
    };
    data.birth = birhRef.current;

    //console.log('data', data);

    if (!agreeRef.current?.checked) {
      setAlertMsg("개인정보처리방침안내에 동의해주세요");
      setShowAlert(true);
      return false;
    }

    const list = ["protector1Phone", "memberName", "gender", "birth"];

    for (const i of list) {
      console.log(i);
      if (!data[i]) {
        setAlertMsg("필수 입력사항을 입력해주세요");
        setShowAlert(true);
        return false;
      }
    }
    mutate(
      {
        method: "POST",
        url: "landing/experience",
        data: data,
      },
      {
        onSuccess(data, variables, context) {
          console.log("🚀 data==>", data);
          setShowAlert(true);
          setAlertMsg("체험수업을 신청하였습니다.");
        },
        onError(error, variables, context) {
          console.log("🚀 error==>", error);
          setShowAlert(true);
          setAlertMsg("신청을 실패했습니다. 다시 시도해주세요.");
        },
      }
    );
  };
  useEffect(() => {
    const checkWcsLoaded = () => {
      if (window.wcs) {
        console.log("wcslog.js is loaded and ready");
      } else {
        console.error("WCS not loaded");
      }
    };

    window.addEventListener("load", checkWcsLoaded);

    return () => {
      window.removeEventListener("load", checkWcsLoaded);
    };
  }, []);
  // 에러
  useEffect(() => {
    console.log("🚀 formData==>", formData);
  }, [formData]);

  return (
    <>
      <_box>
        {isPending && <Loader />}
        {/* 원버튼 모달 */}
        {showAlert && (
          <ModalAlert
            BtnText="확인"
            content={alertMsg}
            onClickBtn={() => {
              if (alertMsg === "체험수업을 신청하였습니다.") {
                router.back();
              }

              setShowAlert(false);
            }}
            setState={setShowAlert}
          />
        )}
        <h3>체험수업</h3>
        <_form onSubmit={handleSubmit(submit)}>
          <div>
            <span className="required">휴대전화</span>
            <span>
              <_input
                type="number"
                {...register("phone", {
                  onChange(event) {
                    setValue("phone", onlyPhoneOnchange(event));
                  },
                })}
                placeholder="휴대전화번호를 작성해주세요."
              />
            </span>
          </div>
          <div>
            <span className="required">자녀 이름</span>
            <span>
              <_input
                type="text"
                {...register("client")}
                placeholder="이름을 작성해주세요."
              />
            </span>
          </div>
          <div>
            <span className="required">자녀 생일</span>
            <span>
              <_wrapper>
                <DateUI
                  value=""
                  style={{ height: "44px" }}
                  changeDate={(val) => (birhRef.current = val)}
                />
              </_wrapper>
            </span>
          </div>
          <div>
            <span className="required">성별</span>
            <span>
              <label>
                <input
                  type="radio"
                  id="gender"
                  value={"male"}
                  {...register("gender")}
                />
                남자
              </label>
              <label>
                <input
                  type="radio"
                  id="gender"
                  value={"female"}
                  {...register("gender")}
                />
                여자
              </label>
            </span>
          </div>
          <div>
            <span>궁금하신 내용</span>
            <span>
              <_text {...register("otherNote")} />
            </span>
          </div>
          <div>
            <span>개인 정보</span>
            <_colSpan>
              <_text2
                defaultValue={`개인정보 수집, 이용 및 제공 동의서

i. 관련근거 : 정보통신망 이용 촉진 및 정보보호 등의 관한 법률 제 22~23조
ii. 개인정보 수집 목적 및 이용범위
  1. 미술로 생각하기 회원관리 및 관련 정보제공에 관한 내용고지(문자,알림)를 주목적으로 함
  2. 회원관리 목적으로 한 최소한의 정보이용
iii. 개인정보 수집항목 : 성명 , 핸드폰 , 생년월일 , 성별
* 참고사항 - 개인정보 및 이용에 동의하신 후에도 언제든지 동의를 철회 하실 수 있습니다.

상기 내용을 충분히 인지하고 법률에 특별히 규정되는 사항을 제외하고 본인의 개인정보가 다른목적으로 이용되지 않는다는 조건으로 개인정보 수정 및 이용에 동의합니다.
              `}
                readOnly={true}
              />
              <_label>
                <input type="checkbox" ref={agreeRef} />{" "}
                <span>개인정보처리방침안내의 내용에 동의합니다.</span>
              </_label>
            </_colSpan>
          </div>
          <_btnWrap>
            <button type="submit">신청하기</button>
            <button type="button" onClick={() => router.back()}>
              취소하기
            </button>
          </_btnWrap>
        </_form>
      </_box>
    </>
  );
};

export default AcademyExperienceApply;

const _box = styled.div`
  width: 1200px;
  margin-bottom: 15px;
  position: relative;
  @media (max-width: 1200px) {
    width: 100%;
    //padding: 100px 16px;
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
    visibility: hidden;
    height: 0;
  }
`;

const _form = styled.form`
  border-top: 1px solid;
  > div {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
    > span {
      display: flex;
      min-height: 70px;
      padding: 10px 0;
      &:nth-of-type(1) {
        width: 140px;
        align-items: center;
        justify-content: center;
        @media (max-width: 600px) {
          width: 100px;
        }
        font-size: 14px;
        color: #222;
        font-weight: 600;
        background: #f9f9f9;
      }
      &:nth-of-type(2) {
        flex: 1;
        background-color: white;
        padding-left: 30px;
        align-items: center;
        @media (max-width: 600px) {
          padding-left: 10px;
        }
      }
      &.wrap {
        width: 100%;
        @media (max-width: 600px) {
          flex-direction: column;
        }
        .ant-select {
          width: 160px;
          @media (max-width: 600px) {
            width: 100%;
            margin: 5px 0 !important;
          }
        }
      }
    }
  }

  label {
    padding-left: 5px;
    margin-right: 20px;
    cursor: pointer;
    > input {
      margin-right: 5px;
      cursor: pointer;
    }
  }
`;

const _input = styled.input`
  width: 300px;
  height: 42px;
  font-size: 14px;
  color: #222;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  padding: 0 30px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    width: 100%;
    padding: 0 15px;
  }
`;

const _text = styled.textarea`
  resize: none;
  width: 100%;
  height: 250px;
  padding: 15px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 14px;
  color: #222;
  line-height: 1.6em;
  margin: 10px 0;
`;

const _colSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: start !important;
`;

const _text2 = styled.textarea`
  resize: none;
  width: 100%;
  height: 200px;
  padding: 15px 30px;
  @media (max-width: 650px) {
    padding: 15px;
  }
  background: #fafafa;
  border: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 14px;
  color: #222;
  line-height: 1.6em;
  margin: 10px 0;
`;

const _label = styled.label`
  display: flex;
  align-items: baseline !important;
  margin-bottom: 5px;
  > span {
    margin-left: 5px;
    @media (max-width: 650px) {
      font-size: 14px;
    }
  }
`;

const _btnWrap = styled.div`
  display: block;
  border-bottom: none !important;
  display: flex;
  justify-content: center;
  > button {
    cursor: pointer;

    width: 159px;
    height: 40px;
    font-weight: 600;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    border-radius: 30px;
    display: inline-block;
    margin: 50px 10px;

    &:nth-of-type(1) {
      color: #fff !important;
      background: #f6921d;
      border: 1px solid #f6921d;
    }
    &:nth-of-type(2) {
      border: 1px solid #999;
      color: #999;
    }
  }
`;

const _wrapper = styled.div`
  width: 300px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
