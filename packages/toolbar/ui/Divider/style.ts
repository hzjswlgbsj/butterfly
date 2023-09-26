import styled from "styled-components";

export const DividerWrapper = styled.div<{
  type?: "horizontal" | "vertical";
}>`
  display: block;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  margin: 8px 0;
  border: 1px solid rgba(0, 0, 0, 0.04);
  position: relative;
  pointer-events: none;
`;
