import { format } from "./../plugins/autoformat/autoformatUtils";
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

  public format() {
    // 格式化
  }
  public unformat() {
    // 清除格式
  }
}
