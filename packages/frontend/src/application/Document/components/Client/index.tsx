import { withCursors, withYHistory, withYjs, YjsEditor } from '@slate-yjs/core';
import React, { useEffect, useMemo, useState } from 'react';
import { createEditor, Descendant, Text } from 'slate';
import { RenderLeafProps, Slate, withReact } from 'slate-react';
import * as Y from 'yjs';
import { CustomEditable } from '../../../../components/CustomEditable';
import { withMarkdown } from '../../../../plugins/withMarkdown';
import { withNormalize } from '../../../../plugins/withNormalize';
import { CursorData } from '../../../../types';
import { addAlpha, randomCursorData } from '@butterfly/utils';
import { WebsocketProvider } from "@butterfly/collaborate";
import { FormatToolbar } from '../../../../components/FormatToolbar/FormatToolbar';
import { Instance } from './style';
import Topbar from '../Topbar';
import { Toolbar } from "@butterfly/toolbar";
import EditorFrame from '../EditorFrame';

interface ClientProps {
  name: string;
  roomId: string;
}


const Client: React.FC<ClientProps> = ({ roomId, name }) => {
  console.log(11111111111)
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
  }, [provider.awareness, provider.doc]);

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
      console.log('数据发生改变', event);

      // setTodoItems(event.target.toArray());
    });
  }, [provider]);

  useEffect(() => {
    YjsEditor.connect(editor);
    return () => YjsEditor.disconnect(editor);
  }, [editor]);

  const handleChange = (value: Descendant[]) => {
    console.log('编辑器数据发生改变', value)
    setValue(value)
  }


  return (
    <Instance>
      <Topbar roomId={roomId} name={name} />

      <Toolbar editor={editor} />

      <EditorFrame
        editor={editor}
        value={value}
        onChange={handleChange}
      />
    </Instance>
  );
}

export default Client;