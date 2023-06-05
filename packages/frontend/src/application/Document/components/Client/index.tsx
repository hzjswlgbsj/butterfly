import React, { useEffect, useMemo, useState } from "react";
import { createEditor, Node } from "slate";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";
import {
  SyncElement,
  toSharedType,
  useCursors,
  withCursor,
  withYjs,
} from "slate-yjs";

import { WebsocketProvider } from "@butterfly/collaborate";
import { Button, Head, Instance, Title } from "./style";
import EditorFrame from "../EditorFrame";
import { withLinks } from "../../plugins/link";
import * as Y from "yjs";

interface ClientProps {
  name: string;
  roomId: string;
}

const Client: React.FC<ClientProps> = ({ roomId, name }) => {
  const [value, setValue] = useState<Node[]>([]);
  const [isOnline, setOnlineState] = useState<boolean>(false);
  const [sharedType, provider] = useMemo(() => {
    const provider = new WebsocketProvider(roomId, name);
    const sharedType = provider.operations as Y.Array<SyncElement>;

    return [sharedType, provider];
  }, [roomId]);

  const editor = useMemo(() => {
    const editor = withCursor(
      withYjs(withLinks(withReact(withHistory(createEditor()))), sharedType),
      provider.awareness
    );

    return editor;
  }, [sharedType, provider]);

  useEffect(() => {
    provider.onSync((isSynced: boolean) => {
      if (isSynced && sharedType.length === 0) {
        toSharedType(sharedType, [
          { type: "paragraph", children: [{ text: "Hello world!" }] },
        ]);
      }
    })

    provider.connect();
    setOnlineState(true)
    // return () => {
    //   console.log(1111111111111)
    //   provider.disconnect();
    // };
  }, [provider]);

  useEffect(() => {
    provider.onChange((event: Y.YArrayEvent<SyncElement>,
      transaction: Y.Transaction,) => {
      console.log('数据发生改变', event, event.target.toArray());

      // setTodoItems(event.target.toArray());
    });
  }, [provider]);

  const { decorate } = useCursors(editor);

  const toggleOnline = () => {
    if (isOnline) {
      provider.disconnect()
      setOnlineState(false)
    } else {
      provider.connect()
      setOnlineState(true)
    }
  };

  const handleChange = (value: Node[]) => {
    console.log('编辑器数据发生改变', value)
    // setValue(value)
  }

  return (
    <Instance online={isOnline}>
      <Title>
        <Head>Editor: {name}</Head>
        <div style={{ display: "flex", marginTop: 10, marginBottom: 10 }}>
          <Button type="button" onClick={toggleOnline}>
            Go {isOnline ? "offline" : "online"}
          </Button>
        </div>
      </Title>

      <EditorFrame
        editor={editor}
        value={value}
        decorate={decorate}
        onChange={handleChange}
      />
    </Instance>
  );
};

export default Client;

