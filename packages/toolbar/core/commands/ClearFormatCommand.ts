import { Log } from "@butterfly/utils";
import Command from "./Command";
import { Editor, Text } from "slate";

export class ClearFormatCommand extends Command {
  constructor(editor: any) {
    super(editor);
    this.editor = editor;
  }

  execute() {
    const { editor } = this;
    const isActive = this.isActive();
    Log.debug("开始执清除格式命令", editor, isActive);
    // if (isActive) {
    //   Editor.removeMark(editor, "bold");
    // } else {
    //   Editor.addMark(editor, "bold", true);
    // }
  }

  isActive() {
    const { editor } = this;
    const [match] = Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n.bold === true,
    });

    return !!match;
  }
}

export default ClearFormatCommand;
