import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 100%;
`;

export const Instance = styled.div<{ online: boolean }>`
  background: ${(props) =>
    props.online ? "rgba(128, 128, 128, 0.1)" : "rgba(247, 0, 0, 0.2)"};
  padding: 20px 20px 30px;
`;
