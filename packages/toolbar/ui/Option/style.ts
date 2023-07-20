import styled, { css } from "styled-components";
const baseFlexStyle = css`
  display: flex;
  align-items: center;
`;
const baseFlexCenterStyle = css`
  ${baseFlexStyle}
  justify-content: center;
`;
const baseFlexStartStyle = css`
  ${baseFlexStyle}
  justify-content: start;
`;

export const SelectedIconWrapper = styled.div`
  ${baseFlexCenterStyle}
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
export const SelectedLabelWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const OptionWrapper = styled.div<{ disabled: boolean }>`
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

export const OptionItemContainer = styled.li<{ disabled: boolean }>`
  ${baseFlexStartStyle}
  flex-flow: row nowrap;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  cursor: pointer;
  transition: background-color 0.1s linear;
  box-sizing: content-box;
  position: relative;
  padding: 8px 10px;
  font-size: 12px;
`;
