import { isArray } from "lodash";
import {
  ACTION_TYPE_BUTTON,
  ACTION_TYPE_DIVIDER,
  ACTION_TYPE_SELECT,
  FORMAT_TYPE_DIVIDE,
} from "../../consts";
import { ActionElement, FormatType, OptionItem } from "../../types";
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
   * created action button
   * @param type 格式类型
   * @param tooltip 提示
   * @param command 命令
   * @returns ActionElement
   */
  public static createActionButton(
    type: FormatType,
    tooltip: string,
    command: Command,
    disabled?: boolean
  ): ActionElement {
    return {
      type,
      actionType: ACTION_TYPE_BUTTON,
      label: "",
      tooltip,
      disabled,
      command,
    };
  }

  /**
   * created action select
   * @param type 格式类型
   * @param tooltip 提示
   * @param command 命令
   * @returns ActionElement
   */
  public static createActionSelect(
    type: FormatType,
    tooltip: string,
    command: Command,
    options: OptionItem[]
  ): ActionElement {
    return {
      type,
      actionType: ACTION_TYPE_SELECT,
      label: "",
      tooltip,
      command,
      options,
    };
  }

  /**
   * createdActionButton
   */
  public static createDivider(): ActionElement {
    return {
      type: FORMAT_TYPE_DIVIDE,
      actionType: ACTION_TYPE_DIVIDER,
      label: "",
      tooltip: "",
    };
  }
}

export default Action;
