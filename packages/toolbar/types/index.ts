import Command from "../core/commands/Command";

export type FormatType = "bold" | "italic" | "underline" | "strikethrough";

export type ActionType = "button" | "format-dropdown" | "normal-dropdown";

export interface ActionElement {
  type: FormatType;
  actionType: ActionType;
  label: string;
  tooltip: string;
  icon: () => string;
  command: Command;
  options?: any;
}
