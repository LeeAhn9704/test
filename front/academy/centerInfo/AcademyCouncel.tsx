import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/api";
import ModalAlert from "@/page_component/common/modal/ModalAlert";
import { useRouter } from "next/router";
import RegionSelectUI from "@/page_component/hq/commonUI/RegionSelectUI";
import Loader from "@/page_component/common/Loader";
import { onlyPhoneOnchange } from "@/util/members";

export interface CenterConsultingFormData {
  client: string; //개설희망자
  phone: string;
  gender: "male" | "female";
  age: number; //optional
  availableTime: string; //상담가능시간 optional
  significant: string; //특이사항 optional
  livingRegion1: string; //거주지역, 지역목록 optional
  livingRegion2: string; //거주지역상세, 지역상세 목록 optional
  hopeRegion1: string; //희망지역, 지역목록 optional
  hopeRegion2: string; //희망지역상세, 지역상세목록 optional
}

const AcademyCouncel = () => {
  const router = useRouter();
  const method = useForm<CenterConsultingFormData>();
  const { register, handleSubmit, watch, control, setValue } = method;
  const formData = watch();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const regionData = {
    livingRegion1: "",
    livingRegion2: "",
    hopeRegion1: "",
    hopeRegion2: "",
  };

  // 서브밋
  const { mutate, isPending } = useMutation({
    mutationFn: api,
  });
  const submit = (formData: CenterConsultingFormData) => {
    const { availableTime, age, client, gender, phone, significant } = formData;
    const { livingRegion1, livingRegion2, hopeRegion1, hopeRegion2 } =
      regionData;

    const data = {
      client: client, //개설희망자
      phone: phone,
      gender: gender ? gender : undefined,
      age: age ? age : undefined,
      availableTime: availableTime ? availableTime : undefined, //상담가능시간 optional
      significant: significant ? significant : undefined, //특이사항 optional
      livingRegion1: livingRegion1 ? livingRegion1 : undefined, //거주지역, 지역목록 optional
      livingRegion2: livingRegion2 ? livingRegion2 : undefined, //거주지역상세, 지역상세 목록 optional
      hopeRegion1: hopeRegion1 ? hopeRegion1 : undefined, //희망지역, 지역목록 optional
      hopeRegion2: hopeRegion2 ? hopeRegion2 : undefined, //희망지역상세, 지역상세목록 optional
    };

    console.log("???", data);

    mutate(
      {
        method: "POST",
        url: "landing/franchise-counseling",
        data: data,
      },
      {
        onSuccess(data, variables, context) {
          console.log("🚀 data==>", data, variables, context);
          setShowAlert(true);
          setAlertMsg("상담을 신청하였습니다.");
        },
        onError(error, variables, context) {
          console.log("🚀 error==>", error);
          setShowAlert(true);
          setAlertMsg("신청을 실패했습니다. 다시 시도해주세요.");
        },
      }
    );
  };
  // 에러
  const handleErr = (err: FieldErrors<CenterConsultingFormData>) => {
    const { client, phone } = err;
    if (client && client.message) setAlertMsg(client.message);
    else if (phone && phone.message) setAlertMsg(phone.message);
    setShowAlert(true);
  };

  useEffect(() => {
    console.log("🚀 formData==>", formData.phone?.length);
  }, [formData]);

  return (
    <_box>
      {isPending && <Loader />}
      {/* 원버튼 모달 */}
      {showAlert && (
        <ModalAlert
          BtnText="확인"
          content={alertMsg}
          onClickBtn={() => {
            if (alertMsg === "상담을 신청하였습니다.") {
              router.push("/academy/centerInfo/franchise");
            }

            setShowAlert(false);
          }}
          setState={setShowAlert}
        />
      )}
      <h3>가맹상담 신청서</h3>
      <_form onSubmit={handleSubmit(submit, handleErr)}>
        <div>
          <span className="required">이름</span>
          <span>
            <_input
              type="text"
              {...register("client", { required: "이름을 작성해주세요." })}
              placeholder="이름을 작성해주세요."
            />
          </span>
        </div>
        <div>
          <span className="required">연락처</span>
          <span>
            <_input
              type="number"
              value={formData?.phone}
              {...register("phone", {
                required: "전화번호를 작성해주세요.",
                pattern: {
                  value: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
                  message: "올바른 휴대폰 번호를 입력해주세요.",
                },
                onChange: (event) => {
                  setValue("phone", onlyPhoneOnchange(event));
                },
              })}
              placeholder="전화번호를 작성해주세요."
            />
          </span>
        </div>
        <div>
          <span>성별</span>
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
          <span>연령</span>
          <span>
            <_input
              type="number"
              {...register("age")}
              placeholder="숫자만 입력해주세요 (30)"
            />
          </span>
        </div>
        <div>
          <span>상담가능시간</span>
          <span>
            <_input
              type="text"
              placeholder="09:00~11:00"
              {...register("availableTime")}
            />
          </span>
        </div>
        <div>
          <span>특이사항</span>
          <span>
            <_input
              type="text"
              placeholder="특이사항"
              {...register("significant")}
            />
          </span>
        </div>
        <FormProvider {...method}>
          <div>
            <span>거주지역</span>
            <span className="wrap">
              {/* <AcademyLocaSelect
                region1="livingRegion1"
                region2="livingRegion2"
              /> */}
              <RegionSelectUI
                selectRegion1={(val) => {
                  regionData.livingRegion1 = `${val}`;
                }}
                selectRegion2={(val) => {
                  regionData.livingRegion2 = `${val}`;
                }}
              />
            </span>
          </div>
          <div>
            <span>희망지역</span>
            <span className="wrap">
              <RegionSelectUI
                selectRegion1={(val) => {
                  regionData.hopeRegion1 = `${val}`;
                }}
                selectRegion2={(val) => {
                  regionData.hopeRegion2 = `${val}`;
                }}
              />
            </span>
          </div>
        </FormProvider>
        <button type="submit">신청하기</button>
      </_form>
    </_box>
  );
};

export default AcademyCouncel;

const _box = styled.div`
  width: 1200px;
  margin-bottom: 15px;
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
    visibility: hidden;
    height: 0;
  }
`;

const _form = styled.form`
  > div {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
    > span {
      display: flex;
      align-items: center;
      min-height: 70px;
      padding: 10px 0;
      &:nth-of-type(1) {
        width: 140px;
        @media (max-width: 600px) {
          width: 100px;
        }
        font-size: 14px;
        color: #222;
        font-weight: 600;
        background: #f9f9f9;
        justify-content: center;
      }
      &:nth-of-type(2) {
        flex: 1;
        background-color: white;
        padding-left: 30px;
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

  > button {
    cursor: pointer;
    color: #fff !important;
    font-weight: 600;
    background: #f6921d;
    border: 1px solid #f6921d;
    width: 159px;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    border-radius: 30px;
    display: block;
    margin: 50px auto 0;
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
  }
`;
