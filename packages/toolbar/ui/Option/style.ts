import {
  baseFlexCenterStyle,
  baseFlexStartStyle,
  ellipsis,
} from "../../baseStyle";
import styled from "styled-components";

export const SelectedIconWrapper = styled.div`
  ${baseFlexCenterStyle}
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
export const SelectedLabelWrapper = styled.div`
  ${ellipsis}
`;
export const OptionWrapper = styled.div<{
  disabled: boolean;
  selected: boolean;
}>`
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  &:hover {
    cursor: default;
    background-color: rgba(51, 77, 102, 0.06);
  }
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
  padding: 8px 16px 8px 10px;
  font-size: 12px;
`;