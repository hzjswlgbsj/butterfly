import styled from "styled-components";

export const ClientFrame = styled.div`
  height: calc(100% - 101px);
  overflow-y: auto;
  background-color: #f3f5f7;
`;

export const ScrollShadow = styled.div<{ isTop: boolean }>`
  opacity: ${(props) => (props.isTop ? 0 : 1)};
  left: -320px;
  right: -320px;
  height: 8px;
  top: 0;
  background: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(rgba(0, 0, 0, 0.04)),
    to(transparent)
  );
  -webkit-transition: opacity 0.3s ease-in-out;
  -o-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const EditorWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 10px 0px,
    rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 100px 60px;
  height: 100%;
  width: 50%;
  height: 100%;
  min-height: 1200px;
  margin-bottom: 40px;
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
export const Code = styled.span`
  background-color: #ccc;
`;
