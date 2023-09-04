import Command from "../core/commands/Command";

export type FormatType =
  | "undo"
  | "redo"
  | "format-paint"
  | "clear-format"
  | "bold"
  | "font-size"
  | "font-size-increase"
  | "font-size-decrease"
  | "italic"
  | "underline"
  | "strikethrough"
  | "quote"
  | "divider";

export type ActionType =
  | "button"
  | "select"
  | "format-dropdown"
  | "normal-dropdown"
  | "divider";

export interface OptionItem {
  value: number | string;
  label: string;
}
export interface ActionElement {
  type: FormatType;
  actionType: ActionType;
  label: string;
  tooltip: string;
  command?: Command;
  options?: OptionItem[];
}
export interface ActionProps {
  tooltip: string;
  type: FormatType;
  active: boolean;
  value?: any;
  disabled?: boolean;
}
export interface ActionButtonProps extends ActionProps {
  id: string;
  onClick?: (value?: any) => void;
}
export interface ActionSelectProps extends ActionProps {
  id: string;
  onChange?: (value: any) => void;
}
export type TooltipPlacement = "top" | "bottom" | "left" | "right";
