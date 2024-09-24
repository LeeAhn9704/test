import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

// 체크박스
export interface CheckBox {
  checkbox: string[];
  allCheckbox: boolean;
}

export default function UseCheckbox(list: any[]) {
  const { register, watch, setValue, reset } = useForm<CheckBox>({
    defaultValues: {
      allCheckbox: false,
      checkbox: [],
    },
  });

  const { checkbox, allCheckbox } = watch();

  const onChange = (list: any[], idx: string) => {
    // console.log("idx->", idx);
    if (checkbox.length === list.length) {
      setValue("checkbox", []);
      setValue("allCheckbox", false);
    } else {
      setValue("allCheckbox", true);
      setValue("checkbox", list.map((data) => data[idx]) as string[]);
    }
  };

  // 전체 체크박스 업데이트
  useEffect(() => {
    if (checkbox.length !== 0 && checkbox.length === list?.length) {
      setValue("allCheckbox", true);
    } else {
      setValue("allCheckbox", false);
    }
  }, [checkbox, list]);

  useEffect(() => {
    console.log("🚀 checkbox==>", checkbox);
    console.log("🚀 allCheckbox==>", allCheckbox);
  }, [checkbox, allCheckbox]);

  return { checkbox, allCheckbox, register, onChange, reset };
}
