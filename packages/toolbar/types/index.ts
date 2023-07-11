import Command from "../core/commands/Command";

export type FormatType =
  | "undo"
  | "redo"
  | "format-paint"
  | "clear-format"
  | "bold"
  | "font-size-increase"
  | "font-size-decrease"
  | "italic"
  | "underline"
  | "strikethrough"
  | "divider";

export type ActionType = "button" | "format-dropdown" | "normal-dropdown";

export interface ActionElement {
  type: FormatType;
  actionType: ActionType;
  label: string;
  tooltip: string;
  command?: Command;
  options?: any;
}
