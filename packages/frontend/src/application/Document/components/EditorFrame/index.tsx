import Caret from "../Caret";
import React, { useCallback, useState } from "react";
import { Descendant } from "slate";
import {
  Editable,
  ReactEditor,
  RenderLeafProps,
  Slate,
} from "slate-react";
import { ContentWrapper, ScrollShadow, ClientFrame, Code, EditorWrapper } from "./style";

export interface EditorFrame {
  editor: ReactEditor;
  value: Descendant[];
  onChange: (value: Descendant[]) => void;
  decorate: any;
}

const renderElement = (props: any) => {
  return <Element {...props} />
};

const renderLeaf = (props: any) => {
  return <Leaf {...props} />
};

const EditorFrame: React.FC<EditorFrame> = ({
  editor,
  value,
  onChange,
  decorate,
}) => {
  const [isTop, setIsTopState] = useState<boolean>(true);

  return (
    <ClientFrame>
      <ScrollShadow isTop={isTop} />

      <ContentWrapper>
        <EditorWrapper>
          <Slate editor={editor} value={value} onChange={onChange}>

            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              decorate={decorate}
            />
          </Slate>
        </EditorWrapper>
      </ContentWrapper>
    </ClientFrame>
  );
};

export default EditorFrame;

const Element: React.FC<any> = ({ attributes, children, element }) => {

  switch (element.type) {
    case "link":
      return (
        <a {...attributes} href={element.href}>
          {children}
        </a>
      );
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf: React.FC<RenderLeafProps> = ({ attributes, children, leaf }) => {

  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <Code>{children}</Code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  const data = leaf.data as any;

  return (
    <span
      {...attributes}
      style={
        {
          position: "relative",
          backgroundColor: data?.alphaColor,
        } as any
      }
    >
      {leaf.isCaret ? <Caret {...(leaf as any)} /> : null}
      {children}
    </span>
  );
};
