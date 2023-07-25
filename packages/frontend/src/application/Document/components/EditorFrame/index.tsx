import React, { useEffect, useState } from "react";
import { Descendant, Text } from "slate";
import {
  ReactEditor,
  RenderLeafProps,
  Slate,
} from "slate-react";
import { ContentWrapper, ScrollShadow, EditorContainer, ClientFrame, Code, EditorWrapper } from "./style";
import { getRemoteCaretsOnLeaf, getRemoteCursorsOnLeaf, useDecorateRemoteCursors } from "@slate-yjs/react";
import { CustomEditable } from "../../../../components/CustomEditable";
import { CursorData } from "@butterfly/utils/types";
import { generateRandomColor } from "@butterfly/utils";
import { Leaf, Caret } from '@butterfly/editor';


export interface EditorFrame {
  editor: ReactEditor;
  value: Descendant[];
  onChange: (value: Descendant[]) => void;
}

function renderDecoratedLeaf(props: RenderLeafProps) {
  getRemoteCursorsOnLeaf<CursorData, Text>(props.leaf).forEach((cursor) => {
    if (cursor.data) {
      props.children = (
        <span style={{ backgroundColor: generateRandomColor() }}>
          {props.children}
        </span>
      );
    }
  });

  getRemoteCaretsOnLeaf<CursorData, Text>(props.leaf).forEach((caret) => {
    if (caret.data) {
      props.children = (
        <span className="relative">
          <span
            contentEditable={false}
            className="absolute top-0 bottom-0 w-0.5 left-[-1px]"
            style={{ backgroundColor: caret.data.color }}
          />

          <span
            contentEditable={false}
            {...props}
            style={{
              position: "relative",
              backgroundColor: caret.data.color,
            }}
          >
            <Caret {...(caret as any)} />
          </span>
          {props.children}
        </span>
      );
    }
  });

  return <Leaf {...props} />;
}

function DecoratedEditable() {
  const decorate = useDecorateRemoteCursors();
  return (
    <CustomEditable
      className="max-w-4xl w-full flex-col break-words"
      decorate={decorate}
      renderLeaf={renderDecoratedLeaf}
    />
  );
}

const EditorFrame: React.FC<EditorFrame> = ({
  editor,
  value,
  onChange,
}) => {
  const [isTop, setIsTopState] = useState<boolean>(true);
  const [oldValue, setOldValue] = useState<Descendant[]>([]);
  useEffect(() => {
    // 监听 props 变化
    if (value !== oldValue) {
      setOldValue(value);
    }
  }, [value]);

  return (
    <ClientFrame>
      <ScrollShadow isTop={isTop} />

      <ContentWrapper>
        <EditorWrapper>
          <EditorContainer>
            <Slate editor={editor} value={oldValue} onChange={onChange}>
              <DecoratedEditable />
            </Slate>
          </EditorContainer>

        </EditorWrapper>
      </ContentWrapper>
    </ClientFrame>
  );
};

export default EditorFrame;
