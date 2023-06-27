import {
  ACTION_TYPE_BUTTON,
  ACTION_TYPE_FORMAT_DROPDOWN,
  ACTION_TYPE_FORMAT_NORMAL,
} from "../consts";

export enum FormatType {
  blod = "blod",
  italic = "italic",
  underline = "underline",
  strikethrough = "strikethrough",
}
export type ActionType = "button" | "format-dropdown"| "normal-dropdown",

export interface ActionElement {
  type: string;
  actionType: ActionType;
  label: string;
  tooltip: string;
  icon: () => Element;
  options?: any;
}
