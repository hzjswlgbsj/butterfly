import styled from "styled-components";

export const DocumentWrapper = styled.div`
  height: 100%;
`;

export const H4 = styled.h4`
  margin: 0;
  padding-right: 10px;
`;

export const Input = styled.input`
  padding: 6px 14px;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 240px;
  outline: none;
  border: 2px solid palevioletred;
  margin-right: auto;
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

export const ClientFrame = styled.div`
  box-shadow: 2px 2px 4px rgba(128, 128, 128, 0.2);
  padding: 10px;
  min-height: 70px;
  margin-left: -10px;
  margin-right: -10px;
  background: white;
  blockquote {
    border-left: 2px solid #ddd;
    margin-left: 0;
    margin-right: 0;
    padding-left: 10px;
    color: #aaa;
    font-style: italic;
  }
  a {
    color: purple;
    text-decoration: none;
  }
  a:visited {
    color: darkmagenta;
  }
`;
