import { locationData } from "@/util/academyUtil";
import { Select } from "antd/lib";
import { useContext, useEffect, useState } from "react";
import { CenterConsultingFormData } from "../centerInfo/AcademyCouncel";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  region1: "livingRegion1" | "hopeRegion1";
  region2: "livingRegion2" | "hopeRegion2";
};

const AcademyLocaSelect = ({ region1, region2 }: Props) => {
  const [ready, setReady] = useState<boolean>(false);

  const [index, setIndex] = useState<number>(0);

  const { register, control } = useFormContext<CenterConsultingFormData>();

  useEffect(() => {
    setTimeout(() => setReady(true), 200);
  }, []);

  return (
    <>
      {ready && (
        <>
          <Controller
            name={region1}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                style={{
                  height: "42px",
                  marginRight: "10px",
                }}
                defaultValue={"시/도"}
                options={locationData.map((ele, idx) => {
                  return { value: ele["1dep"], label: ele["1dep"], idx: idx };
                })}
                onSelect={(_, op) => setIndex(op.idx)}
              />
            )}
          />

          {index ? (
            <Controller
              name={region2}
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  style={{
                    height: "42px",
                  }}
                  defaultValue={"군/구 선택"}
                  options={[
                    { value: undefined, label: "군/구 선택" },
                    ...locationData[index]["2dep"].map((item, idx2) => {
                      return { value: item, label: item, idx: idx2 };
                    }),
                  ]}
                />
              )}
            />
          ) : (
            <Select
              style={{
                height: "42px",
              }}
              defaultValue={"군/구 선택"}
              options={[{ value: undefined, label: "군/구 선택" }]}
            />
          )}
        </>
      )}
    </>
  );
};

export default AcademyLocaSelect;
