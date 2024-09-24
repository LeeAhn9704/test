import styled from "@emotion/styled";
import { Select } from "antd/lib";
import { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AcademyNoticeFormData } from "../AcademyNotice";

type Props = {
  search: () => void;
};

const AcademyNoticeFilter = ({ search }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState<boolean>(false);

  const { register, control } = useFormContext<AcademyNoticeFormData>();

  useEffect(() => {
    setTimeout(() => setReady(true), 200);
  }, []);

  return (
    <_filterBox ref={ref}>
      {ready && (
        <>
          <Controller
            name={"searchType"}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                style={{
                  width: "160px",
                  height: "42px",
                }}
                defaultValue={"제목"}
                options={[
                  { value: "title", label: "제목" },
                  { value: "content", label: "내용" },
                  { value: "name", label: "작성자" },
                ]}
              />
            )}
          />

          <input
            type="text"
            placeholder="검색어를 입력하세요"
            {...register("searchValue")}
          />
          <button onClick={search}>검색</button>
        </>
      )}
    </_filterBox>
  );
};

export default AcademyNoticeFilter;

const _filterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fffbf5;
  padding: 30px;
  min-height: 102px;
  position: relative;
  @media (max-width: 550px) {
    padding: 20px 10px;
    min-height: 80px;
    .ant-select {
      width: 100px !important;
      height: 35px !important;
    }
  }
  @media (max-width: 400px) {
    height: 100px;
    padding-top: 0;
    padding-bottom: 36px;
    .ant-select {
      font-size: 12px !important;
    }
  }

  > input {
    width: 420px;

    height: 42px;
    font-size: 14px;
    color: #222;
    border: 1px solid #d9d9d9;
    border-radius: 30px;
    padding: 0 30px;
    box-sizing: border-box;
    margin: 0 1em 0 0.5em;
    @media (max-width: 550px) {
      margin: 0 0.5em;
      padding: 0 10px;
      height: 35px;
      flex: 1;
    }
    @media (max-width: 400px) {
      margin: 0 0 0 0.5em;
      width: 170px;
    }
  }
  > button {
    cursor: pointer;
    color: white;
    font-size: 14px;
    line-height: 100%;
    background: #f6921d;
    width: 162px;
    text-align: center;
    padding: 14px 0;
    border-radius: 30px;
    @media (max-width: 550px) {
      width: 60px;
      padding: 10px;
    }
    @media (max-width: 400px) {
      position: absolute;
      bottom: 13px;
      right: 15px;
      padding: 8px 10px;
    }
  }
`;
