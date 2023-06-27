import { ACTION_TYPE_BUTTON, FORMAT_TYPE_BOLD } from "../../consts";
import { ActionElement } from "../../types";
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
  public get() {
    return this.actions;
  }

  /**
   * createdActionButton
   */
  public createdActionButton() {}
}

const action = new Action();

action.register({
  type: FORMAT_TYPE_BOLD,
  actionType: ACTION_TYPE_BUTTON,
  label: "加粗（⌘+B）",
  tooltip: "",
  icon: () => BoldIcon,
});
export default action;
