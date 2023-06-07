import styled from "styled-components";

export const H4 = styled.h4`
  margin: 0;
  padding-right: 10px;
`;
export const Head = styled(H4)`
  margin-right: auto;
`;
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

export const Title = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
