import { baseFlexCenterStyle, ellipsis } from "../../baseStyle";
import styled from "styled-components";

export const SelectedLabelWrapper = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : "auto")};
  color: rgba(0, 0, 0, 0.7);
  cursor: default;
  ${ellipsis};
  ${baseFlexCenterStyle};
`;
export const SelectedLabel = styled.div`
  padding-right: 0px;
  width: 28px;
  height: 24px;
  overflow: hidden;
  margin: auto;
  white-space: nowrap;
  box-sizing: content-box;
  padding: 0 4px;
  text-align: center;
  font-weight: normal;
  background: transparent;
  outline: none;
  line-height: 24px;
  list-style: none;
  text-decoration: none;
  cursor: default;
  display: inline-block;
  margin-right: 2px;
`;
export const SelectedIconWrapper = styled.div`
  vertical-align: middle;
  float: right;
  padding: 0 3px;
  text-align: center;
  height: 24px;
  box-sizing: border-box;
  display: flex;
  vertical-align: middle;
  pointer-events: none;
  margin: 10px 0 0 0;
`;
export const SelectedIcon = styled.div`
  background-color: #464d5a;
  float: right;
  padding: 0;
  vertical-align: middle;
  width: 6px;
  height: 4px;
  pointer-events: none;
  margin: 10px 0 0 0;
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
