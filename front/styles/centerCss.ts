import styled from "@emotion/styled";
import { deviceQuery } from "./media";
import theme from "./theme";

// 센터 리스트 공통 CSS
export const FilterSection = styled.div`
  border-radius: 10px;
  background: ${theme.color.gray1};
  padding: 24px 24px 16px 24px;
  margin-top: 24px;
  ${deviceQuery.tablet} {
    padding: 16px 16px 12px 16px;
    overflow: hidden;
  }
`;
export const FilterList = styled.li`
  display: flex;
  align-items: center;
  min-height: 44px;
  .select {
    width: 138px;
    height: 48px;
    margin-right: 8px;
  }

  :not(:nth-of-type(1)) {
    margin-top: 8px;
  }
  ${deviceQuery.mobile} {
    :not(:nth-of-type(1)) {
      margin-top: 16px;
    }
    &.search {
      align-items: flex-start;
      flex-direction: column;
      gap: 6px;
    }
    .select {
      width: 100%;
      margin-top: 10px;
    }
    .input {
      width: 100%;
    }
  }
`;

export const FilterName = styled.label`
  display: inline-block;
  min-width: 175px;
  width: 175px;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  ${deviceQuery.tablet} {
    width: 80px;
    min-width: 80px;
    font-size: 12px;
  }
`;
export const FilterContent = styled.span`
  /* border: 1px solid red; */
  align-items: center;
  min-height: 44px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 12px;
  .tilde {
    margin-left: 8px;
    margin-right: 8px;
  }
  ${deviceQuery.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 6px;
    .tilde {
      margin-left: none;
      margin-right: none;
    }
  }
`;
export const FilterButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
export const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 132px;
  padding: 8px 36px;
  color: ${theme.color.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  border-radius: 22px;
  background: ${theme.color.syk2};
  cursor: pointer;
  ${deviceQuery.tablet} {
    width: 120px;
  }
`;
export const FilterRadioWrap = styled.label`
  display: flex;
  align-items: center;
  margin-right: 32px;
  cursor: pointer;
  input {
    margin-right: 8px;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
  }
  ${deviceQuery.tablet} {
    margin-right: 16px;
    span {
      font-size: 12px;
    }
  }
`;
