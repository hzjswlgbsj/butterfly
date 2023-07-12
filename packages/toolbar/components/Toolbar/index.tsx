import React, { useEffect, useState } from "react";
import { ToolbarWrapper } from "./style";
import { CustomEditor } from "packages/frontend/src/types";
import { ActionElement } from "../../types";
import Command from "../../core/commands/Command";
import Action from "../../core/action";
import ActionButton from "../ActionButton";
import { ACTION_TYPE_BUTTON, ACTION_TYPE_DIVIDER } from "../../consts";
import { DividerWrapper } from "../ActionButton/style";


interface ToolbarProps {
  editor: CustomEditor
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  let action: Action;
  const [actions, setActions] = useState<ActionElement[]>([]);

  const handleAction = (command?: Command) => {
    command && command.execute && command.execute()
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
          active={false}
        />
        break;

      default:
        console.log('错误的toolbar按钮类型', item.actionType)
        break;
    }
    return comp;
  }

  return (
    <ToolbarWrapper>
      {
        actions.map((item: ActionElement) =>
          <div key={item.type} onClick={() => handleAction(item.command)}>
            {renderToolbarIcon(item)}
          </div>
        )
      }
    </ToolbarWrapper>

  );
};

export default Toolbar;

