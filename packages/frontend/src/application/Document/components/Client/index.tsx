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
import { CustomEditable } from '../../../../components/CustomEditable';
import { Leaf } from '../../../../components/Leaf';
import { withMarkdown } from '../../../../plugins/withMarkdown';
import { withNormalize } from '../../../../plugins/withNormalize';
import { CursorData } from '../../../../types';
import { addAlpha, randomCursorData } from '@butterfly/utils';
import { WebsocketProvider } from "@butterfly/collaborate";

interface ClientProps {
  name: string;
  roomId: string;
}

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

const Client: React.FC<ClientProps> = ({ roomId, name }) => {
  const [value, setValue] = useState<Descendant[]>([]);

  const [sharedType, provider] = useMemo(() => {
    const provider = new WebsocketProvider(roomId, name);
    const sharedType = provider.operations;

    return [sharedType, provider];
  }, [roomId]);


  const editor = useMemo(() => {
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
  }, [provider]);

  useEffect(() => {
    provider.onSync((isSynced: boolean) => {
      console.log('链接成功，初始值为', sharedType)
      if (isSynced && sharedType.length === 0) {
        console.log('初始值为空')
      }
    })

    provider.connect();
    // return () => {
    //   console.log(1111111111111)
    //   provider.disconnect();
    // };
  }, [provider]);

  useEffect(() => {
    provider.onChange((event: Y.YEvent<any>[],
      transaction: Y.Transaction,) => {
      console.log('数据发生改变', event, event);

      // setTodoItems(event.target.toArray());
    });
  }, [provider]);

  const handleChange = (value: Descendant[]) => {
    console.log('编辑器数据发生改变', value)
    setValue(value)
  }


  return (
    <div className="flex justify-center my-32 mx-10">
      <Slate value={value} onChange={handleChange} editor={editor}>
        <DecoratedEditable />
      </Slate>
    </div>
  );
}

export default Client;