import Command from "./Command";
import { Editor, Text, Node } from "slate";

export class ItalicCommand extends Command {
  constructor(editor: any) {
    super(editor);
    this.editor = editor;
  }

  execute() {
    const { editor } = this;
    const isActive = this.isActive();

    if (isActive) {
      Editor.removeMark(editor, "italic");
    } else {
      Editor.addMark(editor, "italic", true);
    }
  }

  isActive() {
    const { editor } = this;
    const [match] = Editor.nodes(editor, {
      match: (n: Node) => Text.isText(n) && n.italic === true,
    });

    return !!match;
  }
}

export default ItalicCommand;
