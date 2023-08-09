import { withCursors, withYHistory, withYjs, YjsEditor } from '@slate-yjs/core';
import React, { useEffect, useMemo, useState } from 'react';
import { createEditor, Descendant, Editor, Node, Transforms } from 'slate';
import { withReact } from 'slate-react';
import * as Y from 'yjs';
import { withMarkdown } from '@butterfly/editor';
import { randomCursorData } from '@butterfly/utils';
import { WebsocketProvider } from "@butterfly/collaborate";
import { Instance } from './style';
import Topbar from '../Topbar';
import { Toolbar } from "@butterfly/toolbar";
import EditorFrame from '../EditorFrame';

interface ClientProps {
  name: string;
  roomId: string;
}

const Client: React.FC<ClientProps> = ({ roomId, name }) => {
  const [value, setValue] = useState<Descendant[]>([]);
  const [formats, setFormats] = useState<string[]>([]);
  const [loading, setLoading] = useState<string>('true');


  const [sharedType, provider] = useMemo(() => {
    const onSynced = (isSynced: boolean) => {
      console.log('链接成功，初始值为', sharedType)

      if (isSynced && sharedType.length === 0) {
        console.log('初始值为空')
        Transforms.insertNodes(
          editor,
          {
            type: 'paragraph',
            children: [{ text: '' }],
          },
          { at: [0] }
        );
      } else {

      }

      setLoading('false')
    }

    const onChange = (event: Y.YEvent<any>[], transaction: Y.Transaction) => {
      console.log('数据发生改变', event);
    }

    const provider = new WebsocketProvider(roomId, name, {
      onSynced: onSynced,
      onChange: onChange,
    });

    return [provider.operations, provider];
  }, [roomId]);

  const editor = useMemo(() => {
    return withMarkdown(
      withReact(
        withCursors(
          withYHistory(
            withYjs(createEditor(), sharedType, { autoConnect: false })
          ),
          provider.awareness,
          {
            data: randomCursorData(name),
          }
        )
      )
    );
  }, [provider.awareness, provider.doc]);

  // 链接
  useEffect(() => {
    provider.connect();
    return () => {
      const status = provider.getStatus()
      if (status.synced && status.wsconnected) {
        console.log('连接被销毁', provider.getStatus())
        provider.destroy();
      }
    };
  }, [provider, provider.doc]);

  useEffect(() => {
    YjsEditor.connect(editor);
    return () => {
      console.log('editor发生改变', JSON.stringify(editor))
      YjsEditor.disconnect(editor);
    }
  }, [editor]);

  const handleChange = (value: Descendant[]) => {
    console.log('编辑器数据发生改变', value)
    setValue(value)
    updateActiveFormats()
  }

  const updateActiveFormats = () => {
    const { selection } = editor;
    let formats: string[] = []

    if (!selection) {
      formats = [];
    }

    const marks = Editor.marks(editor);

    if (marks) {
      formats = Object.keys(marks);
    }

    setFormats(formats)
  }

  return (
    <Instance>
      <Topbar roomId={roomId} name={name} />

      <Toolbar editor={editor} formats={formats} />

      <EditorFrame
        editor={editor}
        loading={loading}
        value={value}
        onChange={handleChange}
      />
    </Instance>
  );
}

export default Client;