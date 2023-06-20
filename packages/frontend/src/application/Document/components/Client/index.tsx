import React, { useEffect, useMemo, useState } from "react";
import { Descendant } from "slate";
import { withHistory } from "slate-history";
import { withReact } from "slate-react";
import {
  SyncElement,
  toSharedType,
  useCursors,
  withCursor,
  withYjs,
} from "slate-yjs";
import { PlateProvider, createPlateEditor } from '@udecode/plate';
import { WebsocketProvider } from "@butterfly/collaborate";
import { Instance } from "./style";
import EditorFrame from "../EditorFrame";
import { withLinks } from "../../plugins/link";
import * as Y from "yjs";
import { useParams } from "react-router-dom";
import Toolbar from "../Toolbar";
import Topbar from "../Topbar";
import { Plate, plugins } from "@butterfly/plate";
// import { Plate, Toolbar, ToolbarButtons, plugins } from "@butterfly/plate";
import { MyValue } from "@butterfly/plate/types/plateTypes";


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
    const editor: any = withCursor(
      withYjs(
        withLinks(
          withReact(
            withHistory(
              createPlateEditor({ plugins: plugins })
            )
          )
        ),
        sharedType
      ),
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



  const handleChange = (value: Descendant[]) => {
    console.log('编辑器数据发生改变', value)
    // setValue(value)
  }

  return (
    <Instance>
      <Topbar roomId={params.roomId as string} name={name} />

      <Toolbar editor={editor} />
      <PlateProvider<MyValue> plugins={plugins}>
        {/* <Toolbar>
          <ToolbarButtons />
        </Toolbar> */}

        <EditorFrame
          editor={editor}
          value={value}
          decorate={decorate}
          onChange={handleChange}
        />
      </PlateProvider>
    </Instance>
  );
};

export default Client;

