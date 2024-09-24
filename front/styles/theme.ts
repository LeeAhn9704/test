// color
const color = {
  white: "#ffff",
  black: "#100f10",
  main2: "#3A4366",
  main3: "#778CB3",
  gray1: "#f3f4f6",
  gray2: "#DCDCDF",
  gray3: "#b9babc",
  gray4: "#959599",
  gray5: "#555251",
  syk1: "#e3eeff",
  syk2: "#5895ff",
};

// 자주 사용하는 스타일 속성
const flex = {
  // ${colors.flex.row}
  row: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  // ${colors.flex.rowBtw}
  rowBtw: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  // ${colors.flex.col}
  col: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  // ${colors.flex.colBtw}
  colBtw: `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
};

// 폰트
const font = {
  // ${theme.fontFamily.NotoSansKr}
  // NotoSansKr: `font-family: 'Noto Sans KR';
  // font-style: normal;`,
};

const theme = {
  font,
  color,
  flex,
};

export default theme;
