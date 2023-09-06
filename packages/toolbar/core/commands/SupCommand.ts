import { Log } from "@butterfly/utils";
import Command from "./Command";
import { Editor, Text, Node } from "slate";

export class SupCommand extends Command {
  constructor(editor: any) {
    super(editor);
    this.editor = editor;
  }

  execute() {
    const { editor } = this;
    const isActive = this.isActive();
    Log.debug("开始执行上标命令", editor, isActive);
  }

  isActive() {
    const { editor } = this;
    const [match] = Editor.nodes(editor, {
      match: (n: Node) => Text.isText(n) && n.strikethrough === true,
    });

    return !!match;
  }
}

export default SupCommand;
