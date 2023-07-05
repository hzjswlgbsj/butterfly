import { isArray } from "lodash";
import { ACTION_TYPE_BUTTON, FORMAT_TYPE_DIVIDE } from "../../consts";
import { ActionElement, FormatType } from "../../types";
import Command from "../commands/Command";
import { register } from "./register";

class Action {
  private actions: ActionElement[] = [];
  public editor: any;

  constructor(editor: any) {
    this.editor = editor;

    register(this);
  }
  /**
   * register
   */
  public register(action: ActionElement | ActionElement[], index?: number) {
    if (!isArray(action)) {
      action = [action];
    }

    if (typeof index !== "undefined") {
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

  /**
   * createdActionButton
   */
  public static createDivider(icon: React.FunctionComponent): ActionElement {
    return {
      type: FORMAT_TYPE_DIVIDE,
      actionType: ACTION_TYPE_BUTTON,
      label: "",
      tooltip: "",
      icon,
    };
  }
}

export default Action;
