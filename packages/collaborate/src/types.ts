import * as Y from "yjs";

export interface WebsocketProviderOptions {
  onSynced?: (isSynced: boolean) => void;
  onChange?: (
    update: Uint8Array,
    origin: any,
    doc: Y.Doc,
    tr: Y.Transaction
  ) => void;
}

export interface ProviderStatus {
  wsconnected: boolean; // True if this instance is currently connected to the server.
  wsconnecting: boolean; // True if this instance is currently connecting to the server.
  synced: boolean; // True if this instance is currently connected and synced with the server.
}
