import * as Y from "yjs";
import { WebsocketProvider as YWebsocketProvider } from "y-websocket"; // 这个包的类型有问题
import { WEBSOCKET_URL } from "../config";
import { nanoid } from "nanoid";
import { Awareness } from "y-protocols/awareness.js";
import { TodoAwareness, TodoItem } from "./types";
import { generateRandomColor } from "@butterfly/utils";

export class WebsocketProvider {
  roomId: string;
  ydoc: Y.Doc;
  provider: YWebsocketProvider;
  yTodoItems: Y.Array<TodoItem>;
  todoUndoManager: Y.UndoManager;
  awareness: Awareness;

  constructor(roomId: string, username: string) {
    this.roomId = roomId;
    this.ydoc = new Y.Doc();

    this.provider = new YWebsocketProvider(
      WEBSOCKET_URL,
      this.roomId,
      this.ydoc
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

    this.yTodoItems = this.ydoc.getArray("doc-operations");
    this.todoUndoManager = new Y.UndoManager(this.yTodoItems);
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
  onTodoItemsChange(
    callback: (
      event: Y.YArrayEvent<TodoItem>,
      transaction: Y.Transaction
    ) => void
  ) {
    this.yTodoItems.observe(callback);
  }

  addTodoItem(text: string) {
    this.yTodoItems.unshift([
      {
        id: nanoid(),
        text,
        done: false,
      },
    ]);
  }

  deleteTodoItem(index: number) {
    this.yTodoItems.delete(index, 1);
  }

  toggleTodoItemDone(index: number) {
    // 下面的写法无法触发 observe
    // const item = this.yTodoItems.get(index);
    // item.done = !item.done;

    // 下面的写法可以触发 observe
    const item = this.yTodoItems.get(index);
    this.yTodoItems.delete(index, 1);
    this.yTodoItems.insert(index, [
      {
        id: item.id,
        text: item.text,
        done: !item.done,
      },
    ]);
    // 或者可以用嵌套 Map 的写法
  }

  deleteAllTodoItems() {
    this.yTodoItems.delete(0, this.yTodoItems.length);
  }

  undo() {
    this.todoUndoManager.undo();
  }

  redo() {
    this.todoUndoManager.redo();
  }
  // getTodoItems() {
  //   return this.yTodoItems.toArray();
  // }

  destroy() {
    this.provider.disconnect();
  }
}
