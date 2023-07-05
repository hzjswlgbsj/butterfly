import Action from "./index";
import {
  FORMAT_TYPE_UNDO,
  FORMAT_TYPE_REDO,
  FORMAT_TYPE_BOLD,
  FORMAT_TYPE_FORMAT_PAINT,
  FORMAT_TYPE_CLEAR_FORMAT,
} from "../../consts";
import {
  UndoCommand,
  RedoCommand,
  FormatPaintCommand,
  ClearFormatCommand,
  BoldCommand,
} from "../commands";
import { Bold, Undo, Redo, FormatPaint, ClearFormat, Divider } from "../icons";

export function register(action: Action) {
  action.register([
    Action.createActionButton(
      FORMAT_TYPE_UNDO,
      "撤销（⌘+Z）",
      Undo,
      new UndoCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_REDO,
      "重做（⌘+Y）",
      Redo,
      new RedoCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_FORMAT_PAINT,
      "格式刷",
      FormatPaint,
      new FormatPaintCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_CLEAR_FORMAT,
      "清除格式",
      ClearFormat,
      new ClearFormatCommand(action.editor)
    ),
    Action.createDivider(Divider),
    Action.createActionButton(
      FORMAT_TYPE_BOLD,
      "加粗（⌘+B）",
      Bold,
      new BoldCommand(action.editor)
    ),
  ]);
}
