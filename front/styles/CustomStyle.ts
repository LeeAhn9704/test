import styled from "@emotion/styled";
import theme from "./theme";
import { css } from "@emotion/react";
import { deviceQuery } from "./media";

export const ButtonV1 = styled.button`
  border-radius: 4px;
  border: 1px solid ${theme.color.gray3};
  background: ${theme.color.gray1};
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
  padding: 6px 16px;
  cursor: pointer;
  ${deviceQuery.tablet} {
    font-size: 12px;
    padding: 4px 12px;
  }
`;
export const ButtonV2 = styled.button`
  border-radius: 22px;
  border: 1px solid ${theme.color.gray3};
  background: ${theme.color.gray1};
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  padding: 8px 10.5px;
  cursor: pointer;
  ${deviceQuery.tablet} {
    font-size: 14px;
    padding: 6px 8px;
  }
`;
export const ButtonV3 = styled.button<{ isCancel?: boolean }>`
  border-radius: 22px;
  background: var(--_b2, #3a4366);
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  cursor: pointer;
  color: ${theme.color.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  padding: 8px 30px;
  ${({ isCancel }) =>
    isCancel === true &&
    css`
      margin-right: 12px;
      background: ${theme.color.gray2};
      color: ${theme.color.gray5};
    `}

  ${deviceQuery.tablet} {
    font-size: 14px;
    padding: 8px 20px;
  }
`;
export const ButtonV4 = styled.button`
  border-radius: 8px;
  border: 1px solid ${theme.color.syk2};
  background: ${theme.color.syk2};
  color: ${theme.color.white};
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
  padding: 8px 22px;
  cursor: pointer;
  ${deviceQuery.tablet} {
    font-size: 12px;
    padding: 6px 18px;
  }
`;
export const ExcelButton = styled.button`
  border-radius: 4px;
  background: ${theme.color.gray4};
  color: ${theme.color.white};
  font-size: 14px;
  font-weight: 700;
  line-height: 140%;
  padding: 5px 8px;
  outline: none;
  border: none;
  cursor: pointer;
  ${deviceQuery.tablet} {
    font-size: 12px;
    padding: 3px 6px;
    display: none;
  }
`;

export const _radio1 = styled.input`
  cursor: pointer;
  width: 22px;
  height: 22px;
  appearance: none;
  border: none;
  background-color: #dcdcdf;
  margin-right: 8px;
  border-radius: 50%;
  position: relative;
  &:checked {
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const _checkbox1 = styled.input`
  width: 18px;
  height: 18px;
  appearance: none;
  border: 1px solid #ccc;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  &:checked {
    background-color: #bb1515;
    &::after {
      content: " ";
      width: 10px;
      height: 8px;
      background-image: url(/checkImg.svg);
      background-size: contain;
      background-repeat: no-repeat;
      color: white;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 10px;
    }
  }
`;
export const CustomInput = styled.input`
  display: inline-block;
  border-radius: 6px;
  width: 100%;
  height: 44px;
  border: 1px solid ${theme.color.gray2};
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  padding: 5px 8px;
  ::placeholder {
    font-size: 12px;
    color: ${theme.color.gray4};
  }
  :disabled {
    background-color: ${theme.color.gray1};
  }
  ${deviceQuery.tablet} {
    font-size: 12px;
  }
`;
// 제목
export const Path = styled.span<{ hidden?: boolean }>`
  display: flex;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  .emphasis {
    font-weight: 700;
  }
  ${deviceQuery.tablet} {
    font-size: 14px;
    padding-left: 12px;
  }
  ${({ hidden }) =>
    hidden &&
    css`
      ${deviceQuery.tablet} {
        display: none;
      }
    `}
`;
// 페이지네이션 wrap
export const PaginationBox = styled.div`
  ${theme.flex.row};
  margin-top: 32px;
`;
export const TextWrap = styled.div`
  word-break: break-all;
  min-height: 250px;
  width: 100%;
`;
export const New = styled.span`
  color: #ef2525;
  font-size: 16px;
  margin-right: 6px;
`;
