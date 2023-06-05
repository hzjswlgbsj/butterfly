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
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const Instance = styled.div<{ online: boolean }>`
  background: ${(props) =>
    props.online ? "rgba(128, 128, 128, 0.1)" : "rgba(247, 0, 0, 0.2)"};
  padding: 20px 20px 30px;
`;
