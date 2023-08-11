import * as Y from "yjs";
import { WebsocketProvider as YWebsocketProvider } from "y-websocket"; // 这个包的类型有问题
import { WEBSOCKET_URL } from "../config";
import { Awareness } from "y-protocols/awareness.js";
import { getRandomColor } from "@butterfly/utils";
import { ProviderStatus, WebsocketProviderOptions } from "./types";

export class WebsocketProvider {
  roomId: string;
  doc: Y.Doc;
  provider: YWebsocketProvider;
  operations: Y.XmlText;
  todoUndoManager: Y.UndoManager;
  awareness: Awareness;

  constructor(
    roomId: string,
    name: string,
    options?: WebsocketProviderOptions
  ) {
    this.roomId = roomId;
    this.doc = new Y.Doc();

    this.provider = new YWebsocketProvider(
      WEBSOCKET_URL,
      this.roomId,
      this.doc,
      {
        connect: false,
      }
    );

    this.awareness = this.provider.awareness;
    this.awareness.setLocalState({
      alphaColor: getRandomColor().slice(0, -2) + "0.2)",
      color: getRandomColor(),
      name,
    });

    this.operations = this.doc.get("content", Y.XmlText) as Y.XmlText;
    this.todoUndoManager = new Y.UndoManager(this.operations);

    if (options) {
      if (options.onSynced) {
        this.provider.on("synced", options.onSynced);
      }

      if (options.onChange) {
        this.operations.observeDeep(options.onChange);
      }
    }
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
  getStatus(): ProviderStatus {
    return {
      wsconnected: this.provider.wsconnected,
      wsconnecting: this.provider.wsconnecting,
      synced: this.provider.synced,
    };
  }

  disconnect() {
    this.provider.disconnect();
  }

  destroy() {
    this.provider.destroy();
    this.provider.doc.destroy();
  }

  connect() {
    this.provider.connect();
  }
}
