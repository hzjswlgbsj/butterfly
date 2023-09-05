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
  FONT_SIZE_OPTIONS,
  FORMAT_TYPE_FONT_SIZE,
  FORMAT_TYPE_QUOTE,
  FORMAT_TYPE_SUB,
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
  QuoteCommand,
  SubCommand,
} from "../commands";
import FontSizeCommand from "../commands/FontSizeCommand";

export function register(action: Action) {
  action.register([
    Action.createActionButton(
      FORMAT_TYPE_UNDO,
      "撤销（⌘+Z）",
      new UndoCommand(action.editor),
      true
    ),
    Action.createActionButton(
      FORMAT_TYPE_REDO,
      "重做（⌘+Y）",
      new RedoCommand(action.editor),
      true
    ),
    Action.createActionButton(
      FORMAT_TYPE_FORMAT_PAINT,
      "格式刷",
      new FormatPaintCommand(action.editor),
      true
    ),
    Action.createActionButton(
      FORMAT_TYPE_CLEAR_FORMAT,
      "清除格式",
      new ClearFormatCommand(action.editor)
    ),
    Action.createDivider(),
    Action.createActionSelect(
      FORMAT_TYPE_FONT_SIZE,
      "字号",
      new FontSizeCommand(action.editor),
      FONT_SIZE_OPTIONS
    ),
    Action.createActionButton(
      FORMAT_TYPE_FONT_SIZE_INCREASE,
      "增大字号（⌥+.）",
      new FontSizeIncreaseCommand(action.editor),
      true
    ),
    Action.createActionButton(
      FORMAT_TYPE_FONT_SIZE_DECREASE,
      "减小字号（⌥+.）",
      new FontSizeDecreaseCommand(action.editor),
      true
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
    Action.createActionButton(
      FORMAT_TYPE_SUB,
      "删除线（⌘+⇧+,）",
      new SubCommand(action.editor),
      true
    ),
    Action.createActionButton(
      FORMAT_TYPE_QUOTE,
      "引用",
      new QuoteCommand(action.editor),
      true
    ),
  ]);
}
