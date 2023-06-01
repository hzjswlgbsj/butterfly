import { withCursors, withYHistory, withYjs, YjsEditor } from '@slate-yjs/core';
import {
  getRemoteCaretsOnLeaf,
  getRemoteCursorsOnLeaf,
  useDecorateRemoteCursors,
} from '@slate-yjs/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor, Descendant, Text } from 'slate';
import { RenderLeafProps, Slate, withReact } from 'slate-react';
import * as Y from 'yjs';
import { CustomEditable } from '../../components/CustomEditable';
import { FormatToolbar } from '../../components/FormatToolbar/FormatToolbar';
import { Leaf } from '../../components/Leaf';
import { withMarkdown } from '../../plugins/withMarkdown';
import { withNormalize } from '../../plugins/withNormalize';
import { CursorData } from '../../types';
import { addAlpha, randomCursorData } from '@butterfly/utils';
import { WebsocketProvider } from '@butterfly/collaborate';
import { customAlphabet } from 'nanoid';
import { useParams } from 'react-router-dom';

function renderDecoratedLeaf(props: RenderLeafProps) {
  getRemoteCursorsOnLeaf<CursorData, Text>(props.leaf).forEach((cursor) => {
    if (cursor.data) {
      props.children = (
        <span style={{ backgroundColor: addAlpha(cursor.data.color, 0.5) }}>
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

export default function RemoteCursorDecorations() {
  const params = useParams();
  const [value, setValue] = useState<Descendant[]>([]);

  // 创建一个房间
  const roomId = params.roomId;
  if (!roomId) {
    alert('没有房间号！');
    return;
  }

  const username = customAlphabet('abcdefghijklmn', 6)();

  // 连接 ws
  const provider = new WebsocketProvider(roomId, username);


  const editor = useMemo(() => {
    const sharedType = provider.operations;

    return withMarkdown(
      withNormalize(
        withReact(
          withCursors(
            withYHistory(
              withYjs(createEditor(), sharedType, { autoConnect: false })
            ),
            provider.awareness,
            {
              data: randomCursorData(),
            }
          )
        )
      )
    );
  }, [provider.awareness, provider.doc]);

  // Connect editor and provider in useEffect to comply with concurrent mode
  // requirements.
  useEffect(() => {
    provider.connect();
    return () => provider.disconnect();
  }, [provider]);
  useEffect(() => {
    YjsEditor.connect(editor);
    return () => YjsEditor.disconnect(editor);
  }, [editor]);

  return (
    <div className="flex justify-center my-32 mx-10">
      <Slate value={value} onChange={setValue} editor={editor}>
        <FormatToolbar />
        <DecoratedEditable />
      </Slate>
    </div>
  );
}