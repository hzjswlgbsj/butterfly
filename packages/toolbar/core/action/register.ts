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
} from "../commands";
import {
  Bold,
  Undo,
  Redo,
  FormatPaint,
  ClearFormat,
  Divider,
  Italic,
  Underline,
  StrikeThrough,
  FontSizeIncrease,
} from "../icons";

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
      FORMAT_TYPE_FONT_SIZE_INCREASE,
      "增大字号（⌥+.）",
      FontSizeIncrease,
      new FontSizeIncreaseCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_BOLD,
      "加粗（⌘+B）",
      Bold,
      new BoldCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_ITALIC,
      "倾斜（⌘+I）",
      Italic,
      new ItalicCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_UNDERLINE,
      "下划线（⌘+U）",
      Underline,
      new UnderlineCommand(action.editor)
    ),
    Action.createActionButton(
      FORMAT_TYPE_STRIKE_THROUGH,
      "删除线（⌘+⇧+X）",
      StrikeThrough,
      new StrikeThroughCommand(action.editor)
    ),
  ]);
}
