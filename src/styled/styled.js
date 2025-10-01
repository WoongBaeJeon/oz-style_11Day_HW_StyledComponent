import { css } from "styled-components";

// 믹스업을 변환
export const flexMixin = ({
  direction = "row",
  justify = "start",
  align = "stretch",
  gap = 0,
  wrap = "nowrap",
}) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
  `;
};

export const fontMixin = ({ size = "50", weight = "400" }) => {
  return css`
    font-size: ${size};
    font-weight: ${weight};
  `;
};

// 변수
export const tag_Color = "aqua"; //"#d7fa00";
export const gray = "rgb(160, 160, 160)";
