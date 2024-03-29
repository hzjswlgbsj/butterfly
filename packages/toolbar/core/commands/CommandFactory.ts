import { CustomEditor } from "../../frontend/src/types";
import Command from "./Command";

class CommandFactory {
  constructor(editor: CustomEditor) {
    this.editor = editor;
  }

  createCommand(type) {
    switch (type) {
      case "insertImage":
        return new InsertImageCommand(this.editor);
      case "bold":
        return new BoldCommand(this.editor);
      // 其他命令类型...
      default:
        throw new Error(`Unknown command type: ${type}`);
    }
  }
}

// 在 Toolbar 组件中使用工
