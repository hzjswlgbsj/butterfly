import { baseFlexCenterStyle, ellipsis } from "../../baseStyle";
import styled from "styled-components";

export const InsertLabelWrapper = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : "auto")};
  color: rgba(0, 0, 0, 0.7);
  cursor: default;
  padding: 0 2px;
  ${ellipsis};
  ${baseFlexCenterStyle};
`;
export const InsertLabel = styled.div`
  padding-right: 0px;
  width: 26px;
  height: 24px;
  overflow: hidden;
  margin: auto;
  white-space: nowrap;
  box-sizing: content-box;
  padding-left: 2px;
  text-align: center;
  font-weight: normal;
  background: transparent;
  outline: none;
  line-height: 24px;
  list-style: none;
  text-decoration: none;
  cursor: default;
  display: inline-block;
`;
export const InsertRightIconWrapper = styled.div`
  vertical-align: middle;
  padding: 0 4px;
  text-align: center;
  height: 24px;
  box-sizing: border-box;
  display: flex;
  vertical-align: middle;
  pointer-events: none;
  margin: 10px 0 0 0;
`;
export const InsertLeftIconWrapper = styled.div`
  vertical-align: middle;
  text-align: center;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  display: flex;
  vertical-align: middle;
  pointer-events: none;
`;
