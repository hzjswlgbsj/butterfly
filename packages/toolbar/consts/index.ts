import { OptionItem } from "../types";

export const FORMAT_TYPE_UNDO = "undo";
export const FORMAT_TYPE_REDO = "redo";
export const FORMAT_TYPE_FORMAT_PAINT = "format-paint";
export const FORMAT_TYPE_CLEAR_FORMAT = "clear-format";
export const FORMAT_TYPE_FONT_SIZE = "font-size";
export const FORMAT_TYPE_FONT_SIZE_INCREASE = "font-size-increase";
export const FORMAT_TYPE_FONT_SIZE_DECREASE = "font-size-decrease";
export const FORMAT_TYPE_BOLD = "bold";
export const FORMAT_TYPE_ITALIC = "italic";
export const FORMAT_TYPE_UNDERLINE = "underline";
export const FORMAT_TYPE_STRIKE_THROUGH = "strikethrough";
export const FORMAT_TYPE_DIVIDE = "divider";

export const ACTION_TYPE_DIVIDER = "divider";
export const ACTION_TYPE_BUTTON = "button";
export const ACTION_TYPE_SELECT = "select";
export const ACTION_TYPE_FORMAT_DROPDOWN = "format-dropdown";
export const ACTION_TYPE_FORMAT_NORMAL = "normal-dropdown";

export const FONT_SIZE_OPTIONS: OptionItem[] = [
  {
    value: "red",
    label: "Red",
  },
  {
    value: "orange",
    label: "Orange",
  },
  {
    value: "yellow",
    label: "Yellow",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "cyan",
    label: "Cyan",
  },
  {
    value: "blue",
    label: "Blue",
  },
  {
    value: "purple",
    label: "Purple",
  },
  {
    value: "pink",
    label: "Pink",
  },
  {
    value: "maroon",
    label: "Maroon",
  },
  {
    value: "white",
    label: "White",
  },
];
