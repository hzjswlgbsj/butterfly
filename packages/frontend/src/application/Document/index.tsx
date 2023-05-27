import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor, Descendant, Text } from 'slate';
import { Slate, withReact } from 'slate-react';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { withCursors, withYHistory, withYjs, YjsEditor } from '@slate-yjs/core';
import {
  getRemoteCaretsOnLeaf,
  getRemoteCursorsOnLeaf,
  useDecorateRemoteCursors,
} from '@slate-yjs/react';
import { addAlpha, randomCursorData } from '@butterfly/utils';
import { CustomEditable } from '../../components/CustomEditable';
import { Leaf } from '../../components/Leaf';
import { Content, AuthorWrapper, AuthorBefore, Author } from './style';
import { WEBSOCKET_URL } from '../../config';

function renderDecoratedLeaf(props: any) {
  const { leaf } = props;
  getRemoteCursorsOnLeaf(leaf).forEach((cursor: any) => {
    if (cursor.data) {
      props.children = (
        <span style={{ backgroundColor: addAlpha(cursor.data.color, 0.5) }}>
          {props.children}
        </span>
      );
    }
  });

  getRemoteCaretsOnLeaf(leaf).forEach((caret: any) => {
    if (caret.data) {
      props.children = (
        <AuthorWrapper>
          <AuthorBefore
            contentEditable={false}
            className="absolute top-0 bottom-0 w-0.5 left-[-1px]"
            style={{ backgroundColor: caret.data.color }}
          />
          <Author
            contentEditable={false}
            style={{
              backgroundColor: caret.data.color,
              transform: 'translateY(-100%)',
            }}
          >
            {caret.data.name}
          </Author>
          {props.children}
        </AuthorWrapper>
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
  const [value, setValue] = useState<Descendant[]>([]);
  const [connected, setConnected] = useState(false);
  const ydoc: Y.Doc = new Y.Doc();
  const yArray = ydoc.getArray('test-doc1')

  const provider = useMemo(() => {
    const wsProvider = new WebsocketProvider(WEBSOCKET_URL, 'slate-demo-room1', ydoc);
    // 注册连接状态变化的事件处理程序
    wsProvider.on('status', (event: any) => {
      if (event.status === 'connected') {
        setConnected(true);
        console.log('Connected to server');
        // 执行其他操作或同步数据
      } else if (event.status === 'disconnected') {
        setConnected(false);
        console.log('Disconnected from server');
        // 处理断开连接的情况
      }
    });

    // 在连接建立后，可以对文档进行操作
    wsProvider.on('synced', () => {
      // 执行与文档同步后的操作
      yArray.insert(0, ['初始文案']);
      console.log('链接成功！');
    });

    wsProvider.on("sync", (isSynced: boolean) => {
      console.log("======= sync", isSynced); // logs "connected" or "disconnected"
    });

    // 处理接收到的外部更新事件
    ydoc.on('update', (update) => {
      // 处理文档更新
      // console.log('文档发生改变', yArray.toArray());
      // Y.applyUpdate(ydoc, update);
      console.log(222222222, update)
      // provider.awareness.setLocalStateField('document', update);
    });

    yArray.observe((yarrayEvent) => {
      console.log('数据发生与当前array实例是否相等', yarrayEvent.target === yArray);
      console.log('数据改变的增量', yarrayEvent.changes.delta)
      console.log('数据改变后的全量', yArray.toJSON())
    });


    return wsProvider;
  }, []);

  const sendMessage = useCallback(() => {
    const el = document.getElementById('test-input')
    const msg = el.value
    yArray.insert(0, [msg]);
  }, []);

  // const toggleConnection = useCallback(() => {
  //   if (connected) {
  //     provider.disconnect();
  //   } else {
  //     provider.connect();
  //   }
  // }, [connected, provider]);

  const editor = useMemo(() => {
    const sharedType = ydoc.get('test-doc1', Y.Array) as Y.XmlText;

    return withReact(
      withCursors(
        withYHistory(
          withYjs(createEditor(), sharedType, { provider })
        ),
        sharedType,
        {
          data: randomCursorData(),
        }
      )
    );
  }, [provider.awareness]);

  useEffect(() => {
    return () => {
      provider.disconnect();
    };
  }, [provider]);

  return (
    <Content>
      {/* <Slate value={value} onChange={setValue} editor={editor}>
        <DecoratedEditable />
      </Slate> */}

      <input type="text" id='test-input' />
      <button onClick={sendMessage}>
        send
      </button>
    </Content>
  );
}
