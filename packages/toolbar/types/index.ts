import Command from "../core/commands/Command";

export type FormatType =
  | "undo"
  | "redo"
  | "format-paint"
  | "clear-format"
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough";

export type ActionType = "button" | "format-dropdown" | "normal-dropdown";

export interface ActionElement {
  type: FormatType;
  actionType: ActionType;
  label: string;
  tooltip: string;
  icon: React.FunctionComponent;
  command: Command;
  options?: any;
}
