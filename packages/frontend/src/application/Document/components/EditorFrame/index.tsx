import Caret from "../Caret";
import React, { useCallback, useState } from "react";
import { Descendant, Text } from "slate";
import {
  Editable,
  ReactEditor,
  RenderLeafProps,
  Slate,
} from "slate-react";
import { ContentWrapper, ScrollShadow, EditorContainer, ClientFrame, Code, EditorWrapper } from "./style";
import { getRemoteCaretsOnLeaf, getRemoteCursorsOnLeaf, useDecorateRemoteCursors } from "@slate-yjs/react";
import { CustomEditable } from "../../../../components/CustomEditable";
import { CursorData } from "@butterfly/utils/types";
import { generateRandomColor } from "@butterfly/utils";
import { Leaf } from "../../../../components/Leaf";

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
            className="absolute text-xs text-white left-[-1px] top-0 whitespace-nowrap rounded rounded-bl-none px-1.5 py-0.5 select-none"
            style={{
              backgroundColor: caret.data.color,
              transform: 'translateY(-100%)',
            }}
          >
            {caret.data.name}
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

  return (
    <ClientFrame>
      <ScrollShadow isTop={isTop} />

      <ContentWrapper>
        <EditorWrapper>
          <EditorContainer>
            <Slate editor={editor} value={value} onChange={onChange}>
              <DecoratedEditable />
            </Slate>
          </EditorContainer>

        </EditorWrapper>
      </ContentWrapper>
    </ClientFrame>
  );
};

export default EditorFrame;
