import styled from "styled-components";
import { activeBgColor, defaultBgColor } from "../../baseStyle";

export const DividerWrapper = styled.div`
  margin-left: 4px;
  margin-right: 4px;
  height: 16px;
  width: 1px;
  opacity: 0.12;
  background-color: rgba(0, 0, 0, 0.88);
  margin-top: 4px;
  margin-bottom: 4px;
  vertical-align: top;
  display: inline-block;
  flex-shrink: 0;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 4px;
  margin-right: 4px;
`;
export const SelectContainer = styled.div`
  height: 24px;
  box-sizing: border-box;
  padding: 2px;
  background: transparent;
  vertical-align: top;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const IconActive = styled.div<{ active: boolean; disabled?: boolean }>`
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  background-color: ${(props) =>
    props.active ? activeBgColor : defaultBgColor};
  &:hover {
    background-color: ${(props) =>
      !props.disabled ? activeBgColor : defaultBgColor};
  }
`;
