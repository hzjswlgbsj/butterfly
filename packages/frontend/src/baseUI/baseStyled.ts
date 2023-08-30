import styled, { css } from "styled-components";

export const Icon = styled.div``;

export const Button = styled.button`
  padding: 6px 14px;
  display: block;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  text-align: center;
  color: palevioletred;
  white-space: nowrap;
  border: 2px solid palevioletred;
  & + button {
    margin-left: 10px;
  }
`;

export const IconButton = styled(Button)((props: any) => ({
  color: props.active ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.5)",
  border: "none",
  padding: 0,
}));

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
