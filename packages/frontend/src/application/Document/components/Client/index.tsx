import { withCursors, withYHistory, withYjs, YjsEditor } from '@slate-yjs/core';
import React, { useEffect, useMemo, useState } from 'react';
import { createEditor, Descendant, Editor, Node, Transforms } from 'slate';
import { withReact } from 'slate-react';
import * as Y from 'yjs';
import { withMarkdown } from '@butterfly/editor';
import { Log, randomCursorData } from '@butterfly/utils';
import { WebsocketProvider } from "@butterfly/collaborate";
import { Instance } from './style';
import Topbar from '../Topbar';
import { Toolbar } from "@butterfly/toolbar";
import EditorFrame from '../EditorFrame';
import FileApi from '../../../../apis/FileApi';
import { File } from '../../../../types/home';

interface ClientProps {
  name: string;
  roomId: string;
}

const TAG = '@butterfly/frontend/src/application/Document/components/Client';

const Client: React.FC<ClientProps> = ({ roomId, name }) => {
  const [value, setValue] = useState<Descendant[]>([]);
  const [formats, setFormats] = useState<string[]>([]);
  const [detail, setDetail] = useState<File>();
  const [loading, setLoading] = useState<string>('true');

  const [sharedType, provider] = useMemo(() => {
    const onSynced = (isSynced: boolean) => {
      Log.debug('链接成功，初始值为', sharedType)

      if (isSynced && sharedType.length === 0) {
        Log.debug('初始值为空')
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

    // origin参数，如果本次操作是自己产生的它的值是一个Symbol(slate-yjs-operation)，如果是接收到其他客户端的值
    // 那它的值是改变产生的那个客户端的 WebsocketProvider实例
    const onChange = (update: Uint8Array, origin: any, doc: Y.Doc, tr: Y.Transaction) => {
      Log.debug("文档内容发生改变", update, origin, doc, tr);
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

  // 连接
  useEffect(() => {
    provider.connect();
    return () => {
      const status = provider.getStatus()
      if (status.synced && status.wsconnected) {
        Log.debug('连接被销毁', provider.getStatus())
        provider.destroy();
      }
    };
  }, [provider, provider.doc]);

  useEffect(() => {
    YjsEditor.connect(editor);
    return () => {
      YjsEditor.disconnect(editor);
    }
  }, [editor]);

  useEffect(() => {
    getDetail()
  }, []);

  const getDetail = async () => {
    try {
      const file = await FileApi.getFileDetailByGuid(roomId)
      setDetail(file)
    } catch (error) {
      Log.debug(TAG, error)
    }
  }

  const handleChange = (value: Descendant[]) => {
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
      <Topbar detail={detail} />

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