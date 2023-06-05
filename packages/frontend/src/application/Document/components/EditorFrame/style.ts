import styled from "styled-components";

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
