import * as Y from "yjs";
import { WebsocketProvider as YWebsocketProvider } from "y-websocket"; // 这个包的类型有问题
import { WEBSOCKET_URL } from "../config";
import { Awareness } from "y-protocols/awareness.js";
import { TodoAwareness } from "./types";
import { getRandomColor } from "@butterfly/utils";
export class WebsocketProvider {
  roomId: string;
  doc: Y.Doc;
  provider: YWebsocketProvider;
  operations: Y.XmlText;
  todoUndoManager: Y.UndoManager;
  awareness: Awareness;

  constructor(roomId: string, name: string) {
    this.roomId = roomId;
    this.doc = new Y.Doc();

    this.provider = new YWebsocketProvider(
      WEBSOCKET_URL,
      this.roomId,
      this.doc
    );

    this.awareness = this.provider.awareness;
    this.awareness.setLocalState({
      alphaColor: getRandomColor().slice(0, -2) + "0.2)",
      color: getRandomColor(),
      name,
    });

    this.operations = this.doc.get("content", Y.XmlText) as Y.XmlText;
    this.todoUndoManager = new Y.UndoManager(this.operations);
  }

  // 更新光标位置信息
  updateCursor(x: number | undefined, y: number | undefined) {
    this.awareness.setLocalStateField("cursor", { x, y });
  }

  onAwarenessChange(callback: (state: TodoAwareness) => void) {
    this.awareness.on("change", (changed: any, origin: any) => {
      if (origin === "local") return; // 自己的操作不触发回调
      callback(this.awareness.getStates() as TodoAwareness);
    });
  }
  onSync(callback: (isSynced: boolean) => void) {
    this.provider.on("sync", (isSynced: boolean) => {
      callback(isSynced);
    });
  }

  // 监听 todoItems 变化
  onChange(
    callback: (event: Y.YEvent<any>[], transaction: Y.Transaction) => void
  ) {
    this.operations.observeDeep(callback);
  }

  update(text: string) {
    // this.operations.unshift([
    //   {
    //     id: nanoid(),
    //     text,
    //     done: false,
    //   },
    // ]);
  }

  undo() {
    this.todoUndoManager.undo();
  }

  redo() {
    this.todoUndoManager.redo();
  }
  // getTodoItems() {
  //   return this.operations.toArray();
  // }

  disconnect() {
    this.provider.disconnect();
  }

  connect() {
    this.provider.connect();
  }
}
