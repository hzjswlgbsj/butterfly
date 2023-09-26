import React, { useEffect, useState } from "react";
import { ToolbarWrapper } from "./style";
import { ActionElement } from "../../types";
import Command from "../../core/commands/Command";
import Action from "../../core/action";
import ActionButton from "../ActionButton";
import { ACTION_TYPE_BUTTON, ACTION_TYPE_DIVIDER, ACTION_TYPE_SELECT } from "../../consts";
import { DividerWrapper } from "../ActionButton/style";
import ActionSelect from "../ActionSelect";
import { Log } from "@butterfly/pupa";
import ToolbarInsert from "../ToolbarInsert";

interface ToolbarProps {
  editor: any
  formats: string[]
}

const Toolbar: React.FC<ToolbarProps> = ({ editor, formats }) => {
  let action: Action;
  const [actions, setActions] = useState<ActionElement[]>([]);

  const handleAction = (command?: Command, value?: any) => {
    command && command.execute && command.execute(value)
  }

  useEffect(() => {
    action = new Action(editor);
    setActions(action.get());
  }, [editor])

  function renderToolbarIcon(item: ActionElement) {
    let comp = <div></div>
    switch (item.actionType) {
      case ACTION_TYPE_DIVIDER:
        comp = <DividerWrapper />
        break;
      case ACTION_TYPE_BUTTON:
        comp = <ActionButton
          id={`toolbar-button-${item.type}`}
          type={item.type}
          tooltip={item.tooltip}
          active={formats.includes(item.type)}
          disabled={item.disabled}
          onClick={(value: string) => handleAction(item.command, value)}
        />
        break;
      case ACTION_TYPE_SELECT:
        comp = <ActionSelect
          id={`toolbar-button-${item.type}`}
          value='12'
          type={item.type}
          tooltip={item.tooltip}
          active={formats.includes(item.type)}
          disabled={item.disabled}
          onChange={(value: string) => handleAction(item.command, value)}
        />
        break;

      default:
        Log.debug('错误的toolbar按钮类型', item.actionType)
        break;
    }
    return comp;
  }

  return (
    <ToolbarWrapper>
      <ToolbarInsert />

      {
        actions.map((item: ActionElement) =>
          // <div key={item.type} onClick={() => handleAction(item.command)}>
          <div key={item.type}>
            {renderToolbarIcon(item)}
          </div>
        )
      }
    </ToolbarWrapper>

  );
};

export default Toolbar;

