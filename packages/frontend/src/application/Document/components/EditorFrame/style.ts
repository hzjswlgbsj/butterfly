import styled from "styled-components";

export const ClientFrame = styled.div`
  height: calc(100% - 101px);
  overflow-y: auto;
  background-color: #f3f5f7;
`;
export const EditorWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 10px 0px,
    rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 100px 60px;
  height: 100%;
  width: 60%;
  margin: 20px 0 40px 20%;
  height: fit-content;
  background-color: #fff;
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
