import * as Y from "yjs";
import { WebsocketProvider as YWebsocketProvider } from "y-websocket"; // 这个包的类型有问题
import { WEBSOCKET_URL } from "../config";
import { nanoid } from "nanoid";
import { Awareness } from "y-protocols/awareness.js";
import { TodoAwareness, TodoItem } from "./types";
import { generateRandomColor } from "@butterfly/utils";

export class WebsocketProvider {
  roomId: string;
  doc: Y.Doc;
  provider: YWebsocketProvider;
  operations: Y.Array<TodoItem>;
  todoUndoManager: Y.UndoManager;
  awareness: Awareness;

  constructor(roomId: string, username: string) {
    this.roomId = roomId;
    this.doc = new Y.Doc();

    this.provider = new YWebsocketProvider(
      WEBSOCKET_URL,
      this.roomId,
      this.doc
    );

    this.awareness = this.provider.awareness;
    this.awareness.setLocalState({
      user: {
        name: username,
        color: generateRandomColor(),
      },
      cursor: {
        x: undefined,
        y: undefined,
      },
    });

    this.operations = this.doc.getArray("doc-operations");
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

  // 监听 todoItems 变化
  onChange(
    callback: (
      event: Y.YArrayEvent<TodoItem>,
      transaction: Y.Transaction
    ) => void
  ) {
    this.operations.observe(callback);
  }

  addTodoItem(text: string) {
    this.operations.unshift([
      {
        id: nanoid(),
        text,
        done: false,
      },
    ]);
  }

  deleteTodoItem(index: number) {
    this.operations.delete(index, 1);
  }

  toggleTodoItemDone(index: number) {
    // 下面的写法无法触发 observe
    // const item = this.operations.get(index);
    // item.done = !item.done;

    // 下面的写法可以触发 observe
    const item = this.operations.get(index);
    this.operations.delete(index, 1);
    this.operations.insert(index, [
      {
        id: item.id,
        text: item.text,
        done: !item.done,
      },
    ]);
    // 或者可以用嵌套 Map 的写法
  }
  deleteAllTodoItems() {
    this.operations.delete(0, this.operations.length);
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
