import React, { useEffect, useMemo, useState } from "react";
import { createEditor, Descendant } from "slate";
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
import { Instance } from "./style";
import EditorFrame from "../EditorFrame";
import { withLinks } from "../../plugins/link";
import * as Y from "yjs";
import { useParams } from "react-router-dom";
import Toolbar from "../Toolbar";
import Topbar from "../Topbar";

interface ClientProps {
  name: string;
  roomId: string;
}

const Client: React.FC<ClientProps> = ({ roomId, name }) => {
  const params = useParams()
  const [value, setValue] = useState<Descendant[]>([]);
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
    provider.onChange((event: Y.YEvent<any>[],
      transaction: Y.Transaction,) => {
      console.log('数据发生改变', event, event);

      // setTodoItems(event.target.toArray());
    });
  }, [provider]);

  const { decorate } = useCursors(editor);

  const toggleOnline = (isOnline: boolean) => {
    console.log('开始执行在线状态改变', isOnline)
    if (isOnline) {
      provider.disconnect()
      setOnlineState(false)
    } else {
      provider.connect()
      setOnlineState(true)
    }
  };

  const handleChange = (value: Descendant[]) => {
    console.log('编辑器数据发生改变', value)
    // setValue(value)
  }

  return (
    <Instance>
      <Topbar toggleOnline={toggleOnline} roomId={params.roomId as string} isOnline={isOnline} />

      <Toolbar editor={editor} />

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

