import { ellipsis } from "../../baseStyle";
import styled from "styled-components";

export const SelectedLabelWrapper = styled.div<{ width?: number }>`
  ${ellipsis}
  width: ${(props) => (props.width ? props.width : "auto")};
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;

export const SelectItemContainerWrapper = styled.ul<{ transfer?: boolean }>`
  z-index: ${(props) => (props.transfer ? 999 : "auto")};
  overflow: auto;
  max-height: 1110px;
  box-shadow: 0 2px 12px 2px rgba(68, 73, 77, 0.16);
  list-style: none;
  padding: 8px 0;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  -webkit-tap-highlight-color: transparent;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  overflow-y: "auto";
  background: "#fff";
  min-width: 100;
  border-radius: 8;
  outline: 0;
`;
