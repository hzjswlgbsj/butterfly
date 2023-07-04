import { isArray } from "lodash";
import { ACTION_TYPE_BUTTON, FORMAT_TYPE_BOLD } from "../../consts";
import { ActionElement, FormatType } from "../../types";
import BoldCommand from "../commands/BoldCommand";
import Command from "../commands/Command";
import { BoldIcon } from "../icons/bold";

class Action {
  private actions: ActionElement[] = [];
  public editor: any;

  constructor(editor: any) {
    this.editor = editor;

    this.register([
      Action.createActionButton(
        FORMAT_TYPE_BOLD,
        "加粗（⌘+B）",
        BoldIcon,
        new BoldCommand(this.editor)
      ),
    ]);
  }
  /**
   * register
   */
  public register(action: ActionElement | ActionElement[], index?: number) {
    if (!isArray(action)) {
      action = [action];
    }

    if (typeof index !== undefined) {
      if (index! < 0) {
        index = 0;
      }
      action.map((a: ActionElement) => {
        this.actions.splice(index!, 0, a);
        index!++;
      });
    } else {
      action.map((a: ActionElement) => {
        this.actions.push(a);
      });
    }
  }

  /**
   * get
   */
  public get(): ActionElement[] {
    return this.actions;
  }

  /**
   * createdActionButton
   */
  public static createActionButton(
    type: FormatType,
    tooltip: string,
    icon: React.FunctionComponent,
    command: Command
  ): ActionElement {
    return {
      type,
      actionType: ACTION_TYPE_BUTTON,
      label: "",
      tooltip,
      command,
      icon,
    };
  }
}

export default Action;
