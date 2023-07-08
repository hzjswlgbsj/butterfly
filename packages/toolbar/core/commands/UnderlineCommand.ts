import Command from "./Command";
import { Editor, Text, Node } from "slate";

export class UnderlineCommand extends Command {
  constructor(editor: any) {
    super(editor);
    this.editor = editor;
  }

  execute() {
    const { editor } = this;
    const isActive = this.isActive();

    if (isActive) {
      Editor.removeMark(editor, "underline");
    } else {
      Editor.addMark(editor, "underline", true);
    }
  }

  isActive() {
    const { editor } = this;
    const [match] = Editor.nodes(editor, {
      match: (n: Node) => Text.isText(n) && n.underline === true,
    });

    return !!match;
  }
}

export default UnderlineCommand;
