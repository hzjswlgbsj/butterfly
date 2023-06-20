import { FormatType } from "../types";
export default class Command {
  public editor: any;

  constructor(editor: any) {
    this.editor = editor;
  }

  public execute() {
    throw new Error(
      "execute() method must be implemented in concrete command classes."
    );
  }

  public format(type: FormatType) {
    // 格式化
  }
  public unformat() {
    // 清除格式
  }
}
