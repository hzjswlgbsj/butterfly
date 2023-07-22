import styled, { css } from "styled-components";

export const activeBgColor = "rgba(51, 77, 102, 0.08)";
export const defaultBgColor = "#ffffff";

export const baseFlexStyle = css`
  display: flex;
  align-items: center;
`;
export const baseFlexCenterStyle = css`
  ${baseFlexStyle}
  justify-content: center;
`;
export const baseFlexStartStyle = css`
  ${baseFlexStyle}
  justify-content: start;
`;

export const ellipsis = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
