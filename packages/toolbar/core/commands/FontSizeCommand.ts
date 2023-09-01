import Command from "./Command";
import { Editor, Text } from "slate";
import { Log } from "@butterfly/utils";
export class FontSizeCommand extends Command {
  constructor(editor: any) {
    super(editor);
    this.editor = editor;
  }

  execute(data: any) {
    const { editor } = this;
    const isActive = this.isActive();
    Log.debug("开始执行更改字号的命令", editor, data, isActive);
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

export default FontSizeCommand;
