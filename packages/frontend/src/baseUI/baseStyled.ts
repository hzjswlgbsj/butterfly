import styled from "styled-components";

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
  color: props.active ? "mediumvioletred" : "lightpink",
  border: "none",
  padding: 0,
}));
