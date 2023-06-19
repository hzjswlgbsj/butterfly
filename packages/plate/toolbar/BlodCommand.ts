import Command from "./Command";

export class BlodCommand extends Command {
  constructor(editor: any) {
    super(editor);
  }

  execute() {
    throw new Error(
      "execute() method must be implemented in concrete command classes."
    );
  }
}
