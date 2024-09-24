import { AxiosError } from "axios";
import React from "react";
import { ProductRes, multerProductApi } from "../api";
import { useMutation } from "@tanstack/react-query";

type Props = {};

export interface ImageData {
  fileName: string;
  fileSize: number;
  url: string;
}

export interface ImgResponse {
  error: any;
  payload: ImageData;
}
export default function useProductMulter() {
  // image s3 multer 저장 API (with useMutation)
  const { mutate: multerMutate } = useMutation<
    ProductRes,
    AxiosError,
    FormData
  >({
    mutationFn: multerProductApi,
  });

  //이미지저장
  const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const { files } = e.target;

    if (files) {
      formData.append("file", files[0], encodeURIComponent(files[0].name));
      return {
        name: files[0].name,
        size: files[0].size,
        formData: formData,
      };
    }
    return undefined;
  };

  return { multerMutate, saveImgFile };
}
