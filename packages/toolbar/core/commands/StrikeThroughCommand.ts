import Command from "./Command";
import { Editor, Text, Node } from "slate";

export class StrikeThroughCommand extends Command {
  constructor(editor: any) {
    super(editor);
    this.editor = editor;
  }

  execute() {
    const { editor } = this;
    const isActive = this.isActive();

    if (isActive) {
      Editor.removeMark(editor, "strikethrough");
    } else {
      Editor.addMark(editor, "strikethrough", true);
    }
  }

  isActive() {
    const { editor } = this;
    const [match] = Editor.nodes(editor, {
      match: (n: Node) => Text.isText(n) && n.strikethrough === true,
    });

    return !!match;
  }
}

export default StrikeThroughCommand;
