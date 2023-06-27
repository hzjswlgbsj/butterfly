import { ACTION_TYPE_BUTTON, FORMAT_TYPE_BOLD } from "../../consts";
import { ActionElement, FormatType } from "../../types";
import BoldIcon from "../icons/bold.svg";

class Action {
  public actions: ActionElement[] = [];

  /**
   * register
   */
  public register(action: ActionElement, index?: number) {
    if (typeof index !== undefined) {
      if (index! < 0) {
        index = 0;
      }

      this.actions.splice(index!, 0, action);
    } else {
      this.actions.push(action);
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
    icon: string
  ): ActionElement {
    return {
      type,
      actionType: ACTION_TYPE_BUTTON,
      label: "",
      tooltip,
      icon: () => icon,
    };
  }
}

const action = new Action();

action.register(
  Action.createActionButton(FORMAT_TYPE_BOLD, "加粗（⌘+B）", BoldIcon)
);

export default action;
