import Action from "./index";
import {
  FORMAT_TYPE_UNDO,
  FORMAT_TYPE_REDO,
  FORMAT_TYPE_BOLD,
  FORMAT_TYPE_FORMAT_PAINT,
  FORMAT_TYPE_CLEAR_FORMAT,
  FORMAT_TYPE_ITALIC,
  FORMAT_TYPE_UNDERLINE,
  FORMAT_TYPE_STRIKE_THROUGH,
  FORMAT_TYPE_FONT_SIZE_INCREASE,
  FORMAT_TYPE_FONT_SIZE_DECREASE,
} from "../../consts";
import {
  UndoCommand,
  RedoCommand,
  FormatPaintCommand,
  ClearFormatCommand,
  BoldCommand,
  ItalicCommand,
  UnderlineCommand,
  StrikeThroughCommand,
  FontSizeIncreaseCommand,
  FontSizeDecreaseCommand,
} from "../commands";

export function register(action: Action) {
  action.register([
    Action.createActionButton(
      FORMAT_TYPE_UNDO,
      "撤销（⌘+Z）",
      new UndoCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_REDO,
      "重做（⌘+Y）",
      new RedoCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_FORMAT_PAINT,
      "格式刷",
      new FormatPaintCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_CLEAR_FORMAT,
      "清除格式",
      new ClearFormatCommand(action.editor)
    ),
    Action.createDivider(),
    Action.createActionButton(
      FORMAT_TYPE_FONT_SIZE_INCREASE,
      "增大字号（⌥+.）",
      new FontSizeIncreaseCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_FONT_SIZE_DECREASE,
      "增大字号（⌥+.）",
      new FontSizeDecreaseCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_BOLD,
      "加粗（⌘+B）",
      new BoldCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_ITALIC,
      "倾斜（⌘+I）",
      new ItalicCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_UNDERLINE,
      "下划线（⌘+U）",
      new UnderlineCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_STRIKE_THROUGH,
      "删除线（⌘+⇧+X）",
      new StrikeThroughCommand(action.editor)
    ),
  ]);
}
