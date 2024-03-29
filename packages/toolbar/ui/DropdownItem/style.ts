import {
  baseFlexCenterStyle,
  baseFlexStartStyle,
  ellipsis,
} from "../../baseStyle";
import styled from "styled-components";

export const DropdownItemBeforeIconWrapper = styled.div`
  ${baseFlexCenterStyle}
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
export const DropdownItemedAfterIconWrapper = styled.div`
  position: absolute;
  right: 9px;
`;
export const DropdownLabelWrapper = styled.div`
  ${ellipsis}
`;
export const DropdownWrapper = styled.div<{
  disabled: boolean;
}>`
  opacity: ${(props) => (props.disabled ? 0.4 : 0.88)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  &:hover {
    cursor: default;
    background-color: rgba(51, 77, 102, 0.06);
  }
`;

export const DropdownItemContainer = styled.li<{ disabled: boolean }>`
  ${baseFlexStartStyle}
  flex-flow: row nowrap;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  cursor: default;
  transition: background-color 0.1s linear;
  box-sizing: content-box;
  position: relative;
  padding: 9px 28px 9px 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.88);
`;

export const DropdownLabelDescription = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-left: 10px;
`;
export const CustomButton = styled.button`
  /* 移除所有原生样式 */
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  cursor: default;
  display: block;
  width: 100%;
`;
